import { writeFileStr, exists } from "https://deno.land/std/fs/mod.ts";

const generateContent = (filename: string) =>
  `import React from "react";

const ${filename}: React.FC = (props) => {
  const { className, width, color } = props;
  const height = width;

  return (
    <svg className={className} width={width} height={height}>
      <rect stroke={color} />
    </svg>
  );
};

export default ${filename};
`;

const createComponent = async (filename: string, outputPath: string) => {
  const component = generateContent(filename);

  const fileAlreadyExist = await exists(outputPath);

  if (fileAlreadyExist) {
    console.log(`⚠️  ${filename}.tsx already exists!`);
    return;
  }

  try {
    console.log(`✍️  Writing <${filename} /> file...`);

    await writeFileStr(outputPath, component).then(() => {
      console.log(`✅ <${filename} /> component written at ${outputPath}`);
    });
  } catch (error) {
    console.error("🙈 Something went wrong!");
    console.log(error);
  }
};

export default createComponent;
