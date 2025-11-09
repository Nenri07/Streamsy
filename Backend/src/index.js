import connDb from './db/db.js'
import dotenv from "dotenv"
import app from './app.js' 

dotenv.config({
    path: './env'
})

connDb().then(() => {
    app.listen(process.env.PORT || 7200, () => {
        console.log(`Server is running on port ${process.env.PORT || 7200}`);  
    })
})
.catch((error) => {
    console.log(`MongoDB connection failed: ${error}`);
    process.exit(1); 
})