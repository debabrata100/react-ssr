import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom'
import { routes as Routes } from '../config/routes';
import App from '../src/App';

const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();
const serialize = require('serialize-javascript');
const PORT = 8080;
const staticPath = path.join(__dirname,'..','dist');

app.use(express.static(staticPath));

app.get('/*',(req,res)=>{
    const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
    let promise;
    if(currentRoute.loadData){
        promise = currentRoute.loadData();
    }else{
        promise = Promise.resolve(null);
    }

    promise.then(routeData=>{
        const context = {data: routeData};
        const app = ReactDomServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
            );
        fs.readFile(path.resolve('./dist/index.html'),'utf-8',(err,data)=>{
            if(err){
                console.log("error: ",err);
                res.send('some Error Occured');
            }

            if (context.status === 404) {
                res.status(404);
            }
            if (context.url) {
                return res.redirect(301, context.url);
            }
            res.send(data.replace('<div id="root"></div>',`<div id="root">${app}</div>`).replace(
                '</body>',
                `<script>window.__ROUTE_DATA__ = ${serialize(routeData)}</script></body>`
              ));
        });
    })
})


app.listen(PORT, (err)=>{
    console.log(`Listening to ${PORT}`);
})