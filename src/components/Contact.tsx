import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="space-y-6 opacity-0 animate-fade-in [animation-delay:200ms]">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Let's talk about your project
            </h3>
            <p className="text-gray-600 mb-8">
              I'm interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other requests or
              questions, don't hesitate to use the form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-blue/10 rounded-full text-portfolio-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-blue/10 rounded-full text-portfolio-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-portfolio-blue">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-portfolio-blue/10 rounded-full text-portfolio-blue">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 shadow-md opacity-0 animate-fade-in-right [animation-delay:400ms]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Duudu"
                    required
                    className="border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  required
                  className="border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="I'd like to discuss a project with you..."
                  required
                  className="h-32 border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue/20"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
