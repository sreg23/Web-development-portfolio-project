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

        const confirmed = window.confirm(
            "Are you sure you want to delete this bucket list item?"
        );

        if (!confirmed) {
            return;
        }

        const response = await fetch(`${API_URL}/buckets/${_id}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            const getResponse = await fetch(`${API_URL}/buckets`);
            const bucket = await getResponse.json();
            setBuckets(bucket);

            window.alert("Bucket list item was deleted successfully.");
        } else {
            console.error(
                `Failed to delete bucket list item = ${_id}, status code = ${response.status}`
            );
        }
    }

    // LOAD all the buckets
    useEffect(() => {
        loadBuckets();
    }, []);

    // DISPLAY the buckets
    return (
        <>
            <h2>Bucket List Items</h2>
            <article>
            <p className="bucket-description">
                Manage your bucket list by adding, editing, or removing items.
            </p>
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