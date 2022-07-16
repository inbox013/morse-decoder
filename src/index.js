const MORSE_TABLE = {
   ".-": "a",
   "-...": "b",
   "-.-.": "c",
   "-..": "d",
   ".": "e",
   "..-.": "f",
   "--.": "g",
   "....": "h",
   "..": "i",
   ".---": "j",
   "-.-": "k",
   ".-..": "l",
   "--": "m",
   "-.": "n",
   "---": "o",
   ".--.": "p",
   "--.-": "q",
   ".-.": "r",
   "...": "s",
   "-": "t",
   "..-": "u",
   "...-": "v",
   ".--": "w",
   "-..-": "x",
   "-.--": "y",
   "--..": "z",
   ".----": "1",
   "..---": "2",
   "...--": "3",
   "....-": "4",
   ".....": "5",
   "-....": "6",
   "--...": "7",
   "---..": "8",
   "----.": "9",
   "-----": "0",
};

function decode(expr) {
   let no11 = expr.replace(/11/g, "-");
   let no10 = no11.replace(/10/g, ".");
   let no00 = no10.replace(/00/g, " ");
   let arr = no00.match(/.{1,5}/g);
   let arrNoSpace = arr.map((el) => el.trim());
   for (let i = 0; i < arrNoSpace.length; i++) {
      for (let key in MORSE_TABLE) {
         if (arrNoSpace[i] == key) {
            arrNoSpace[i] = MORSE_TABLE[key];
         }
      }
   }
   let join = arrNoSpace.join("");
   let space = join.replace(/[*]/g, "8");
   let result = space.replace(/8888888888/g, " ");
   return result;
}

module.exports = {
   decode,
};
