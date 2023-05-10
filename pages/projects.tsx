import Head from "next/head";
import ProjectCard from "@/components/projectCard";
import SectionTitle from "@/components/sectionTitle";

const Projects = () => {
  return (
    <div className="min-h-[90vh] sml:min-h-[88vh] flex items-center mt-[10vh] sml:mt-0 py-10 mdl:py-20">
      <Head>
        <title>Javiier-pzk | Projects</title>
      </Head>
      <main>
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
          <ProjectCard
            projectTitle="Productivity Police"
            projectDescription="A mobile productivity app built for iOS devices that consists of some of the more important productivity features that any student might require."
            projectUrlPath="Productivity-Police"
            projectTechStack={["React Native (Expo)", "Firebase"]}
            loadingDelay={0.1}
          />
          <ProjectCard
            projectTitle="dfmn_bot"
            projectDescription="A telegram bot that helps you make decisions or provides recommendations for you."
            projectUrlPath="dfmn_bot"
            projectTechStack={[
              "pyTelegramBotAPI",
              "Heroku",
              "Google Maps Platform",
              "python",
            ]}
            loadingDelay={0.15}
          />
          <ProjectCard
            projectTitle="Truffle"
            projectDescription="A Lightweight SQL management library for C#."
            projectUrlPath="Truffle"
            projectTechStack={["C#"]}
            loadingDelay={0.2}
          />
          <ProjectCard
            projectTitle="Restaurant HR Helper"
            projectDescription="A desktop app built as part of a school project for restaurant managers to manage their employees, suppliers and customers. It optimized for use via a Command Line Interface."
            projectUrlPath="tp"
            projectTechStack={["Java", "JavaFX", "Gradle"]}
            loadingDelay={0.25}
          />
          <ProjectCard
            projectTitle="Duke"
            projectDescription="An interactive chat bot desktop app bulit as part of a school project that helps you keep track of your todos, deadlines and events."
            projectUrlPath="ip"
            projectTechStack={["Java", "JavaFX", "Gradle"]}
            loadingDelay={0.3}
          />
        </div>
      </main>
    </div>
  );
};

export default Projects;
