import { connectedtoDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";
export async function DELETE(req,{params}){
    try{
            await  connectedtoDB();
             let {id}= await params;
            const deleteableproduct = await Product.findById(id);
            if(!deleteableproduct){
                return NextResponse.json({status:404})
            }
             await deleteableproduct.deleteOne();
            return NextResponse.json({status:200})

    }catch(err){
        return NextResponse.json({status:500})
    }
}

export async function GET(req,{params}){
    try{
            await  connectedtoDB();
             let {id}= await params;
            const editableproduct = await Product.findById(id);
            if(!editableproduct){
                return NextResponse.json({status:404})
            }
             
            return NextResponse.json(editableproduct,{status:200})

    }catch(err){
        return NextResponse.json({status:500})
    }
}
export async function PUT(req,{params}){
    try{
            await  connectedtoDB();
             let {id}= await params;
             let editedproduct=await req.json()
            const editableproduct = await Product.findById(id);
            if(!editableproduct){
                return NextResponse.json({status:404})
            }
            Object.assign(editableproduct,editedproduct);
            editableproduct.save()
            return NextResponse.json({"message":"product updated!"},{status:200})

    }catch(err){
        return NextResponse.json({status:500})
    }
}