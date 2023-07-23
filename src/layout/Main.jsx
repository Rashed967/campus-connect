import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home/Home";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
                     
        </div>
    );
};

export default Main;