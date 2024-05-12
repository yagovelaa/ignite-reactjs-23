import styled from 'styled-components'

export const InputSearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3rem;
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  strong {
    font-weight: bold;
    font-family: Nunito, sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-weight: regular;
    font-family: Nunito, sans-serif;
    font-size: 0.875;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 6px;
  height: 3.125rem;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    font-weight: regular;
    font-family: Nunito, sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-label']};
  }

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`
