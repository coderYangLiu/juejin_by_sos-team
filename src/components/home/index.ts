import CWelcome from './card/welocome'
import CDownload from './card/download'
import CLinks from './card/links'
import CUsers from './card/users'

import CEntryItem from './list/entry'
import CAdvertisementItem from './list/advertisement'

import CFooter from './footer'
import CNav from './nav'

export namespace HomeCard {
  export const Welcome = CWelcome
  export const Download = CDownload
  export const Links = CLinks
  export const Users = CUsers
}

export namespace HomeList {
  export const EntryItem = CEntryItem
  export const AdvertisementItem = CAdvertisementItem
}

export namespace HomeCpns {
  export const Card = HomeCard
  export const List = HomeList
  export const Footer = CFooter
  export const Nav = CNav
}

export default HomeCpns
