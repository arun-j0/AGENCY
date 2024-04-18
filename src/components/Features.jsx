import React from 'react';
import { BookOpenCheck, Users, History, CloudUpload, Fullscreen,File } from "lucide-react";

const Features = () => {
 
  const featuresData = [
    {
      icon: <BookOpenCheck />,
      text: "Rich Text Editing and Viewing",
      description: "MyWord offers a comprehensive rich text editing experience, allowing users to format text with ease. With options for bold, italics, underline, font size, color, and more, writers can customize their content to match their style and tone."
    },
    {
      icon: <Users />,
      text: "Real-time Collaboration",
      description: "Collaborate seamlessly with colleagues, clients, or friends in real-time. MyWord's collaboration features enable multiple users to work on a document simultaneously, making it ideal for team projects, group assignments, or brainstorming sessions."
      
    },
    {
      icon: <History />,
      text: "Version History traction",
      description: "Never lose track of changes or revisions with MyWord's version history feature. Users can view and restore previous versions of a document, track edits made by collaborators, and ensure the integrity and accuracy of their work over time."
    },
    {
      icon: <CloudUpload />,
      text: "Cloud Storage Integration",
      description: "Access your documents from anywhere, at any time, with MyWord's cloud storage integration. Sync your files across devices and platforms seamlessly, ensuring that you always have the latest version of your work at your fingertips."
    },
    {
      icon: <Fullscreen />,
      text: "Distraction-free Writing Mode",
      description: "Stay focused and productive with MyWord's distraction-free writing mode. Block out distractions by entering full-screen mode, removing all unnecessary clutter from the interface, and allowing writers to concentrate solely on their work."
    },
    {
      icon: <File />,
      text: "Export to Various Formats",
      description: "MyWord offers flexibility in exporting documents to various formats, including PDF, DOCX, and TXT. Whether you need to share your work with others, print it for reference, or save it for future use, MyWord provides convenient export options to suit your needs."
    },
   
  ];

  return (
    <div className='flex justify-center'> 
      <div className='relative mt-20  min-h-[800px] w-full max-w-4xl'> 
        <div className='text-center'>
          <span className='h-6 px-2 py-1 text-2xl font-medium text-orange-500 uppercase rounded-full bg-neutral-900 sm:text-3xl lg:text-4xl'>features</span>
          <h2 className='mt-5 text-3xl sm:text-5xl lg:text-6xl lg:mt-10'>Elevate your <span className='text-transparent bg-gradient-to-bl from-orange-500 to-red-700 bg-clip-text'> writing experience</span></h2>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-20'>
          {featuresData.map((feature, index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
              <div className='flex'>
                <div className='flex items-center justify-center h-10 p-2 mx-6 text-orange-700 rounded-full bg-neutral-900'>
                  {feature.icon}
                </div>
                <div>
                  <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                  <p className='p-2 mb-20 text-md text-neutral-500'>{feature.description}</p>
                  
                </div>
              </div>
              
            </div>
            
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Features;
