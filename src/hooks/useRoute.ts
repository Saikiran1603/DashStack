import {useEffect,useState} from 'react'
import {routes} from '../routes'
// Tiny hash router: the URL hash (#/orders) is the single source of truth, so every click re-renders.
const read=()=>window.location.hash.replace(/^#/,'')||'/'
export const nameOf=(p:string)=>routes.find(([,x])=>x===p)?.[0]??'404'
export const navigate=(p:string)=>{window.location.hash=p}
export default function useRoute(){
  const [p,setP]=useState(read)
  useEffect(()=>{const f=()=>setP(read());window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f)},[])
  return p
}
