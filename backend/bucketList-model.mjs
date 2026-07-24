// Models for the bucket Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Cannot connect to database.' });
    } else  {
        console.log('Success: You are now connected to bucket list database.');
    }
});

// SCHEMA: Define the collection's schema.
const bucketListSchema = mongoose.Schema({ 
    bucketTitle: { 
        type: String, 
        required: [true, 'Title is required'],
        trim: true
},
bucketActivity: { 
    type: String, 
    required: [true, 'Activity is required'],
    trim: true
},
targetYear: { 
    type: Number, 
    required: [true, 'Target year is required'],
    min: [2023, 'Target year must be greater than or equal to 2023']
},
deadlineDate: { 
    type: Date, 
    required: [true, 'Deadline date is required'],
    default: Date.now,
    validate: {
        validator: function(value) {
            return value >= new Date().setHours(0,0,0,0);
        },
        message: 'Deadline date cannot be in the past'
    }
}
});

// Compile the model from the schema 
// by defining the collection name "buckets".
const buckets = mongoose.model('Buckets', bucketListSchema);


// CREATE model *****************************************
const createBucketList = async (bucketTitle, bucketActivity, targetYear, deadlineDate) => {
    const bucket = new buckets({ 
        bucketTitle: bucketTitle,
        bucketActivity: bucketActivity, 
        targetYear: targetYear, 
        deadlineDate: deadlineDate 
    });
    return bucket.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveBucketItems = async () => {
    const query = buckets.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveBucketByID = async (_id) => {
    const query = buckets.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteBucketById = async (_id) => {
    const result = await buckets.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateBucketList = async (_id, bucketTitle, bucketActivity, targetYear, deadlineDate) => {
    const result = await buckets.replaceOne({_id: _id }, {
        bucketTitle: bucketTitle,
        bucketActivity: bucketActivity,
        targetYear: targetYear,
        deadlineDate: deadlineDate
    });
    return { 
        _id: _id, 
        bucketTitle: bucketTitle,
        bucketActivity: bucketActivity,
        targetYear: targetYear,
        deadlineDate: deadlineDate 
    }
}

// EXPORT the variables for use in the controller file.
export { createBucketList, retrieveBucketItems, retrieveBucketByID, updateBucketList, deleteBucketById }