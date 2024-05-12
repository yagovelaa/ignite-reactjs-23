import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  display: flex;
  gap: 2rem;

  margin-top: -5rem;
  margin-bottom: 4.5rem;
`

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: bold;
    font-family: Nunito, sans-serif;
    font-size: 0.75rem;
    line-height: 160%;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    line-height: 100%;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      margin-top: -4px;
    }
  }
`

export const UserName = styled.strong`
  font-weight: bold;
  font-family: Nunito, sans-serif;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
`

export const UserDescription = styled.span`
  font-weight: regular;
  font-family: Nunito, sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const UserSocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-weight: regular;
    font-family: Nunito, sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`
