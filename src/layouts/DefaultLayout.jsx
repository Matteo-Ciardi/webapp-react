import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobal } from "../context/DefaultContext";

import Loader from "../components/loader/Loader";

import './DefaultLayout.css'

const DefaultLayout = () => {
    const { isLoading } = useGlobal();

    return (
        <>
            <header>
                <Link to='/' className="home-link"><h1>CINEBOOL01</h1></Link>
            </header>

            <main>
                <Outlet />
            </main>

            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout