import {useEffect,useState} from 'react'
import Img from '../components/ui/Img'
import {productImg} from '../data/images'
import {api} from '../data/api'
import type {Product} from '../types'
import {ProductEditor} from './ProductEditor'

export const Grid=({fav=false}:{fav?:boolean})=>{
  const [products,setProducts]=useState<Product[]>([])
  const [editing,setEditing]=useState<Product|null>(null)
  const [loading,setLoading]=useState(true)
  const [saving,setSaving]=useState(false)
  const [error,setError]=useState('')
  useEffect(()=>{
    let active=true
    api.get<Product[]>('/products').then(data=>{if(active)setProducts(data)}).catch(err=>{if(active)setError(err instanceof Error?err.message:'Unable to load products')}).finally(()=>{if(active)setLoading(false)})
    return()=>{active=false}
  },[])

  const updateProduct=async(id:number,changes:Partial<Product>)=>{
    setSaving(true)
    setError('')
    try{
      const updated=await api.patch<Product>(`/products/${id}`,changes)
      setProducts(current=>current.map(product=>product.id===id?updated:product))
      setEditing(null)
    }catch(err){setError(err instanceof Error?err.message:'Unable to save product')}
    finally{setSaving(false)}
  }
  const toggleFavorite=async(product:Product)=>{
    setError('')
    try{
      const updated=await api.patch<Product>(`/products/${product.id}`,{favorite:!product.favorite})
      setProducts(current=>current.map(item=>item.id===product.id?updated:item))
    }catch(err){setError(err instanceof Error?err.message:'Unable to update favorite')}
  }
  if(loading)return <p className="py-8 text-center text-slate-500">Loading products...</p>
  const visible=products.filter(product=>!fav||product.favorite)
  return <>
    {error&&<p role="alert" className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {visible.length===0&&!error?<p className="card py-10 text-center text-slate-500">{fav?'No favorite products yet. Mark a product with the heart to find it here.':'No products found.'}</p>:null}
    {visible.length>0&&<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{visible.map(product=><div key={product.id} className="card">
        <Img src={productImg(product.name)} alt={product.name} loading="lazy" className="h-48 w-full object-cover rounded-xl bg-[#F1F4F9]"/>
        <div className="mt-4 flex justify-between gap-3">
          <div className="min-w-0"><b>{product.name}</b><p className="text-brand font-semibold">${product.price.toFixed(2)}</p><p className="text-amber-400">★★★★☆ <span className="text-slate-400 text-xs">({product.reviews})</span></p><p className="text-xs text-slate-400">{product.category} · {product.stock} in stock</p></div>
          <button type="button" aria-label={product.favorite?'Remove from favorites':'Add to favorites'} aria-pressed={product.favorite} onClick={()=>void toggleFavorite(product)} className={`h-8 w-8 shrink-0 text-2xl ${product.favorite?'text-red-500':'text-slate-400'}`}>{product.favorite?'♥':'♡'}</button>
        </div>
        <button type="button" className="btn2 mt-3" onClick={()=>setEditing(product)}>Edit Product</button>
      </div>)}</div>}
    {editing&&<ProductEditor product={editing} saving={saving} onClose={()=>setEditing(null)} onSave={changes=>void updateProduct(editing.id,changes)}/>}
  </>
}
