import React, { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";

import Workplace, { BringChanges, LiveChanges } from "..";
import Checkbox from "@components/Checkbox";

type Props = {};

const PlaygroundAnimation: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 8 },
  },
  exit: { opacity: 0, y: -10 },
};

export default function CenteringADiv({}: Props) {
  const [centerDiv, setCenterDiv] = useState<number>(1);

  return (
    <Workplace>
      <LiveChanges>
        <AnimatePresence mode="wait" initial={false}>
          {centerDiv == 1 ? (
            <motion.div
              key={1}
              variants={PlaygroundAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative w-full max-w-[905px] mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
            >
              <motion.div layout className="bg-white rounded-lg w-11 h-11" />
            </motion.div>
          ) : centerDiv == 2 ? (
            <motion.div
              key={2}
              variants={PlaygroundAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative w-full max-w-[905px] mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
            >
              <div className="bg-white rounded-lg w-11 h-11" />
            </motion.div>
          ) : centerDiv == 3 ? (
            <motion.div
              key={3}
              variants={PlaygroundAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative w-full max-w-[905px] mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
            >
              <div className="bg-white rounded-lg w-11 h-11" />
            </motion.div>
          ) : centerDiv == 4 ? (
            <motion.div
              key={4}
              variants={PlaygroundAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative w-full max-w-[905px] mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex justify-center items-center gap-1 overflow-hidden p-2 `}
            >
              <div className="bg-white rounded-lg w-11 h-11" />
            </motion.div>
          ) : (
            <h1>Nothing</h1>
          )}
        </AnimatePresence>
      </LiveChanges>

      <BringChanges className="max-w-[905px] mx-auto mt-8 flex justify-between flex-wrap gap-8">
        <Checkbox
          name="Flexbox"
          onClick={() => setCenterDiv(1)}
          checked={centerDiv == 1 ? true : false}
        />
        <Checkbox
          name="Gridbox I"
          onClick={() => setCenterDiv(2)}
          checked={centerDiv == 2 ? true : false}
        />
        <Checkbox
          name="Gridbox II"
          onClick={() => setCenterDiv(3)}
          checked={centerDiv == 3 ? true : false}
        />
        <Checkbox
          name="Transform"
          onClick={() => setCenterDiv(4)}
          checked={centerDiv == 4 ? true : false}
        />
      </BringChanges>
    </Workplace>
  );
}
