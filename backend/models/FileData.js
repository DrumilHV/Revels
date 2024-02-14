import mongoose from 'mongoose';

var FileDataSchema = new mongoose.Schema({
    subject_id: {
        type: String,
    },
    dbsource: {
        type: String,
    },
    los : {
        type: String,
    },
    });

    export default FileDataSchema;