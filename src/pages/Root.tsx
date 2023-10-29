import {Outlet} from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
const RootLayout = () => {
    return <>
        <MainNavigation />
        <Outlet></Outlet>
    </>
}

export default RootLayout;