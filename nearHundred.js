// function nearHundred(n) {
//   if (Math.abs(100 - n) <= 10) {
//     return true
//   }
//   if (Math.abs(200 - n) <= 10)) {
//   return true
// } else {
//   return false
// }


function nearHundred(n) {
  let a = (Math.abs(100 - n) <= 10)
  let b = (Math.abs(200 - n) <= 10)

  return a || b
}