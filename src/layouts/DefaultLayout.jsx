import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import './DefaultLayout.css'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <Link to='/' className="home-link"><h1>SITE LOGO/NAME</h1></Link>
            </header>

            <h1>Lista dei Film</h1>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}

export default DefaultLayout