/*
*
发请求的API
*/
import myAxios from './axios'
export const reqCaptch = ()=>myAxios('/captch')