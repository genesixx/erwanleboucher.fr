import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Section from "../section"

describe("Section", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Section title="test" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
