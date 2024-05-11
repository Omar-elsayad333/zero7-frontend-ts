interface INavLinks {
  name: string
  to: string
  children?: INavLinks
}

export const NavLinks: INavLinks[] = [
  {
    name: 'home',
    to: '/shop'
  },
  {
    name: 'shop',
    to: '/shop'
  },
  {
    name: 'collection',
    to: '/collection'
  },
  {
    name: 'look out',
    to: '/look-out'
  },
  {
    name: 'about us',
    to: '/about-us'
  },
  {
    name: 'contact',
    to: '/contact-us'
  }
]
