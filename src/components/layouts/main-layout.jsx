import React from "react";
import MainNavigation from "../common/main-navigation";
import Footer from "../common/footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
