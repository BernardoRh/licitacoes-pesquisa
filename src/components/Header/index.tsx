import { FavoriteIcon, HeaderContainer, HomeIcon } from './styles'
import { FileText, Star, MagnifyingGlass } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HomeIcon to="/" className="Home">
        <FileText size={64} weight="fill" />
        <span className="MagnifyingGlass">
          <MagnifyingGlass size={42} className="icon" />
          <MagnifyingGlass size={46} className="outline" />
          <MagnifyingGlass size={36} className="outline" />
        </span>
      </HomeIcon>
      <FavoriteIcon to="/Favorite" className="Favorite">
        <Star size={64} weight="fill" />
      </FavoriteIcon>
    </HeaderContainer>
  )
}
