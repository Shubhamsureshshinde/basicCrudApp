import mongoose from "mongoose";
import autiIncrement from "mongoose-auto-increment"

const userSchema = mongoose.Schema({
    name: String,
    userName: String,
    email: String,
    phone: String
})

autiIncrement.initialize(mongoose.connection);
// userSchema.plugin(autiIncrement.plugin, 'user')
const user = mongoose.model('user', userSchema)
export default user