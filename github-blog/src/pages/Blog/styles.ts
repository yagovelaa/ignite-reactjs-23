import styled from 'styled-components'

export const BlogContent = styled.section`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const GridPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 3rem;
`
