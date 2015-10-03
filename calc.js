/**
 * Ez a fv ...
 * @param aszam bejovo szam
 * @returns {*}
 */
function szamkoverter(aszam) {
  if (aszam === '0') {
    return 42;
  }

  return parseFloat(aszam);
}

var params = process.argv;
if (params.length !== 5) {
  console.log('Nem jo a parameter szam');
  process.exit(0);
}

var a = szamkoverter(params[2]);
var b = szamkoverter(params[3]);

var muvelet = params[4];
muvelet = muvelet.toLowerCase();

var c = 0;

switch (muvelet) {
  case 'osszead':
    c = a + b;
    break;
  case 'kivonas':
    c = a - b;
    break;
  default:
    console.log('nem ismerem a muveletet');
    process.exit(0);
}

console.log(c);
