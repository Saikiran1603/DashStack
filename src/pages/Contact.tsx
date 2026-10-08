import {useState,type FC,type ReactNode} from 'react'
import Img from '../components/ui/Img'
import {H} from '../components/ui/PageTitle'
import {contacts} from '../data/people'
import {portrait} from '../data/images'
import type {Go} from '../types'
const Contact:FC<Go>=({go})=><><div className="flex justify-between"><H t="Contact"/><button className="btn h-10" onClick={()=>go('Add New Contact')}>Add New Contact</button></div>
  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{contacts.map(([n,,e])=><div key={n} className="card p-0 overflow-hidden text-center pb-5"><Img src={portrait(n)} alt={n} loading="lazy" className="h-52 w-full object-cover"/><b className="block mt-3">{n}</b><p className="text-xs text-slate-400 mb-3">{e}</p><button className="chip">✉ Message</button></div>)}</div></>
export default Contact
