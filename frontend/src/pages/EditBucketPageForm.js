import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditBucketPageForm = ({ bucketToEdit }) => {

    const [bucketTitle, setBucketTitle] = useState(bucketToEdit.bucketTitle);
    const [bucketActivity, setBucketActivity] = useState(bucketToEdit.bucketActivity);
    const [targetYear, setTargetYear] = useState(bucketToEdit.targetYear);
    const [deadlineDate, setDeadlineDate] = useState(bucketToEdit.deadlineDate.slice(0, 10));
    
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const validate = () => {
        const newErrors = {};

        if (!bucketTitle) {
            newErrors.bucketTitle = 'Title is required';
        }

        if (!bucketActivity) {
            newErrors.bucketActivity = 'Activity is required';
        }

        if (!targetYear || isNaN(targetYear)) {
            newErrors.targetYear = 'Valid target year is required';
        }

        if (!deadlineDate) {
            newErrors.deadlineDate = 'Deadline date is required';
        } else {
            const today = new Date().toISOString().split('T')[0];
            if (deadlineDate < today) {
                newErrors.deadlineDate = 'Deadline date cannot be in the past';
            }
        }

        return newErrors;
    };

    const editBucket = async () => {

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const response = await fetch(`/buckets/${bucketToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                bucketTitle, 
                bucketActivity, 
                targetYear, 
                deadlineDate
            }),
            headers: {'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert(`Bucket list item was updated successfully.`);
            navigate('/buckets');

        } else {
            const errMessage = await response.json();
            alert(`Failed to update bucket list item. Status: ${response.status}. ${errMessage.Error}`);
        }
        
    }

    return (
        <>
        <article>
            <h2>Edit a Bucket List Item</h2>
            <p>Update the details below to edit the bucket list item.</p>
            <form onSubmit={(e) => { e.preventDefault(); editBucket(); }}>
                <fieldset>
                    <legend>Bucket List Details</legend>
                    <label htmlFor="bucketTitle">Title</label>
                    <input
                        type="text"
                        value={bucketTitle}
                        onChange={e => setBucketTitle(e.target.value)} 
                        id="bucketTitle" />

                        {errors.bucketTitle && <p className="error">{errors.bucketTitle}</p>}
                    
                    <label htmlFor="bucketActivity">Activity</label>
                    <input
                        type="text"
                        value={bucketActivity}
                        onChange={e => setBucketActivity(e.target.value)} 
                        id="bucketActivity" />

                        {errors.bucketActivity && <p className="error">{errors.bucketActivity}</p>}

                    <label htmlFor="targetYear">Target Year</label>
                    <input
                        type="number"
                        value={targetYear}
                        onChange={e => setTargetYear(e.target.value)} 
                        id="targetYear" />

                        {errors.targetYear && <p className="error">{errors.targetYear}</p>}

                    <label htmlFor="deadlineDate">Deadline</label>
                    <input
                        type="date"
                        value={deadlineDate}
                        onChange={e => setDeadlineDate(e.target.value)} 
                        id="deadlineDate" />

{errors.deadlineDate && <p className="error">{errors.deadlineDate}</p>}

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
            </form>
        </article>
        </>
    );
}
export default EditBucketPageForm;