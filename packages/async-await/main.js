function addAsPromise(x, y) {
  return Promise.resolve(x + y)
}

async function test() {
  const result = await addAsPromise(10, 20)
  console.log(result);
}

export default function main() {
  test().catch(console.error.bind(console))
}
