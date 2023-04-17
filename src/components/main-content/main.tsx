import Image, { StaticImageData } from "next/image";

import Mockups from "../../images/image-mockups.png";

import BudgetingIcon from "../../images/icon-budgeting.svg"

interface TopicObject {
    Name: string,
    Description: string,
    ImageSource: StaticImageData
}

function MobileTopicComponent({Name, Description, ImageSource}: TopicObject) {
    return (
        <div className="flex flex-col items-center">
            <Image src={ImageSource} alt={Name} />
            <p>{Name}</p>
            <p>{Description}</p>
        </div>
    )
}

export default function MainComponent() {
    const Topics = [
        {Name: "Online Banking", Description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.", ImageSource: BudgetingIcon}
    ]

  return (
    <main className="overflow-x-hidden">
      <div className="md:hidden mob-bg flex flex-col gap-y-8">
        <Image
          className="w-full h-full object-contain"
          src={Mockups}
          alt="Introduction"
        />

        <div className="flex flex-col gap-y-8 text-center items-center">
          <p className="text-5xl text-dark-blue max-w-md">
            Next generation digital banking
          </p>

          <p className="text-grayish-blue text-xl max-w-md">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more
          </p>

          <a className="self-center bg-gradient-to-r from-lime-green to-bright-cyan rounded-full p-4 px-14 font-semibold text-white transition hover:cursor-pointer hover:brightness-105">
            Request Invite
          </a>
        </div>

        <div className="grid place-content-center text-center bg-very-light-gray">
          <div className="flex flex-col items-center max-w-lg gap-y-10">
            <p className="text-5xl text-dark-blue max-w-md mt-32">
              Why choose Easybank?
            </p>
            <p className="text-grayish-blue text-2xl">
              We leverage Open banking to turn your bank account into your
              financial hub. Control your finances like never before
            </p>
            {Topics.map((index) => {
                return <MobileTopicComponent {...index} />
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="max-md:hidden flex justify-between items-center w-full pl-16 pl:ml-32 bg-very-light-gray">
          <div className="w-6/12 flex flex-col gap-y-8 py-32">
            <h1 className="text-6xl text-dark-blue">
              Next generation digital banking
            </h1>
            <p className="text-grayish-blue text-2xl">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing and much
              more
            </p>
            <a className="self-start bg-gradient-to-r from-lime-green to-bright-cyan rounded-full p-4 px-14 font-semibold text-white transition hover:cursor-pointer hover:brightness-105">
              Request Invite
            </a>
          </div>

          <div className="desk-bg h-screen w-6/12">
            <Image
              className="h-full object-contain ml-auto"
              src={Mockups}
              alt="Introduction"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
