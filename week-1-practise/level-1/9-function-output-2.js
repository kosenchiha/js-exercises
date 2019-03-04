function s(w1, w2) {
  return w1.concat(w2);
}

var result = s("code", "your");
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
//  it concatenates the string arguments to the calling string and returns a new string.
// - How many parameters does the function take?
// two
// - What is the function name?
// s
// - Where is the function called? with what parameters?
//  var result = s("code", "your"); two parameters: "code", "your"
// - What does the function return?
//  codeyour
// - How can this function be improved?
// return w1.concat(' ', w2) will add a space between strings
