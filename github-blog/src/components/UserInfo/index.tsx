import { UserInfoContainer } from './styles'
import {
  Github,
  Building2,
  Users2,
  Calendar,
  MessageCircle,
} from 'lucide-react'

interface UseInfoProps {
  page: 'post' | 'blog'
}

export function UserInfo({ page }: UseInfoProps) {
  return (
    <UserInfoContainer>
      <div>
        <Github size={18} />
        <span>cameronwll</span>
      </div>

      {page === 'post' ? (
        <>
          <div>
            <Calendar size={18} />
            <span>Há 1 dia</span>
          </div>

          <div>
            <MessageCircle />
            <span>5 comentários</span>
          </div>
        </>
      ) : (
        <>
          <div>
            <Building2 size={18} />
            <span>Rocketseat</span>
          </div>

          <div>
            <Users2 />
            <span>32 seguidores</span>
          </div>
        </>
      )}
    </UserInfoContainer>
  )
}
