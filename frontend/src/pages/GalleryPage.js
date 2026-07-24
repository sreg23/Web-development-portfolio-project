import React from 'react';
import ImageGallery from 'react-image-gallery';

const photos = [
    {
      original: "images/legoland-san-diego.jpg",
      thumbnail: "images/legoland-san-diego.jpg",
      description: "This is a picture of a display I took while vacationing at Legoland in San Diego, California (2022)",
      originalHeight: '400px'
    },
    {
      original: "images/tahiti-ocean-view.jpg",
      thumbnail: "images/tahiti-ocean-view.jpg",
      description: "Tahitian beach located in the commune of Punaauia. My wife and I visted this beach on our honeymoon (2012)",
      originalHeight: '400px'
    },
    {
      original: "images/tahiti-palms.jpg",
      thumbnail: "images/tahiti-palms.jpg",
      description: "This is a picture of some of Tahiti's beautiful landscape I took while out on an excursion with my wife during our honeymoon (2012)",
      originalHeight: '400px'
    },
    {
        original: "images/tahitian-island-hills.jpg",
      thumbnail: "images/tahitian-island-hills.jpg",
      description: "A picture of some beautiful hills on the Island of Mo'orea in French Polynesia. I snapped this photo while on a ferry ride to the island (2012).",
      originalHeight: '400px'
    },
    {
        original: "images/black-sands-beach.jpg",
      thumbnail: "images/black-sands-beach.jpg",
      description: "This is a picture of what I called 'black sands beach' while staying at Le Tahiti Pearl Resort (2012).",
      originalHeight: '400px'
    },
    {
        original: "images/mount-rainier.jpg",
      thumbnail: "images/mount-rainier.jpg",
      description: "An aerial view of Mt. Rainier I captured while flying to Washington State. My wife and I relocated from California to Washington State in the year 2020 for new job and educational opportunities (2020)",
      originalHeight: '400px'
    },
    {
        original: "images/lab-sample.jpg",
      thumbnail: "images/lab-sample.jpg",
      description: "This is a picture of a E. coli culture I took while performing environmental monitoring at a research facility. Before I transitioned to computer science, I use to work as a microbial lab technician for a contract lab (2015)",
      originalHeight: '400px'
    },
    {
        original: "images/code-snippet-methods.png",
      thumbnail: "images/code-snippet-methods.png",
      description: "This Python code snippet shows some methods for a Stack data structure. Specifically, the code shows the methods for push and pop, which when executed will either push anelement onto a stack or remove it (2024)",
      originalHeight: '400px'
    },
    {
        original: "images/code-snippet-conditions.jpg",
      thumbnail: "images/code-snippet-conditions.jpg",
      description: "This Python code snippet shows the conditions required for push or pop methods to execute (2024)",
      originalHeight: '400px'
    },
    {
        original: "images/code-snippet-output.png",
      thumbnail: "images/code-snippet-output.png",
      description: "This is a Python code snippet showing the output generated from running a dynamic stack data structure. The output displays iteration number, values pushed onto the stack, size, and the capacity of the stack (2024)",
      originalHeight: '400px'
    }
   
      
]

function GalleryPage() {
    return (
        <>          
            
            <h2>Image Gallery</h2>
            <p>This is a collection of my projects and memories.</p>
            <article>
                <ImageGallery items={photos} />
            </article>
        </>
    );
    }

    export default GalleryPage;