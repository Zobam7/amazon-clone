const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Kiy5jBRtDXjneIxy1228LDyYMzT6tmXyxtO11GQIJxnTJcmBxcQHxROdrBz2BpsvDshRzhSEuyDyqW8q2nNBwu500YjMODvnS")


// App Config
const app = express()


//Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payment/create", async (request, response) => {
    const total = request.query.total
    console.log("Payment Request received boom", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)