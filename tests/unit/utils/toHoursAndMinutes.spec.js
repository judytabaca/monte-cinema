import toHoursAndMinutes from "@/utils/toHoursAndMinutes";

describe("toHoursAndMinutes", () => {
  it("returns 'Unknown' when number is less than or equal to 0", () => {
    expect(toHoursAndMinutes(0)).toMatch("Unknown");
  });

  it("returns time in minutes when number is less than 60", () => {
    expect(toHoursAndMinutes(59)).toMatch("59min");
  });

  it("return string in correct format when time is over 60 minutes", () => {
    expect(toHoursAndMinutes(71)).toMatch("1h 11min");
  });

  it("return string in correct format when time is exactly 60 minutes", () => {
    expect(toHoursAndMinutes(60)).toMatch("60min");
  });
});
