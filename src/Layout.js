import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (<>
        <div className="row">
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FacultyData">Display All Faculty</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FacultyData/add">Add Faculty</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
        <div className="row">
            <Outlet />
        </div>
        <div className="row">
            <div className="bg-primary d-flex justify-content-center"
                style={{color:"yellow"}}>
                    <h1>Footer</h1>
            </div>
        </div>
    </>);
}