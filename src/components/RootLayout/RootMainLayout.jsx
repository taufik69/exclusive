import React from "react";
import Header from "./Header/Index";
import Navbar from "./Navbar/Index";
import Footer from "./Footer/Index";
import MobileTabs from "../../components/mobileTabs/MobileTabs";
import { Outlet } from "react-router-dom";
export const RootMainLayout = () => {
  return (
    <div className="relative">
      <Header />
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
      <div className="sticky w-full left-0 bottom-3 lg:hidden">
        <MobileTabs />
      </div>
    </div>
  );
};
