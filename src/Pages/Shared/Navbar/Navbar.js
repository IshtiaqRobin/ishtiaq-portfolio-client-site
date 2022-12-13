import { Link } from "react-router-dom";

const Navbar = () => {

    const menuItems = <>
        <li className='font-semibold text-white hover:bg-[#ff0080] rounded-md'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-white hover:bg-[#ff0080] rounded-md'><Link to='/about'>About</Link></li>
        <li className='font-semibold text-white hover:bg-[#ff0080] rounded-md'><Link to='/projects'>Projects</Link></li>
        <li className='font-semibold text-white hover:bg-[#ff0080] rounded-md'><a href='#skills'>Skills</a></li>
        <li className='font-semibold text-white hover:bg-[#ff0080] rounded-md'><Link to='blog'>Blog</Link></li>
        <li className='font-semibold text-white hover:bg-[#ff0080] rounded-md'><a href='#contact'>Contact Me</a></li>
    </>

    return (
        <div className="navbar bg-black bg-opacity-80 shadow-lg bg-transparent border rounded-lg border-[#FF0080] w-full lg:mt-8 mt-5 header">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-5 p-1 shadow bg-black bg-opacity-80 rounded-box w-48">
                        {menuItems}
                    </ul>
                </div>
                <h2><Link to="/" className="font-semibold text-white text-4xl italianno_fonts">Ishtiaq  <span className="text-[#FF0080]">Robin</span></Link></h2>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


