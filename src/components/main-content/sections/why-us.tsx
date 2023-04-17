import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

import OnlineIcon from "../../../images/icon-online.svg";
import BudgetingIcon from "../../../images/icon-budgeting.svg";
import OnboardingIcon from "../../../images/icon-onboarding.svg";
import APIIcon from "../../../images/icon-api.svg";

interface TopicObject {
  Name: string;
  Description: string;
  ImageSource: StaticImageData;
}

const Topics: TopicObject[] = [
  {
    Name: "Online Banking",
    Description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    ImageSource: OnlineIcon,
  },
  {
    Name: "Simple Budgeting",
    Description:
      "See exactly where your money goes each month. Receive notifications when you're close to your hinting limits.",
    ImageSource: BudgetingIcon,
  },
  {
    Name: "Fast Onboarding",
    Description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away",
    ImageSource: OnboardingIcon,
  },
  {
    Name: "Open API",
    Description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    ImageSource: APIIcon,
  },
];

function MobileTopicComponent({ Name, Description, ImageSource }: TopicObject) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image src={ImageSource} alt={Name} width={125} height={125} />
      <p className="text-dark-blue text-3xl">{Name}</p>
      <p className="text-grayish-blue max-w-md text-lg">{Description}</p>
    </div>
  );
}

function DesktopTopicComponent({
  Name,
  Description,
  ImageSource,
}: TopicObject) {
  return (
    <div className="flex flex-col gap-y-4">
      <Image src={ImageSource} alt={Name} width={125} height={125} />
      <p className="text-dark-blue text-2xl">{Name}</p>
      <p className="text-grayish-blue max-w-sm text-lg">{Description}</p>
    </div>
  );
}

export default function WhyUs() {
  return <section className="bg-light-grayish-blue">
    <div className="md:hidden flex flex-col gap-y-8">
        <div className="grid place-content-center text-center">
          <div className="max-w-lg">
            <div className="my-32 flex flex-col items-center">
              <p className="text-5xl text-dark-blue max-w-md">
                Why choose Easybank?
              </p>
              <p className="text-grayish-blue text-2xl my-8">
                We leverage Open banking to turn your bank account into your
                financial hub. Control your finances like never before
              </p>
              <div className= "flex flex-col gap-y-10">
                {Topics.map((index) => {
                  return <MobileTopicComponent key={uuidv4()} {...index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-md:hidden">
        <div className="px-16">
          <div className="my-32">
            <p className="text-5xl text-dark-blue max-w-md">
              Why choose Easybank?
            </p>
            <p className="text-grayish-blue text-2xl mb-8 max-w-4xl mt-8">
              We leverage Open banking to turn your bank account into your
              financial hub. Control your finances like never before
            </p>

            <div className="flex gap-x-10 justify-around">
              {Topics.map((index) => {
                return <DesktopTopicComponent key={uuidv4()} {...index} />;
              })}
            </div>
          </div>
        </div>
      </div>
  </section>;
}
