import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6rem;
  margin-top: 2rem;
`

export const HomeIcon = styled(NavLink)`
  position: relative;
  color: ${(props) => props.theme['dark-blue']};

  svg {
    fill: ${(props) => props.theme['dark-blue']};
    transition: 0.2s;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.blue};
    }

    .MagnifyingGlass {
      .icon {
        color: ${(props) => props.theme.blue};
      }
    }
  }

  .MagnifyingGlass {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    right: -0.5rem;

    color: ${(props) => props.theme['dark-blue']};

    .icon {
      color: ${(props) => props.theme['dark-blue']};
      align-self: center;
      justify-self: center;
      position: absolute;
      z-index: 1;
      transition: 0.2s;
    }

    .outline {
      color: ${(props) => props.theme.background};
      -webkit-text-stroke-width: 1rem;
      position: absolute;
      z-index: 0;
    }
  }
`

export const FavoriteIcon = styled(NavLink)`
  svg {
    fill: ${(props) => props.theme['dark-yellow']};
    transition: 0.2s;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.yellow};
    }
  }
`
