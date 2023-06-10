const extendHex = (shortHex) => {
  // write your code here
	  shortHex = shortHex.replace('#', '');

  // Split the hex code into three color components
  let r = shortHex[0];
  let g = shortHex[1];
  let b = shortHex[2];

  // Repeat each color component to get the full hex code
  let fullHex = `#${r}${r}${g}${g}${b}${b}`;

  return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
