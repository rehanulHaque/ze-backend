import mongoose from "mongoose";

const servicePageEnquirySchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    serviceId: {
        require: true,
        type: String
    },
    details: {
        require: true,
        type: String
    },
    phone: {
        require: true,
        type: String
    },
});

export const ServicePageEnquiry = mongoose.model("servicepageenquiry", servicePageEnquirySchema);