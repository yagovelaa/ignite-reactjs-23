import { Information, InputSearchContainer, Input } from './styles'

export function InputSearch() {
  return (
    <InputSearchContainer>
      <Information>
        <strong>Publicação</strong>

        <span>6 publicações</span>
      </Information>

      <Input placeholder="Buscar conteúdo" />
    </InputSearchContainer>
  )
}
