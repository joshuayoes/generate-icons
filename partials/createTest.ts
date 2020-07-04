import { writeFileStr, exists } from "https://deno.land/std/fs/mod.ts";

const generateContent = (filename: string) =>
  `import { render } from "@testing-library/react";

test("<${filename} /> renders correctly", () => {
  const { container } = render(<${filename} />);
  expect(container).toMatchSnapshot();
});
`;

const writeTest = async (filename: string, outputPath: string) => {
  const test = generateContent(filename);

  const fileAlreadyExist = await exists(outputPath);

  if (fileAlreadyExist) {
    console.log(`⚠️  ${filename}.test.tsx already exists!`);
    return;
  }

  try {
    console.log(`✍️  Writing test for <${filename} />...`);

    await writeFileStr(outputPath, test).then(() => {
      console.log(`✅ <${filename} /> test written at ${outputPath}`);
    });
  } catch (error) {
    console.error("🙈 Something went wrong!");
    console.log(error);
  }
};

export default writeTest;
