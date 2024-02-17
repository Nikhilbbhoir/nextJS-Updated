import { connectionSRT } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(res, content){
    const productID = content.params.productid;
    const filter = {_id:productID};
    const payload = await res.json();
    // console.log(payload);
    if(!payload.name || !payload.color || !payload.company || !payload.category || !payload.price){
        return NextResponse.json({result:"Fields are empty",success:false})
    }
    await mongoose.connect(connectionSRT)
    const result= await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}

export async function GET(res, content){
    const productID = content.params.productid;
    const filter = {_id:productID}
    await mongoose.connect(connectionSRT);
    const result= await Product.findById(filter)
    return NextResponse.json({result,success:true})
}

export async function DELETE(res, content){
    const  productID = content.params.productid;
    const filter = {_id:productID};
    await mongoose.connect(connectionSRT)
    const result = await Product.deleteOne(filter)
    return NextResponse.json({result,success:true})
}