import Icon from '../ui/Icon'
import {path} from '../../routes'
const nav=['Dashboard','Products','Favorites','Inbox','Order Lists','Product Stock']
const more=['Pricing','Calender','To-Do','Contact','Invoice','UI Elements','Team','Table']
export default function Sidebar({open,close,pathname}:{open:boolean,close:()=>void,pathname:string}){
  const on=(n:string)=>n!=='Logout'&&(n==='Dashboard'?pathname==='/':pathname===path[n]||pathname.startsWith(path[n]+'/'))
  const Item=({n}:{n:string})=><a href={'#'+(n==='Logout'?'/login':path[n])} className={`relative flex items-center gap-3 px-4 py-2.5 rounded-md mb-1 text-[14px] font-semibold ${on(n)?'bg-brand text-white before:absolute before:-left-4 before:top-0 before:h-full before:w-1.5 before:rounded-r before:bg-brand':'opacity-80 hover:bg-slate-100 dark:hover:bg-dline'}`}><Icon n={n}/>{n}</a>
  return <>{open&&<div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={close}/>}
    <aside className={`fixed top-0 left-0 h-full w-60 z-40 bg-white dark:bg-dcard p-4 overflow-y-auto transition-transform lg:translate-x-0 ${open?'':'-translate-x-full'}`}>
      <div className="text-2xl font-extrabold text-center py-4"><span className="text-brand">Dash</span>Stack</div>
      {nav.map(n=><Item key={n} n={n}/>)}
      <p className="text-xs text-slate-400 mt-5 mb-2 px-2">PAGES</p>
      {more.map(n=><Item key={n} n={n}/>)}
      <div className="border-t border-slate-100 dark:border-dline mt-3 pt-3"><Item n="Settings"/><Item n="Logout"/></div>
    </aside></>
}
