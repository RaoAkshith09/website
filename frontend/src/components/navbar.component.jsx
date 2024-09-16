import { Link } from "react-router-dom";
import logo from "../imgs/btlogo.png"
const Navbar = () =>{
    return (
        <nav className="navbar">
           <Link to='/'className="flex-none w-40">
           <img src={logo} className="w-full"/>
           </Link>
           <div className="absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw]
           md:border-0 md:block md:relative md:insert-0 md:p-0 md:auto">
            <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto bg-grey p-4 pl-6 pr[12%] md:pr-6 rounded-full placeholder: text-dark-grey md:pl-20"
            />
                <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-10 top-1/2 -translate-y-1/2
                text-2xl text-dark-grey"></i>
           </div>

        </nav>
        
    );
}
export default Navbar; 