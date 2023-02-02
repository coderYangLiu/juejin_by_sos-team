import CSignin from './card/signin'
import CDownload from './card/download'
import CBanner from './card/banner'
import CLinks from './card/links'

import CEntryItem from './list/entry'
import CAdvertisementItem from './list/advertisement'

import CFooter from './footer'

export namespace HomeCard {
  export const Signin = CSignin
  export const Download = CDownload
  export const Banner = CBanner
  export const Links = CLinks
}

export namespace HomeList {
  export const EntryItem = CEntryItem
  export const AdvertisementItem = CAdvertisementItem
}

export namespace HomeCpns {
  export const Card = HomeCard
  export const List = HomeList
  export const Footer = CFooter
}

export default HomeCpns