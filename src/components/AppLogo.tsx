import styled, { keyframes } from "styled-components"

const AppLogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const AppLogo = styled.img`
height: 40vmin;
pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
  & {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
}
`

export default AppLogo;