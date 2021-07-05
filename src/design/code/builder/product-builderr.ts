import { Product } from "./product";

export class ProductBuilder {

    private product: Product;
    constructor() {
        this.product = new Product();
    }

    buildPart1(part1: string): ProductBuilder {
        this.product.part1 = part1;
        return this;
    }

    buildPart2(part2: string): ProductBuilder {
        this.product.part2 = part2;
        return this;
    }

    buildPart3(part3: string): ProductBuilder {
        this.product.part3 = part3;
        return this;
    }

    build(): Product {
        return this.product;
    }
}