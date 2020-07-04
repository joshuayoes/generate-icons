import generateImports from "./generateImports.ts";
import generateComponents from "./generateComponents.ts";
import {
  WalkEntry,
} from "https://deno.land/std/fs/mod.ts";

const generateStory = (icons: WalkEntry[]) => {
  const imports = generateImports(icons);
  const components = generateComponents(icons);

  // Formating is weird, but string whitespace is important
  return `import React from "react";
import { storiesOf } from "@storybook/react";
${imports}
storiesOf("Icons", module)
  .add(
    "All Icons",
    () => {
      <ul>
${components}      </ul>
    }
  );`;
};

export default generateStory;
