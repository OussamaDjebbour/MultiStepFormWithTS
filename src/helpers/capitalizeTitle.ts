function capitalizeTitle(str: string) {
  const words = str.split(' ');

  return words[0].charAt(0).toUpperCase() + words[0].slice(1);
}

export default capitalizeTitle;
