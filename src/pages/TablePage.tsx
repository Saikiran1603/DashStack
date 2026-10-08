import {useState,type FC,type ReactNode} from 'react'
import Img from '../components/ui/Img'
import {H} from '../components/ui/PageTitle'
import {Badge} from '../components/ui/Badge'
import {Table} from '../components/ui/Table'
import {orders} from '../data/orders'
import {productImg} from '../data/images'
const TablePage:FC=()=><><H t="Table"/><div className="space-y-6"><Table head={['ID','NAME','ADDRESS','DATE','TYPE','STATUS']}>{orders.slice(0,6).map(r=><tr key={r[0]}>{r.map((c,i)=><td key={i} className="td">{i===3?'14 Feb 2019':i===5?<Badge s={c}/>:c}</td>)}</tr>)}</Table>
  <Table head={['Image','Product Name','Category','Price','Piece','Available Color','Action']}>{[['Apple Watch Series 4','Digital Product','$690.00',63],['Microsoft Headsquare','Digital Product','$190.00',13]].map(r=><tr key={r[0] as string}><td className="td"><Img src={productImg(r[0] as string)} alt="" loading="lazy" className="w-10 h-10 rounded object-cover"/></td>{r.map((c,i)=><td key={i} className="td">{c}</td>)}<td className="td">● ● ●</td><td className="td">✎ 🗑</td></tr>)}</Table></div></>
export default TablePage
