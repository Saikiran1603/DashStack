import {art} from './artwork'
// Real photos (randomuser.me portraits + Unsplash). If one fails to load, Img swaps in the built-in artwork.
export const fallbacks:Record<string,string>={}
const reg=(url:string,key:string)=>{fallbacks[url]=art[key];return url}
const slug=(n:string)=>n.toLowerCase().replace(/[^a-z]+/g,'-')
const R:Record<string,string>={"Moni Roy": "women/90", "Jason Price": "men/32", "Duane Dean": "men/45", "Jonathan Barker": "men/52", "Rosie Glover": "men/65", "Patrick Greer": "men/75", "Darrell Ortega": "men/22", "Jukkoe Sisao": "men/12", "Harriet King": "women/68", "Lenora Benson": "women/26", "Olivia Reese": "women/33", "Bertha Valdez": "women/17", "Harriett Payne": "women/55", "George Bryant": "men/86", "Lily French": "women/79", "Howard Adkins": "men/91", "Earl Bowman": "men/60", "Patrick Padilla": "men/40"}
export const portrait=(n:string)=>reg(`https://randomuser.me/api/portraits/${R[n]??'men/1'}.jpg`,'p-'+slug(n))
const U=(id:string)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=80`
const productPhotos:Record<string,string>={
  'Apple Watch Series 4':U('1523275335684-37898b6baf30'),
  'Air-Max-270':U('1542291026-7eec264c27ff'),
  'Minimal Chair Tool':U('1503602642458-232111445657'),
  'Amazfit Vip':U('1546868871-7041f2a55e12'),
  'Gumbo Mouse':U('1527864550417-7fd91fc51a46'),
  'Beats Headphone':U('1505740420928-5e560c06d30e'),
  'Microsoft Headsquare':U('1590658268037-6bf12165a8df'),
  "Women's Dress":U('1496747611176-843222e1e57c'),
  'Samsung A50':U('1511707171634-5f897ff02aa9'),
  Camera:U('1526170375885-4d8ecf77b99f'),
  'Classic Leather Handbag':U('1584917865442-de89df76afd3'),
  'Wireless Earbuds':U('1606220945770-b5b6c2c55bf1'),
  'Ceramic Table Lamp':U('1507473885765-e6ed057f782c'),
  'Running Shoes Pro':U('1460353581641-37baddab0fa2'),
  'Portable Bluetooth Speaker':U('1608043152269-423dbba4e7e1'),
  'Stainless Water Bottle':U('1602143407151-7111542de6e8'),
  'Mechanical Keyboard':U('1587829741301-dc798b83add3'),
  'Desk Organizer Set':U('1494438639946-1ebd1d20bf85'),
  'Polarized Sunglasses':U('1511499767150-a48a237f0083'),
  'Smart Home Hub':U('1558002038-1055907df827'),
  'Travel Backpack':U('1553062407-98eeb64c6a62'),
  'Fitness Tracker Band':U('1576243345690-4e4b79b63288'),
  'Memory Foam Pillow':U('1631049307264-da0ec9d70304'),
  'USB-C Charging Dock':U('1583863788434-e58a36330cf0'),
  'Compact Coffee Maker':U('1495474472287-4d71bcdd2085')
}
const productNames=Object.keys(productPhotos)
export const productImg=(product:string|number)=>{
  const name=typeof product==='number'?productNames[((product%productNames.length)+productNames.length)%productNames.length]:product
  return productPhotos[name]??U('1526170375885-4d8ecf77b99f')
}
const E=[U('1540575467063-178a50c2df87'),U('1492684223066-81342ee5ff30'),U('1459749411175-04bf5292ceea'),U('1470229722913-7c0e2dbbafd3')]
export const eventImg=(i:number)=>reg(E[i%4],'ev-'+(i%4+1))
