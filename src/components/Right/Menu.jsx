import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu({ setOpen, open, page }) {
  const handleChangePage = () => {
    setOpen(false);
  };
  return (
    <div className="menu">
      {open ? (
        <RiCloseFill onClick={() => setOpen(false)} />
      ) : (
        <GiHamburgerMenu onClick={() => setOpen(true)} />
      )}
      <div className={`menuName ${open && "hidden"}`}>{page.toUpperCase()}</div>
      <ul className={`pagelist ${!open && "hidden"}`}>
        <li>
          <Link onClick={handleChangePage} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleChangePage} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={handleChangePage} to="/history">
            History
          </Link>
        </li>
        <li>
          <Link onClick={handleChangePage} to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}
