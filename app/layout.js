import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Sidebar1 from "@/components/Sidebar1";
export default async function RootLayout({ children }) {
 let session= await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
     {session?.user.isAdmin ?  <Sidebar /> :<Sidebar1/>} 
        <main> {children}</main>
      </body>
    </html>
  );
}
