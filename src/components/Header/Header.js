import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <nav className="m-6">
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/"}>
        Home
      </Link>
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/"}>
        Products
      </Link>
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/"}>
        Orders
      </Link>
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/register"}>
        Register
      </Link>
      <span>{user?.displayName && user.displayName} </span>
      {user?.uid ? (
        <button onClick={handleSignOut} className="font-bold border border-emerald-500 rounded-lg font-bold px-4 py-2 hover:bg-green-500 hover:text-white">
          Log Out
        </button>
      ) : (
        <Link className="mr-3 font-bold hover:text-orange-400" to={"/login"}>
          Log in
        </Link>
      )}
    </nav>
  );
};

export default Header;
