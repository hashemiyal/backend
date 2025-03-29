import User from "../../../models/User";
import { NextResponse } from "next/server";
import { connectedtoDB } from "@/lib/mongodb";
import { createConnection } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function GET (req){
    try{

       await connectedtoDB()

       // let db=await createConnection();  connecting to mysqldb
      
       // let [users]=await  db.query("select*from users"); reading data from mysql db
        let users=await User.find({})
       return NextResponse.json(users,{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}

export async function POST (req){
    try{

       await connectedtoDB()
       let user= await req.json();
       const newUser = new User({...user,password: await bcrypt.hash(user.password,10)})
        await newUser.save()
       return NextResponse.json({"message":"User added successfully!"},{status:200});

    }catch(err){
        return NextResponse.json(err,{status:500});
    }
}