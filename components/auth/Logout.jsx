'use client';

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: "http://localhost:3000/login" })
      }}
      className="px-2 py-1 bg-orange-600 rounded-md text-white"
    >
      Sign Out
    </button>
  )
}

export default Logout