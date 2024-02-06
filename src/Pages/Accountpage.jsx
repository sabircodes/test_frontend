import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Clothes from "./Clothes";
import Myclothes from "../components/Myclothes";

const Accountpage = () => {
  const navigate = useNavigate();
  const { ready, user, SetUser } = useContext(UserContext);

  var { subpage } = useParams();
  console.log(subpage);
  if (subpage === undefined) {
    subpage = "profile";
  }
  // adding custon css for the buttons
  function linkclass(type = null) {
    let classes = "px-4 py-2 flex gap-1 bg-gray-100 rounded-full text-black";
    if (type === subpage) {
      classes = "px-4 py-2 flex gap-1 border rounded-full bg-primary text-white";
    }
    return classes;
  }
  // simple logout logic
  async function logout() {
    const response = await axios.post("/logout");
    if (response.status === 200) {
      alert("Logout suucesfull");
      SetUser(null);
      navigate("/");
    } else {
      alert("problem occured please check the console");
    }
  }

  // usercontext will tell us if ready then go ahead else , give loading here
  if (!ready) {
    return "Loadin...";
  }
  // this helps with the part where if u are not logged in a and u click on the account icon then i=u will go to login page
  if (ready && !user) {
    navigate("/login");
  }
  return (
    <div>
      <nav className="flex w-full mt-8 justify-center gap-4">
        <Link className={linkclass("profile")} to={"/account"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          My Profile
        </Link>
       
        <Link className={linkclass("places")} to={"/account/places"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          Add Articles
        </Link>
      </nav>
      {/* profile part */}
      {subpage === "profile" && (
        <div className=" flex flex-col gap-2 max-w-lg mx-auto text-center border p-10 mt-10 rounded-md shadow-md shadow-gray-300">
          <div className="flex justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-20 h-20 "
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div>Hey {user.name}</div>
          <div>Email : {user.email}</div>
          <button
            onClick={logout}
            className="bg-primary rounded-full max-w-sm mx-auto px-4 py-1 mt-5 text-white"
          >
            Logout
          </button>
        </div>
        
      )}
      {/* accomodation or places part */}
      {subpage === "places" && <Clothes />}
    </div>
  );
};

export default Accountpage;
