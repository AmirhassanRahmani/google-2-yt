import Image from "next/Image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
  const searchInputRef = useRef();
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search/?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          src="https://iconape.com/wp-content/files/ur/370111/svg/google-logo-icon-png-svg.png"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex  flex-grow  px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhs8bBJv_C4SZbBfsgWGhEjIjg2uy1j0k0A&usqp=CAU"
          className="ml-auto"
        />
      </div>

      <HeaderOptions/>
    </header>
  );
}

export default Header;
