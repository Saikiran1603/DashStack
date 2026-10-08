const apiUrl=import.meta.env.VITE_API_URL??'/api'

async function request<T>(path:string,options?:RequestInit):Promise<T>{
  const response=await fetch(`${apiUrl}${path}`,{
    ...options,
    headers:{'Content-Type':'application/json',...options?.headers}
  })
  if(!response.ok){
    const detail=await response.text()
    throw new Error(detail||`Request failed (${response.status})`)
  }
  if(response.status===204)return undefined as T
  return response.json() as Promise<T>
}

export const api={
  get:<T,>(path:string)=>request<T>(path),
  post:<T,>(path:string,data:unknown)=>request<T>(path,{method:'POST',body:JSON.stringify(data)}),
  patch:<T,>(path:string,data:unknown)=>request<T>(path,{method:'PATCH',body:JSON.stringify(data)}),
  delete:(path:string)=>request<void>(path,{method:'DELETE'})
}
