
import { Outlet, useNavigate } from "react-router-dom";
import { menuItems } from "../services/constant";
import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/welcome");
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute left-2 top-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </label>
        {/* Page content here */}
        <div className="h-screen w-full mt-20">
          <Outlet></Outlet>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-white pt-20">
          {menuItems?.map((m: any) => (
            <li key={m?.link} className="py-2">
              <Link to={m.link}>{m.title}</Link>
            </li>
          ))}
          <li
            onClick={handleLogout}
            className="py-2 flex items-center justify-center"
          >
            <span className="bg-primary shadow-md mt-2 py-2 px-4 text-black">
              Log out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
