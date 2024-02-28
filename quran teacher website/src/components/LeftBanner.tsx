import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaYoutube,
  FaQuran,
  FaWhatsapp,
  FaMosque,
  FaKaaba,
  FaPray,
} from "react-icons/fa";

import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Quran Teacher", "Tajweed Teacher", "UI Designer."],
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
          I teach the Noorani Qaida Course, Quran Reading Course, Quran
          Recitation, Tajweed Course, Hifz (Quran Memorization) program, 40
          Duas, 40 Hadith, and Basic Islamic Teachings.
          
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
              href="https://api.whatsapp.com/send?phone=+923026009873"
              target="_blank"
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
              <FaMosque />
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
