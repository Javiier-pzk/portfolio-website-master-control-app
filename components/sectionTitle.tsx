import { motion } from "framer-motion";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.05 }}
      className="flex items-center gap-6"
    >
      <h2 className="font-titleFont text-2xl font-semibold text-textYellow">
        {title}
      </h2>
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-textDark"></span>
    </motion.div>
  );
};

export default SectionTitle;
