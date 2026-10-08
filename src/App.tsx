import Layout from './components/layout/Layout'
import {pageComponents} from './pages'
import {path} from './routes'
import useRoute,{nameOf,navigate} from './hooks/useRoute'
const bare=['Login','Create Account','404']
export default function App(){
  const p=useRoute(),name=nameOf(p),C=pageComponents[name]
  const page=<C key={name} go={(n:string)=>navigate(path[n]??'/404')}/>
  return bare.includes(name)?page:<Layout pathname={p}>{page}</Layout>
}
