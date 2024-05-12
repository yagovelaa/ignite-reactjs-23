import { InputSearch } from '../../components/InputSearch'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { GridPostsContainer, BlogContent } from './styles'

export function BlogPage() {
  return (
    <>
      <BlogContent>
        <Profile />

        <InputSearch />

        <GridPostsContainer>
          <Post />
          <Post />
          <Post />
        </GridPostsContainer>
      </BlogContent>
    </>
  )
}
