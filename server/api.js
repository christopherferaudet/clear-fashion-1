const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const db = require('./db');

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});




// Product search, Search for specific product 
app.get('/products/search',async(request,response)=>{
  
  const { brand = 'all', price = 'all', limit = 12 } = request.query;
  let product = await db.find([{'$match': { 'brand': request.params.brand }}]);
  
  response.send({ "product": product})

});


// Products by id
app.get('/products/:id', async (request, response) => {
  //console.log(request.params.id)
  let product = await db.find_by_id(request.params.id)
  
  response.send({ "product": product})
})




app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);
