const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());
app.use(express.json());

const DEPOSIT_ADDRESS = 'TEJeTBHqeqGr2K9eR1q7D9k1g9z7WbKTY9A';
const PORT = process.env.PORT || 10000;

app.get('/', (req,res)=>{
  res.send('Beny Backend is Running! - Global Exchange API');
});

app.get('/health',(req,res)=>{
  res.json({status:'ok'});
});

app.get('/api/deposit/address',(req,res)=>{
  res.json({
    address: DEPOSIT_ADDRESS,
    network: 'TRC20',
    currency: 'USDT',
    qr: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${DEPOSIT_ADDRESS}`
  });
});

app.post('/api/deposit/confirm',(req,res)=>{
  res.json({
    success: true,
    amount: req.body.amount || 100,
    message: 'Deposit confirmed!'
  });
});

app.listen(PORT,()=>{
  console.log(`BENY running on ${PORT}`);
});
