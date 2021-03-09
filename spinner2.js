// process.stdout.write('hello from spinner1.js... \rheyyy\n');

//create an array with all the characters, count through them with arr[i]

const spinner = function (array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${array[i]}`);
    }, 100 * i);

  }
};
spinner(["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]);