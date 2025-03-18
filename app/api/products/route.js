import { NextResponse } from "next/server";
import { connectedtoDB } from "../../../lib/mongodb";
import Product from "../../../models/Product";

export async function GET (req){
    try{

       await connectedtoDB()

       let products=await Product.find({})

       return NextResponse.json(products,{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}


export async function POST (req){
    try{

       await connectedtoDB()
       let product= await req.json();
       const newProduct = new Product(product)
        await newProduct.save()
       return NextResponse.json({"message":"product added successfully!"},{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}