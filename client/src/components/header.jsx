import HamburgerMenu from "../assets/hamburgerMenu";
import ModeToggle from "./modeToggle";
import Login from "../assets/login";

function Header() {
  return (
    <header>
      <nav className="py-3">
        <ul className="flex items-center">
          <li className="ml-2 grow cursor-pointer">
            <HamburgerMenu />
          </li>
          <li className="mr-2">
            <ModeToggle />
          </li>
          <li className="mr-2 cursor-pointer">
            <Login />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
