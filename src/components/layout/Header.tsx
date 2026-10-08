import {useState,type ReactNode} from 'react'
import Img from '../../components/ui/Img'
import {navigate} from '../../hooks/useRoute'
import Icon from '../ui/Icon'
import {portrait} from '../../data/images'
const langs=[['🇬🇧','English'],['🇫🇷','French'],['🇪🇸','Spanish']]
const notes=[['Settings','Update Dashboard'],['Event Update','An event date update again'],['Profile','Update your profile'],['Application Error','Check Your running application']]
const Pop=({show,children,c=''}:{show:boolean,children:ReactNode,c?:string})=>show?<div className={`absolute right-0 top-12 z-30 w-56 card shadow-xl text-xs space-y-3 ${c}`}>{children}</div>:null
export default function Header({onMenu,dark,toggle}:{onMenu:()=>void,dark:boolean,toggle:()=>void}){
  const [menu,setMenu]=useState(''),[lang,setLang]=useState(0)
  const t=(k:string)=>setMenu(menu===k?'':k)
  return <header className="bg-white dark:bg-dcard flex items-center gap-2 sm:gap-4 px-4 sm:px-6 h-16 sticky top-0 z-20">
    <button className="lg:hidden text-xl" onClick={onMenu} aria-label="Menu">☰</button>
    <input placeholder="Search" className="flex-1 min-w-0 max-w-sm rounded-full bg-[#F5F6FA] dark:bg-dpage border border-slate-200 dark:border-transparent px-4 py-2 outline-none"/>
    <button onClick={toggle} className="chip" aria-label="Toggle dark mode">{dark?'☀':'☾'}<span className="hidden sm:inline"> {dark?'Light':'Dark'}</span></button>
    <div className="relative"><button onClick={()=>t('note')} aria-label="Notifications"><Icon n="Bell" s={20}/></button>
      <Pop show={menu==='note'} c="w-64 -right-24 sm:right-0"><b>Notification</b>{notes.map(([a,b])=><div key={a}><b className="block">{a}</b><span className="text-slate-400">{b}</span></div>)}<p className="text-center text-slate-400">See all notification</p></Pop></div>
    <div className="relative"><button onClick={()=>t('lang')} className="flex items-center gap-1 text-xs">{langs[lang][0]}<span className="hidden sm:inline">{langs[lang][1]} ▾</span></button>
      <Pop show={menu==='lang'}><b>Select Language</b>{langs.map(([f,n],i)=><button key={n} onClick={()=>{setLang(i);setMenu('')}} className="flex w-full gap-2">{f} {n}{i===lang&&<span className="ml-auto text-brand">✓</span>}</button>)}</Pop></div>
    <div className="relative"><button onClick={()=>t('user')} className="flex items-center gap-2"><Img src={portrait('Moni Roy')} alt="Moni Roy" className="w-9 h-9 rounded-full object-cover"/><div className="hidden sm:block leading-tight text-left"><b>Moni Roy</b><br/><span className="text-xs text-slate-400">Admin</span></div></button>
      <Pop show={menu==='user'}>{['Manage Account','Change Password','Activity Log'].map(x=><p key={x}>{x}</p>)}<button onClick={()=>navigate('/login')}>Log out</button></Pop></div>
  </header>
}
