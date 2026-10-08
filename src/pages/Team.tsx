import {useEffect,useState,type FC} from 'react'
import Img from '../components/ui/Img'
import {H} from '../components/ui/PageTitle'
import {api} from '../data/api'
import {portrait} from '../data/images'
import type {Go,TeamMember} from '../types'
const Team:FC<Go>=({go})=>{
  const [members,setMembers]=useState<TeamMember[]>([])
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    let active=true
    api.get<TeamMember[]>('/team').then(data=>{if(active)setMembers(data)}).catch(err=>{if(active)setError(err instanceof Error?err.message:'Unable to load team members')}).finally(()=>{if(active)setLoading(false)})
    return()=>{active=false}
  },[])
  return <><div className="flex justify-between"><H t="Team"/><button className="btn h-10" onClick={()=>go('Add Team Member')}>Add New Member</button></div>
    {error&&<p role="alert" className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {loading?<p className="py-8 text-center text-slate-500">Loading team members...</p>:error?null:members.length===0?<p className="card py-10 text-center text-slate-500">No team members yet.</p>:
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">{members.map(member=><div key={member.id} className="card text-center py-8 flex flex-col items-center"><Img src={portrait(member.name)} alt={member.name} loading="lazy" className="w-20 h-20 rounded-full object-cover"/><b className="mt-4">{member.name}</b><p className="text-xs text-slate-400">{member.role}</p><p className="text-xs mt-2 break-all">{member.email}</p>{member.phone&&<p className="text-xs mt-1">{member.phone}</p>}</div>)}</div>}
  </>
}
export default Team
