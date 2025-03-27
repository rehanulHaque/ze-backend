import {Productquickenquiry} from "../models/ProductQuickEnquiryModel.js"
import express from "express"
import connectToDB from"../lib/connectToDB.js"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        await connectToDB();
        // Create enquiry with validated data
        const newEnquiry = await Productquickenquiry.create(req.body);
    
        // Successful response
        return res.status(201).json({
          message: "Query Sent Successfully", 
          success: true,
          enquiryId: newEnquiry._id
        });
    
      } catch (error) {    
        // Log the full error for server-side tracking
        console.error('Enquiry submission error:', error);
    
        // Generic error response
        return res.status(500).json({
          message: "Query Submission Failed", 
          success: false
        });
      }
})

router.get("/", async (req, res) => {
    try {
        await connectToDB();
        const data = await Productquickenquiry.find()
        res.json({message: "Query Fetched Successfully", success: true, data})
    } catch (error) {    
        // Log the full error for server-side tracking
        console.error('Enquiry submission error:', error);
    
        // Generic error response
        return res.status(500).json({
          message: "Query Submission Failed", 
          success: false
        });
      }
})

export default router