import logo from "../assets/Group 35.png";

const Navber = () => {
  const navItems = [
    { link: "Hotels", path: "Hotels" },
    { link: "Flights", path: "Flights" },
    { link: "Airport Transfer", path: "Airport Transfer" },
    { link: "Car Rental", path: "Car Rental" },
    { link: "Things to Do", path: "Things to Do" },
  ];
  return (
    <nav className="bg-orange-200 p-5 flex items-center mx-auto">
      <div className="container mx-auto flex items-center ">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        <ul className="ml-6 space-x-16 text-xl flex ps-8">
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <a href={path} className="hover:text-orange-200 hover:bg-orange-950 rounded-lg px-3 py-2">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex space-x-7 text-xl items-center">
          <a
            href="#"
            className="border-2 border-orange-950 border-solid px-3 rounded py-4 hover:bg-black hover:text-orange-200"
          >
            Login
          </a>
          <a
            href="#"
            className="border-2 border-black bg-black text-orange-200 border-solid px-3 rounded py-4 hover:bg-orange-200 hover:text-black"
          >
            Register
          </a>
        </div>       
      </div>
    </nav>

    
  );
};

export default Navber;
