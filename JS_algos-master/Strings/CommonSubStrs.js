//=============================================

//                 UNFINISHED

//=============================================

function LongestCommonSubStr(str1, str2){
  // The length of the longest common string
  var strLength = 0;
  // The postion of the last character in the longest string
  var strPos = 0;

  // Init the outer array
  var matrix = [];
  // Iterate through str1
  for (var x in str1){
    // Init the inner array
    matrix[x] = [];
    // Iterate through str2
    for (var y in str2){
      // If the characters match make sure you are not on an edge
      if (str1[x] == str2[y]){
        // If you are not on an edge you can look backwards
        if (x > 0 && y > 0){
          // add 1 to the previous count
          matrix[x][y] = matrix[x-1][y-1] + 1;

          // If you have found the new largest string,
          // update the values to build the string later
          if (matrix[x][y] > strLength){
            // This is the length of the string
            strLength = matrix[x][y];
            // This is the position in str1
            strPos = x;
          }
        }
        // If you are on an edge, just make the count 1
        else {
          matrix[x][y] = 1;
        }
      }
      // If the characters don't match, set the count to 0
      else {
        matrix[x][y] = 0;
      }
    }

  }

  // ==================== MAP =======================
  // This is a log of the data structure that you create.
  // I have added the characters along the axis so you can see what the numbers reference.
  // NOTE: Each number is the count of matches at that point in the string.
  console.log("    "+str2.split("").join("  "));
  for(var g in matrix){
    console.log(str1[g], matrix[g]);
  }
  console.log("");
  // ===============================================


  // Time to rebuld the largest common string from the length and position
  var lcs = "";
  // Iterate for the length of the longest string
  for (var i = 0; i < strLength; i++){
    // We only know where the end of the string is so we have to step backwards
    // Since we are steping backwards add the character to the start of the string
    lcs = str1[strPos-i] + lcs;
  }

  return lcs;
}
//                  TEST
//===========================================
// var str1 = "hello world";
// var str2 = "wow its yello";
// var LCS  = LongestCommonSubStr(str1, str2);
// console.log("LCS:", LCS);
//===========================================

function LongestCommonSubStrII(str1, str2){
  var strLength = 0;
  var strPos = 0;

  // make sure str1 is longer
  if (str1.length < str2.length){ var temp = str1; str1 = str2; str2 = temp; }

  // make dynamic memory
  var matrix = [[],[]];
  for (var i = 0; i < str1.length; i++) matrix[1][i] = 0;

  // for each char in str1
  for (var c in str1){
    // copy second row  of memory to the first
    matrix[0] = matrix[1].slice();
    // for each char in str2
    for (var y in str2){
      // if they match
      if (str1[c] == str2[y]){
        // if it's not the first match, add to previous match count
        // else set to 1
        matrix[1][y] = y > 0 ? matrix[0][y-1]+1 : 1;
        // if its the logens found so far
        if (matrix[1][y] > strLength){
          strLength = matrix[1][y];
          strPos = c;
        }
      }
      // if they don't match
      else { matrix[1][y] = 0; }
    }
    console.log(matrix);
  }

  // make longest string
  var lcs = "";
  for (var ch = 0; ch < strLength; ch++){
    lcs = str1[strPos-ch] + lcs;
  }

  return lcs;
}
//                  TEST
//===========================================
// var str1 = "hello";
// var str2 = "Wow it's yello!";
// var LCS  = LongestCommonSubStrII(str1, str2);
// console.log("LCS:", LCS);
//===========================================

