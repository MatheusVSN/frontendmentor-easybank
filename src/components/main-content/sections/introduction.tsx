import Image from "next/image";

import Mockups from "../../../images/image-mockups.png"

export default function Introduction() {
  return (
    <>
      <section className="bg-very-light-gray">
        <div className="md:hidden mob-bg flex flex-col gap-y-8">
          <Image
            className="w-full h-full object-contain"
            src={Mockups}
            alt="Introduction"
          />

          <div className="flex flex-col gap-y-8 mt-16 mb-32 text-center items-center md:hidden">
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
        </div>

        <div className="flex flex-col max-md:hidden">
          <div className="max-md:hidden flex justify-between items-center w-full pl-16">
            <div className="w-6/12 flex flex-col gap-y-8 py-32">
              <h1 className="text-6xl text-dark-blue">
                Next generation digital banking
              </h1>
              <p className="text-grayish-blue text-2xl">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing and
                much more
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
      </section>
    </>
  );
}
