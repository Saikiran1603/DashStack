import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
import {Table} from '../components/ui/Table'
const Invoice:FC=()=>{const r=[['Children Toy',2,20],['Makeup',2,50],['Asos Laptop',5,100],['Iphone X',4,1000]];return <><H t="Invoice"/>
  <div className="card p-6 sm:p-10 min-h-[28rem]"><div className="flex flex-wrap gap-8 justify-between text-xs mb-10"><div><p>Invoice From :</p><b className="text-sm">Virginia Walker</b><p>9694 Krajcik Locks Suite 635</p></div><div><p>Invoice To :</p><b className="text-sm">Austin Miller</b><p>Brookview</p></div><div><p>Invoice Date : 12 Nov 2019</p><p>Due Date : 25 Dec 2019</p></div></div>
  <Table head={['Serial No.','Description','Quantity','Base Cost','Total Cost']}>{r.map((x,i)=><tr key={i}><td className="td">{i+1}</td><td className="td">{x[0]}</td><td className="td">{x[1]}</td><td className="td">${x[2]}</td><td className="td">${+x[1]*+x[2]}</td></tr>)}</Table>
  <p className="text-right font-bold mt-4 pr-3">Total = $4680</p><div className="flex justify-end gap-3 mt-8"><button className="chip" onClick={()=>window.print()}>🖨</button><button className="btn px-10">Send</button></div></div></>}
export default Invoice
