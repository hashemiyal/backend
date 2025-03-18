
import { redirect } from "next/navigation";
import LoginFormComponent from "@/components/LoginFormComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export   default async function Home() {
  let session= await getServerSession(authOptions);
  if(session?.user?.isAdmin){
    redirect('/dashboard')
  }
  return (
    <LoginFormComponent/>
  )
}
