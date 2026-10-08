import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
import {Badge} from '../components/ui/Badge'
import {Table} from '../components/ui/Table'
import {orders} from '../data/orders'
import {typeMap} from '../data/orders'
const Orders:FC=()=>{const[st,setSt]=useState<string[]>([]),[ty,setTy]=useState<string[]>([]),[day,setDay]=useState(0),[o,setO]=useState('')
  const tg=(a:string[],set:(v:string[])=>void,v:string)=>set(a.includes(v)?a.filter(x=>x!==v):[...a,v])
  const rows=orders.filter(r=>(!st.length||st.includes(r[5]))&&(!ty.length||ty.some(t=>typeMap[t]===r[4]))).slice(0,day?6:99)
  const Chips=({list,a,set}:{list:string[],a:string[],set:(v:string[])=>void})=><div className="flex flex-wrap gap-2">{list.map(s=><button key={s} onClick={()=>tg(a,set,s)} className={`chip ${a.includes(s)?'chip-on':''}`}>{s}</button>)}</div>
  const pop=(k:string)=>o===k&&<div className="absolute top-full left-0 mt-2 z-10 card shadow-xl w-72 sm:w-80 font-normal"><p className="font-semibold mb-3">{k==='Date'?'February 2019':`Select ${k}`}</p>
    {k==='Date'?<div className="grid grid-cols-7 gap-1 text-center">{Array.from({length:28},(_,i)=><button key={i} onClick={()=>setDay(i+1)} className={`h-8 rounded-full ${day===i+1?'bg-brand text-white':''}`}>{i+1}</button>)}</div>
    :k==='Order Type'?<Chips list={Object.keys(typeMap)} a={ty} set={setTy}/>:<Chips list={['Completed','Processing','Rejected','On Hold','In Transit']} a={st} set={setSt}/>}
    <p className="text-[10px] text-slate-400 mt-3">*You can choose multiple</p><button className="btn w-full mt-3 text-xs" onClick={()=>setO('')}>Apply Now</button></div>
  return <><H t="Order Lists"/><div className="card p-0 flex flex-wrap items-stretch mb-5 text-xs font-semibold divide-x divide-slate-200 dark:divide-dline w-fit max-w-full"><span className="px-4 py-4">⏷</span><span className="px-4 py-4">Filter By</span>
    {[['Date',day?`${day} Feb 2019`:'Date'],['Order Type','Order Type'],['Order Status','Order Status']].map(([k,l])=><div key={k} className="relative"><button className="px-4 py-4" onClick={()=>setO(o===k?'':k)}>{l} ▾</button>{pop(k)}</div>)}
    <button className="px-4 py-4 text-[#EA0234]" onClick={()=>{setSt([]);setTy([]);setDay(0)}}>↺ Reset Filter</button></div>
  <Table head={['ID','NAME','ADDRESS','DATE','TYPE','STATUS']}>{rows.map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i} className="td">{i===5?<Badge s={c}/>:i===3&&day?`${day} Feb 2019`:c}</td>)}</tr>)}</Table></>}
export default Orders
