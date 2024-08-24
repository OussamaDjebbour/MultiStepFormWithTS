function transformString(str: string) {
  const words = str.split(' ');

  if (words.length < 2) {
    // If there's only one word, just apply the lowercase transformation to the first letter
    return words[0].charAt(0).toLowerCase() + words[0].slice(1);
  }

  // Transform the first word: first letter lowercase
  const firstWord = words[0].charAt(0).toLowerCase() + words[0].slice(1);

  // Transform the second word: first letter uppercase
  const secondWord = words[1].charAt(0).toUpperCase() + words[1].slice(1);

  // Join the transformed words with the rest of the string (if there are more than two words)
  return firstWord + secondWord + words.slice(2).join(' ');
}

export default transformString;
