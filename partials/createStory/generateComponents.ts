import {
  WalkEntry,
} from "https://deno.land/std/fs/mod.ts";

function generateComponents(icons: WalkEntry[]) {
  let components = "";

  for (const entry of icons) {
    const { name } = entry;
    const component = name.replace(".tsx", "");

    const renderedComponent = `        <li>
          <${component} color='#000' />
          ${component}
        </li>\n`;

    components += renderedComponent;
  }

  return components;
}

export default generateComponents;
