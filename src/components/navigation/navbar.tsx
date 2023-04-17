import Image from "next/image";
import { useState } from "react";

import LogoIcon from "../../images/logo.svg";
import CloseIcon from "../../images/icon-close.svg";
import MoreIcon from "../../images/icon-hamburger.svg";

const Options = ["Home", "About", "Contact", "Blog", "Careers"];

function MobileNavigationOptions({ Visible }: { Visible: boolean }) {
  return (
    <div
      className={`fixed flex transition-all justify-center w-screen h-screen bg-black bg-opacity-20 md:hidden z-[2] ${
        Visible ? "opacity-100" : "opacity-0 top-[-999px]"
      }`}
    >
      <ul
        className={`list-none self-start flex flex-col rounded-lg bg-white w-[90vw] transition-all relative z-10 ${
          Visible ? "top-20" : "top-[-999px]"
        } `}
      >
        {Options.map((index: string) => {
          return (
            <li className="text-center text-dark-blue p-4">
              <a className="w-full">{index}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DesktopNavigationOptions() {
  const [elementHovering, setElementHovering] = useState("");

  function setHoveringElement(elementId: string) {
    setElementHovering((previousValue) => {
      return elementId;
    });
  }

  function removeHoveringElement() {
    setElementHovering((previousValue) => {
      return "";
    });
  }

  return (
    <>
      <div className="max-md:hidden h-full box-border">
        <ul className="list-none flex h-full">
          {Options.map((index: string) => {
            return (
              <li
                onMouseEnter={() => setHoveringElement(index)}
                onMouseLeave={() => removeHoveringElement()}
                key={index}
                className="text-center text-grayish-blue self-center h-full transition hover:cursor-pointer hover:text-dark-blue hover:font-semibold"
              >
                <div className="px-4 h-full flex flex-col items-center">
                  <a className="h-full flex items-center">{index}</a>
                </div>
                <div
                  className={`${
                    elementHovering === index &&
                    "bg-gradient-to-r from-lime-green to-bright-cyan rounded-full"
                  } transition w-full h-[5%]`}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>

      <a className="max-md:hidden self-center bg-gradient-to-r from-lime-green to-bright-cyan rounded-full p-3 px-6 font-semibold text-white text-xs transition hover:cursor-pointer hover:brightness-105">
        Request Invite
      </a>
    </>
  );
}

export default function NavigationBar() {
  const [activeNav, setActiveNav] = useState(false);

  function changeMobileNavitagionState(state: boolean) {
    setActiveNav(() => {
      return state;
    });
  }

  return (
    <nav className="flex flex-col fixed top-0 left-0 w-screen z-[1]">
      <div className="flex justify-between bg-white px-12 h-[60px] z-[3]">
        <Image className="object-contain" src={LogoIcon} alt="Easybank" />
        <div className="ml-auto md:hidden self-center">
          {activeNav ? (
            <Image
              src={CloseIcon}
              alt="Close"
              onClick={() => changeMobileNavitagionState(false)}
            />
          ) : (
            <Image
              src={MoreIcon}
              alt="More options"
              onClick={() => changeMobileNavitagionState(true)}
            />
          )}
        </div>

        <DesktopNavigationOptions />
      </div>

      <MobileNavigationOptions Visible={activeNav} />
    </nav>
  );
}
