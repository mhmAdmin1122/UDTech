import Image from "next/image";
import heroMain from "@/public/img/heropicmain.png";
import playstore from "@/public/img/playstore.svg";
import bannerPic from "@/public/img/freepik.png";

const Herobaner = () => {
  return (
    <div className="herro-banner-box px-20 pt-0 pb-14 flex flex-wrap justify-center items-center gap-6 w-full">
      <div className="text-areas w-[50%] relative z-20">
        <div className="animatedLine">
          <h2 className="text-4xl font-bold mb-1">
            Let{"'"}s start To Improve
          </h2>
          <div className="flex flex-wrap gap-2 items-center">
            <h2 className="text-4xl font-bold">your</h2>
            <ul className="dynamic-text text-4xl font-bold text-[#5b5dce]">
              <li>
                {" "}
                <span>Skills</span>{" "}
              </li>
              <li>
                {" "}
                <span>Certifications</span>{" "}
              </li>
              <li>
                {" "}
                <span>Online Business</span>{" "}
              </li>
              <li>
                {" "}
                <span>Social Media Markiting</span>{" "}
              </li>
            </ul>
          </div>
        </div>
        <br />
        <p>
          Welcome to the future of connection! Our online platform is your
          gateway to seamless, meaningful conversations. Join us in a world
          where distance disappears, and online work thrives. We try our best to
          improve your skills through our courses.
        </p>
        <br />
        <div className="flex flex-wrap btn-banner-unleash gap-4 items-center pl-[90px]">
          <button className="btn-custom hover:shadow-lg hover:shadow-gray-400">
            Unleash More
          </button>
          <Image src={playstore} alt="play-store" className="cursor-pointer play-store-img" />
        </div>
      </div>

      <div className="heroPic w-[44%]">
        <Image
          src={heroMain}
          alt="hero-main-pic"
          className="hero-main-pic relative z-30 bg-[#f3f4f6] px-[12px] py-[12px]"
        />
      </div>
      <Image
        src={bannerPic}
        alt="banner-pic-1"
        className="banner-pic-1 absolute w-[80px] left-[100px] bottom-[151px]"
      />
    </div>
  );
};

export default Herobaner;
