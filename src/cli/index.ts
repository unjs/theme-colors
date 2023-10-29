import { defineCommand } from "citty";
import pkg from "../../package.json" assert { type: "json" };
import { getColors } from "..";

const main = defineCommand({
  meta: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  },
  args: {
    color: {
      type: "positional",
      description: "The color to generate variants for. Use hexadecimals.",
      required: true,
    },
  },
  run: ({ args }) => {
    const color = args.color;

    if (!color.startsWith("#") && color.length !== 7) {
      throw new Error("Color must be a hexadecimal value.");
    }

    const colors = getColors(color);

    console.log(colors);
  },
});

export { main };

export { runMain } from "citty";
