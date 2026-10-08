import {useState,type FC,type ReactNode} from 'react'
import {Form} from '../components/ui/Form'
const Settings:FC=()=><Form title="General Settings" btn="Save" photo="Upload Logo" fields={[['Site Name','Bright Web'],['Copy Right','All rights Reserved@brightweb'],['SEO Title','Bright web is a hybrid dashboard'],['SEO Description','Bright web is a hybrid dashboard','area'],['SEO Keywords','CEO']]}/>
export default Settings
