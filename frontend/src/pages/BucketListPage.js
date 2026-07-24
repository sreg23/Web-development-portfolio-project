import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import BucketList from '../components/BucketList'; // Correctly import BucketList component
const API_URL = process.env.REACT_APP_API_URL || '';



function BucketListPage({ setBucket }) {
    // Use the Navigate for redirection
    const navigate = useNavigate();

    // Use state to bring in the data
    const [buckets, setBuckets] = useState([]); // Initialize with an empty array

    // RETRIEVE the entire list of buckets
    const loadBuckets = async () => {
        const response = await fetch(`${API_URL}/buckets`);
        const buckets = await response.json();
        setBuckets(buckets);
    }

    // UPDATE a single bucket
    const onEditBucket = async bucket => {
        setBucket(bucket);
        navigate("/update");
    }

    // DELETE a single bucket
    const onDeleteBucket = async _id => {
        const response = await fetch(`${API_URL}/buckets/${_id}`, {
            method: 'DELETE'
        });
        if (response.status === 200) {
            const getResponse = await fetch(`${API_URL}/buckets`);
            const buckets = await getResponse.json();
            setBuckets(buckets);
        } else {
            console.error(`Failed to delete bucket list item = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the buckets
    useEffect(() => {
        loadBuckets();
    }, []);

    // DISPLAY the buckets
    return (
        <>
            <h2>List of Bucket List Items</h2>
            <article>
            <p>Click on plus, edit or delete icons to update your bucket list.</p>

            <BucketList
                buckets={buckets}
                onEdit={onEditBucket}
                onDelete={onDeleteBucket}
            />
            </article>
        </>
    );
}

export default BucketListPage;