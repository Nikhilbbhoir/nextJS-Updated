import { NextResponse } from "next/server";

export  function GET(request,content){
    const studentDetails = content.params.student;
    return NextResponse.json({result:studentDetails},{status:200})

}