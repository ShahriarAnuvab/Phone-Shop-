import { Link, NavLink } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-xl rounded-3xl ">
        <div className="container mx-auto my-5">
      <div className="flex flex-col md:flex-row items-center justify-between p-5">
        <div>
       <Link> <h1 className="text-2xl font-bold">Phones</h1> </Link>
        </div>
        <div className="text-lg font-bold flex flex-row  items-center gap-5 mt-5 md:mt-0">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
          <NavLink to="/login"> Login</NavLink>
        </div>
      </div>
    </div>
    </nav>
  )
};

export default Navbar;
