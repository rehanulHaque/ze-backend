import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import EnquiryDataRoute from "./routes/EnquiryDataRoute.js"
import ProductPageEnquiryRoute from "./routes/ProductPageEnquiryRoute.js"
import ProductQuickEnquiryRoute from "./routes/ProductQuickEnquiryRoute.js"
import ServiceQuickEnquiryRoute from "./routes/ServiceQuickEnquiryRoute.js"
import ServicePageEnquiryRoute from "./routes/ServicePageEnquiryRoute.js"
const app = express()

app.use(cors({
    methods: ["POST", "GET"],
    origin: ["https://ze-enterprice.vercel.app/", "http://localhost:3000"]
}))

app.use(express.json())

app.use("/api/enquiryData", EnquiryDataRoute)
app.use("/api/productenquiry", ProductPageEnquiryRoute)
app.use("/api/productquickenquiry", ProductQuickEnquiryRoute)
app.use("/api/serviceenquiry", ServicePageEnquiryRoute)
app.use("/api/servicequickenquiry", ServiceQuickEnquiryRoute)

app.listen(process.env.PORT, () => console.log('Service Running'))