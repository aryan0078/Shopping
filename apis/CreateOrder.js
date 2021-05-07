export const CreateOrder = async (params) => {
  let res = await fetch(
    "http://localhost:3001/order/" +
      params.orderid +
      "/createOrder/" +
      params.amount
  );
  return res;
};
