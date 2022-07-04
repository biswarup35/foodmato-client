import * as React from "react";

type Params = {
  price: number[];
  format: string[];
  occasion: string[];
};
const useMakeQueryString = <T extends Params>(params: T) => {
  const [queryString, setQueryString] = React.useState("");
  let { price, format, occasion } = params;

  React.useEffect(() => {
    let priceStr = `?price_gte=${price[0] ?? 0}&price_lte=${price[1] ?? 5000}`;
    let formatStr = format.length > 0 ? `&format_like=${format.join(",")}` : "";
    let occasionStr =
      occasion.length > 0 ? `&occasion_like=${occasion.join(",")}` : "";
    let query = `${priceStr}${formatStr}${occasionStr}`;
    console.log(query);

    setQueryString(query);
  }, [price, format, occasion]);
  return queryString;
};
export default useMakeQueryString;
