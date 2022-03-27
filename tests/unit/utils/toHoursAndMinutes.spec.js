import toHoursAndMinutes from "@/utils/toHoursAndMinutes";

const input = 71;
const output = toHoursAndMinutes(input);

describe("toHoursAndMinutes", () => {
  it("returns value", () => {
    expect(output).toBeTruthy;
  });

  it("returns string", () => {
    expect(typeof output).toBe("string");
  });

  it("return string in correct format", () => {
    const re = /\dh\s\d{2}min/;
    expect(output).toMatch(re);
  });
});
