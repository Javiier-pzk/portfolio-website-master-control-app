import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/sectionTitle";
import WorkDetails from "@/components/workDetails";
import coinhakoLogo from "@/public/assets/images/coinhako-logo.png";
import nusLogo from "@/public/assets/images/nus-logo.png";
import successItLogo from "@/public/assets/images/success-it-logo.png";
import powerhouseAiLogo from "@/public/assets/images/powerhouse-ai-logo.png";

const Experience = () => {
  const [isCoinhako, setIsCoinhako] = useState(true);
  const [isNus, setIsNus] = useState(false);
  const [isSuccessIt, setIsSuccessIt] = useState(false);
  const [isPowerhouseAi, setIsPowerhouseAi] = useState(false);

  const handleCoinhako = () => {
    setIsCoinhako(true);
    setIsNus(false);
    setIsSuccessIt(false);
    setIsPowerhouseAi(false);
  };

  const handleNus = () => {
    setIsCoinhako(false);
    setIsNus(true);
    setIsSuccessIt(false);
    setIsPowerhouseAi(false);
  };

  const handleSuccessIt = () => {
    setIsCoinhako(false);
    setIsNus(false);
    setIsSuccessIt(true);
    setIsPowerhouseAi(false);
  };

  const handlePowerhouseAi = () => {
    setIsCoinhako(false);
    setIsNus(false);
    setIsSuccessIt(false);
    setIsPowerhouseAi(true);
  };

  return (
    <div className="min-h-[90vh] sml:min-h-[88vh] flex items-center mt-[10vh] sml:mt-0 py-10 mdl:py-20">
      <Head>
        <title>Javiier-pzk | Work Experiences</title>
      </Head>
      <main className="flex flex-col">
        <SectionTitle title="Work Experiences" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="md:w-50 flex flex-col"
          >
            <li
              className={`${
                isCoinhako
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handleCoinhako}
            >
              Coinhako
            </li>
            <li
              className={`${
                isNus
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handleNus}
            >
              National University of Singapore
            </li>
            <li
              className={`${
                isSuccessIt
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handleSuccessIt}
            >
              Success IT Consultancy & Services
            </li>
            <li
              className={`${
                isPowerhouseAi
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handlePowerhouseAi}
            >
              Powerhouse AI
            </li>
          </motion.ul>
          {isCoinhako && (
            <WorkDetails
              jobTitle="Software Engineer Intern, Trading"
              company="Coinhako"
              jobDuration="May 2023 - Present"
              jobDescriptions={["Trading group"]}
              attachmentNames={[]}
              image={coinhakoLogo}
              companyUrl="https://www.coinhako.com"
            />
          )}
          {isNus && (
            <WorkDetails
              jobTitle="Teaching Assistant (Software Engineering)"
              company="NUS"
              jobDuration="Jan 2022 - May 2023"
              jobDescriptions={[
                "Teaching Assistant for a software engineering course, CS2103/T, at NUS during the following academic periods:",
                "-AY22/23 Sem 2 (Jan 2023 – Present)",
                "-AY21/22 Sem 2 (Jan 2022 – May 2022)",
                "Tutored students on software engineering principles, concepts, and practices.",
                "Graded student's practical exams.",
                "Provided feedback and clarified any doubts students may have with topics taught in the course.",
              ]}
              attachmentNames={["AY2122S2-Tutor-Report.pdf"]}
              image={nusLogo}
              companyUrl="https://nus.edu.sg"
            />
          )}
          {isSuccessIt && (
            <WorkDetails
              jobTitle="Software Engineer Intern"
              company="Success IT Consultancy & Services"
              jobDuration="May - Aug 2022"
              jobDescriptions={[
                "Built, deployed and maintained both the frontend and backend of the company’s new SAAS product.",
                "Spearheaded the backend development and overall design for the master control app of the company’s new SAAS product.",
                "Developed the company's backend services with Azure, which includes writing and deploying Azure functions, using Azure Databases and SQL to interact with databases and using Azure DevOps to write pipelines to deploy static web appsand functions.",
                "Redesigned, refactored and developed the company’s Authentication API and other backend services, to make them more secure, versatile and flexible in supporting more of the company’s products.",
              ]}
              attachmentNames={[]}
              image={successItLogo}
              companyUrl="https://www.successit.com.sg"
            />
          )}
          {isPowerhouseAi && (
            <WorkDetails
              jobTitle="Software Engineer Intern"
              company="Powerhouse AI"
              jobDuration="Dec 2021 - May 2022"
              jobDescriptions={[
                "Designed, developed, and maintained several new features as well as the UI of the application",
                "Integrated the application's frontend and backend together with RESTful APIs.",
                "Set up Firebase (Google) analytics and crash analytics for the application.",
                "Utilised Google BigQuery and Google Cloud Platform (GCP) to generate and automate business intelligence reports for the company and clients.",
                "Ensured that the application is of the best possible performance, quality, and responsiveness.",
                "Identified bottlenecks and fixed bugs in the application.",
                "Maintained code quality, organisation, and automatization of the application.",
              ]}
              attachmentNames={[]}
              image={powerhouseAiLogo}
              companyUrl="https://www.pwh.ai"
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Experience;
