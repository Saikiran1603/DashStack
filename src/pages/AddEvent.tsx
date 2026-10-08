import {useState,type FC,type ReactNode} from 'react'
import {Form} from '../components/ui/Form'
import type {Go} from '../types'
const AddEvent:FC<Go>=({go})=><Form title="Add New Event" btn="Add Now" photo="Upload Cover Photo" onDone={()=>go('Calender')} fields={[['Event Name','Enter event name'],['Time','12:34 EDT'],['Date','13-09-2019'],['Address','Address'],['Contact Number','Enter your Contact Number']]}/>
export default AddEvent
