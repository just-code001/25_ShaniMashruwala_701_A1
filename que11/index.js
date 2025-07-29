function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === reverse(clean);
}

module.exports = {
  capitalize,
  reverse,
  isPalindrome
};
