"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-950 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <div className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Admin Panel
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
              >
                Dashboard
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Posted Blogs
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Create Blog
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <button
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Log Out
            </button>
            <div className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
              You are Signed In as {session?.user?.name}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
