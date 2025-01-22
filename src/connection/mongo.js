import mongoose from "mongoose"

export const mongoConnection = async () => {
    await mongoose.connect()
}