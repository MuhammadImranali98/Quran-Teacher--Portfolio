import React from "react";

const Content: React.FC = () => {
  const videoUrls: string[] = [
    "https://www.youtube.com/embed/Qqg1pEewEt8",
    "https://www.youtube.com/embed/cdNkuC0IBZs",
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoUrls.map((url, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg">
              <iframe
                width="100%"
                height="315"
                src={url}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
