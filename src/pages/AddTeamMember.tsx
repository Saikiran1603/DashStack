import {useState,type FC,type FormEvent} from 'react'
import {H} from '../components/ui/PageTitle'
import {inp} from '../components/ui/Form'
import {api} from '../data/api'
import type {Go,TeamMember} from '../types'

const AddMember:FC<Go>=({go})=>{
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [role,setRole]=useState('')
  const [error,setError]=useState('')
  const [saving,setSaving]=useState(false)
  const submit=async(event:FormEvent)=>{
    event.preventDefault()
    setSaving(true)
    setError('')
    try{
      await api.post<TeamMember>('/team',{name:name.trim(),email:email.trim(),phone:phone.trim(),role:role.trim()})
      go('Team')
    }catch(err){setError(err instanceof Error?err.message:'Unable to add team member')}
    finally{setSaving(false)}
  }
  return <><H t="Add Team Member"/><form onSubmit={event=>void submit(event)} className="card py-10 px-5 sm:px-10">
    {error&&<p role="alert" className="mx-auto mb-6 max-w-3xl rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto">
      <label className="block text-xs font-semibold">Full Name<input className={`${inp} mt-2`} placeholder="Enter full name" required value={name} onChange={event=>setName(event.target.value)}/></label>
      <label className="block text-xs font-semibold">Email<input className={`${inp} mt-2`} type="email" placeholder="Enter email address" required value={email} onChange={event=>setEmail(event.target.value)}/></label>
      <label className="block text-xs font-semibold">Phone Number<input className={`${inp} mt-2`} type="tel" placeholder="Enter phone number" value={phone} onChange={event=>setPhone(event.target.value)}/></label>
      <label className="block text-xs font-semibold">Position<input className={`${inp} mt-2`} placeholder="Enter position" required value={role} onChange={event=>setRole(event.target.value)}/></label>
    </div>
    <div className="text-center mt-10"><button className="btn px-16" disabled={saving}>{saving?'Adding...':'Add Now'}</button></div>
  </form></>
}
export default AddMember
