const { default: axios } = require("axios")
const dotenv = require('dotenv').config()
const key = process.env.appkey

 const getLongLat = async (req,data,err)=>{
    try {

        let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=surat,GJ,IN &limit=1&appid=5f45da6d5e2c02c1946f9b09e5e80be2`   )
      
        
        // data(res.data)
        let lat = res.data[0].lat;
        let lon = res.data[0].lon;

        console.log(lat);
        
        const timestamp = Date.now();
        console.log(timestamp);
        

        let res1= await axios.get(  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f45da6d5e2c02c1946f9b09e5e80be2&units=metric`
)
        
-
        console.log(res1.data);
        data(res1.data)
        

    } catch (error) {
        console.log(error);
        
        err(error)
    }
}

module.exports = getLongLat