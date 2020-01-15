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



function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

function chunk(array, size = 4) {
  size = Math.max(size, 0)
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

const arySize = BigInt(9999999999999)

const ary1 = (new Array(arySize)).fill(0);
const ary2 = (new Array(arySize)).fill(0);

let start = process.hrtime.bigint();
chunk(ary1)
let end = process.hrtime.bigint();

console.log(`lodash chunk: 基准测试耗时 ${end - start} 纳秒`);

start = process.hrtime.bigint();
splitArray(ary2)
end = process.hrtime.bigint();

console.log(`splitArray: 基准测试耗时 ${end - start} 纳秒`);
