import React, { useState } from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Dropdown } from "@components/Tech";

const cursorValues = [
  "auto",
  "default",
  "none",
  "context-menu",
  "help",
  "pointer",
  "progress",
  "wait",
  "cell",
  "crosshair",
  "text",
  "vertical-text",
  "alias",
  "copy",
  "move",
  "no-drop",
  "not-allowed",
  "grab",
  "grabbing",
  "e-resize",
  "w-resize",
  "n-resize",
  "s-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize"
];

type Props = {};

export default function Cursor({}: Props) {
  const [cursor, setCursor] = useState("auto");

  const Codes = `div {
  cursor: ${cursor};
}`; // Use backtick for writing your code

  return (
    <>
      <MetaTag
        title="cursor"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>cursor</h1><p>The cursor property specifies the mouse cursor to be displayed when pointing over an element.</p>" />
        <CodeBlocks
          codeString={Codes}
          language="css"
          fileName="style.css"
        />

        <Workplace className="">
          <BringChanges className="mb-12">
            <Dropdown
              name="Cursor"
              lists={cursorValues}
              stateValue={cursor}
              setStateValue={setCursor}
              margin={false}
              subListClassName="w-40"
            />
          </BringChanges>
          <LiveChanges className="">
            <div
              className="flex flex-col items-center justify-center w-full mx-auto text-5xl text-black duration-200 bg-red-700 dark:text-white max-w-playground md:bg-box dark:md:bg-box-d h-96 rounded-xl hover:bg-box/70"
              style={{ cursor }}>
              <h3>Hover me</h3>
              <p className="mt-2 text-sm text-font-clr dark:text-font-clr-d">Not available for phone</p>
            </div>
          </LiveChanges>
        </Workplace>
      </Container>
    </>
  );
}
