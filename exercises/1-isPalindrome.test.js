// Write a function which returns true if the word can be spelled the same forwards and backwards
// or false if not

// Hint: ignore spaces, punctuation and casing with the following function:
const removeSpacesPunctuationAndCasing = (str) =>
  str.toLowerCase().replace(/[^a-z]/ig, '')

const isPalindrome = (str) => {
  return false
}

it('returns true for a short palindrome', () => {
  const result = isPalindrome('poop')
  expect(result).toEqual(true)
})

it('returns false for a short non-palindrome', () => {
  const result = isPalindrome('popo')
  expect(result).toEqual(false)
})

it('returns true for a longer palindrome', () => {
  const result = isPalindrome('Able was I ere I saw Elba')
  expect(result).toEqual(true)
})

it('returns false for a longer non-palindrome', () => {
  const result = isPalindrome('I was able ere I saw Elba')
  expect(result).toEqual(false)
})

it('returns true for a long palindrome', () => {
  const result = isPalindrome('A man, a plan, a canal - Panama!')
  expect(result).toEqual(true)
})

it('returns false for a long non-palindrome', () => {
  const result = isPalindrome('Panama: a man, a plan, a canal!')
  expect(result).toEqual(false)
})
