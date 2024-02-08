import MainMenu from "./main-menu-type"
import { MediaResults } from "./media-type"
import Menu from "./menu-type"

type Header = {
  header: {
    logo: MediaResults,
    menu: MainMenu
  }
}

export default Header
