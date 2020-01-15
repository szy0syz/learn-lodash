## (Array) chunk 数组分块函数

### 原来我写的：

```js
const splitArray = (ary, num = 4) =>
  ary.reduce((memo, curt) => {
    const index = memo.length
    if (index === 0) {
      memo[0] = [curt]
    } else if (memo[index - 1].length === num) {
      memo[index] = [curt]
    } else {
      memo[index - 1].push(curt)
    }
    return memo
}, [])
```

### lodash：

```js
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}
```
