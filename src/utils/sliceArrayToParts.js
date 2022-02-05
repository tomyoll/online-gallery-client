export default function sliceArrayToParts(array, parts) {
  let len = array.length,
    out = [],
    i = 0,
    size;

  while (i < len) {
    size = Math.ceil((len - i) / parts--);
    out.push(array.slice(i, i += size));
  }
  console.log(out)
  return out;
}
