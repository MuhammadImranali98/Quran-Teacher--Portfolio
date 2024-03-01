import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Uzair</h3>
        <p className="text-lg font-normal text-gray-400">Islamic Scholar</p>
        <p className="text-base text-gray-400 tracking-wide">
          Dedicated Quran teacher with a passion for nurturing spiritual growth.
          Experienced educator proficient in FSC Physics, Chemistry, and Math,
          fostering academic excellence with personalized guidance
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+923105892711</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mu242699@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/channel/UC22nXW2M7wTVnpw5yqZh8bQ"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+923105892711"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
          <a
            href="https://www.facebook.com/share/WmCPQTUgKR73FSRX/?mibextid=qi2Omg"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
