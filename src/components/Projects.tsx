import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";

import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT Our PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="Our Staff"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Mathmatics "
            des=" Dedicated math educator with 4 years of experience, fostering student learning through innovative teaching methods and personalized attention"
            src={projectOne}
          />
          <ProjectsCard
            title="Uzair /Dars Nazami"
            des=" Uzair, an accomplished Quran teacher with expertise in Tajweed and Dars Nazami, boasting 8 years of enriching experience in guiding students through the intricacies of Quranic recitation and Islamic studies."
            src={projectTwo}
          />
          <ProjectsCard
            title="Quran Teacher / Junaid"
            des=" Quran teacher Junaid, with 7 years of experience, fostering deep understanding and reverence for the Holy Quran through personalized guidance and effective teaching methodologies."
            src={projectThree}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
