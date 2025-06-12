import React, { useState, useEffect } from 'react';
import { Coffee, Search, Heart, Users, Star, Download, Menu, X, MapPin, Award, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Coffee Bean Explorer",
      description: "Discover premium coffee beans from around the world with detailed tasting notes, origin stories, and brewing recommendations.",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Favorite Cafe Manager",
      description: "Save and organize your favorite coffee shops, track visits, and never forget that perfect cup you discovered.",
      image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Personal Recommendations",
      description: "Get AI-powered suggestions tailored to your taste preferences, brewing methods, and coffee exploration history.",
      image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Coffee Community",
      description: "Connect with fellow coffee enthusiasts, share discoveries, and learn from baristas and roasters worldwide.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Coffee Enthusiast",
      content: "Coffee Explorer transformed how I discover new beans. The recommendations are spot-on!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Cafe Owner",
      content: "My customers love using this app to track their visits and share their favorite drinks.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Home Barista",
      content: "The brewing guides and bean database are incredibly detailed. It's like having a coffee expert in your pocket.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">Coffee Explorer</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">Features</a>
              <a href="#community" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">Community</a>
              <a href="#download" className="text-gray-700 hover:text-amber-600 transition-colors duration-200">Download</a>
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Features</a>
              <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Community</a>
              <a href="#download" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Download</a>
              <button className="w-full mt-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg)',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                #1 Coffee Discovery App
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Perfect </span>
                Coffee Journey
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore premium coffee beans, manage your favorite cafes, and connect with a community of coffee lovers. Your personalized coffee adventure starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
                  Download Free
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-200">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-gray-600">50k+ coffee lovers</span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9 rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl shadow-2xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg" 
                    alt="Coffee App Preview"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Coffee Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovering new beans to connecting with fellow enthusiasts, Coffee Explorer provides all the tools you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 space-y-4">
                    <div className="flex items-center text-amber-600 group-hover:text-orange-600 transition-colors duration-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <button className="text-amber-600 font-semibold hover:text-orange-600 transition-colors duration-200 flex items-center group">
                      Learn More
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Coffee Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users are saying about their coffee discoveries and experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Coffee className="w-16 h-16 text-amber-400 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Coffee Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download Coffee Explorer today and discover a world of exceptional coffee experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Download for iOS
            </button>
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Download for Android
            </button>
          </div>
          
          <div className="mt-12 text-sm text-gray-400">
            Free download • No subscription required • 50MB
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
                <span className="text-xl font-bold">Coffee Explorer</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Discover, explore, and connect with the world of coffee. Your perfect cup is just a tap away.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Bean Explorer</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Cafe Manager</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Recommendations</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Coffee Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;