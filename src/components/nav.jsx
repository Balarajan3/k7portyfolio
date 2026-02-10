import { useState } from "react";
const Navbar = () => {
  const [isactivemenu, setisactivemenu] = useState('home');
  const [menulist, setmenulist] = useState(['home', 'about', 'process', 'portfolio', 'blog', 'services']);

  return (
    <header className="w-full absolute top-0 z-50">
      <nav className="w-full px-6 md:px-12 lg:px-[120px] py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-black">Brooklyn</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-black">
          {
            menulist.map((menu, i) => (
              <li
                key={i}
                className={`cursor-pointer capitalize hover:text-[#9929fb] transition-colors ${isactivemenu === menu ? "text-[#9929fb]" : ""}`}
                onClick={() => setisactivemenu(menu)}
              >
                {menu}
              </li>
            ))
          }
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-[#9929fb] text-white px-7 py-3 rounded font-medium hover:bg-purple-700 transition shadow-lg shadow-purple-200">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
