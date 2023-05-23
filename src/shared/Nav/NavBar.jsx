import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
const NavBar = () => {


  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>

            <li>
              <Link to="/all-toys" className="">
                All Toys
              </Link>
            </li>

            <li>
              <Link to="/my-toys" className="">
                My Toys
              </Link>
            </li>

            <li>
              <Link to="/add-a-toy" className="">
                Add A Toy
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="">
                Blogs
              </Link>
            </li>
            <div className="">
              <FaUserCircle className=" ml-4 w-10 h-10 rounded-full"></FaUserCircle>
            </div>
          </ul>
        </div>
        <img
          src="https://i.pinimg.com/originals/b4/6f/79/b46f79268ff1721cadcd7ddbcd71291d.jpg"
          alt="logo"
          className="object-cover w-10 h-10 rounded-full"
        />
        <Link className="btn btn-ghost normal-case text-xl md:text-3xl lg:text-4xl font-[500] md:font-[700] lg:font-[700]">
          GermGear
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>

          <li>
            <Link to="/all-toys" className="">
              All Toys
            </Link>
          </li>

          <li>
            <Link to="/my-toys" className="">
              My Toys
            </Link>
          </li>

          <li>
            <Link to="/add-a-toy" className="">
              Add A Toy
            </Link>
          </li>

          <li>
            <Link to="/blogs" className="">
              Blogs
            </Link>
          </li>
          <div className="">
            <FaUserCircle className=" ml-4 w-10 h-10 rounded-full"></FaUserCircle>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-success">
          log in
        </Link>
      </div>
    </div>
  );
};

export default NavBar;


