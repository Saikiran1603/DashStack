import {useEffect,useState,type FC} from 'react'
import Img from '../components/ui/Img'
import {productImg} from '../data/images'
import {H} from '../components/ui/PageTitle'
import {Table} from '../components/ui/Table'
import {ProductEditor} from '../components/ProductEditor'
import {api} from '../data/api'
import type {Product} from '../types'

const Stock:FC=()=>{
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
  const save=async(id:number,changes:Partial<Product>)=>{
    setSaving(true)
    setError('')
    try{
      const updated=await api.patch<Product>(`/products/${id}`,changes)
      setProducts(current=>current.map(product=>product.id===id?updated:product))
      setEditing(null)
    }catch(err){setError(err instanceof Error?err.message:'Unable to save product')}
    finally{setSaving(false)}
  }
  const remove=async(product:Product)=>{
    if(!window.confirm(`Remove ${product.name}?`))return
    setError('')
    try{
      await api.delete(`/products/${product.id}`)
      setProducts(current=>current.filter(item=>item.id!==product.id))
    }catch(err){setError(err instanceof Error?err.message:'Unable to remove product')}
  }
  return <><H t="Product Stock"/>
    {error&&<p role="alert" className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {loading?<p className="py-8 text-center text-slate-500">Loading products...</p>:error?null:<Table head={['Image','Product Name','Category','Price','Piece','Available Color','Action']}>
      {products.map(product=><tr key={product.id}>
        <td className="td"><Img src={productImg(product.name)} alt="" loading="lazy" className="w-10 h-10 rounded object-cover"/></td>
        <td className="td">{product.name}</td><td className="td">{product.category}</td><td className="td">${product.price.toFixed(2)}</td><td className="td">{product.stock}</td>
        <td className="td"><span className="inline-flex gap-1">{['#000','#f87171','#3b82f6','#eab308'].map(color=><i key={color} className="w-3 h-3 rounded-full" style={{background:color}}/>)}</span></td>
        <td className="td"><span className="inline-flex gap-2"><button type="button" aria-label={`Edit ${product.name}`} onClick={()=>setEditing(product)}>✎</button><button type="button" aria-label={`Remove ${product.name}`} onClick={()=>void remove(product)}>🗑</button></span></td>
      </tr>)}
    </Table>}
    {editing&&<ProductEditor product={editing} saving={saving} onClose={()=>setEditing(null)} onSave={changes=>void save(editing.id,changes)}/>}
  </>
}
export default Stock
