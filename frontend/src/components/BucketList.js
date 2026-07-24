
//import React from 'react';


import Bucket from './Bucket'; // Correctly import the Bucket component
import TableHead from './TableHead';

function BucketList({ buckets, onEdit, onDelete }) {
    return (
        <div>
            <table id="buckets">
                <caption>Add and Edit Bucket List Items </caption>
               <TableHead />
                <tbody>
                    {buckets.map((bucket, i) => (
                        <Bucket 
                            bucket={bucket} 
                            key={i}
                            onDelete={onDelete}
                            onEdit={onEdit} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BucketList;