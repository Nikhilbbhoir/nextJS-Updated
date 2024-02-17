'use client'

import { useState } from "react"

export default function Upload(){
   
    const [file, setFile] = useState();

    const onSubmit =async(event)=>{
        event.preventDefault();

        const data = new FormData();
        data.set("file",file);

        let result =  await fetch("/api/uploadimage",{
            method:"POST",
            body: data
        })
        result =await result.json()
        console.log(result);
        if(result.success){
            alert(result.message)
        }
        else{
            alert(result.message)
        }
    }
   
    return(
        <div>
            <h2>Upload a image here</h2>
            <form onSubmit={onSubmit}>
                <input 
                type="file" 
                name="file"
                onChange={(e)=>setFile(e.target.files?.[0])} 
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}