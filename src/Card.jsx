 import React, { useState } from 'react'
 import {FcLike,FcLikePlaceholder} from "react-icons/fc"
 import { toast } from 'react-toastify'
 export default function Card({course}) {

console.log(course)
const info= course.description.substring(0,200)
const [liked,setLiked] = useState(false)
function like() {
  setLiked(true)
toast.success("liked")
}
function unlike() {
  setLiked(false)
  toast.error("unliked")
}
   return (
     <div className='h-[470px] w-[350px] border border-black my-5 mx-3 '>
      <img src={course.image.url} alt="" />
      {
       !liked ?
       <button className='h-[50px] w-[50px] rounded-[50%] bg-gray-400 transform translate-y-[-40px] translate-x-[300px] flex justify-center ' onClick={like}><FcLikePlaceholder className='size-10'/> </button>
         : <button   className='h-[50px] w-[50px] rounded-[50%] bg-gray-400 transform translate-y-[-40px] translate-x-[300px] flex justify-center '        onClick={unlike}>    <FcLike className='size-10'/> </button>
      
     }
      <p className='text-3xl p-2'> {course.title}</p>
     <p className=' p-2'>{info}...</p>
     
  
     </div>
   )
 }
 




