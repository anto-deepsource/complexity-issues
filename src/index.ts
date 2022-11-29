class StringMatch extends Matcher {
  // skipcq: JS-0323 Any type can be passed to an ESLint rule schema
  constructor(public readonly name: any, private readonly pattern: RegExp) {
    super();
  }

  public test(actual: any): MatchResult {
    const result = new MatchResult(actual);
    if (!actual.match(this.pattern)) {
      result.recordFailure({
        matcher: this,
        path: [],
        message: `Expected ${this.pattern} but received ${actual}`,
      });
    }
    return result;
  }
}
