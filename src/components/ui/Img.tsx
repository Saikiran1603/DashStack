import type {ImgHTMLAttributes} from 'react'
import {fallbacks} from '../../data/images'
const ph="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect width='4' height='3' fill='%23dfe5ee'/%3E%3C/svg%3E"
export default function Img(p:ImgHTMLAttributes<HTMLImageElement>){
  const fb=fallbacks[p.src??'']??ph
  return <img {...p} onError={e=>{if(e.currentTarget.src!==fb)e.currentTarget.src=fb}}/>
}
