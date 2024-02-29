// Import necessary dependencies
import React from "react";

// Define the Content component
const Content: React.FC = () => {
  // Array of video URLs
  const videoUrls: string[] = [
    "https://www.example.com/video1.mp4",
    "https://www.example.com/video2.mp4",
    // Add more video URLs as needed
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through the array of video URLs and render video elements */}
          {videoUrls.map((url, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg">
              <video controls className="w-full">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
