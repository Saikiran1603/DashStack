import {useState,type FC,type ReactNode} from 'react'
import Img from '../components/ui/Img'
import {H} from '../components/ui/PageTitle'
import {team} from '../data/people'
import {portrait} from '../data/images'
import type {Go} from '../types'
const Team:FC<Go>=({go})=><><div className="flex justify-between"><H t="Team"/><button className="btn h-10" onClick={()=>go('Add Team Member')}>Add New Member</button></div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">{team.map(([n,r,e],i)=><div key={i} className="card text-center py-8 flex flex-col items-center"><Img src={portrait(n)} alt={n} loading="lazy" className="w-20 h-20 rounded-full object-cover"/><b className="mt-4">{n}</b><p className="text-xs text-slate-400">{r}</p><p className="text-xs mt-2 break-all">{e}</p></div>)}</div></>
export default Team
