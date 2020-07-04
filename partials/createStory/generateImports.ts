import {
  WalkEntry,
} from "https://deno.land/std/fs/mod.ts";

function generateImports(icons: WalkEntry[]) {
  let imports = "";

  for (const entry of icons) {
    const { name } = entry;

    const component = name.replace(".tsx", "");

    const importStatement = `import ${component} from "./${name}"; \n`;

    imports += importStatement;
  }

  return imports;
}

export default generateImports;
