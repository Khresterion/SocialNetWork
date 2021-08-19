const poke = require("../poke");

describe("Palindrom", () => {
  it("should be a palindrom", () => {
    expect(poke.isPalindrom("kayak")).toEqual(true);
  });
  it("should NOT a palindrom", () => {
    expect(poke.isPalindrom("azerty")).toEqual(false);
  });
});
