import { connectionSRT } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){
    let data =[];
    let success = true;
    try {
        await mongoose.connect(connectionSRT);
        data = await Product.find();
    } catch (error) {
        data = {result:"Error"}
        success = false;
    }
    return NextResponse.json({result:data,success})
}

export async function POST(rst){
    await mongoose.connect(connectionSRT);
    const payload = await rst.json();
    // const result = await product.save();
    if(!payload.name || !payload.color || !payload.company || !payload.category || !payload.price){
        return NextResponse.json({result:"Fields are empty",success:false})
    }
    let result = await Product(payload).save();
    // console.log(payload);
    return NextResponse.json({result,success:true})
}













