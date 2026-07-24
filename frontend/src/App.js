import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import GalleryPage from "./pages/GalleryPage.js"
import './App.css';
import ScrollToTop from "./ScrollToTop";
import BucketListPage from './pages/BucketListPage.js';
import AddBucketPageForm from './pages/AddBucketPageForm.js';
import EditBucketPageForm from './pages/EditBucketPageForm.js';
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import OrderPage from './pages/OrderPage';

function App() {
    const [bucket, setBucketToEdit] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <header className="App-header">
                    <h1>Reggie Smith <img id="logo" src="android-chrome-192x192.png" alt="logo" />
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </h1>
                    <p>This website is a comprehensive platform built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to manage a bucket list by adding,
                        editing, and deleting items. The front-end is developed using React for a dynamic and responsive user interface, while the back-end uses Express and Node.js
                        to handle API requests and MongoDB for data storage.</p>
                </header>

                <Navigation />

                <main>
                    <section className="App-article">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/gallery" element={<GalleryPage />} />
                            <Route path="/topics" element={<TopicsPage />} />
                            <Route path="/buckets" element={<BucketListPage setBucket={setBucketToEdit} />} />
                            <Route path="/create" element={<AddBucketPageForm />} />
                            <Route path="/update" element={<EditBucketPageForm bucketToEdit={bucket} />} />
                            <Route path="/order" element={<OrderPage />} />
                        </Routes>
                    </section>
                </main>

                <footer>
                    <p><cite>&copy;Reggie Smith 2024</cite></p>
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;