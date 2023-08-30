// # to make it private , inside class we have methods (walk etc.)
const {express, routes}= require ('./controller')
const path =require('path')
const app = express()
const cors = require('cors')
const cookieParser = require("cookie-parser");
 
const { errorHandling } = require("./middleware/ErrorHandling");
const port = +process.env.PORT || 3300


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});
app.use(
    express.static('./static'),
    cookieParser(),
    express.urlencoded({
        extended:false
    }),
    cors(),
    routes
)
routes.get('^/$|/TechMentorShe', (req, res)=>{
    res.sendFile(path.resolve(__dirname,
        "../api/static/html/index.html"))
})

app.use(errorHandling);

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})






