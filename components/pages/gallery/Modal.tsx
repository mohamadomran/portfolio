import { motion } from 'framer-motion';

import { formatDate } from '@/lib/formatDate';
import { ImageProps } from '@/types/Image';

interface ModalProps {
  selectedImg: ImageProps;
  setSelectedImg: (image: null) => void;
}

export default function Modal({ selectedImg, setSelectedImg }: ModalProps) {
  return (
    <motion.figure
      className="fixed left-0 top-0 flex h-full w-full flex-col bg-primary-content/50 p-2"
      onClick={() => setSelectedImg(null)}
    >
      <motion.img
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeOut",
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          scale: 1,
          transition: {
            ease: "easeIn",
            duration: 0.15,
          },
        }}
        transition={{ duration: 0.6 }}
        src={selectedImg.image}
        alt={selectedImg.caption}
        className="mx-auto mb-4 mt-16 block max-h-[80%] max-w-[100%] border-4 border-secondary rounded-xl drop-shadow-md"
      />
      <motion.figcaption className="mx-auto inline-block rounded-full bg-white/50 px-4 py-2 font-bold text-accent-content drop-shadow-md backdrop-blur">
        {selectedImg.caption} in {formatDate(selectedImg.date)}
      </motion.figcaption>
    </motion.figure>
  );
}
