import {useState,type FC,type ReactNode} from 'react'
import {Form} from '../components/ui/Form'
import type {Go} from '../types'
const AddContact:FC<Go>=({go})=><Form title="Add New Contact" btn="Add Now" onDone={()=>go('Contact')} fields={[['First Name','Enter your first name'],['Last Name','Enter your last name'],['Your email','Enter your email'],['Phone Number','Enter your phone number'],['Date of Birth','Enter your birthdate'],['Gender','','select']]}/>
export default AddContact
