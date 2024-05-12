import {
  PostContainer,
  PostDescription,
  PostTitle,
  PublicationDate,
} from './styles'

export function Post() {
  return (
    <PostContainer href="/post/1">
      <div>
        <PostTitle>JavaScript data types and data structures</PostTitle>
        <PublicationDate>Há 1 dia</PublicationDate>
      </div>

      <PostDescription>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </PostDescription>
    </PostContainer>
  )
}
