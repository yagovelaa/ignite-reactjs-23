import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import NextImage from 'next/image'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <NextImage src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
