import { Link } from "react-router-dom";
import Header from "./Header";

const ErrorPage = () => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold text-center mb-10">No Page Found</h1>
            <Header></Header>
            <Link to={'/'} className="text-3xl font-bold flex justify-center mt-4 text-slate-500 text-center">Click Here To Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;