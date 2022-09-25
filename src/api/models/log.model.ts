const mongoose = require('mongoose');
const LogSchema = new mongoose.Schema({
    userId: {
        type: String        
    },
    logTime: {
        type: Date
    },
    details: {
        type: String,        
    }
});
export default mongoose.model("Log", LogSchema);