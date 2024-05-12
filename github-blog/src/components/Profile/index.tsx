import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  UserDescription,
  UserName,
} from './styles'
import avatarImg from '../../assets/avatar.svg'
import { ExternalLink } from 'lucide-react'
import { UserInfo } from '../UserInfo'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={avatarImg} alt="" />

      <ProfileContent>
        <ProfileHeader>
          <UserName>Cameron Williamson</UserName>

          <a href="/">
            GITHUB <ExternalLink size={12} />
          </a>
        </ProfileHeader>

        <UserDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </UserDescription>

        <UserInfo page="blog" />
      </ProfileContent>
    </ProfileContainer>
  )
}
