import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

interface SocialObject {
  Name: string;
  ImageSource: StaticImageData;
}

import Logo from "../../../images/logo-white.svg";
import FacebookIcon from "../../../images/icon-facebook.svg";
import YoutubeIcon from "../../../images/icon-youtube.svg";
import TwitterIcon from "../../../images/icon-twitter.svg";
import PinterestIcon from "../../../images/icon-pinterest.svg";
import InstagramIcon from "../../../images/icon-instagram.svg";

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

export default function Footer() {
  return (
    <footer className="bg-dark-blue py-10 grid gap-y-8 justify-items-center md:flex md:justify-around">
      <div className="grid place-content-center gap-16">
        <Image className="object-contain" src={Logo} alt="Easybank" />

        <ul className="list-none flex gap-x-4 justify-center">
          {SocialMedia.map((index) => {
            return (
              <li key={uuidv4()}>
                <Image className="hover:cursor-pointer" src={index.ImageSource} alt={index.Name} />
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