function AllCommonSubStrs(str1, str2){
  var subStrs = [];
  var matrix = [[],[]];

  // make sure str1 is shorter
  if (str1.length > str2.length){ var temp = str1; str1 = str2; str2 = temp; }
  // make memory
  for (var i = 0; i < str2.length; i++) matrix[1][i] = 0;

  // for each char in str1
  for (var c in str1){
    // copy second row to first
    matrix[0] = matrix[1].slice();

    // for each char in str2
    for (var y in str2){
      // if chars match
      if (str1[c] == str2[y]){
        // and it's not the first match, add to previous match count
        // else set to 1
        matrix[1][y] = y > 1 ? matrix[0][y-1] + 1 : 1;
        // add substring data to array
        subStrs.push({ "strLength": matrix[1][y], "strPos": c });
      }
      // if they don't match set to 0
      else { matrix[1][y] = 0; }
    }
  }

  // make sub subStrs and sort subStrs by length
  return makeSubStrsFromArr(subStrs, str1);
}
function makeSubStrsFromArr(dataArr, str){
  var subStrArr = [];
  // for each str data
  for (var s = 0; s < dataArr.length; s++){
    var subStr = "";
    var pos = dataArr[s].strPos;
    // for the length of the sub string
    for (var ch = 0; ch < dataArr[s].strLength; ch++){
      // add char to begining of the sub string
      subStr = str[pos-ch] + subStr;
      // if subStr isn't in substrings & subStrArr add it to subStrArr
      if (subStrArr.indexOf(subStr) < 0){ subStrArr.push(subStr); }
    }
  }
  subStrArr.sort(function(a, b){ return a.length - b.length; });
  return subStrArr;
}
//                  TEST
//===========================================
// var str1 = "ello popit";
// var str2 = "Wow it's yello!";
// var CSS  = AllCommonSubStrs(str1, str2);
// console.log("CSS:", CSS);
//===========================================

function CommonFullSubStrs(str1, str2){
  var subStrs = {};
  var matrix = [[],[]];

  // make sure str1 is shorter
  if (str1.length > str2.length){ var temp = str1; str1 = str2; str2 = temp; }
  // make memory
  for (var i = 0; i < str2.length; i++) matrix[1][i] = 0;

  // for each char in str1
  for (var c in str1){
    // copy second row to first
    matrix[0] = matrix[1].slice();

    // for each char in str2
    for (var y in str2){
      // if chars match
      if (str1[c] == str2[y]){
        // and it's not the first match, add to previous match count
        // else set to 1
        matrix[1][y] = y > 1 ? matrix[0][y-1] + 1 : 1;

        // if str is contunuation, remove old subStr
        if (matrix[1][y] > 1) delete subStrs[y-1];
        // add substring data to array
        subStrs[y] = { "strLength": matrix[1][y], "strPos": c };
      }
      // if they don't match set to 0
      else { matrix[1][y] = 0; }
    }
  }

  // make sub subStrsArr and sort subStrsArr by length
  var dirtySubs = makeSubStrsFromObj(subStrs, str1);
  return cleanSubStrs(dirtySubs);
}
function makeSubStrsFromObj(dataObj, str){
  console.log(dataObj);
  var subStrArr = [];
  // for each str data
  for (var d in dataObj){
    var subStr = "";
    var pos = dataObj[d].strPos;
    // for the length of the sub string
    for (var ch = 0; ch < dataObj[d].strLength; ch++){
      // add char to begining of the sub string
      subStr = str[pos-ch] + subStr;
    }
    subStrArr.push(subStr);
  }
  return subStrArr;
}
function cleanSubStrs(arr){
  arr.sort(function(a, b){ return b.length - a.length; });
  for (var i in arr){
    cleanWord(arr, i, arr[i]);
  }
  arr.sort(function(a, b){ return a.length - b.length; });
  return arr;
}
function cleanWord(arr, ind, word){
  if (!word) return;
  for (var i = parseInt(ind)+1; i <= arr.length; i++){
    if (arr[i] == word) {
      arr.splice(i,1);
    }
  }
  cleanWord(arr, ind, word.substring(1, word.length));
  cleanWord(arr, ind, word.substring(0, word.length-1));
}

//                  TEST
//===========================================
// var str1 = "ello popit";
// var str2 = "Wow it's yello!";
// var ACS  = AllCommonSubStrs(str1, str2);
// console.log("ACS:", ACS);
//===========================================

function LongestCommonSubStrFromArr(arr){
  if (arr.length !== 0) {
    if (arr.length > 1){
      // short strings first
      arr.sort(function(a,b){ return a.length - b.length; });

      var commonSubStrs = CommonFullSubStrs(arr[0], arr[1]);
      console.log(commonSubStrs);

      for (var i = 2; i < arr.length; i++){
        while (commonSubStrs[0].length > arr.length){
          arr.pop();
        }
      }

    }
    else return arr[0];
  }
  else return "";
}
//                  TEST
//===========================================
var arr = ["ello build!", "hello world!!", "Wow it's a yello lark!", "would you like some jello?"];
var CSS  = LongestCommonSubStrFromArr(arr);
console.log("LCS:", CSS);
//===========================================
