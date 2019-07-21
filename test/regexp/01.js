import repeatedSubstringPattern from '../../code/regexp0/1'

test('repeatedSubstringPattern:abcabcd', () => {
    expect(repeatedSubstringPattern('abcabcd')).toBe(false)
})
test('repeatedSubstringPattern:abab', () => {
    expect(repeatedSubstringPattern('abab')).toBe(true)
})


