const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();

app.use(bodyparser.urlencoded({extended:true}));
//mongodb://127.0.0.1:27017
mongoose.connect('mongodb://127.0.0.1:27017/transactions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mySchema = new mongoose.Schema({
    cardNumber : {
        type : String,
        required : true
    },
    expiryDate : {
        type : String,
        required : true
    },
    cvv : {
        type : String,
        required : true
    }
});

const Payment = new mongoose.model('Payment', mySchema);

router.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.post('/processPayment', async (req, res) => {
    try {
      // Create a new instance of the Payment model with data from req.body
      const payment = new Payment(req.body);
      // Save the payment data to MongoDB
      await payment.save();
      res.send('Transaction successful');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
var portListen = 3000;
app.use('/', router);
app.listen(portListen, ()=>{
    console.log(`Server listening on port '${portListen}'`);
})

