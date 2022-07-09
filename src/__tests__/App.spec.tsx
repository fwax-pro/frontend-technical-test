import { render, screen } from "@testing-library/react"
import { ThemeProvider } from 'styled-components'

import App from "../pages"
import { theme } from "../pages/_app"

describe("App", () => {
  it("should render correctly App", () => {
    render(
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    )
    expect(
      screen.getByText("lamessagerie")
    ).toBeInTheDocument()
  })
})
