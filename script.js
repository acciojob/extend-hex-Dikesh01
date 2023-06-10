const extendHex = (shortHex) => {
  // write your code here
	  hexCode = hexCode.replace('#', '');

  // Split the hex code into three color components
  let r = hexCode[0];
  let g = hexCode[1];
  let b = hexCode[2];

  // Repeat each color component to get the full hex code
  let fullHex = `#${r}${r}${g}${g}${b}${b}`;

  return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
