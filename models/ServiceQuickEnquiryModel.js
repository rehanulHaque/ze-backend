import mongoose from "mongoose";

const serviceQuickEnquirySchema = new mongoose.Schema({
    serviceId: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
});

export const ServiceQuickEnquiry = mongoose.model("servicequickenquiry", serviceQuickEnquirySchema);