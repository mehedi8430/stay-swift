'use client';

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SocialLogins = ({ mode }) => {
  const handleAuth = (provider) => {
    signIn(provider, {
      callbackUrl: 'http://localhost:3000/bookings'
    });
  }

  return (
    <>
      <div className="text-center text-xs text-gray-500">
        {
          mode === "register" ? (
            <Link className="underline text-orange-400" href="/login">Login</Link>
          ) : (
            <Link className="underline text-orange-400" href="/register">Register</Link>
          )
        } or Signup with
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleAuth("facebook")}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image
            src="/fb.png"
            alt="facebook"
            width={40}
            height={40}
          />
          <span>Facebook</span>
        </button>

        <button
          onClick={() => handleAuth("google")}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image
            src="/google.png"
            alt="google"
            width={40}
            height={40}
          />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
