import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
import {tagC} from '../components/ui/Badge'
import {mails} from '../data/mails'
const Inbox:FC=()=>{const[sel,setSel]=useState<string|null>(null);const[chk,setChk]=useState<string[]>([])
  return <><H t="Inbox"/><div className="grid lg:grid-cols-[240px_1fr] gap-5">
  <div className="card"><button className="btn w-full mb-5">+ Compose</button>{['Inbox 1253','Starred 245','Sent 24,532','Draft 09','Spam 14','Important 18','Bin 9'].map((x,i)=><p key={x} className={`px-3 py-2 rounded ${i===0?'bg-blue-50 dark:bg-dline text-brand font-semibold':''}`}>{x}</p>)}</div>
  <div className="card p-0 overflow-hidden">{sel?<div className="p-5 space-y-4"><button onClick={()=>setSel(null)} className="font-semibold">← {sel}</button>
    {['It is a long-established fact that a reader will be distracted by the readable content of a page.','There are many variations of passages of Lorem Ipsum available.'].map((t,i)=><p key={i} className={`max-w-md rounded-lg p-4 ${i?'ml-auto bg-brand text-white':'bg-slate-100 dark:bg-dline'}`}>{t}</p>)}
    <div className="flex gap-2 pt-4"><input placeholder="Write message" className="flex-1 bg-transparent outline-none"/><button className="btn">Send</button></div></div>
  :mails.map(([n,l,s,t])=><div key={n} onClick={()=>setSel(n)} className={`flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-dline cursor-pointer ${chk.includes(n)?'bg-blue-50 dark:bg-dline':''}`}>
    <input type="checkbox" checked={chk.includes(n)} onClick={e=>e.stopPropagation()} onChange={()=>setChk(c=>c.includes(n)?c.filter(x=>x!==n):[...c,n])}/><b className="w-32 shrink-0">{n}</b><span className="truncate flex-1">{l&&<em className={`not-italic text-xs px-2 py-0.5 rounded mr-2 ${tagC[l]}`}>{l}</em>}{s}</span><span className="text-xs hidden sm:block">{t}</span></div>)}</div></div></>}
export default Inbox
