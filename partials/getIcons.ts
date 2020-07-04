import { walk, WalkEntry } from "https://deno.land/std/fs/mod.ts";

async function getIcons(
  directory = ".",
  regex = /component-library\/src\/components\/Icons\/\w+.tsx/,
) {
  const files: WalkEntry[] = [];

  const checkIsIcon = (path: string) => !!path.match(regex);

  for await (const entry of walk(directory)) {
    const { isFile, path } = entry;

    const isIcon = checkIsIcon(path);

    if (isFile && isIcon) {
      files.push(entry);
    }
  }

  return files;
}

export default getIcons;
