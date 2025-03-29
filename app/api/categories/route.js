import { connectedtoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Category from "@/models/Category";

export async function POST (req){
    try{

       await connectedtoDB()
       let cat= await req.json();
       const newcategory = new Category(cat)
        await newcategory.save()
       return NextResponse.json({"message":"category added successfully!"},{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}

export async function GET (req){
    try{

       await connectedtoDB()

       let categories=await Category.find({})

       return NextResponse.json(categories,{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}