import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
const Todo:FC<{go?:(p:string)=>void}>=({go})=>{const[t,setT]=useState([['Meeting with CEO',0,0],['Pick up kids from school',0,1],['Shopping with Brother',0,0],['Review with HR',1,0],['Check design files',0,1]] as [string,number,number][])
  const up=(i:number,k:1|2)=>setT(t.map((x,j)=>j===i?(k===1?[x[0],+!x[1],x[2]]:[x[0],x[1],+!x[2]]) as [string,number,number]:x))
  return <><div className="flex justify-between"><H t="To-Do List"/><button className="btn h-10" onClick={()=>go?.('Add New To-Do')}>Add New Task</button></div><div className="space-y-4">{t.map((x,i)=><div key={i} className={`flex items-center gap-4 rounded-xl px-5 py-4 ${x[1]?'bg-brand text-white':'card'}`}><input type="checkbox" checked={!!x[1]} onChange={()=>up(i,1)}/><span className="flex-1">{x[0]}</span><button onClick={()=>up(i,2)} className={x[2]?'text-yellow-400':'text-slate-400'}>★</button></div>)}</div></>}
export default Todo
