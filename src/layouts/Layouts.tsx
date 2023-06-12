import ExtraInformation from "@components/ExtraInformation";
import Navbar_Tech from "@components/Navbar_Tech";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function Layouts({ children }: Props) {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    isNavbar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isNavbar]);

  if (router.pathname != "/") {
    return (
      <div className="flex">
        <Navbar_Tech isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
        <main
          className={`relative w-full duration-200 pb-12 ${
            isNavbar && "translate-y-5 opacity-60"
          }`}
        >
          {/* <div
            className={`absolute top-0 left-0 w-full h-24 blur-[100px] -z-50 opacity-30 ${
              router.pathname.includes("html") ? "bg-orange-700" : "bg-blue-700"
            }`}
          />
          <div className="absolute inset-0 w-full bg-pattern -z-40" /> */}
          {children}
          <ExtraInformation />
        </main>
      </div>
    );
  } else {
    return <main>{children}</main>;
  }
}
