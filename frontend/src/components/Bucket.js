import React from 'react';
import { MdDeleteSweep, MdEditNote } from 'react-icons/md';

function Bucket({ bucket, onEdit, onDelete }) {
    return (
        <tr>
            <td title="Please set a title for bucket list item.">
                {bucket.bucketTitle}
            </td>

            <td title="Please specify a bucket list item you would like to complete.">
                {bucket.bucketActivity}
            </td>

            <td title="Please set a target date for bucket list item completion.">
                {bucket.targetYear}
            </td>

            <td title="Please set a final date for bucket list item completion.">
                {bucket.deadlineDate.slice(0, 10)}
            </td>

            <td className="action-buttons">
                <MdEditNote
                    title="Edit"
                    onClick={() => onEdit(bucket)}
                />

                <MdDeleteSweep
                    title="Delete"
                    onClick={() => onDelete(bucket._id)}
                />
            </td>
        </tr>
    );
}

export default Bucket;