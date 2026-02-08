import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/config.js"
import { errorMiddleware } from "./middleware/error.middleware.js"
import AuthRouter from "./routes/auth.routes.js"
import CategoryRouter from "./routes/category.routes.js"
import ProductRouter from "./routes/product.routes.js"
import SavedRouter from "./routes/saved.routes.js"
import cookieParser from "cookie-parser"
import orderRouter from "./routes/order.routes.js"
const app = express()
dotenv.config()


app.use(cors())
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 3000

//router
app.use(AuthRouter)
app.use(CategoryRouter)
app.use(ProductRouter)
app.use(SavedRouter)
app.use(orderRouter)

app.use(errorMiddleware)
connectDB()
app.listen(PORT, ()=> {
    console.log(`server is running at: ${PORT}`);
})