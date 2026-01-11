const originalPrice = 500;
const discountPercentage = 15;  // 15$

const discontValue = (originalPrice * discountPercentage) / 100
const finalPrice = originalPrice - discontValue  

console.log(`--Sistema de Vendas---`);
console.log(`Preço:${originalPrice}`);
console.log(`Desconto : ${discountPercentage}`)
console.log(`Total a pagar : ${finalPrice}`)

