 import React from 'react'
 
 export default function Filters({filterData,clickedcourse}) {


   return (
     <div className='mx-[300px] my-[40px]'>

      {
        filterData.map((data)=>
          <button className='px-[30px] text-2xl border border-black mx-[10px] bg-gray-200 hover:bg-gray-400 hover:text-white font-bold' key={data.id} onClick={e=>
            clickedcourse(data.title)}>{data.title} </button>
         )
      }
     </div>
   )
 }
 


