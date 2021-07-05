import { ProductBuilder } from "./product-builderr";

const product = new ProductBuilder().buildPart1("this is part1")
.buildPart2("this is part2")
.buildPart3("this is part3").build();
console.log("Builder pattern")
console.table(product)