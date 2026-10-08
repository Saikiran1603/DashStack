import {useState,type FC,type ReactNode} from 'react'
import {Form} from '../components/ui/Form'
import type {Go} from '../types'
const AddMember:FC<Go>=({go})=><Form title="Add Team Member" btn="Add Now" onDone={()=>go('Team')} fields={[['First Name','Enter your first name'],['Last Name','Enter your last name'],['Your email','Enter your email'],['Phone Number','Enter your phone number'],['Position','CEO'],['Gender','','select']]}/>
export default AddMember
