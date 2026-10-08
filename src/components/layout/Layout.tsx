import {useEffect,useState,type ReactNode} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import useDarkMode from '../../hooks/useDarkMode'
export default function Layout({pathname,children}:{pathname:string,children:ReactNode}){
  const [open,setOpen]=useState(false),[dark,toggle]=useDarkMode()
  useEffect(()=>{window.scrollTo(0,0);setOpen(false)},[pathname])
  return <div className="min-h-screen"><Sidebar open={open} close={()=>setOpen(false)} pathname={pathname}/>
    <div className="lg:ml-60"><Header onMenu={()=>setOpen(true)} dark={dark} toggle={toggle}/><main className="p-4 sm:p-6">{children}</main></div></div>
}
