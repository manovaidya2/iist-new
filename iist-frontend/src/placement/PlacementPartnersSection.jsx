import React from "react";

export default function PlacementPartnersSection() {
  const partners = [
    {
      name: "Marriott International",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbqfTQw_iV0eqJhX9aYCK3cubofkYxsnLkw&s",
    },
    {
      name: "Hilton Hotels",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZoo2hapPT1XbYyagzxj2SQBqtKn-TjQojw&s",
    },
    {
      name: "Emirates Airlines",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png",
    },
    {
      name: "Apollo Hospitals",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Apollo_Hospitals_Logo.svg/1122px-Apollo_Hospitals_Logo.svg.png",
    },
    {
      name: "L'Oréal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1280px-L%27Or%C3%A9al_logo.svg.png",
    },
    {
      name: "Zara",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    },
    {
      name: "TCS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    },
    {
      name: "Mahindra Group",
      logo: "https://www.carlogos.org/logo/Mahindra-logo-2560x1440.png",
    },
    {
      name: "Reliance Industries",
      logo: "https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png",
    },
    {
      name: "Tata Motors",
      logo: "https://listcarbrands.com/wp-content/uploads/2017/10/2017-logo-Tata-Motors.jpg",
    },
    {
      name: "Siemens",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siemens_AG_logo.svg/2560px-Siemens_AG_logo.svg.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8fbff] to-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a4e92] mb-4">
          Our Placement Partners
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          We collaborate with world-class brands and organizations to help our
          students launch successful global careers.
        </p>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-2"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
