import { log } from 'console';
import {writeFile} from 'fs/promises'
import { NextResponse } from "next/server";

export async function POST(res){
    const data = await res.formData();
    const file = data.get('file');
    if(file=="undefined"){
        return NextResponse.json({"message":"No file found",success:false})
    }
    const bytedata = await file.arrayBuffer();
    const buffer = Buffer.from(bytedata);
    const path = `./images/${file.name}`
    await writeFile(path, buffer)
    return NextResponse.json({"message":"File Uploaded Successfully", result:true})
}

// import {writeFile} from 'fs/promises'
// import { NextResponse } from "next/server";

// export async function POST(res){
//     const data = await res.formData();
//     const file = data.get('file');
//     if(!file){
//         return NextResponse.json({"message":"No File Found", success:false})
//     }
//     const bytedata = await file.arrayBuffer();
//     const buffer = Buffer.from(bytedata);
//     const path = `./images/${file.name}`
//     await writeFile(path,buffer);
//     return NextResponse.json({"message":"File Uploaded Successfully",success:true})
// }