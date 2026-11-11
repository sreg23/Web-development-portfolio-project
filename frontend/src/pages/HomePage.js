import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Full-Stack MERN Bucket List Application</h2>

            <article>
                <h3>Project Overview</h3>

                <p>
                    This project is a full-stack web application built with the MERN stack:
                    MongoDB, Express, React, and Node.js. The application allows users to create,
                    view, edit, and delete bucket list items through a responsive React interface
                    backed by a RESTful API and persistent MongoDB database.
                </p>

                <p>
                    The project demonstrates full-stack application development, client-side
                    routing, reusable React components, API communication, database persistence,
                    responsive design, form validation, and CRUD operations.
                </p>

                <h3>Technology Stack</h3>

                <ul>
                    <li>
                        <strong>React:</strong> Builds the user interface using reusable components
                        and state-driven rendering.
                    </li>

                    <li>
                        <strong>React Router:</strong> Provides client-side navigation between
                        application pages without requiring full page reloads.
                    </li>

                    <li>
                        <strong>Node.js:</strong> Runs the server-side JavaScript environment used
                        by the backend.
                    </li>

                    <li>
                        <strong>Express:</strong> Provides the REST API used by the React frontend
                        to create, retrieve, update, and delete bucket list data.
                    </li>

                    <li>
                        <strong>MongoDB:</strong> Provides persistent NoSQL storage for bucket list
                        records.
                    </li>

                    <li>
                        <strong>Mongoose:</strong> Handles data modeling and interaction between
                        the Node.js backend and MongoDB.
                    </li>

                    <li>
                        <strong>React Icons:</strong> Provides reusable interface icons for actions
                        such as adding, editing, and deleting records.
                    </li>

                    <li>
                        <strong>CSS:</strong> Provides the responsive layout, visual styling,
                        translucent interface panels, navigation behavior, and mobile-friendly
                        presentation.
                    </li>
                </ul>

                <h3>Application Features</h3>

                <ul>
                    <li>Create new bucket list items.</li>
                    <li>Retrieve and display stored bucket list records.</li>
                    <li>Edit existing items with form validation.</li>
                    <li>Delete items with confirmation and success feedback.</li>
                    <li>Persist application data using MongoDB.</li>
                    <li>Communicate with the backend through REST API requests.</li>
                    <li>Navigate between views using React Router.</li>
                    <li>Adapt the interface across desktop, tablet, and mobile screen sizes.</li>
                </ul>
            </article>
        </>
    );
}

export default HomePage;