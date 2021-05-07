const Razorpay = require("razorpay");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express();
const port = 3001;
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
var jsonParser = bodyParser.json();

router.get("/order/:id/createOrder/:amount", jsonParser, async (req, res) => {
  let instance = new Razorpay({
    key_id: "rzp_test_ScCgguvPf890Jo",
    key_secret: "ZzjLB8FZOTnehJ3wdGfjPnJP",
  });

  let orderDate = {
    amount: req.params.amount * 100,
    currency: "INR",
    receipt: "receipt",
    payment_capture: 1,
  };
  instance.orders.create(orderDate, function (err, order) {
    res.status(200).send(order);
  });
});

router.post("/order/:id/confirm", async (req, res, next) => {
  var newEvent = new Event.model({
    name: req.body.name,
    checkinDate: req.body.checkinDate,
    checkoutDate: req.body.checkoutDate,
    guest: req.body.guest,
    payments: [],
    hotel_id: req.body.hotel_id,
  });

  let payment = {
    amount: req.body.bookingAmount,
    order_id: req.body.order_id,
    payment_id: req.body.payment_id,
  };

  newEvent.payments = [...newEvent.payments, payment];
  await newEvent.save().catch((err) => {
    throw err;
  });
  res.status(200).send(newEvent);
});
router.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
