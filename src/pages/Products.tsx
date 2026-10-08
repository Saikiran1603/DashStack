import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
import {Grid} from '../components/ProductGrid'
const Products:FC=()=><><H t="Products"/><div className="rounded-2xl bg-brand text-white p-8 sm:p-12 mb-6"><p className="text-xs">September 12-22</p><h2 className="text-3xl sm:text-4xl font-extrabold my-3 max-w-md">Enjoy free home delivery in this summer</h2><p className="mb-5">Designer Dresses - Pick from trendy Designer Dress.</p><button className="rounded-md bg-orange-400 px-5 py-2 font-semibold">Get Started</button></div><Grid/></>
export default Products
