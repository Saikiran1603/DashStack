import {useState,type FC,type ReactNode} from 'react'
import {H} from '../components/ui/PageTitle'
import {Grid} from '../components/ProductGrid'
const Favorites:FC=()=><><H t="Favorites"/><Grid fav/></>
export default Favorites
