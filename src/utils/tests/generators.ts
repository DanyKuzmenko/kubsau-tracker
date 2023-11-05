function* uniqueId(): Generator<string> {
  for (let i: number = 0; i < 100; i++) {
    yield 'id' + i;
  }
}

const UNIQUE_ID: Generator<string> = uniqueId();

export { UNIQUE_ID };
