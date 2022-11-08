// export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000
console.log('当前环境', process.env.NODE_ENV)
// console.log(process.env.NODE_ENV)
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://codercba.com:9002'
} else {
  BASE_URL = 'http://codercba.prod:9002'
}

// 在env中配置需要加入对应的前缀: REACT_APP
// 数据仍是process.env里面
// 需要定义namespace
// console.log(process.env.REACT_APP_BASE_URL)

export { BASE_URL }
