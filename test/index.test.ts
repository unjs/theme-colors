import { describe, it, expect } from "vitest";
import { getColors } from "../src/index";
import { parseColor } from "../src/utils";

describe("theme-colors", () => {
  const fixture = {
    hex: "#ABABAB",
    rgb: " 171, 171,171 ",
    theme: {
      50: "#FBFBFB",
      100: "#F7F7F7",
      200: "#EAEAEA",
      300: "#DDDDDD",
      400: "#C4C4C4",
      500: "#ABABAB",
      600: "#9A9A9A",
      700: "#676767",
      800: "#4D4D4D",
      900: "#333333",
      950: "#222222",
    },
  };

  it("getColors (hex)", () => {
    expect(getColors(fixture.hex)).toMatchObject(fixture.theme);
  });

  it("getColors (rgb)", () => {
    expect(getColors(fixture.rgb)).toMatchObject(fixture.theme);
  });

  it("getColors (invalid)", () => {
    expect(() => getColors("red")).toThrowError(/Invalid color format!/);
  });

  it("getColors (invalid obj)", () => {
    // @ts-expect-error: test invalid argument
    expect(() => getColors({})).toThrowError(/Color should be string!/);
  });

  it("parseColor (shorthand)", () => {
    expect(parseColor("#09C")).toEqual(parseColor("#0099cc"));
  });

  it.each([
    ["a,b,c", "non-numeric components"],
    [",,", "empty components"],
    ["255,0", "too few components"],
    ["255,0,0,0", "too many components"],
    ["300,0,0", "a component above 255"],
    ["-20,0,0", "a negative component"],
    ["1.5,0,0", "a fractional component"],
    ["1foo,0,0", "a component with trailing characters"],
    ["0x10,0,0", "a hexadecimal component"],
    ["1e2,0,0", "an exponential component"],
    ["+1,0,0", "a signed component"],
  ])("getColors (invalid rgb: %s)", (color) => {
    expect(() => getColors(color)).toThrowError(/Invalid color format!/);
  });
});
