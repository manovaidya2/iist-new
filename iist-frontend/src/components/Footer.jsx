import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a4e92] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-blue-400 pb-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-3">
            <img
              src="/logo.png"
              alt="IISD Logo"
              className="w-12 h-12 mr-3"
            />
            <div>
              <h3 className="text-2xl font-bold">IISD</h3>
              <p className="text-sm text-blue-200">
                International Institute of Skill Development
              </p>
            </div>
          </div>

          <p className="text-blue-100 text-sm leading-relaxed mb-5">
            Empowering global learners with industry-relevant skills and internationally recognized
            certifications. Accredited by eduglobe education UAE.
          </p>

          <div className="flex space-x-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-[#115eb3] hover:bg-[#0b4d99] p-3 rounded-md transition"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Programs</a></li>
            <li><a href="#" className="hover:text-white">Accreditation</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li><a href="#" className="hover:text-white">Computer Science & IT</a></li>
            <li><a href="#" className="hover:text-white">Business Management</a></li>
            <li><a href="#" className="hover:text-white">Healthcare Management</a></li>
            <li><a href="#" className="hover:text-white">Teacher Training</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li><a href="#" className="hover:text-white">Student Portal</a></li>
            <li><a href="#" className="hover:text-white">Center Portal</a></li>
            <li><a href="#" className="hover:text-white">Placement Cell</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-6 text-blue-100 text-sm  border-blue-400">
        <div className="flex items-start space-x-3">
          <Mail className="text-yellow-400 w-5 h-5 mt-1" />
          <div>
            <h5 className="font-semibold text-white">Email</h5>
            <p>info@iisd.edu</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="text-yellow-400 w-5 h-5 mt-1" />
          <div>
            <h5 className="font-semibold text-white">Phone</h5>
            <p>+91-8130543714</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="text-yellow-400 w-5 h-5 mt-1" />
          <div>
            <h5 className="font-semibold text-white">Location</h5>
            <p>Global Headquarters</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-blue-200 text-sm mt-6">
        <p>© 2025 International Institute of Skill Development. All rights reserved.</p>
        <p>Accredited by eduglobe education UAE</p>
      </div>
    </footer>
  );
}
