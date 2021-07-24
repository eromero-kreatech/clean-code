export class Order {
  constructor(
    public id: string,
    public number: number,
    public error?: boolean
  ) {}
}
