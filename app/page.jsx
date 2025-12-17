"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Beer, Calendar, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const NorthpointSportsBar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const bookTable = () => {
    const message = "Hi! I'd like to book a table at Northpoint Sports Bar. Please let me know availability.";
    window.open(`https://wa.me/254715555503?text=${encodeURIComponent(message)}`, '_blank');
  };

  const menuItems = {
    drinks: [
      { name: "Tusker Lager", price: "KSh 300", desc: "Ice cold local favorite" },
      { name: "WhiteCap lager", price: "KSh 300", desc: "warm and refreshing" },
      { name: "Mojito", price: "KSh 700", desc: "Fresh mint and lime" },
      { name: "Local Spirits", price: "KSh 1200", desc: "Premium local selection" },
      { name: "Jack Daniels 700ML", price: "KSh 5500", desc: "Classic WHISKY" },
      { name: "Martel vsop 1000ML", price: "KSh 13500", desc: "Premium Whisky" },
      { name: "John Walker", price: "KSh 4500", desc: "whisky cocktails" },
      { name: "Drosty hoff", price: "KSh 1500", desc: "Refreshing and fruity" }

    ],
    food: [
      { name: "Nyama Choma", price: "KSh 1200", desc: "Grilled meat with sides" },
      { name: "Wet fry", price: "KSh 1200", desc: "tasty wet fry with ugali/fries" },
      { name: "Matumbo", price: "KSh 800", desc: "Spicy buffalo style" },
      { name: "2 Samosas", price: "KSh 800", desc: "Crispy pastries with filling" },
      { name: "Liver", price: "KSh 800", desc: "Deliciously cooked liver" },
      { name: "Chips", price: "KSh 150", desc: "Golden, crispy fries" },
      { name: "Accomplishment (Ugali + Greens)", price: "KSh 100", desc: "Spicy greens" }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="/images/logo.png" 
              alt="Northpoint Sports Bar Logo"
              className="mx-auto w-32 h-32 md:w-40 md:h-40 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold tracking-wider mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            NORTHPOINT
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-orange-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            SPORTS BAR
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Drinks • Food • Pool • Live Sports
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button onClick={bookTable} className="text-xl px-10 py-4 mr-4">Book a Table</Button>
            <Button onClick={() => scrollToSection('menu')} className="text-xl px-10 py-4 bg-transparent border-2 border-orange-600 hover:bg-orange-600">View Menu</Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            North Point Sports Bar is Lang'ata's premier destination for sports, entertainment, and great food. 
            Our vibrant atmosphere combines the thrill of live sports with exceptional dining, cold drinks, 
            and exciting pool games. Whether you're catching the big game, challenging friends to pool, 
            or enjoying our signature cocktails, North Point delivers an unforgettable experience.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Live Sports", desc: "Multiple big screens showing EPL, La Liga, Champions League and local matches" },
              { icon: Beer, title: "Drinks & Food", desc: "Premium beers, crafted cocktails, spirits and delicious Kenyan cuisine" },
              { icon: Calendar, title: "Pool & Entertainment", desc: "Professional pool tables, music nights and vibrant club atmosphere" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 hover:border-orange-600 transition-colors">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="mx-auto mb-6 w-12 h-12 text-orange-500" />
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Menu
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Drinks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Drinks</h3>
            <div className="space-y-4">
              {menuItems.drinks.map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                      <span className="text-orange-500 font-bold">{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          
          {/* Food */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Food</h3>
            <div className="space-y-4">
              {menuItems.food.map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                      <span className="text-orange-500 font-bold">{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bookings & Reservations */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Book Your Table
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Reserve your spot for the big game or plan your night out with friends
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3">
              <Phone className="text-orange-500" />
              <span>0715555503</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="text-orange-500" />
              <span>Near Langata High School</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="text-orange-500" />
              <span>24/7</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button onClick={bookTable} className="text-xl px-8 py-4 bg-green-600 hover:bg-green-500">
              <MessageCircle className="mr-2" />
              Book via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { src: "/images/gallery1.jpg", fallback: "https://images.unsplash.com/photo-1574391884720-bbc428f27267?w=800", alt: "Northpoint Sports Bar Interior", span: "md:col-span-2 md:row-span-2" },
            { src: "/images/gallery2.jpg", fallback: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400", alt: "Pool Table" },
            { src: "/images/gallery3.jpg", fallback: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400", alt: "Bar & Drinks" },
    
            { src: "/images/gallery5.jpg", fallback: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400", alt: "Food & Meals" },
            { src: "/images/gallery6.jpg", fallback: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400", alt: "Bar Atmosphere" },
            { src: "/images/gallery7.jpg", fallback: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400", alt: "Cocktails" },
            { src: "/images/gallery8.jpg", fallback: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", alt: "Entertainment" }
          ].map((image, index) => (
            <div key={index} className={`rounded-lg overflow-hidden aspect-square ${image.span || ''}`}>
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.src = image.fallback; }}
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Find Us
          </motion.h2>
          <motion.div 
            className="bg-gray-800 rounded-lg overflow-hidden h-96"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.437242748!2d36.72191!3d-1.35210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde08!2sLangata%20High%20School!5e0!3m2!1sen!2ske!4v1640000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Northpoint Sports Bar - Near Langata High School"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="Northpoint Sports Bar Logo"
                  className="w-12 h-12 mr-3 object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <h3 className="text-2xl font-bold">NORTHPOINT</h3>
              </div>
              <p className="text-gray-400">Lang'ata's premier sports bar and entertainment destination.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>0715555503</p>
                <p>northpointsportbar@gmail.com</p>
                <p>Near Langata High School</p>
                <p>24/7</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2 text-gray-400">
                <p>Facebook: @NorthpointSportsBar</p>
                <p>Instagram: @northpointsportbar</p>
                <p>TikTok: @northpointsportbar</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Northpoint Sports Bar. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NorthpointSportsBar;