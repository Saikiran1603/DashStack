import {useState,type FC,type ReactNode} from 'react'
export const Table=({head,children}:{head:string[],children:ReactNode})=><div className="card overflow-x-auto p-2"><table className="w-full min-w-[640px]"><thead className="bg-[#F1F4F9] dark:bg-dline"><tr>{head.map(h=><th key={h} className="th">{h}</th>)}</tr></thead><tbody>{children}</tbody></table></div>
