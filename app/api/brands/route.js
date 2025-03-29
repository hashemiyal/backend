import { connectedtoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Brand from "@/models/Brand";

export async function POST (req){
    try{

       await connectedtoDB()
       let brand= await req.json();
       const newbrand = new Brand(brand)
        await newbrand.save()
       return NextResponse.json({"message":"brand added successfully!"},{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}


export async function GET (req){
    try{

       await connectedtoDB()

       let brands=await Brand.find({})

       return NextResponse.json(brands,{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}