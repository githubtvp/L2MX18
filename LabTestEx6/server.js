const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'your_database_name';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Endpoint to handle payment processing
    app.post('/processPayment', (req, res) => {
        const { cardNumber, expiryDate, cvv } = req.body;

        // Perform MongoDB query to check if the card number exists in the card_details table
        const cardDetailsCollection = db.collection('card_details');

        cardDetailsCollection.findOne({ cardNumber }, (err, result) => {
            if (err) {
                console.error('Error querying MongoDB:', err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }

            if (result) {
                // Card details found, store transaction details in the transaction table
                const transactionCollection = db.collection('transaction');

                transactionCollection.insertOne({ cardNumber, expiryDate, cvv }, (err) => {
                    if (err) {
                        console.error('Error storing transaction details:', err);
                        res.status(500).json({ message: 'Internal Server Error' });
                        return;
                    }

                    res.json({ message: 'Transaction successful' });
                });
            } else {
                // Card details not found
                res.json({ message: 'Card details not found' });
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
