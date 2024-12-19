

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Header Section */}
      <div className="w-[1280px] h-[80px] mx-auto bg-header flex"></div>

      {/* Main Content Section */}
      <div className="w-[1280px] mx-auto flex mt-[100px]">
        {/* Left Content */}
        <div className="w-1/2 px-[68px]">
          <h1 className="text-[44px] font-bold mb-[40px]">
            Welcome To Our Website
          </h1>
          <p className="text-[32px] font-normal mb-[40px] text-[#4C4C4C]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quae
            pariatur ratione, quis magnam debitis unde qui quisquam laborum. Id
            aut doloribus velit neque recusandae amet pariatur sit corporis
            ipsam?
          </p>
          <button className="w-[237px] h-[66px] text-[28px] font-normal text-white bg-[#121212] hover:bg-[#000000] transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/img1.png"
            alt="IMAGE"
            width={502}
            height={465}
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
}
