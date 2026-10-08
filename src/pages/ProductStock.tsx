import {useState,type FC,type ReactNode} from 'react'
import Img from '../components/ui/Img'
import {productImg} from '../data/images'
import {H} from '../components/ui/PageTitle'
import {Table} from '../components/ui/Table'
const Stock:FC=()=><><H t="Product Stock"/><Table head={['Image','Product Name','Category','Price','Piece','Available Color','Action']}>
  {[['Apple Watch Series 4','Digital Product','$690.00',63],['Microsoft Headsquare','Digital Product','$190.00',13],['Women\'s Dress','Fashion','$640.00',635],['Samsung A50','Mobile','$400.00',67],['Camera','Electronic','$420.00',52]].map(r=><tr key={r[0] as string}><td className="td"><Img src={productImg(r[0] as string)} alt="" loading="lazy" className="w-10 h-10 rounded object-cover"/></td>{r.map((c,i)=><td key={i} className="td">{c}</td>)}<td className="td"><span className="inline-flex gap-1">{['#000','#f87171','#3b82f6','#eab308'].map(c=><i key={c} className="w-3 h-3 rounded-full" style={{background:c}}/>)}</span></td><td className="td">✎ 🗑</td></tr>)}</Table></>
export default Stock
