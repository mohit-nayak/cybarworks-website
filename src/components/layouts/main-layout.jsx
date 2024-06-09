import React from "react";
import MainNavigation from "../common/main-navigation";

const MainLayout = ({ children }) => {
	return (
		<div>
			<MainNavigation />
			{children}
		</div>
	);
};

export default MainLayout;
