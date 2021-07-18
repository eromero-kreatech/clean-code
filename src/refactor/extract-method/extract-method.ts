export class ExtractMethod {
  constructor(private prefix: string, private sufix: string) {}

  addPefixAndSuffix(name: string): string {
    let result = "";
    result = name + this.sufix;
    result = this.prefix + result;
    return result;
  }
}
