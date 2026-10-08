import {art} from './artwork'
// Real photos (randomuser.me portraits + Unsplash). If one fails to load, Img swaps in the built-in artwork.
export const fallbacks:Record<string,string>={}
const reg=(url:string,key:string)=>{fallbacks[url]=art[key];return url}
const slug=(n:string)=>n.toLowerCase().replace(/[^a-z]+/g,'-')
const R:Record<string,string>={"Moni Roy": "women/90", "Jason Price": "men/32", "Duane Dean": "men/45", "Jonathan Barker": "men/52", "Rosie Glover": "men/65", "Patrick Greer": "men/75", "Darrell Ortega": "men/22", "Jukkoe Sisao": "men/12", "Harriet King": "women/68", "Lenora Benson": "women/26", "Olivia Reese": "women/33", "Bertha Valdez": "women/17", "Harriett Payne": "women/55", "George Bryant": "men/86", "Lily French": "women/79", "Howard Adkins": "men/91", "Earl Bowman": "men/60", "Patrick Padilla": "men/40"}
export const portrait=(n:string)=>reg(`https://randomuser.me/api/portraits/${R[n]??'men/1'}.jpg`,'p-'+slug(n))
const U=(id:string)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=80`
const prod:Record<string,string>={smartwatch:U('1523275335684-37898b6baf30'),sneakers:U('1542291026-7eec264c27ff'),chair:U('1503602642458-232111445657'),band:U('1546868871-7041f2a55e12'),mouse:U('1527864550417-7fd91fc51a46'),headphones:U('1505740420928-5e560c06d30e'),dress:U('1496747611176-843222e1e57c'),phone:U('1511707171634-5f897ff02aa9'),camera:U('1526170375885-4d8ecf77b99f')}
const byName:Record<string,string>={'Apple Watch Series 4':'smartwatch','Air-Max-270':'sneakers','Minimal Chair Tool':'chair','Amazfit Vip':'band','Gumbo Mouse':'mouse','Beats Headphone':'headphones','Microsoft Headsquare':'headphones',"Women's Dress":'dress','Samsung A50':'phone','Camera':'camera'}
const order=['smartwatch','sneakers','chair','band','mouse','headphones']
export const productImg=(k:string|number)=>{const key=typeof k==='number'?order[k%6]:byName[k]??'smartwatch';return reg(prod[key],'pr-'+key)}
const E=[U('1540575467063-178a50c2df87'),U('1492684223066-81342ee5ff30'),U('1459749411175-04bf5292ceea'),U('1470229722913-7c0e2dbbafd3')]
export const eventImg=(i:number)=>reg(E[i%4],'ev-'+(i%4+1))
