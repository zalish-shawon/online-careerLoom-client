import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../../public/Careerloom-logo.png"
import toast, { Toaster } from "react-hot-toast";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
      .then(res => {

        toast.success('Successfully logged out!')
      })
      .catch(error => console.log(error.message))
  }


  const navItems =
    <>
      <NavLink to={'/'}><li className="font-semibold"><a>Home</a></li></NavLink>
      <NavLink to={'/alljobs'}><li className="font-semibold"><a>All Jobs</a></li></NavLink>
      <NavLink to={'/services'}><li className="font-semibold"><a>Services</a></li></NavLink>
      <NavLink to={'/blogs'}><li className="font-semibold"><a>Blogs</a></li></NavLink>
      {
        user && 
        <NavLink to={'/addJob'}><li className="font-semibold"><a>Add job</a></li></NavLink>
      }
      {
        user &&
        <NavLink to={'/postedJobs'}><li className="font-semibold"><a>My posted jobs</a></li></NavLink>

      }
      {
        user &&
        <NavLink to={'/mybids'}><li className="font-semibold"><a>My bid</a></li></NavLink>

      }
      {
        user &&
        <NavLink to={'/bidsRequest'}><li className="font-semibold"><a>Bid request</a></li></NavLink>

      }
    </>

  return (
    <div className=" bg-blue-100 sticky top-0 z-50">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
     
      <div className="navbar max-w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {navItems}

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-[200px]" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer flex items-center m-1 ml-3">
                <div className="avatar online">

                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>

                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <div className="pl-5">
                  <p>{user?.displayName}</p>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </div>
              </ul>
            </div>
              : <Link to={'/login'}><button className="btn bg-blue-700 hover:bg-blue-900 text-white">Login</button></Link>

          }
        </div>

      </div>
    </div>
  );
};

export default Navbar;