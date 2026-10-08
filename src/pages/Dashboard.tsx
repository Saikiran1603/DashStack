import {useState,type FC,type ReactNode} from 'react'
import Img from '../components/ui/Img'
import {productImg} from '../data/images'
import {H} from '../components/ui/PageTitle'
import {Badge} from '../components/ui/Badge'
import {Table} from '../components/ui/Table'
const Dashboard:FC=()=>{
  const st=[['Total User','40,689','8.5% Up from yesterday',1,'#8280FF'],['Total Order','10293','1.3% Up from past week',1,'#FEC53D'],['Total Sales','$89,000','4.3% Down from yesterday',0,'#4AD991'],['Total Pending','2040','1.8% Up from yesterday',1,'#FF9066']]
  const v=[20,28,30,48,30,52,32,58,42,60,85,46,50,40,52,30,45,38,62,52,60,45,72,50,58,68,55,60]
  const d=v.map((y,i)=>`${i?'L':'M'}${i*(600/(v.length-1))},${100-y}`).join('')
  return <><H t="Dashboard"/>
  <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">{st.map(([a,b,c,u,col])=><div key={a as string} className="card">
    <div className="flex justify-between"><div><p className="text-slate-500 font-semibold">{a}</p><p className="text-3xl font-bold mt-3">{b}</p></div><div className="w-[60px] h-[60px] rounded-[23px] grid place-items-center text-xl" style={{background:(col as string)+'33',color:col as string}}>●</div></div>
    <p className={`mt-4 text-xs ${u?'text-[#00B69B]':'text-[#F93C65]'}`}>{u?'↗':'↘'} {c}</p></div>)}</div>
  <div className="card mb-6"><div className="flex justify-between mb-4"><h2 className="text-xl font-bold">Sales Details</h2><span className="chip">October ▾</span></div>
    <div className="flex gap-3"><div className="flex flex-col justify-between h-64 text-[11px] text-slate-400 py-1">{['100%','80%','60%','40%','20%'].map(l=><span key={l}>{l}</span>)}</div>
    <div className="flex-1 relative border-l border-b border-slate-100 dark:border-dline"><svg viewBox="0 0 600 100" preserveAspectRatio="none" className="w-full h-64"><path d={d+'L600,100L0,100Z'} fill="#4880FF" opacity=".12"/><path d={d} fill="none" stroke="#4880FF" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/></svg>
    <span className="absolute left-[37%] top-1 -translate-x-1/2 bg-brand text-white text-[10px] px-2 py-1 rounded">64,366.77</span></div></div>
    <div className="flex justify-between pl-10 text-[11px] text-slate-400 mt-2">{['5k','10k','15k','20k','25k','30k','35k','40k','45k','50k','55k','60k'].map(l=><span key={l}>{l}</span>)}</div></div>
  <div className="card"><h2 className="text-xl font-bold mb-4">Deals Details</h2><Table head={['Product Name','Location','Date - Time','Piece','Amount','Status']}>
    {[['Apple Watch','6096 Marjolaine Landing','12.09.2019 - 12.53 PM','423','$34,295','Delivered'],['Beats Headphone','4140 Parker Rd.','11.09.2019 - 10.30 AM','112','$12,800','Delivered']].map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i} className="td">{i===5?<Badge s={c}/>:i===0?<span className="flex items-center gap-3"><Img src={productImg(c==='Apple Watch'?'Apple Watch Series 4':c)} alt="" className="w-8 h-8 rounded object-cover"/>{c}</span>:c}</td>)}</tr>)}</Table></div></>}
export default Dashboard
