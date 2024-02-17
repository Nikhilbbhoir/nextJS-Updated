'use client'

import { useRouter } from "next/navigation";
import { NEXT_PUBLIC_BASE_URL } from "./db";

export default function DeleteProduct(props){
    // console.log(props.id);
    if(!NEXT_PUBLIC_BASE_URL){
        return null
    }
    const router = useRouter();
    const id = props.id;
    const deleteProduct = async ()=>{
        let data = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/products/${id}`,{
            method:"DELETE"
        })
         data = await data.json();

        if(data.success){
            alert("Product has been Deleted!!!");
            router.refresh()
        }

    }

    return <button onClick={deleteProduct}>Delete</button>
}