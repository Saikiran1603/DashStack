import {connectLambda,getStore} from '@netlify/blobs'
import type {Handler,HandlerEvent,HandlerResponse} from '@netlify/functions'
import seed from '../../db.json'

type Item={id:number}&Record<string,unknown>
type Database={products:Item[],team:Item[]}

const databaseKey='data'
const jsonHeaders={'Content-Type':'application/json; charset=utf-8'}
const json=(statusCode:number,body:unknown):HandlerResponse=>({
  statusCode,
  headers:jsonHeaders,
  body:JSON.stringify(body)
})

async function readDatabase(store:ReturnType<typeof getStore>):Promise<Database>{
  const existing=await store.get(databaseKey,{type:'json'}) as Database|null
  if(existing)return existing
  const initial=seed as Database
  await store.setJSON(databaseKey,initial)
  return initial
}

export const handler:Handler=async event=>{
  const blobsEvent=event as HandlerEvent&{blobs:string}
  const blobHeaders:Record<string,string>={}
  for(const [name,value] of Object.entries(event.headers)){
    if(value!==undefined)blobHeaders[name]=value
  }
  connectLambda({blobs:blobsEvent.blobs,headers:blobHeaders})
  const store=getStore('dashstack-database')
  const path=new URL(event.rawUrl??event.path,'https://netlify.local').pathname
  const segments=path.split('/').filter(Boolean)
  const apiIndex=segments.lastIndexOf('api')
  const resource=segments[apiIndex+1]
  const idText=segments[apiIndex+2]

  if(apiIndex<0||(resource!=='products'&&resource!=='team')||segments.length>apiIndex+3){
    return json(404,{error:'API endpoint not found'})
  }

  const id=idText===undefined?undefined:Number(idText)
  if(id!==undefined&&(!Number.isInteger(id)||id<1)){
    return json(400,{error:'A valid record ID is required'})
  }

  try{
    const database=await readDatabase(store)
    const records=database[resource]
    const method=event.httpMethod

    if(method==='GET'){
      if(id===undefined)return json(200,records)
      const record=records.find(item=>item.id===id)
      return record?json(200,record):json(404,{error:'Record not found'})
    }

    if(method==='POST'){
      if(id!==undefined)return json(405,{error:'POST is only supported on a collection'})
      const body=JSON.parse(event.body??'{}') as Record<string,unknown>
      if(!body||typeof body!=='object'||Array.isArray(body))return json(400,{error:'A JSON object is required'})
      const record={...body,id:records.reduce((max,item)=>Math.max(max,item.id),0)+1} as Item
      records.push(record)
      await store.setJSON(databaseKey,database)
      return json(201,record)
    }

    if(method==='PATCH'){
      if(id===undefined)return json(405,{error:'PATCH requires a record ID'})
      const index=records.findIndex(item=>item.id===id)
      if(index<0)return json(404,{error:'Record not found'})
      const body=JSON.parse(event.body??'{}') as Record<string,unknown>
      if(!body||typeof body!=='object'||Array.isArray(body))return json(400,{error:'A JSON object is required'})
      records[index]={...records[index],...body,id}
      await store.setJSON(databaseKey,database)
      return json(200,records[index])
    }

    if(method==='DELETE'){
      if(id===undefined)return json(405,{error:'DELETE requires a record ID'})
      const index=records.findIndex(item=>item.id===id)
      if(index<0)return json(404,{error:'Record not found'})
      records.splice(index,1)
      await store.setJSON(databaseKey,database)
      return {statusCode:204,body:''}
    }

    return json(405,{error:'Method not allowed'})
  }catch(error){
    if(error instanceof SyntaxError)return json(400,{error:'Request body must be valid JSON'})
    console.error('API request failed',error)
    return json(500,{error:'Unable to process API request'})
  }
}
