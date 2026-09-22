const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const ehPar = (n) => n % 2 === 0;

test('1. Deve somar dois numeros', () => {
    expect(somar(2, 3)).toBe(5);
});

test('2. Deve subtrair dois numeros', () => {
    expect(subtrair(10, 4)).toBe(6);
});

test('3. Deve multiplicar dois numeros', () => {
    expect(multiplicar(3, 3)).toBe(9);
});

test('4. Deve dividir dois numeros', () => {
    expect(dividir(8, 2)).toBe(4);
});

test('5. Deve verificar se o numero eh par', () => {
    expect(ehPar(4)).toBe(true);
});
