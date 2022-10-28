const lodash_debounce = require('lodash.debounce')
// const lodash_throttly = require('lodash.throttly')

const debounce_safely = require('..').default

/*
debounce_safely(fn, 21, false)
/ like _.debounce(fn, 21, { leading: false, trailing: true })

debounce_safely(fn, 111, true)
/ like _.debounce(fn, 111, { leading: true, trailing: true })

debounce_safely(fn, 21, false, true)
/ like _.throttly(fn, 21, { leading: false, trailing: true })

debounce_safely(fn, 12, true, true)
/ like _.throttly(fn, 12, { leading: true, trailing: false })
*/

const lodash = lodash_debounce((n) => {
  console.log('lodash open', n)
  if (n < 5) lodash(n + 1)
  console.log('lodash exit', n)
  return n
}, 1000, { leading: true, trailing: true })

const safely = debounce_safely((n) => {
  console.log('safely open', n)
  if (n < 5) safely(n + 1)
  console.log('safely exit', n)
  return n
}, 1000, true, false)

// test cross method
if (safely.cross(111) !== 111 || safely.cross(121) !== 121) {
  throw new Error('Method "cross" not work')
}
safely.clear()

// test default

safely(0)
// console.log =>
/*
22:20:52.989 safely open 0
22:20:52.989 safely exit 0
22:20:53.989 safely open 1
22:20:53.989 safely exit 1
22:20:54.989 safely open 2
22:20:54.990 safely exit 2
22:20:55.990 safely open 3
22:20:55.990 safely exit 3
22:20:56.990 safely open 4
22:20:56.990 safely exit 4
22:20:57.991 safely open 5
22:20:57.991 safely exit 5
*/

lodash(0)
// console.log =>
/*
22:20:14.012 lodash open 0
22:20:14.013 lodash exit 0
22:20:15.013 lodash open 1
22:20:15.013 lodash open 2
22:20:15.013 lodash exit 2
22:20:15.013 lodash exit 1
22:20:16.013 lodash open 3
22:20:16.013 lodash open 4
22:20:16.013 lodash exit 4
22:20:16.014 lodash exit 3
22:20:17.013 lodash open 5
22:20:17.014 lodash exit 5
*/

// full console
// console.log =>
/*
22:21:39.708 safely open 0
22:21:39.708 safely exit 0
22:21:39.709 lodash open 0
22:21:39.709 lodash exit 0
22:21:40.709 safely open 1
22:21:40.709 safely exit 1
22:21:40.709 lodash open 1
22:21:40.709 lodash open 2
22:21:40.709 lodash exit 2
22:21:40.709 lodash exit 1
22:21:41.709 safely open 2
22:21:41.709 safely exit 2
22:21:41.709 lodash open 3
22:21:41.709 lodash open 4
22:21:41.709 lodash exit 4
22:21:41.709 lodash exit 3
22:21:42.709 safely open 3
22:21:42.710 safely exit 3
22:21:42.710 lodash open 5
22:21:42.710 lodash exit 5
22:21:43.710 safely open 4
22:21:43.710 safely exit 4
22:21:44.710 safely open 5
22:21:44.710 safely exit 5
*/

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => { safely(i), lodash(i) }, 50 * i)
// }
