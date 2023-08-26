import HomeCard from "./Card";
import HomeLeftBar from "./Leftbar";
import HomeRightbar from "./Rightbar";

const Home = () => {
  return (
    <div className="container mx-auto px-4 lg:flex lg:flex-row justify-between lg:max-w-full gap-x-4">
      <div className="hidden lg:block lg:flex-grow-[1]">
        <HomeLeftBar />
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-grow-[3]">
        <HomeCard />
        <HomeCard />
      </div>
      <div className="hidden lg:block lg:flex-grow-[2.5]">
        <HomeRightbar />
      </div>
    </div>
  );
};

export default Home;
