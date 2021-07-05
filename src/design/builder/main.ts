import { ProductBuilder } from "./product-builderr";
/**
 * Builder pattern code example
 */
const product = new ProductBuilder()
    .buildPart1("this is part1")
    .buildPart2("this is part2")
    .buildPart3("this is part3").build();
console.log("Builder pattern result")
console.table(product)