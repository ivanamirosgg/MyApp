const sum = (a,b)=>{
    return a + b
}

test('Suma de 1 + 2 es igual a 3',()=>{
    expect(sum(1,2)).toBe(3)
})