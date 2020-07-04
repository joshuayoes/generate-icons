import createTest from "./partials/createTest.ts";
import createComponent from "./partials/createComponent.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
import getIcons from "./partials/getIcons.ts";
import createStory from "./partials/createStory/mod.ts";

// Extract command line arguments passed when running command
const { _: args } = parse(Deno.args);

// Argument error handling
if (args.length > 1) {
  throw Error("Please pass only one filename with no spaces");
}
if (args.length === 0) throw Error("Please pass a filename");

// Get first item from arguments
const [filename] = args;
// Arguments can be strings or numbers, covert to string if number
const iconName = `${filename}`;

// Setup directory information
const iconDirectory = "./component-library/src/components/Icons";
const testOutputPath = iconDirectory + `/__tests__/${iconName}.test.tsx`;
const componentOutputPath = iconDirectory + `/${iconName}.tsx`;
const storyOutputPath = iconDirectory + `/_.stories.tsx`;

// Get get all icon files from iconDirectory;
const icons = await getIcons(iconDirectory);

// Generate icon files
createTest(iconName, testOutputPath);
createComponent(iconName, componentOutputPath);
createStory(icons, storyOutputPath);
