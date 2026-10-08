import {useEffect,useRef,type ImgHTMLAttributes} from 'react'
import {fallbacks} from '../../data/images'
const ph="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect width='4' height='3' fill='%23dfe5ee'/%3E%3C/svg%3E"
// Shows the real photo; if it errors or is still not loaded after 6s, shows built-in artwork instead.
export default function Img(p:ImgHTMLAttributes<HTMLImageElement>){
  const r=useRef<HTMLImageElement>(null),fb=fallbacks[p.src??'']??ph
  const swap=(t:HTMLImageElement)=>{if(t.getAttribute('src')!==fb)t.src=fb}
  useEffect(()=>{const t=r.current;const id=setTimeout(()=>{if(t&&(!t.complete||!t.naturalWidth))swap(t)},6000);return()=>clearTimeout(id)},[p.src])
  return <img ref={r} {...p} onError={e=>swap(e.currentTarget)}/>
}
