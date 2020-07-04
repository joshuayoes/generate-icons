import {
  writeFileStr,
  exists,
  WalkEntry,
  readFileStr,
} from "https://deno.land/std/fs/mod.ts";
import generateStory from "./generateStory.ts";

const createStory = async (icons: WalkEntry[], outputPath: string) => {
  const story = generateStory(icons);

  const fileAlreadyExist = await exists(outputPath);
  if (fileAlreadyExist) {
    try {
      // If running this script for a component name that already exists,
      // the generated story file string will be the same as the existing one.
      // Return early and avoid writing to existing file if that is the case.
      const existingStoryFile = await readFileStr(outputPath);

      if (existingStoryFile === story) {
        console.log("⚠️  _.stories.tsx is up to date!");
        return;
      }
    } catch (error) {
      console.error("🙈 Something went wrong!");
      console.log(error);
    }
  }

  try {
    fileAlreadyExist
      ? console.log(`✍️  Updating _.stories.tsx...`)
      : console.log(`✍️  Creating _.stories.tsx file...`);

    await writeFileStr(outputPath, story).then(() => {
      console.log(`✅ _.stories.tsx written at ${outputPath}`);
    });
  } catch (error) {
    console.error("🙈 Something went wrong!");
    console.log(error);
  }
};

export default createStory;
