import styled from 'styled-components'

export const PostPageContent = styled.section`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const PostInfo = styled.div`
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin-top: -5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const PostTitle = styled.strong`
  font-weight: bold;
  font-family: Nunito, sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-title']};
  width: 80%;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
`

export const PostDescription = styled.span`
  font-weight: regular;
  font-family: Nunito, sans-serif;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`
