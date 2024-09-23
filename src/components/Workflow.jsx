import React from "react";

const Workflow = () => {
  const steps = [
    {
      title: "Planning & Strategy",
      description: "We will discuss with the client and understand the requirement, business model, new features, and solve client queries.",
      icon: "📐", // Replace with an appropriate icon
    },
    {
      title: "Project Design",
      description: "Our experts come up with all kinds of design idea and layouts and share with a client. as per the client suggestion make new layouts.",
      icon: "📊", // Replace with an appropriate icon
    },
    {
      title: "Execute & Testing",
      description: "After agreeing on the design and plans, we will conduct a development process with suitable technology.",
      icon: "⚙️", // Replace with an appropriate icon
    },
    {
      title: "Deliver result",
      description: "Once development is complete after that our team test everything and Go Live in the client domain.",
      icon: "📋", // Replace with an appropriate icon
    },
  ];

  return (
    <div className="text-center py-16 bg-white">
      <h2 className="text-black font-bold text-4xl">Work Process</h2>
      {/* <h3 className="text-3xl font-bold">How to work it</h3> */}
      <div className="text-center mb-10 py-5 max-w-xl mx-auto">
        <p className="text-3xl italic mb-2">“Keep it simple, stupid (KISS)”</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-black text-white p-4 rounded-full text-3xl mb-4">
              {step.icon}
            </div>
            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
