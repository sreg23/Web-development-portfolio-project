import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Reggie Smith's Web Development Portfolio</h2>
            <article>
                <h3>Career Goals</h3>
                <p>
                After the completion of my B.S. in computer science I plan to find a career in 
                artificial intelligence (AI) design and development. To prepare myself for work in this industry
                I am currently learning the fundamentals of machine learning (ML), data science, and deep learning. I'm also
                trying to learn core AI algorithms, natural language processing, and a little about neural networks. I believe
                my studies in computer science here at Oregon State University will be a great platform to reinforce these fundamentals of AI. Also, 
                Python is the core programming language used for the computer sciece major which is also widely used for AI development.
                Once a graduate from college I plan to find an entry-level position or internship in AI/ML to gain practical experience.
                </p>
                <h3>Major technologies used in the creation of this website.</h3>
                <ul>
                <li><strong>React:</strong> A JavaScript library for building user interfaces. It allows for the creation of reusable components and efficient updating and rendering of the UI.</li>
                <li><strong>React Router:</strong> A standard library for routing in React. It enables navigation between different views of various components in a React application, enabling a single-page application (SPA) experience.</li>
                <li><strong>Mongoose:</strong> An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data, ensuring robust data validation and querying capabilities.</li>
                <li><strong>Express:</strong> A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is used to build the backend API that communicates with the MongoDB database.</li>
                <li><strong>MongoDB:</strong> A NoSQL database program that uses JSON-like documents with optional schemas. It is designed for scalability and flexibility, making it ideal for handling large amounts of unstructured data.</li>
                <li><strong>React Icons:</strong> A library that provides a collection of popular icons to use in React applications. It simplifies the process of including icons in the project, ensuring a consistent look and feel.</li>
                <li><strong>CSS:</strong> Cascading Style Sheets (CSS) are used to style the HTML elements. Custom styles are applied to ensure a responsive and visually appealing design.</li>
                <li><strong>HTTP Methods:</strong> The following HTTP methods are used to interact with the backend API:
                    <ul>
                        <li><strong>GET:</strong> Retrieve data from the server. Idempotent and safe.</li>
                        <li><strong>POST:</strong> Send data to the server to create a new resource. Not idempotent and not safe.</li>
                        <li><strong>PUT:</strong> Update an existing resource or create a new resource if it doesn't exist. Idempotent but not safe.</li>
                        <li><strong>PATCH:</strong> Apply partial modifications to a resource. Not idempotent and not safe.</li>
                        <li><strong>DELETE:</strong> Delete a resource on the server. Idempotent but not safe.</li>
                        <li><strong>HEAD:</strong> Retrieve headers of a resource without the body content. Idempotent and safe.</li>
            </ul></li>
            
            <li><strong>MIME Types:</strong> Used to specify the nature and format of a document or file. Examples include:
                    <ul>
                        <li><strong>text/html:</strong> HTML documents.</li>
                        <li><strong>text/css:</strong> CSS files.</li>
                        <li><strong>application/json:</strong> JSON data.</li>
                        <li><strong>image/jpeg:</strong> JPEG images.</li>
                        <li><strong>image/png:</strong> PNG images.</li>
                    </ul>
                </li>
            </ul>
                
            </article>
            </>
            );
        }
        export default HomePage