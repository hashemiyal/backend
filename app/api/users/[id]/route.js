import { NextResponse } from "next/server";
import User from "../../../../models/User";
import { connectedtoDB } from "@/lib/mongodb";


export async function PUT (req,{params}){
   let{id}=await params;
   let {role} = await req.json();
    try{
      await connectedtoDB()
      let user = await User.findOne({_id:id});
       if(!user){
        return NextResponse.json({status:404})
    }
     let editedduser = {_id:id,username:user.username,email:user.email,password:user.password,isAdmin:JSON.parse(role),createdAt:user.createdAt,updatedAt:Date.now()};
      Object.assign(user,editedduser);
       user.save();

    return NextResponse.json({message:"Role Updated"},{status:200});
    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}

export async function DELETE (req,{params}){
    let{id}=await params;
     try{
       await connectedtoDB()
       let user = await User.findOne({_id:id});
        if(!user){
         return NextResponse.json({status:404})
     }
     await user.deleteOne();
     return NextResponse.json({message:"User Deleted!"},{status:200});
     }catch(err){
         return NextResponse.json(err,{status:500});
     }
 }