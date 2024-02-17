'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import '../../style.css'
import { useRouter } from 'next/navigation';
import { NEXT_PUBLIC_BASE_URL } from '@/lib/db';

export default function EditProduct(props){
    if(!NEXT_PUBLIC_BASE_URL){
        return null
    }
    const router = useRouter();

    const [name,setName]= useState("");
    const [category,setCategory]= useState("");
    const [color,setColor]= useState("");
    const [company,setCompany]= useState("");
    const [price,setPrice]= useState("");

    useEffect(()=>{
        getData()
    },[])
    const id = props.params.editproduct
    const getData = async()=>{
        let data = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/products/${id}`);
        data = await data.json();
        // console.log(data.result);
        const d = data.result;
        setName(d.name);
        setColor(d.color);
        setCompany(d.company);
        setCategory(d.category);
        setPrice(d.price);
    }
        
    const updateProduct = async()=>{
        let data = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/products/${id}`,{
            method:"PUT",
            body:JSON.stringify({name,category,color,company,price})
        });
        data= await data.json();
        if(data.success){
            alert("Product has been Updated");
            router.push("/products")
        }
        else{
            alert(data.result)
        }
    }

    const cls = ()=>{
        setName("");
        setCompany("");
        setCategory("");
        setColor("");
        setPrice("");
    }

    return(
        <div className='add-product'>
            <Link href="/">Home</Link>
            <h2>Update Product Details</h2>
            <input type="text" placeholder="Enter Name" className='input-field' value={name} onChange={(e)=> setName(e.target.value)} />

            <input type="text" placeholder="Enter Category" className='input-field' value={category}onChange={(e)=>setCategory(e.target.value)} />
            
            <input type="text" placeholder="Enter Color" className='input-field' value={color}onChange={(e)=>setColor(e.target.value)} />

            <input type="text" placeholder="Enter Company" className='input-field' value={company} onChange={(e)=>setCompany(e.target.value)} />

            <input type="text" placeholder="Enter Price" className='input-field' value={price} onChange={(e)=>setPrice(e.target.value)} />

            <button className='btn' onClick={updateProduct}>Update</button>
            <button className='btn' onClick={cls}>Clear</button>
        </div>
    )
}
