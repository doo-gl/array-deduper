import "./extend-array"

describe("Extend Array with Dedupe", () => {

  it("Should extend Array", () => {
    expect(["1", "2", "1"].dedupe()).toEqual(["1", "2"])
  })
})