import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewsPaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex space-x-6">
        <HeaderOption title="All" Icon={SearchIcon} selected />
        <HeaderOption title="Images" Icon={PhotographIcon} />
        <HeaderOption title="Videos" Icon={PlayIcon} />
        <HeaderOption title="Map" Icon={MapIcon} />
        <HeaderOption title="More" Icon={DotsVerticalIcon} />
      </div>

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
