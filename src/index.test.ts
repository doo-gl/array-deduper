import {dedupe} from "./index";


describe("Array Deduper", () => {

  it("Should dedupe strings", () => {
    expect(dedupe(["1", "2", "3", "1"])).toEqual(["1", "2", "3"])
    expect(dedupe(["2", "2", "2", "2"])).toEqual(["2"])
    expect(dedupe(["1", "1", "3", "3"])).toEqual(["1", "3"])
  })

  it("Should dedupe objects", () => {
    expect(dedupe([
      {a: "1", b: 1},
      {a: "2", b: 2},
      {a: "3", b: 3},
      {a: "1", b: 1},
    ]))
      .toEqual([
        {a: "1", b: 1},
        {a: "2", b: 2},
        {a: "3", b: 3},
      ])

    expect(dedupe([
      {a: "1", b: 1},
      {a: "1", b: 2},
      {a: "1", b: 3},
      {a: "1", b: 1},
    ]))
      .toEqual([
        {a: "1", b: 1},
        {a: "1", b: 2},
        {a: "1", b: 3},
      ])

    expect(dedupe([
      {a: "1", b: 1, c: { d: true }},
      {a: "1", b: 1, c: { d: false }},
      {a: "3", b: 3, c: { d: true }},
      {a: "1", b: 1, c: { d: false }},
    ]))
      .toEqual([
        {a: "1", b: 1, c: { d: true }},
        {a: "1", b: 1, c: { d: false }},
        {a: "3", b: 3, c: { d: true }},
      ])
  })

  it("Should dedupe according to the Key Mapper", () => {

    const keyMapper = (i:any) => i.a
    expect(
      dedupe([
        {a: "1", b: 1, c: { d: true }},
        {a: "1", b: 1, c: { d: false }},
        {a: "3", b: 3, c: { d: true }},
        {a: "1", b: 1, c: { d: false }},
      ],
        keyMapper
      ))
      .toEqual([
        {a: "1", b: 1, c: { d: true }},
        {a: "3", b: 3, c: { d: true }},
      ])
  })

})