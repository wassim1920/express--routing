
const express = require('express');
const app = express();


const workingHoursMiddleware = require('./middleware');

app.use(workingHoursMiddleware);


app.get("/" , (req , res )=>{
  res.send("home")
})
app.get('/contact', (req, res) => {
  res.send("contact");
});
app.get('/services', (req, res) => {
  res.send("services");
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
