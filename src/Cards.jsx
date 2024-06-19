 import React from 'react'
 import Card from './Card'
 export default function Cards({courses,courseset}) {
// console.log(courses)
console.log(courses.data[courseset])
 console.log(courses.data[courseset])

  function getData(){
    let allcourses=[]
    if(courseset==="All") {
      
      Object.values(courses.data).forEach((title)=>{
        title.forEach((course)=>{
  allcourses.push(course)
        })
      })
      // console.log(allcourses)
      
    }

    else{
    

      allcourses=courses.data[courseset]
   
    }
    return allcourses
  }
getData()
let arraycourses= getData()
   return (
     <div className='grid grid-cols-3 ml-[100px]'>


{
arraycourses.map((course)=>{
  return <Card course={course}/>
})

}
    
     </div>
   )
 }
 
