import Introduction from "./sections/introduction";
import WhyUs from "./sections/why-us";
import LatestArticles from "./sections/latest-articles";

export default function MainComponent() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Introduction />
        <WhyUs />
        <LatestArticles />
      </main>
    </>
  );
}
