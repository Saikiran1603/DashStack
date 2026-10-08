import {useState,type FC,type ReactNode} from 'react'
import Img from '../components/ui/Img'
import {productImg} from '../data/images'
import {items} from '../data/products'
export const Grid=({fav}:{fav?:boolean})=><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{items.map(([n,p,r],i)=><div key={n as string} className="card">
  <Img src={productImg(i)} alt={n as string} loading="lazy" className="h-48 w-full object-cover rounded-xl bg-[#F1F4F9]"/>
  <div className="flex justify-between mt-4"><div><b>{n}</b><p className="text-brand font-semibold">{p}</p><p className="text-amber-400">★★★★☆ <span className="text-slate-400 text-xs">({r})</span></p></div><span className={fav&&i===0?'text-red-500':'text-slate-400'}>{fav&&i===0?'♥':'♡'}</span></div>
  <button className="btn2 mt-3">Edit Product</button></div>)}</div>
