import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <nav className="pt-10 container mx-auto">
                <Navbar></Navbar>
            </nav>
            <section className="my-24">
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;