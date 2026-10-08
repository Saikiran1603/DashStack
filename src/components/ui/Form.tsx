import {useState,type FC,type ReactNode} from 'react'
import {H} from '../../components/ui/PageTitle'
export const inp='w-full rounded-md bg-[#F5F6FA] dark:bg-dpage border border-slate-200 dark:border-dline px-3 py-2.5 outline-none focus:border-brand'

export const Form=({title,fields,btn,photo='Upload Photo',onDone}:{title:string,fields:string[][],btn:string,photo?:string,onDone?:()=>void})=><><H t={title}/>
  <form onSubmit={e=>{e.preventDefault();onDone?.()}} className="card py-10 px-5 sm:px-10">
    <div className="flex flex-col items-center gap-2 mb-8"><div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-dline flex items-center justify-center">📷</div><span className="text-brand text-xs font-semibold">{photo}</span></div>
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto">{fields.map(([l,p,k])=><label key={l} className={`block font-semibold text-xs ${k==='area'?'sm:row-span-2':''}`}>{l}
      {k==='select'?<select className={`${inp} mt-2 sm:w-1/2`}><option>Male</option><option>Female</option></select>:k==='area'?<textarea rows={5} placeholder={p} className={`${inp} mt-2`}/>:<input placeholder={p} className={`${inp} mt-2`}/>}</label>)}</div>
    <div className="text-center mt-10"><button className="btn px-16">{btn}</button></div></form></>
