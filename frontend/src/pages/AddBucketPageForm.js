import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || '';

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

export const AddBucketPageForm = () => {

    const [bucketTitle, setBucketTitle] = useState('');
    const [bucketActivity, setBucketActivity] = useState('');
    const [targetYear, setTargetYear] = useState('');
    const [deadlineDate, setDeadlineDate] = useState(new Date().toISOString().slice(0, 10));

    const navigate = useNavigate();

    const addBucket = async () => {
        const newBucket = { bucketTitle, bucketActivity, targetYear, deadlineDate };

        const response = await fetch(`${API_URL}/buckets`, {
            method: 'POST',
            body: JSON.stringify(newBucket),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert('Bucket list item was added successfully.');
        } else {
            alert(`Failed to add bucket list item. Status: ${response.status}`);
        }

        navigate("/buckets");
    };

    return (
        <>
            <article>
                <h2>Add a Bucket List Item</h2>
                <p>Fill in the details below to add a new bucket list item.</p>

                <form onSubmit={(e) => { e.preventDefault(); addBucket(); }}>
                    <fieldset>
                        <legend>Bucket List Details</legend>

                        <label htmlFor="bucketTitle">Title</label>
                        <input
                            type="text"
                            placeholder="Title of the bucket list item"
                            value={bucketTitle}
                            onChange={e => setBucketTitle(e.target.value)}
                            id="bucketTitle"
                        />

                        <label htmlFor="bucketActivity">Activity</label>
                        <input
                            type="text"
                            placeholder="Activity of the bucket list item"
                            value={bucketActivity}
                            onChange={e => setBucketActivity(e.target.value)}
                            id="bucketActivity"
                        />

                        <label htmlFor="targetYear">Target Year</label>
                        <input
                            type="number"
                            value={targetYear}
                            placeholder="Target Year for the activity"
                            onChange={e => setTargetYear(e.target.value)}
                            id="targetYear"
                        />

                        <label htmlFor="deadlineDate">Deadline</label>
                        <input
                            type="date"
                            value={deadlineDate}
                            onChange={e => setDeadlineDate(e.target.value)}
                            id="deadlineDate"
                        />

                        <label htmlFor="submit">
                            <button
                                type="submit"
                                id="submit"
                            >
                                Add
                            </button>{" "}
                            to the collection
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
};

export default AddBucketPageForm;