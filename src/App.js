import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import {filterData,apiUrl} from './data'
import Cards from './Cards'
import Spinner from './Spinner'

export default function App() {
  let [courseset,setcourseset] = useState('All')
let [courses,setcourses]= useState(null)
let [received,setReceived] = useState(false)
function clickedcourse(title){
console.log(title)
setcourseset(title)
}
  async function fetchData() {
let dataobtained= await fetch(apiUrl)
let convert= await dataobtained.json()
setcourses(convert)
setReceived(true)
  }

useEffect(()=>{
fetchData()
},[])
  
  return (
    <div>

      <Navbar/>
      <Filters filterData={filterData} clickedcourse={clickedcourse}/>

      {
          ! received?
           <Spinner/>: <Cards courses={courses} courseset={courseset}/>
      }
      
    </div>
  )
}



