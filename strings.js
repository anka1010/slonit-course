function capitalizeString(str = "") {
  const initialString = String(str);

  return initialString[0].toUpperCase() + initialString.slice(1).toLowerCase();
}

//--------------------------------

function turncateStringWithEllipsis(str = "", truncLength = 0) {
  const maxLength = truncLength - 3;
  if (maxLength <= 0) return "...";

  const punctuationSymbols = [" ", ".", "!", "?", ":", ";", ","];

  for (let i = maxLength; i >= 0; i--) {
    if (punctuationSymbols.includes(str[i])) {
      return str.slice(0, i) + "...";
    }
  }

  return "...";
}

//--------------------------------

function checkSubstring(str1 = "", str2 = "") {
  return str1.includes(str2) || str2.includes(str1);
}
