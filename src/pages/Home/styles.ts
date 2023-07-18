import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const SearchForm = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  .estate {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;

    span {
      position: absolute;
      right: 0;
      margin: 0.75rem 1.25rem;
      color: ${(props) => props.theme['base-text']};
      opacity: 0.7;
      z-index: 1;
      cursor: pointer;
    }

    select {
      background: ${(props) => props.theme['base-input']};
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme['base-hover']};
      padding: 0.75rem 1.25rem;
      transition: 0.2s;
      width: 100%;
      appearance: none;
      overflow-y: auto;
      cursor: pointer;
      z-index: 0;
    }

    select:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    select:focus {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  button {
    border-radius: 6px;
    background: ${(props) => props.theme['dark-blue']};
    border: 0;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-start: 3;
    grid-column-end: 5;
    width: 16rem;
    justify-self: center;

    svg {
      color: ${(props) => props.theme.background};
      transition: 0.2s;
    }
  }

  button:hover {
    background: ${(props) => props.theme.blue};
  }
`

export const KeyWordsContainer = styled.div`
  grid-column: span 2;
  .labelInput {
    position: relative;
    input {
      background: ${(props) => props.theme['base-input']};
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme['base-hover']};
      padding: 0.75rem 1.25rem;
      transition: 0.2s;
      width: 100%;
    }

    input:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    input:focus {
      background: ${(props) => props.theme['base-hover']};
    }

    span {
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      padding: 0 1.25rem;
      opacity: 0.7;
      color: ${(props) => props.theme['base-text']};
      cursor: text;
      gap: 0.25rem;
    }
  }
`
interface KeyWordsProps {
  variant: 'negative' | 'positive'
}

export const KeyWords = styled.div<KeyWordsProps>`
  width: 100%;
  padding: 0.5rem 0.75rem 0;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    margin: 0.35rem 0.35rem;
    float: left;
    border-radius: 8px;
    border: 2px solid
      ${(props) =>
        props.variant === 'negative'
          ? props.theme['dark-red']
          : props.theme['dark-green']};
    background: ${(props) =>
      props.variant === 'negative' ? props.theme.red : props.theme.green};
    color: ${(props) => props.theme['base-title']};
    gap: 0.5rem;
    color: ${(props) => props.theme['base-text']};

    button {
      width: min-content;
      background: transparent;
      padding: 0 0 0 0.5rem;
      border-left: 2px solid
        ${(props) =>
          props.variant === 'negative' ? props.theme.red : props.theme.green};
      border-radius: 0;
      transition: 0.2s;

      svg {
        fill: ${(props) => props.theme['base-text']};
      }
    }
    button:hover {
      background: transparent;
      svg {
        fill: ${(props) => props.theme.dangerous};
      }
    }
  }
`
