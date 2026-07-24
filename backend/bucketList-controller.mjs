// Controllers for the bucket Collection

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as buckets from './bucketList-model.mjs';

const PORT = process.env.PORT;
const app = express();

app.use(cors({
    origin: 'https://web-development-portfolio-project-1.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json()); // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/buckets', (req, res) => {
    buckets.createBucketList(
        req.body.bucketTitle,
        req.body.bucketActivity,
        req.body.targetYear,
        req.body.deadlineDate
    )
        .then(bucket => {
            console.log(`"${bucket.bucketTitle}" was added to the collection.`);
            res.status(201).json(bucket);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bucket list was not created.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/buckets', (req, res) => {
    buckets.retrieveBucketItems()
        .then(bucketItems => {
            if (bucketItems !== null) {
                console.log('All bucket items were retrieved from the collection.');
                res.json(bucketItems);
            } else {
                res.status(404).json({
                    Error: 'Requested bucket list item not found'
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({
                Error: 'Bad request, please check parameters are correct.'
            });
        });
});


// RETRIEVE by ID controller
app.get('/buckets/:_id', (req, res) => {
    buckets.retrieveBucketByID(req.params._id)
        .then(bucket => {
            if (bucket !== null) {
                console.log(
                    `"${bucket.bucketTitle}" was retrieved, based on its ID.`
                );
                res.json(bucket);
            } else {
                res.status(404).json({
                    Error: 'Bucket not found, please check ID is correct.'
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({
                Error: 'Bad request, please ensure ID is present and correct.'
            });
        });
});


// UPDATE controller ************************************
app.put('/buckets/:_id', (req, res) => {
    buckets.updateBucketList(
        req.params._id,
        req.body.bucketTitle,
        req.body.bucketActivity,
        req.body.targetYear,
        req.body.deadlineDate
    )
        .then(bucket => {
            console.log(`"${bucket.bucketTitle}" was updated.`);
            res.json(bucket);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({
                Error: 'Bad request, check parameters are correct.'
            });
        });
});


// DELETE controller ******************************
app.delete('/buckets/:_id', (req, res) => {
    buckets.deleteBucketById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(
                    `Based on its ID, ${deletedCount} bucket was deleted.`
                );
                res.status(200).json({
                    Success: 'Delete request successful.'
                });
            } else {
                res.status(404).json({
                    Error: 'Delete request failed, please check ID is correct.'
                });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({
                Error: 'Bad request, bucket item does not exist.'
            });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});