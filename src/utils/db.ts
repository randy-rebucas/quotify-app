"use server";

import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI!;

const connect = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(MONGODB_URI);
    } catch (error) {
        throw new Error('')
    }
}

export default connect;