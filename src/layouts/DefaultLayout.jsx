import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <header>
                <Link to='/'>Site Logo/Name</Link>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}

export default DefaultLayout