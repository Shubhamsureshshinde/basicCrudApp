import mongoose from "mongoose"

// mongoose is used to the databse


const connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-tspqojs-shard-00-00.jslgdg8.mongodb.net:27017,ac-tspqojs-shard-00-01.jslgdg8.mongodb.net:27017,ac-tspqojs-shard-00-02.jslgdg8.mongodb.net:27017/?ssl=true&replicaSet=atlas-116id8-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })

    } catch (err) {
    }
}

export default connection