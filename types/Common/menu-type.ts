type Menu = {
  title: string
  url: string
  haveChild: boolean
  childMenu: {
    results: Menu[]
  }
}

export default Menu
