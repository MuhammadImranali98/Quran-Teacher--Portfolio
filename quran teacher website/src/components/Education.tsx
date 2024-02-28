import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS Mathematics "
            subTitle="University of Punjab (2016 - 2018)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Hifz"
            subTitle="Rahimia Dar ul Quran(2008 - 2010) / uzair "
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Dars Nazami "
            subTitle="Rahimia Dar ul Quran (2008 - 2016) / Uzair "
            result="5.00/5"
            des="Enriched by eight years of rigorous Dars Nazami training at Rahimia Dar ul Quran, coupled with Quranic memorization (Hifz), I bring a depth of knowledge and dedication to nurturing Quranic understanding and spiritual growth in my students."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Online Quran Tutor"
            subTitle="(2017 - Present)"
            result="USA / UK / etc"
            des="With seven years of online teaching experience spanning across the globe, I have had the privilege of sharing Quranic knowledge and fostering spiritual growth with students worldwide. Committed to excellence in online education, I aim to inspire and guide students on their Quranic journey."
          />
          <ResumeCard
            title="Conventional school subjects"
            subTitle="(2020 - Present)"
            result="Global"
            des="Bringing three years of online teaching expertise to O Level and A Level education, I empower students with tailored guidance for academic success.Three years of online teaching proficiency in O Level and A Level education, dedicated to equipping students with essential skills and knowledge for academic excellence. "
          />
          <ResumeCard
            title="Islamic Education"
            subTitle="(2017 - Present)"
            result="Global"
            des=" 7 years of experience in Tajweed courses and Islamic education, I offer comprehensive guidance aimed at enhancing Quranic recitation and deepening understanding of Islamic principles. Committed to fostering spiritual growth, I strive to empower students with enriched knowledge and practice"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
