import React from 'react'
import { Header, Footer, Sidebar, About, Info, Rooms, Customers } from "@/components";

const MainLayout: React.FC = () => {
  return (
    <>
          <Sidebar />
          <Header />
          <About />
          <Info />
          <Rooms />
          <Customers />
          <Footer />
    </>
  )
}

export default MainLayout;
