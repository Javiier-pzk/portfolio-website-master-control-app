import { motion } from "framer-motion";
import { TiArrowForward, TiArrowForwardOutline } from "react-icons/ti";
import Image, { StaticImageData } from "next/image";

interface Props {
  jobTitle: string;
  company: string;
  jobDuration: string;
  jobDescriptions: string[];
  attachmentNames: string[];
  image: StaticImageData;
  companyUrl: string;
}

const handleJobDescriptions = (jobDescriptions: string[]) =>
  jobDescriptions.map((jobDescription, index) => (
    <li key={index}>
      {jobDescription.charAt(0) === "-" ? (
        <div className="text-base flex gap-2 text-textLight pl-8">
          <span className="text-textYellow mt-1">
            <TiArrowForwardOutline />
          </span>
          {jobDescription.slice(1)}
        </div>
      ) : (
        <div className="text-base flex gap-2 text-textLight">
          <span className="text-textYellow mt-1">
            <TiArrowForward />
          </span>
          {jobDescription}
        </div>
      )}
    </li>
  ));

const handleAttachments = (attachmentNames: string[]) =>
  attachmentNames.map((attachmentName , index) => (
    <a key={index} href={`/assets/${attachmentName}`} target="_blank">
      <button className="px-4 py-2 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300">
        {attachmentName}
      </button>
    </a>
  ));

const WorkDetails = ({
  jobTitle,
  company,
  jobDuration,
  jobDescriptions,
  attachmentNames,
  image,
  companyUrl
}: Props) => {
  return (
    <div className="w-full">
      <div className="flex gap-3 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden w-14 h-14"
        >
          <Image src={image} alt="company logo" object-fit="cover" />
        </motion.div>
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col lgl:flex-row gap-1 font-medium text-xl font-titleFont"
          >
            {jobTitle}
            <a href={companyUrl} target="_blank">
              <span 
                className="text-textYellow tracking-wide inline-flex relative cursor-pointer overflow-x-hidden group"
              > 
                @ {company}
                <span className="absolute w-full h-[2px] bg-textYellow left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
              
            </a>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-md mt-1 font-medium text-textDark"
          >
            {jobDuration}
          </motion.p>
        </div>
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-col gap-3"
      >
        {handleJobDescriptions(jobDescriptions)}
      </motion.ul>
      {attachmentNames.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col"
        >
          <p className="text-md font-medium text-textDark">Attachments:</p>
          <div className="flex gap-2 mt-2">
            {handleAttachments(attachmentNames)}
          </div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WorkDetails;
