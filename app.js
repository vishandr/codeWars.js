function isIsogram(str){
  let result;
  for (let i=0; i < str.length; i++) {
  let newString = str.slice(i+1);
  let compare = str[i];
  

  if (newString.includes(compare) == true) {
    result = false;
    break;
  }
  else {
    result = true;
  }
  }
  console.log(result)
}


isIsogram("ada")

