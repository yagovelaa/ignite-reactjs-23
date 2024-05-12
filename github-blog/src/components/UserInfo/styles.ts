import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: regular;
      font-family: Nunito, sans-serif;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
