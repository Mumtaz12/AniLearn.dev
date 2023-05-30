import React, { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

import Workplace, { LiveChanges, BringChanges } from "..";
import Checkbox from "@components/Checkbox";
import Input from "@components/Tech/Input";

type Props = {};

export default function FlexWrap({}: Props) {
  const [flexWrap, setFlexWrap] = useState<boolean>(false);
  const [flexGrow, setFlexGrow] = useState<boolean>(false);
  const [flexBasis, setFlexBasis] = useState<number>(200);

  const [playground, { width: playgroundWidth }] = useMeasure();

  const onChangeHandler = (e: any) => {
    return e.target.value == 0
      ? setFlexBasis(200)
      : setFlexBasis(Number(e.target.value));
  };

  return (
    // All your code must be inside the Workplace for writing a clean codes
    // You can utility classes. (optional)

    <Workplace className="">
      <LiveChanges>
        <div
          className={`w-full min-w-[300px] max-w-[905px] mx-auto p-4 bg-box/50 border resize-x border-white-low-opacity rounded-lg flex gap-1 overflow-hidden ${
            flexWrap && "flex-wrap"
          }`}
          ref={playground}
        >
          {[...Array(4)].map((_, index) => (
            <Rectangular
              key={index}
              flexBasis={flexBasis}
              flexGrow={flexGrow}
            />
          ))}
        </div>
        <div
          className={`relative flex items-center justify-center gap-3 mx-auto text-right mt-3`}
          style={{ width: playgroundWidth }}
        >
          <div
            className={`w-full h-1 rounded-full grow duration-200 absolute -z-10 ${
              playgroundWidth == 300 ? "bg-red-700" : "bg-white-low-opacity"
            }`}
          />
          <p className="px-4 bg-background-clr">
            {Math.floor(playgroundWidth)}px
          </p>
        </div>
        {/* This is the place where you can see your changes live */}
      </LiveChanges>
      <BringChanges className="w-full max-w-[905px] mx-auto mt-8 space-y-6">
        <div>
          <h2 className="mb-4 text-xl text-white">Parent</h2>
          <Checkbox
            name="Flex Wrap"
            onChange={(e) => setFlexWrap(e.target.checked)}
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-xl text-white">Children</h2>
          <Checkbox
            name="Flex Grow"
            onChange={(e) => setFlexGrow(e.target.checked)}
          />
          <Input
            name="Flex Basis"
            value={flexBasis}
            unit="px"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
      </BringChanges>
    </Workplace>
  );
}

type RectangularProps = {
  flexGrow: boolean;
  flexBasis: number;
};

export const Rectangular = ({ flexGrow, flexBasis }: RectangularProps) => {
  return (
    <motion.div
      layout
      className={`bg-white rounded-lg h-11 ${flexGrow && "grow"}`}
      style={{ flexBasis }}
    />
  );
};