import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle } from "react-icons/md";


function TableHead(){
    return (
        <thead>
            <tr>
            <th>Title</th>
                    <th>Activity</th>
                    <th>Target Year</th>
                    <th>Deadline</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="../create"><i><MdAddCircle title="Add Bucket List Item"></MdAddCircle></i></Link></th>
            </tr>
        </thead>
    );
}
export default TableHead;