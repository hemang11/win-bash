const {sum} = require('./index'); // extracts only sum function from index

test('Adding two numbers',()=>{
    expect(sum(1,2)).toBe(3);
})

test('Adding two numbers',()=>{
    expect(sum(2,2)).toBe(4);
})


