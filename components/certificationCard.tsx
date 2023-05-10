import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"

interface Props {
  certTitle: string;
  certUrl: string;
  certIssuer: string;
  certIssueDate: string;
  certImage: StaticImageData;
  loadingDelay: number
}

const CertificationCard = ({
  certTitle,
  certUrl,
  certIssuer,
  certIssueDate,
  certImage,
  loadingDelay
}: Props) => {
  return (
    <a href={certUrl} target="_blank">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: loadingDelay }}
        className="w-full h-80 rounded-lg bg-hoverColor flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      
        <h2 className="px-7 pt-7 text-xl font-titleFont font-semibold tracking-wide group-hover:text-textYellow">
          {certTitle}
        </h2>
        <div className="w-full h-100 overflow-hidden">
          <Image src={certImage} alt="cert image" object-fit="cover" />
        </div>
        <div className="px-7 pb-7 text-sm text-textDark">
          <p>{certIssuer}</p>
          <p>Issued {certIssueDate}</p>
        </div>
      </motion.div>
    </a>
  );
};

export default CertificationCard;
