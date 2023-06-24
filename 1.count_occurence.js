
function countWords(sentense) {
    const words = sentense.split(" ");
    const map = new Map();
  
    for (let word of words) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  
    return map;
  }
  
  const sentence = "I am student of electronics and communication engineering";
  console.log(countWords(sentence));
  
  
