// 1. matchLink是一个侧边栏导航配置项，简化 MatchLink和matchLink，
// 要求新增PagePathEnum时，动态变更 MatchLink和matchLink

enum PagePathEnum {
  SERVICE_SOLUTION = '/soc/serviceSolutions',
  BUSINESS_DOMAIN = '/soc/businessDomain',
  PAGE_APPLICATION = '/soc/pageApplication',
  MERCHANT_VIEW = '/soc/merchantView',
  // 新增导航，动态变更 MatchLink 和 matchLink
  SO_MANAGEMENT = '/smc/soManagement'
}

// 待优化
type MatchLink = {
  [PagePathEnum.SERVICE_SOLUTION]: boolean
  [PagePathEnum.BUSINESS_DOMAIN]: boolean
  [PagePathEnum.PAGE_APPLICATION]: boolean
  [PagePathEnum.MERCHANT_VIEW]: boolean
}

type PagePathEnumKeys =
  | 'SERVICE_SOLUTION'
  | 'BUSINESS_DOMAIN'
  | 'PAGE_APPLICATION'
  | 'MERCHANT_VIEW'
  | 'SO_MANAGEMENT'

type MatchLink2 = {
  [key in keyof typeof PagePathEnum]: boolean
}

const matchLink: MatchLink = {
  [PagePathEnum.SERVICE_SOLUTION]:
    location.pathname.indexOf(PagePathEnum.SERVICE_SOLUTION) > -1,
  [PagePathEnum.BUSINESS_DOMAIN]:
    location.pathname.indexOf(PagePathEnum.BUSINESS_DOMAIN) > -1,
  [PagePathEnum.PAGE_APPLICATION]:
    location.pathname.indexOf(PagePathEnum.PAGE_APPLICATION) > -1,
  [PagePathEnum.MERCHANT_VIEW]:
    location.pathname.indexOf(PagePathEnum.MERCHANT_VIEW) > -1
}

// 待优化
const handleMatchLink = (): MatchLink => {
  const matchLink: MatchLink = {}
  const currentPath = location.pathname

  for (const key in PagePathEnum) {
    const path = PagePathEnum[key as keyof typeof PagePathEnum]
    matchLink[key as keyof typeof PagePathEnum] = currentPath.indexOf(path) > -1
  }
  return matchLink
}

const matchLink4 = handleMatchLink()
