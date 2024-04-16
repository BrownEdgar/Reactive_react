export default function NFormatter({ number, digits }) {
  const item = { value: 1e3, symbol: "k" };

  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const value = item
    ? (number / item.value)
        .toFixed(digits)
        .replace(regexp, "")
        .concat(item.symbol)
    : "0";

   return <span>{value}</span>;
}