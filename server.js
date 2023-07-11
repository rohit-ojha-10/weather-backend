const express = require('express')
const cors = require('cors');
require('dotenv').config()
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000 
const url = `https://api.weatherapi.com/v1/current.json`
app.use(express.json())
app.use(cors())
app.listen(PORT,() => {
    console.log(`Server running at port ${PORT}`)
})
app.post('/weatherupdate',async (req,res) => {
    console.log(req.body);
    let data = { weather : {}};
    try{
        for(let i = 0;i < req.body.cities.length;i++)
        {
            await axios.get(url+`?key=${process.env.API_KEY}&q=${req.body.cities[i]}&aqi=no`)
            .then((resp) => {
                // console.log(resp);
                data.weather[`${req.body.cities[i]}`] = resp.data.current.condition.text;
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
                res.json({error : err});
            })
        
        }
    }
    catch(err) {
        res.send({error:err});
    }
    res.send(data)

}) 