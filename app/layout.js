import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function RootLayout({ children }) {
 let session= await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
     {session?.user.isAdmin && <Sidebar />} 
        <main> {children}</main>
      </body>
    </html>
  );
}
