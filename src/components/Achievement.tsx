import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2015 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Quran Reading & Recitation Course"
            subTitle="Alhamdulillah "
            result="Success"
            des="Guided over 300+ students from diverse global backgrounds through comprehensive Quranic studies, fostering spiritual growth and understanding."
          />
          <ResumeCard
            title="Quran Hifz (Memorization) "
            subTitle="Alhamdulillah "
            result="Success"
            des="Supported more than 50 students worldwide in accomplishing the prestigious milestone of Hifz Quran, a testament to their dedication and perseverance in Quranic memorization.."
          />
          <ResumeCard
            title="TAJWEED COURSE"
            subTitle="Alhamdulillah "
            result="Success"
            des="Over the course of 7 years, our team has had the privilege of mentoring a diverse cohort of students from around the world, guiding them through enriching Quranic studies and various Islamic courses.
            With personalized online instruction, we've empowered more than 300 students to master Tajweed and delve deeper into various aspects of Islamic education.
            "
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2015 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Online Quran Tutor"
            subTitle="(2017 - Present)"
            result="USA / UK / etc"
            des="With seven years of online teaching experience spanning across the globe, 
            We have had the privilege of sharing Quranic knowledge and fostering spiritual growth with students worldwide. Committed to excellence in online education, I aim to inspire and guide students on their Quranic journey."
          />
          <ResumeCard
            title="Conventional school subjects"
            subTitle="(2020 - Present)"
            result="Global"
            des="Bringing three years of online teaching expertise to O Level and A Level education, We empower students with tailored guidance for academic success.Three years of online teaching proficiency in O Level and A Level education, dedicated to equipping students with essential skills and knowledge for academic excellence. "
          />
          <ResumeCard
            title="Islamic Education"
            subTitle="(2017 - Present)"
            result="Global"
            des=" Tajweed courses and Islamic education, we offer comprehensive guidance aimed at enhancing Quranic recitation and deepening understanding of Islamic principles. Committed to fostering spiritual growth, I strive to empower students with enriched knowledge and practice"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
