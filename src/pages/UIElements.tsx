import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
const Sec=({t,children}:{t:string,children:ReactNode})=><div className="card mb-6"><h2 className="font-bold text-lg mb-6">{t}</h2><div className="grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">{children}</div></div>
const UI:FC=()=>{const cols=['#4880FF','#2dd4bf','#fb923c','#f472b6'],pc=[40,35,40,45],bars=[[70,35,60,80,40,55,35,50],[45,25,30,40,20,35,45,30],[30,45,60,75,40,55,65,50],[35,50,30,45,25,40,55,30]]
  const bg=(c:string,p:number)=>({background:`conic-gradient(${c} 0 ${p}%,#E8EEFC ${p}% 100%)`})
  return <><H t="UI Elements"/>
  <Sec t="Bar Chart">{bars.map((g,i)=><div key={i} className="flex items-end gap-2 h-32">{g.map((h,j)=><i key={j} className="w-1.5 rounded-full" style={{height:h+'%',background:cols[i]}}/>)}</div>)}</Sec>
  <Sec t="Pie Chart">{pc.map((p,i)=><div key={i} className="w-28 h-28 rounded-full" style={bg(cols[i],p)}/>)}</Sec>
  <Sec t="Donut Chart">{pc.map((p,i)=><div key={i} className="w-28 h-28 rounded-full grid place-items-center" style={bg(cols[(i+1)%4],p+20)}><div className="w-[72px] h-[72px] rounded-full bg-white dark:bg-dcard"/></div>)}</Sec></>}
export default UI
