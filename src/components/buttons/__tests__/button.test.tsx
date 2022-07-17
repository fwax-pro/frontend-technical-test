import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../Button'
import { theme } from "../../../pages/_app"

describe('components Button', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
        <ThemeProvider theme={theme}>
            <Button/>
        </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
