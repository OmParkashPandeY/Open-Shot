// ------------------------------------------------------------------------------------------------------

const express = require('express');

const app = new express();

const port = process.env.PORT || 7206;

// -------------------------------------------------------------


       app.get("/",(Request , Response)=>
       {
            Response.send("This is Home Page");
       });

       app.get("/home",(Request , Response)=>
       {
            Response.send("This is Home Page");
       });

       app.get("/lession",(Request , Response)=>
       {
            Response.send("This is Home Page");
       });



// -------------------------------------------------------------

app.listen(port,()=>
{
    console.warn("7206 Port number are proper working");
});