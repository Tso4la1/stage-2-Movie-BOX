import React from 'react'
import { Icons } from "../../Atoms";


export const SearchBar = () => {
    return (
        <div className='flex 
        justify-center
        items-center 
        mt-[20px]
        mr-[250px]
        '>
            <input type="search" placeholder='What do you want to watch?' className='
            w-[400px]
             h-[30px]
             bg-transparent
             rounded-[8px]
             border-white
             border-[1px]
             border-solid
             text-[12px]
             text-white
             placeholder:pl-2
             ' />
            <Icons className="ml-[-22px] " name="search" />
        </div>
    )
}
