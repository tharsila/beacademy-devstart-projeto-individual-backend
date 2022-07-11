export const TextService = {
  limitText(text, maxLength) {
    if(text.length < maxLength) {
      return text;
    }

    return text.slice(0, maxLength) + '...';
  }
}