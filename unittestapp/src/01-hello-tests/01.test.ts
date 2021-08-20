import {mult, splitIntoWords, sum} from "./01";

test('sum shoud be correct', () => {

    //data
    const a = 1
    const b = 2
    const c = 3

    //action

    const result = sum(a, b)

    //expected result

    expect(result).toBe(c)
})

test ('multiply shoud be correct', () => {

    //data
    const a = 1
    const b = 2
    const c = 3

    //action

    const result1 = mult(a, b)
    const result2 = mult(a, c)

    //expected result

    expect(result1).toBe(2)
    expect(result2).toBe(3)
})

test('splitIntoWords should be correct', () => {
    const sent1 = 'hello my friends'
    const sent2 = 'I love JS!'

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //expected result

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(3)
    expect(result2[0]).toBe('i')
    expect(result2[1]).toBe('love')
    expect(result2[2]).toBe('js')

})