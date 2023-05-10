import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full pt-6 pb-12 gap-4">
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95 }}
        href={process.env.NEXT_PUBLIC_GITHUB_URL}
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
        href={`mailto:${process.env.NEXT_PUBLIC_GMAIL}`}
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SiGmail />
        </span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        href={`mailto:${process.env.NEXT_PUBLIC_NUS_EMAIL}`}
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SiMicrosoftoutlook />
        </span>
      </motion.a>
    </div>
  );
};

export default Footer;
