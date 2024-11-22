// import { validateValue } from "./validateValue.js"
const validateValue = require("./validateValue.js")

test("validateValueTest", () => {
    expect(validateValue(40)).toBe(true)
})

describe("validateValue", () => {
  it("returns true for values within the range (0-100)", () => {
    expect(validateValue(50)).toBe(true)
  })

  it("returns false for values less than 0", () => {
    expect(validateValue(-1)).toBe(false)
  })

  it("returns false for values greater than 100", () => {
    expect(validateValue(101)).toBe(false)
  })

  it("returns true for edge case 0", () => {
    expect(validateValue(0)).toBe(true)
  })

  it("returns true for edge case 100", () => {
    expect(validateValue(100)).toBe(true)
  })
})
