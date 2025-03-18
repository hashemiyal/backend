import { NextResponse } from "next/server";
import { connectedtoDB } from "../../../lib/mongodb";
import Order from "../../../models/Order";

export async function GET (req){
    try{

       await connectedtoDB()

       let orders=await Order.find({})

       return NextResponse.json(orders,{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}