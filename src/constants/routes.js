export const HOME = '/'
export const LOGIN = '/login'
export const ADMIN = '/admin'
export const ADMIN_HOTEL_NEW = '/admin/hotel/new'
export const ADMIN_HOTEL_UPDATE = (param = ':id') =>
  `/admin/hotel/update/${param}`
export const ADMIN_HOTEL_DELETE = (param = ':id') =>
  `/admin/hotel/delete/${param}`
export const DETAIL_HOTEL = (param = ':id') => `/hotel/${param}`
