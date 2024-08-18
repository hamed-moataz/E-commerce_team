import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const api = "https://ecommerce.routemisr.com/api/v1/products"
  const [product , setProduct] = useState([])

  async function getData (){
    const res = await axios.get(api)
    setProduct(res.data.data)
  }
  useEffect(()=>{
   getData()
  },[])
  return (
    <>
    <div className="flex justify-center items-center flex-wrap gap-5 ">
    {
    product.map((item)=>(
     <div key={item.id} className="card bg-base-100 w-96 shadow-xl h-70">
     <figure>
       <img
         src={item.imageCover}
         alt={item.title}
         className="h-45 w-screen"
         />
     </figure>
     <div className="card-body">
       <h2 className="card-title">{item.title.substring(0, 30)}...</h2>
       <p>{item.description.substring(0 , 50)}...</p>
       <div className="card-actions justify-end">
         <button className="btn btn-primary">{item.price}</button>
       </div>
     </div>
   </div>
    ))}
    </div>
   
 
    </>
  
  )
}

export default Home