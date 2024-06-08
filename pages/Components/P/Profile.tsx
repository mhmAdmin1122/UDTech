import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineSettings, MdVerified } from "react-icons/md";

const Profile = () => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow((current) => !current);
  };
  const { data: session } = useSession<any>();
  if (session) {
    return (
      <>
        <Link href="/profile" className="flex items-center justify-center relative">
          <FaUserCircle
            className="cursor-pointer text-4xl hover:text-[#00b5d8]"
            onClick={handleShow}
          />
          {/* {isShow && (
            <div className="bg-[#00c7e2]">
              <Link
                href="/setting"
                className="font-bold text-lg text-[#545454] select-none hover:text-[var(--ourorangeColor)]"
              >
                {session?.user?.name}
              </Link>
            </div>
          )} */}
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href="/login" className="btn-custom">
        Login
      </Link>
    </>
  );
};

export default Profile;
