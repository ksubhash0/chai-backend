import 'dotenv/config';
import { app } from './app.js';


import connectDb from "./db/index.js";

connectDb().then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log('App Running...')
    })
}).catch((err) => {
    console.log('Database connection failed: ', err)
})