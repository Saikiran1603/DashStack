import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
const Pricing:FC=()=><><H t="Pricing"/><div className="grid md:grid-cols-3 gap-5">{[['Basic','$14.99',4],['Standard','$49.99',5],['Premium','$89.99',7]].map(([n,p,k],i)=><div key={n as string} className="card text-center space-y-3 py-8"><b className="text-lg">{n}</b><p className="text-xs text-slate-400">Monthly Charge</p><p className="text-4xl font-bold text-brand">{p}</p><hr className="dark:border-dline"/>
  {['Free Setup','Bandwidth Limit 10 GB','20 User Connection','Analytics Report','Public API Access','Plugins Integration','Custom Content Management'].map((f,j)=><p key={f} className={j<(k as number)?'font-semibold':'text-slate-300 dark:text-slate-600'}>{f}</p>)}
  <button className={`rounded-full px-8 py-2 border border-brand font-semibold ${i===2?'bg-brand text-white':'text-brand'}`}>Get Started</button><p className="underline font-semibold text-xs">Start Your 30 Day Free Trial</p></div>)}</div></>
export default Pricing
