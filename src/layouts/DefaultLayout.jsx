import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import './DefaultLayout.css'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <Link to='/' className="home-link"><h1>CINEBOOL01</h1></Link>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout