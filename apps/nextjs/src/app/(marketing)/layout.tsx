import React from "react"
import { Footer } from "../_components/footer";
import { Header } from "../_components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
   <Header />
   {children}
   <Footer />
   </>
}