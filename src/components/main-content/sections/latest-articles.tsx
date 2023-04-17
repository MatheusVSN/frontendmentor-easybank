import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

import CurrencyImage from "../../../images/image-currency.jpg";
import RestaurantImage from "../../../images/image-restaurant.jpg";
import PlaneImage from "../../../images/image-plane.jpg";
import ConfettiImage from "../../../images/image-confetti.jpg";

interface ArticleInformation {
  ImageSource: StaticImageData;
  Writer: string;
  Title: string;
  Description: string;
}

const Articles: ArticleInformation[] = [
  {
    ImageSource: CurrencyImage,
    Writer: "Claire Robinson",
    Title: "Receive money in any currency with no fees",
    Description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    ImageSource: RestaurantImage,
    Writer: "Wilson Hutton",
    Title: "Treat yourself without worrying about money",
    Description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    ImageSource: PlaneImage,
    Writer: "Wilson Hutton",
    Title: "Take your Easybank card wherever you go",
    Description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    ImageSource: ConfettiImage,
    Writer: "Claire Robinson",
    Title: "Our invite-only Beta accounts are now live!",
    Description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

function GenerateTopic({
  ImageSource,
  Writer,
  Title,
  Description,
}: ArticleInformation) {
  return (
    <div className="grid place-content-center max-w-md">
      <Image
        className="rounded-t-lg h-96 object-cover"
        src={ImageSource}
        alt={Title}
      />
      <div className="rounded-b-lg bg-white p-8 h-[350px] max-lg:h-full max-[1272px]:h-[500px]">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-grayish-blue">By {Writer}</p>
          <p className="text-2xl text-dark-blue transition hover:cursor-pointer hover:text-lime-green">
            {Title}
          </p>
          <p className="text-grayish-blue text-lg">{Description}</p>
        </div>
      </div>
    </div>
  );
}

export default function LatestArticles() {
  return (
    <section>
      <div className="grid justify-items-center py-32 bg-very-light-gray gap-y-16">
        <p className="text-5xl text-dark-blue max-w-md text-center lg:pl-16 lg:justify-self-start">
          Latest Articles
        </p>

        <ul className="list-none grid gap-y-8 lg:flex gap-4 px-16 max-[845px]:px-8">
          {Articles.map((index: ArticleInformation) => {
            return (
              <li key={uuidv4()}>
                <GenerateTopic {...index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
