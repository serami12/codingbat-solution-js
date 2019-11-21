// function parrotTrouble(isTalking, hour){
//   if(isTalking && hour < 7 || isTalking && hour > 20){
//     return true
//   }else{
//     return false
// }

function parrotTrouble(isTalking, hour) {
  return isTalking && hour < 7 || isTalking && hour > 20
}