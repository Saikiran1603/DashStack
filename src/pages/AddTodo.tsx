import {useState,type FC,type ReactNode} from 'react'
import {inp} from '../components/ui/Form'
import {H} from '../components/ui/PageTitle'
import type {Go} from '../types'
const AddTodo:FC<Go>=({go})=><><div className="flex justify-between"><H t="Add New To-Do"/><button className="btn h-10 px-8" onClick={()=>go('To-Do')}>Save</button></div>
  <div className="card mb-4"><input placeholder="Write Your task name here" className={`${inp} sm:w-80`}/></div>
  {['Meeting with CEO','Pick up kids from school','Shopping with Brother','Going to Dia\'s School','Check design files','Update File'].map(t=><div key={t} className="card flex items-center gap-4 mb-4 py-4"><input type="checkbox"/><span className="flex-1">{t}</span><span className="text-slate-400">☆</span></div>)}</>
export default AddTodo
