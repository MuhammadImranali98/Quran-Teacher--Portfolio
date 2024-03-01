import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaYoutube,
  FaQuran,
  FaWhatsapp,
  FaKaaba,
  FaPray,
  FaBook,
} from "react-icons/fa";

import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Quran Teacher",
      "Tajweed Teacher",
      "Secondary & Advanced Education",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Assalamu Alaikum ! I'm{" "}
          <span className="text-designColor capitalize">Uzair</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          Master's-level staff committed to educational excellence. Our team
          blends deep subject expertise in Quranic studies and FSC Physics,
          Chemistry, and Math, ensuring comprehensive guidance for holistic
          student development.
        </p>
        <p className="hover:text-green-400">
          WhatsApp :{" "}
          <a
            href="https://api.whatsapp.com/send?phone=923105892711"
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-wider hover:text-green-400"
          >
            +923105892711
          </a>
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a
                  href="https://api.whatsapp.com/send?phone=923105892711"
                  target="_blank"
                  rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaWhatsapp />
              </span>
            </a>

            <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaQuran />
            </span>
            <span className="bannerIcon">
              <FaBook />
            </span>
            <span className="bannerIcon">
              <FaKaaba />
            </span>
            <span className="bannerIcon">
              <FaPray />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
