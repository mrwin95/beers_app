const mongoose = require('mongoose');
/**
 * 
 */
const LogSchema = new mongoose.Schema({
    userId: String,
    logTime: Date,
    details: String
});

export default mongoose.model("Log", LogSchema);