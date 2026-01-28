import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, ArrowRight } from 'lucide-react';
import { profileData } from '../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profileData.email,
      href: `mailto:${profileData.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profileData.phone,
      href: `tel:${profileData.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profileData.location,
      href: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profileData.linkedin
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#302f2c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Let's <span className="text-[#888680]">Connect</span>
          </h2>
          <p className="text-[#888680] mt-4 max-w-2xl mx-auto">
            Interested in discussing cybersecurity opportunities or collaborating on security projects? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="group p-6 bg-[#1a1c1b] rounded-xl border border-[#3f4816]/50 hover:border-[#d9fb06] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#3f4816] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#d9fb06] transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors duration-300" />
                  </div>
                  <p className="text-[#888680] text-sm mb-1">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-[#d9fb06] transition-colors">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="p-8 bg-[#1a1c1b] rounded-2xl border border-[#3f4816]">
              <h3 className="text-xl font-bold text-white mb-4">Open to Opportunities</h3>
              <p className="text-[#888680] mb-6">
                Currently available for full-time cybersecurity roles, consulting projects, and speaking engagements.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-medium">
                  SOC Analyst
                </span>
                <span className="px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-medium">
                  Security Engineer
                </span>
                <span className="px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-medium">
                  Threat Hunter
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-[#1a1c1b] rounded-2xl border border-[#3f4816]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#d9fb06] rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-[#1a1c1b]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#888680]">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#888680] text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816] rounded-lg text-white placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888680] text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816] rounded-lg text-white placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#888680] text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816] rounded-lg text-white placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors"
                    placeholder="Job Opportunity / Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-[#888680] text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816] rounded-lg text-white placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d9fb06] text-[#1a1c1b] rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#1a1c1b] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
