import {useState,type FC,type ReactNode} from 'react'
const tone:Record<string,string>={Completed:'bg-[#CCF0EB] text-[#00B69B]',Processing:'bg-[#E0D4FC] text-[#6226EF]',Rejected:'bg-[#FFC5C5] text-[#EF3826]','On Hold':'bg-[#FFE9D4] text-[#FFA756]','In Transit':'bg-[#F4D9FF] text-[#BA29FF]',Delivered:'bg-[#00B69B] text-white'}

export const tagC:Record<string,string>={Primary:'bg-[#D9F4EE] text-[#00B69B]',Work:'bg-[#FFEBD9] text-[#FFA756]',Friends:'bg-[#F4D9FF] text-[#BA29FF]',Social:'bg-[#DDE8FF] text-[#4880FF]'}

export const Badge=({s}:{s:string})=><span className={`inline-block w-[84px] text-center py-1.5 rounded text-xs font-bold ${tone[s]}`}>{s}</span>
