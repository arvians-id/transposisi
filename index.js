function Transposisi(str, key) {
  this.str = str;
  this.key = key;
  console.log("PlainText = " + this.str);
}

Transposisi.prototype.encryption = function () {
  const plainText = this.str.split(" ");
  let temp = "";
  let result = "";
  let addtionalString = "";
  let checkString = "";
  plainText.forEach((element) => {
    temp += element;
  });
  const x = temp.length % this.key;
  const z = (x > this.key ? x : this.key) - (x < this.key ? x : this.key);
  if (z != 0) {
    for (let j = 0; j < z; j++) {
      addtionalString += ".";
    }
    checkString = temp + addtionalString;
  } else {
    checkString = temp;
  }
  for (let i = 0; i < this.key; i++) {
    let counter = i;
    while (counter < checkString.length) {
      result += checkString[counter];
      counter += this.key;
    }
  }
  return result;
};

Transposisi.prototype.decryption = function () {
  let results = "";
  let string = this.encryption();
  let strlen = string.length / this.key;
  for (let i = 0; i < Math.ceil(strlen); i++) {
    let counter = i;
    while (counter < string.length) {
      results += string[counter];
      counter += Math.ceil(strlen);
    }
  }
  return results;
};

console.log("CHIPER TRANSPOSISI");
const result = new Transposisi("WIDDY ARFIANSYAH", 3);
console.log("Enkripsi = " + result.encryption());
console.log("Dekripsi = " + result.decryption());
