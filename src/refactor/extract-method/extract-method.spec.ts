import { expect } from "chai";
import { ExtractMethod } from "./extract-method";

describe("addPrefixAndSuffix", () => {
  const prefix = "Prefix";
  const sufix = "Sufix";

  it("shouldAddPrefixAndSuffixWhenNotEmptyName", () => {
    const name = "Name";
    const extractMethod = new ExtractMethod(prefix, sufix);
    const result = extractMethod.addPefixAndSuffix(name);
    expect(result).to.equals(prefix + name + sufix);
  });

  it("shouldBePrefixAndSuffixWhenEmpty", () => {
    const name = "";
    const extractMethod = new ExtractMethod(prefix, sufix);
    const result = extractMethod.addPefixAndSuffix(name);
    expect(result).to.equals(prefix + sufix);
  });

  it("shouldAddSuffixWhenEmptyPrefix", () => {
    const name = "name";
    const extractMethod = new ExtractMethod("", sufix);
    const result = extractMethod.addPefixAndSuffix(name);
    expect(result).to.equals(name + sufix);
  });

  it("shouldAddPrefixWhenEmptySufix", () => {
    const name = "name";
    const extractMethod = new ExtractMethod(prefix, "");
    const result = extractMethod.addPefixAndSuffix(name);
    expect(result).to.equals(prefix + name);
  });
});
