function spinalCase(str) {
  str = str.replace(/([^A-Za-z])+/g,"-");
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)){
      if(str.charCodeAt(i-1) === 45 || i === 0){
        str = str.replace(str[i],str[i].toLowerCase());
      }else{
        str = str.replace(str[i],"-" + str[i].toLowerCase());
      }
    }else if((str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) && (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122)){
      str = str.replace(str[i],"-");
    }
  }
  console.log(str);
  return str;
}

spinalCase("Teletubbies say Eh-oh");
spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
