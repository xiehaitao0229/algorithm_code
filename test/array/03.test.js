import canPlaceFlowers from '../../code/array/03'

test('canPlaceFlowers:[1,2,3,4,4,3,2,1]', () => {
    expect(canPlaceFlowers([1,0,0,0,1],1)).toBe(true)
})
test('canPlaceFlowers:[1,1,2,2,2,2]', () => {
    expect(canPlaceFlowers([0],1)).toBe(true)
})

test('canPlaceFlowers:[1,1,2,2,2,2]', () => {
    expect(canPlaceFlowers([0],1)).toBe(true)
})
   
test('canPlaceFlowers:[0,0,1,0,0,0,1,0,1,0,0]', () => {
    expect(canPlaceFlowers([0,0,1,0,0,0,1,0,1,0,0],3)).toBe(true)
})

test('canPlaceFlowers:[0,0,1,1,0,0,1,0,1,0,0]', () => {
    expect(canPlaceFlowers([0,0,1,1,0,0,1,0,1,0,0],3)).toBe(false)
})
