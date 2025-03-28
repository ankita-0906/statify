import { redirect } from "next/navigation"
// import "./globals.css"
import "../styles/globals.css"
export default function Home() {
  // Redirect to login page
 redirect("/login")

  // This part won't be executed due to the redirect
  return null;
}

