
import {  FaQuran, FaMosque, FaPray, FaPrayingHands, FaKaaba } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Courses" des="What I Teach" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Noorani Qaida Course"
            des="Embark on a transformative journey of Quranic fundamentals with our Noorani Qaida Course, laying the foundation for proficient Quranic recitation and understanding."
            icon={<FaQuran />}
          />
          <Card
            title="Quran Reading & Recitation Course"
            des="Discover the art and beauty of Quranic recitation through our comprehensive Quran Reading & Recitation Course, designed to enrich your understanding and mastery of the sacred text."
            icon={<FaKaaba />}
          />
          <Card
            title="Tajweed Course"
            des="Unlock the beauty and precision of Quranic recitation with our Tajweed Course, where students master the intricate rules and melodies of Tajweed to recite the Quran with clarity and reverence."
            icon={<SiProgress />}
          />
          <Card
            title="Quran Hifz (Memorization)"
            des="Join our Quran Hifz (Memorization) Course, where dedication meets divine guidance, empowering students to memorize and cherish the timeless verses of the Quran, enriching hearts and minds with the beauty of sacred knowledge."
            icon={<FaMosque />}
          />
          <Card
            title="Duas | Salah - Prayer"
            des="Elevate your Salah (Prayer) with our Duas Course, where we delve into the spiritual depths of supplications, enriching your prayer experience and fostering a closer connection with the Divine."
            icon={<FaPray />}
          />
          <Card
            title="40 Duas + Ayat-ul-Kursi & Dua Qunoot
            - Salah (Prayer), Janazah, Wuzoo "
            des="Discover the soul-nourishing power of 40 Duas, Ayat-ul-Kursi, and Dua Qunoot, alongside comprehensive guidance on Salah (Prayer), Janazah, and Wuzoo (Ablution). Enrich your spiritual journey with profound supplications and rituals, elevating your connection with Allah."
            icon={<FaPrayingHands />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
