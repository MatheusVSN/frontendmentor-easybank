import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface SocialObject {
  Name: string;
  ImageSource: (props: { fill: string }) => JSX.Element;
}

import Logo from "../../../images/logos/logo"
import FacebookIcon from "../../../images/logos/facebook";
import YoutubeIcon from "../../../images/logos/youtube";
import TwitterIcon from "../../../images/logos/twitter";
import PinterestIcon from "../../../images/logos/pinterest";
import InstagramIcon from  "../../../images/logos/instagram";

const SocialMedia: SocialObject[] = [
  { Name: "Facebook", ImageSource: FacebookIcon },
  { Name: "YouTube", ImageSource: YoutubeIcon },
  { Name: "Twitter", ImageSource: TwitterIcon },
  { Name: "Pinterest", ImageSource: PinterestIcon },
  { Name: "Instagram", ImageSource: InstagramIcon },
];

const FooterOptions: string[] = [
  "Abous Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Police",
];

function SocialMediaLink({ImageSource}: { ImageSource: any}) {
  const [currentColor, setCurrentColor] = useState("#FFF");

  function changeColor(HEX: string) {
    setCurrentColor(() => {
      return HEX;
    })
  }

  return <ImageSource fill={currentColor} onMouseEnter={() => changeColor("#31d35c")} onMouseLeave={() => changeColor("#FFF")}/>
}

export default function Footer() {
  return (
    <footer className="bg-dark-blue py-10 grid gap-y-8 justify-items-center md:flex md:justify-around">
      <div className="grid place-content-center gap-16">
        <Logo fill="#FFF" />

        <ul className="list-none flex gap-x-4 justify-center">
          {SocialMedia.map((index) => {
            return (
              <li className="hover:cursor-pointer" key={uuidv4()}>
                <SocialMediaLink ImageSource={index.ImageSource}/>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <ul className="list-none grid gap-y-4 place-content-center md:grid-cols-2 gap-x-16">
          {FooterOptions.map((index) => {
            return (
              <li
                key={uuidv4()}
                className="text-center text-white md:text-left transition hover:cursor-pointer hover:text-lime-green"
              >
                <a>{index}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid place-content-center gap-y-4 justify-items-center md:justify-items-end">
        <a className="bg-gradient-to-r from-lime-green to-bright-cyan rounded-full p-3 px-10 font-semibold text-white text-center transition hover:cursor-pointer hover:brightness-105">
          Request Invite
        </a>

        <p className="text-grayish-blue text-center">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}