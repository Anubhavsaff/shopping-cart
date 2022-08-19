import { useEffect,useState  } from "react"
import { useDispatch } from "react-redux";
 import { Fetchshop } from "./action";
 import { useSelector } from "react-redux";

 export const Shop=()=>{ 
   const shop =useSelector((state)=>state.user.shop)
console.log(shop)
const dispatch = useDispatch();
 useEffect(()=>{
 },[])
  return (
    <>
    <div className="bg-red-700">
    <div className="flex justify-center pt-4  ">
        <button className='bg-red-600 py-4 flex justify-center   font-bold text-white border-2xl rounded-2xl w-[100px] h-[60px] '
        onClick={() => dispatch(Fetchshop())} >Click Me</button>
   </div>
   <div className='flex justify-center flex-wrap gap-16 shadow-lg pt-4  ' >
   { shop?.data?.map((value,i)=>
   <div key={i} >
      <div className=" transform transition duration-300 hover:scale-110 max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white h-[500px] w-[300px] ">
       
        <div className="flex justify-center py-1">
  <img src={value.image} className="w-[150px] h-[200px]" alt=""/>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-2xl mb-2">{value.category}</div>
    <h1 className='text-2xl font-bold text-red-700'>{value.title}</h1>
  
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {value.price}</span>
  </div>
  <div className=" ml-6">
    <button className=" bg-slate-600 text-black w-[70px] rounded-md">Buy</button>
  </div>
</div>
</div>
      )}
   </div>
   </div>
    </>
  )
   }
  

