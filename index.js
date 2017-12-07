var express = require('express');
let app = express();
let Crawler = require('crawler');
let bodyParser = require('body-parser');
let insta_video = require('./routes/insta_video');
let insta_image = require('./routes/insta_image');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {
    res.send('Yea, its Running!');
});

/**
 * @param /instagram/video?url=<Video url>
 */
app.get('/instagram/video', insta_video);

/**
 * @param /instagram/video?url=<Image url>
 */
app.get('/instagram/image', insta_image);

const port = 8080;
app.listen(port, ()=>{
    console.log("Server running at "+port);
});