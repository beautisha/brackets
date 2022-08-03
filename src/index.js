module.exports = function check(str, bracketsConfig) {
  let k = 0;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j< bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0]) {
        if (arr[i+1] == bracketsConfig[j][1]) {
          arr.splice(i, 2);
          i = -1;
          j = -1;
        }
      }
    }
  }
  console.log(arr);
  if (arr.length > 0) return false;
  return true;
}
