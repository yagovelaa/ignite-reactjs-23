import styled from 'styled-components'

export const PostContainer = styled.a`
  background-color: ${(props) => props.theme['base-post']};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-decoration: none;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const PostTitle = styled.strong`
  font-weight: bold;
  font-family: Nunito, sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-title']};
  width: 80%;
`

export const PublicationDate = styled.span`
  width: 20%;
  font-weight: regular;
  font-family: Nunito, sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-span']};
  display: flex;
  justify-content: end;
  margin-top: 5px;
`

export const PostDescription = styled.span`
  font-weight: regular;
  font-family: Nunito, sans-serif;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
`
