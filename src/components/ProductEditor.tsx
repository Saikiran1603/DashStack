import {useState,type FormEvent} from 'react'
import type {Product} from '../types'
import {inp} from './ui/Form'

export function ProductEditor({product,onClose,onSave,saving}:{product:Product,onClose:()=>void,onSave:(changes:Partial<Product>)=>void,saving:boolean}){
  const [name,setName]=useState(product.name)
  const [price,setPrice]=useState(String(product.price))
  const [category,setCategory]=useState(product.category)
  const [stock,setStock]=useState(String(product.stock))
  const submit=(event:FormEvent)=>{
    event.preventDefault()
    onSave({name:name.trim(),price:Number(price),category:category.trim(),stock:Number(stock)})
  }
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onMouseDown={event=>{if(event.target===event.currentTarget)onClose()}}>
    <form onSubmit={submit} className="card w-full max-w-lg space-y-4 p-6">
      <div className="flex items-center justify-between"><h2 className="text-xl font-bold">Edit Product</h2><button type="button" aria-label="Close" onClick={onClose}>✕</button></div>
      <label className="block text-sm font-semibold">Product name<input className={`${inp} mt-1`} required value={name} onChange={event=>setName(event.target.value)}/></label>
      <label className="block text-sm font-semibold">Price ($)<input className={`${inp} mt-1`} required min="0.01" step="0.01" type="number" value={price} onChange={event=>setPrice(event.target.value)}/></label>
      <label className="block text-sm font-semibold">Category<input className={`${inp} mt-1`} required value={category} onChange={event=>setCategory(event.target.value)}/></label>
      <label className="block text-sm font-semibold">Stock<input className={`${inp} mt-1`} required min="0" step="1" type="number" value={stock} onChange={event=>setStock(event.target.value)}/></label>
      <div className="flex justify-end gap-3"><button type="button" className="btn2" onClick={onClose}>Cancel</button><button className="btn" disabled={saving}>{saving?'Saving...':'Save changes'}</button></div>
    </form>
  </div>
}
