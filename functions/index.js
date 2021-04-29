/* eslint-disable no-debugger, no-console */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

/*  eslint max-len: ["error", { "ignoreStrings": true }]*/
const code =
  "sk_test_51IklrCFsqeN1fp755fhkYHHvABdtusWp4M9t2fCSPxtcteEBz0ObNqLfJOfFBCieHA55d2zYMrMyMVJw6NwbNaJG006hynJ3Ts";
const stripe = require("stripe")(code);

//  API

//  API CONFIG
const app = express();

//  MIDDLEWARE
app.use(cors({origin: true}));
app.use(express.json()); // Allows us to pass data in JSON format

//  API ROUTES
app.get("/", (req, res) => res.status(200).send("helloworld"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
});

//  Listen
exports.api = functions.https.onRequest(app);
