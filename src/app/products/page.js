import DeleteProduct from "@/lib/DeleteProduct";
import { NEXT_PUBLIC_BASE_URL } from "@/lib/db";
import Link from "next/link";

const getData = async()=>{
    let data = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/products`,{cache:"no-cache"});
    data = await data.json();
    return data.result
}

export default async function Page(){
    if(!NEXT_PUBLIC_BASE_URL){
        return null
    }
    let data = await getData();
    // console.log(data);
    return(
        <div>
            <Link href="/">Home</Link>
            <h2>Product Details</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Company</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>{
                            return(
                                <tr key={item._id}>
                                    <td>{item.name} </td>
                                    <td>{item.price} </td>
                                    <td>{item.category} </td>
                                    <td>{item.company} </td>
                                    <td>{item.color} </td>
                                    <td><Link href={"/products/"+ item._id}>Update</Link></td>
                                    <td><DeleteProduct id={item._id}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}