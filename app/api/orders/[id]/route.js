import { connectedtoDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";


export async function DELETE(req,{params}){
    try{
            await  connectedtoDB();
             let {id}= await params;
            const order = await Order.findById(id);
            if(!order){
                return NextResponse.json({status:404})
            }
             await order.deleteOne();
            return NextResponse.json({status:200})

    }catch(err){
        return NextResponse.json({status:500})
    }
}