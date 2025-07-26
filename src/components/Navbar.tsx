import { Link, useLocation } from "react-router-dom";
import useSearch from "../contexts/SearchContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false)
  const { query, setSearch } = useSearch();
  return (
    <nav className="w-screen bg-neutral-800  font-bold text-xl p-5 flex justify-between items-center relative ">
      <h1 className="text-yellow-400">LAYAR KACA SELIKUR</h1>
      { <Menu onClick={()=>setVisible(true)} className="text-yellow-400 lg:hidden " size={30}/>}
      <div className={`absolute  bg-neutral-600 z-100  ${visible? "top-0 right-0" : "top-0 -right-[100%]"} h-svw rounded-b-lg w-2/3 lg:w-fit lg:h-fit lg:p-0 lg:pr-10 lg:items-center lg:bg-transparent p-5 lg:static lg:flex gap-5 transition-all duration-1000`}>
        <div className="flex justify-end lg:hidden mb-4"><X onClick={()=> setVisible(false)} className="text-yellow-400 " size={32}/></div>
        {pathname === "/" && (
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="block  bg-white placeholder:text-black placeholder:text-sm placeholder:font-thin px-3 flex-none w-50 font-normal text-base text-black"
            placeholder="Search"
            value={query}
          />
        )}
        <Link
          to="/"
          className={`${pathname == "/" ? "text-yellow-400" : "text-white"} block mt-4 lg:m-0`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            pathname == "/about" ? "text-yellow-400" : "text-white"
          } block mt-4 lg:m-0`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
