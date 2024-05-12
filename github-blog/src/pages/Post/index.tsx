import { ChevronLeft, ExternalLink } from 'lucide-react'
import {
  PostContent,
  PostDescription,
  PostInfo,
  PostInfoHeader,
  PostPageContent,
  PostTitle,
} from './styles'
import { UserInfo } from '../../components/UserInfo'

export function PostPage() {
  return (
    <>
      <PostPageContent>
        <PostInfo>
          <PostInfoHeader>
            <a href="/">
              <ChevronLeft size={12} />
              VOLTAR
            </a>

            <a href="/">
              VER NO GITHUB <ExternalLink size={12} />
            </a>
          </PostInfoHeader>

          <div>
            <PostTitle>JavaScript data types and data structures</PostTitle>

            <UserInfo page="post" />
          </div>
        </PostInfo>

        <PostContent>
          <PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </PostDescription>
        </PostContent>
      </PostPageContent>
    </>
  )
}
