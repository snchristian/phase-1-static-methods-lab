class Formatter {
  static capitalize(string){
    return string.substring(0,1).toUpperCase() + string.substring(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-" "']+/g, '',)
  }

static titleize(string) {
  const forbidden = ['a', 'an', 'the','but', 'of', 'and', 'for', 'at', 'by', 'from'];
  const stringArr = string.split(" ");
  const cappedStringArr = stringArr.map(function(word, index){
      if(!forbidden.includes(word) || index === 0) {
        return word.substring(0,1).toUpperCase() + word.substring(1)
    } else {
        return word;
    }

  });
 
     const resultString =  cappedStringArr.join(" ");

  return resultString;


};
}