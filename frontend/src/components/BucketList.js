import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';

import Bucket from './Bucket';
import TableHead from './TableHead';

function BucketList({ buckets, onEdit, onDelete }) {
    return (
        <div className="bucket-list-container">
            <div className="bucket-toolbar">
                <h3>Bucket List Manager</h3>

                <Link className="add-bucket-button" to="/create">
                    <MdAddCircle />
                    <span>Add Item</span>
                </Link>
            </div>

            <div className="table-wrapper">
                <table id="buckets">
                    <TableHead />

                    <tbody>
                        {buckets.map((bucket) => (
                            <Bucket
                                bucket={bucket}
                                key={bucket._id}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BucketList;