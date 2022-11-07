import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu({ setOpen, open }) {
  const handleChangePage = (e) => {
    setOpen(
      (prev) =>
        (prev = {
          page: e.target.innerText,
          menuOpen: false,
        })
    );
  };
  return (
    <div className="menu">
      {open.menuOpen ? (
        <RiCloseFill
          onClick={() =>
            setOpen((prev) => (prev = { ...prev, menuOpen: false }))
          }
        />
      ) : (
        <GiHamburgerMenu
          onClick={() =>
            setOpen((prev) => (prev = { ...prev, menuOpen: true }))
          }
        />
      )}
      <div className={`menuName ${open.menuOpen && "hidden"}`}>{open.page}</div>
      <ul className={`pagelist ${!open.menuOpen && "hidden"}`}>
        <li>
          <Link onClick={handleChangePage} to="home">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleChangePage} to="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={handleChangePage} to="history">
            History
          </Link>
        </li>
        <li>
          <Link onClick={handleChangePage} to="contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}
