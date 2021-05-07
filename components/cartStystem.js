export const cart = () => {
  if (sessionStorage.getItem("devTools")) {
    return JSON.parse(sessionStorage.getItem("devTools"));
  } else {
    sessionStorage.setItem(
      "devTools",
      JSON.stringify({ title: "cart", items: [] })
    );
    return JSON.parse(sessionStorage.getItem("devTools"));
  }
};
export const updateCart = (cart_) => {
  sessionStorage.setItem("devTools", JSON.stringify(cart_));
  return cart_;
};
export const Add = (product) => {
  let cart_ = cart();

  if (cart_["items"].length > 0) {
    for (let index = 0; index < cart_["items"].length; index++) {
      var element = cart_["items"][index];
      if (element.id === product.id) {
        element.quantity = element.quantity + product.quantity;
      } else {
        cart_["items"].push(product);
      }
    }
  } else if (cart_["items"].length == 0) {
    let _ = [];
    _.push(product);
    cart_["items"] = _;
    TotalUpdate(product.price);
  } else {
    let _ = [];
    _.push(product);
    cart_["items"] = _;
    TotalUpdate(product.price);
  }
  updateCart(cart_);
};
export const TotalUpdate = (price) => {
  let cart_ = cart();
  if (cart_["total"]) {
    cart_["total"] += price;
    return updateCart(cart_);
  } else {
    cart_["total"] = price;
    return updateCart(cart_);
  }
};
export const Remove = (product) => {
  let cart_ = cart();

  for (let index = 0; index < cart_["items"].length; index++) {
    const element = cart_["items"][index];
    if (element.id === product.id) {
      cart_["items"].pop(index);
      cart_["total"] = cart_["total"] - product.price * product.quantity;
    }
  }
  if (!cart_["items"]) {
    cart_["items"] = undefined;
    cart_["total"] = undefined;
  }
  return updateCart(cart_);
};
