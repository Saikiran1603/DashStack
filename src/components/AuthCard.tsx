import type {Go} from '../types'
// Inputs use fixed light colours so they stay visible in dark mode too.
const f='w-full mt-2 rounded-md bg-[#F1F4F9] text-[#202224] placeholder:text-[#9AA3AF] border border-[#D8D8D8] px-3 py-2.5 outline-none focus:border-brand'
export default function AuthCard({signup,go}:{signup?:boolean}&Go){
  return <div className="min-h-screen bg-brand flex items-center justify-center p-4">
    <form onSubmit={e=>{e.preventDefault();go('Dashboard')}} className="bg-white text-[#202224] rounded-2xl w-full max-w-md p-8 sm:p-10 shadow-xl">
      <h1 className="text-2xl font-bold text-center">{signup?'Create an Account':'Login to Account'}</h1>
      <p className="text-xs text-center mt-2 mb-6">{signup?'Create a account to continue':'Please enter your email and password to continue'}</p>
      <label className="block text-xs font-semibold mb-4">Email address:<input type="email" required placeholder="esteban_schiller@gmail.com" className={f}/></label>
      {signup&&<label className="block text-xs font-semibold mb-4">Username<input required placeholder="Username" className={f}/></label>}
      <label className="block text-xs font-semibold mb-4"><span className="flex justify-between">Password<span className="font-normal">Forget Password?</span></span><input type="password" required placeholder="••••••" className={f}/></label>
      <label className="flex items-center gap-2 text-xs mb-6"><input type="checkbox" className="accent-[#4880FF]"/>{signup?'I accept terms and conditions':'Remember Password'}</label>
      <button className="btn w-full">{signup?'Sign Up':'Sign In'}</button>
      <p className="text-xs text-center mt-4">{signup?'Already have an account? ':"Don't have an account? "}<button type="button" className="text-brand underline" onClick={()=>go(signup?'Login':'Create Account')}>{signup?'Login':'Create Account'}</button></p>
    </form></div>
}
