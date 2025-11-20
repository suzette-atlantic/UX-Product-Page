import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Download, 
  Monitor, 
  CheckCircle, 
  Clock, 
  Globe, 
  Award, 
  Shield, 
  Menu, 
  X, 
  Search,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  const heroRef = useRef<HTMLDivElement>(null);
  const objectivesRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // Observe all sections
    const refs = [heroRef, objectivesRef, overviewRef, featuresRef, faqRef, relatedRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Initial visibility check
    setTimeout(() => {
      setVisibleElements(prev => new Set([...prev, 'hero']));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isVisible = (elementId: string) => visibleElements.has(elementId);

  const trainingObjectives = [
    "Define various types of data breaches and their significant consequences",
    "Use proactive measures like strong access controls and encryption",
    "Create and follow a data breach response plan",
    "Prioritize clear communication and compliance during a breach",
    "Lead crisis management and ensure ongoing security improvement"
  ];

  const features = [
    { icon: Clock, text: "13-minute interactive course" },
    { icon: Award, text: "Certificate of completion" },
    { icon: Globe, text: "Multiple language options" },
    { icon: Monitor, text: "Progress tracking" },
    { icon: Shield, text: "Mobile compatible" }
  ];

  const faqs = [
    {
      question: "What is a data breach?",
      answer: "A data breach occurs when unauthorized individuals gain access to sensitive, protected, or confidential data, impacting everything from personal employee information to company secrets."
    },
    {
      question: "What are the main types of data breaches?",
      answer: "Major types include malware attacks, phishing scams, insider threats, exploitation of weak credentials, and physical breaches like device theft."
    },
    {
      question: "How can my organization proactively protect against data breaches?",
      answer: "Proactive measures include robust access control (strong passwords, MFA), data encryption, regular security audits, timely software updates, and comprehensive employee training and awareness programs."
    },
    {
      question: "What are the immediate steps to take if a data breach occurs?",
      answer: "Immediate steps involve containment (isolating affected systems), eradication (removing the threat), and recovery (restoring data from backups), followed by a thorough investigation."
    },
    {
      question: "Why is communication crucial during a data breach?",
      answer: "Transparent and timely communication with stakeholders (employees, customers, regulators) is paramount to manage public perception, rebuild trust, ensure compliance with regulations, and mitigate legal risks."
    }
  ];

  const relatedCourses = [
    {
      title: "Workplace Culture: Positivity in the Workplace",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Cybersecurity Protecting Your Digital Workspace Training Course",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Leadership Development: New Supervisor Training Course",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Updated Global Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-10">
              <div className="text-2xl font-semibold tracking-widest">ATLANTIC</div>
              <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {['Courses', 'Software', 'License', 'About', 'Resources', 'Pricing'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="uppercase tracking-wide text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <div className="relative">
                  <Search className="h-4 w-4 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search courses"
                    className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                </div>
                <button className="px-5 py-2 rounded-lg border border-white/30 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors duration-200">
                  Request Pricing
                </button>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md border border-white/20"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div
            className={`md:hidden border-t border-white/10 transition-all duration-300 overflow-hidden ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-6 space-y-3 text-sm uppercase tracking-wide text-white/80">
              {['Courses', 'Software', 'License', 'About', 'Resources', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-3 border-b border-white/5 last:border-b-0 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-2 px-5 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition-colors duration-200">
                Request Pricing
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video Preview */}
            <div ref={heroRef} id="hero" className={`transition-all duration-1000 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group transform hover:scale-[1.02]"
                   style={{ 
                     transform: `translateY(${isVisible('hero') ? '0' : '50px'}) scale(${isVisible('hero') ? '1' : '0.95'})`,
                     opacity: isVisible('hero') ? 1 : 0,
                     transitionDelay: '200ms'
                   }}>
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                  alt="Course Preview"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
                  <button className="bg-white/90 backdrop-blur-sm p-6 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-125 group-hover:shadow-2xl animate-pulse hover:animate-none">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Watch Course Preview
                  </span>
                </div>
              </div>
            </div>

            {/* Course Title and Description */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="gradient-title text-4xl md:text-5xl mb-6 leading-tight transform transition-all duration-700"
                  style={{ 
                    transform: `translateX(${isVisible('hero') ? '0' : '-100px'})`,
                    transitionDelay: '400ms'
                  }}>
                Workplace Safety: Handling Data Breaches Training Course
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed transform transition-all duration-700"
                 style={{ 
                   transform: `translateX(${isVisible('hero') ? '0' : '-50px'})`,
                   transitionDelay: '600ms'
                 }}>
                It covers how data breaches occur and how to prevent and respond to them to safeguard sensitive information and minimize risks.
              </p>

              {/* Course Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-12 transform transition-all duration-700"
                   style={{ 
                     transform: `translateY(${isVisible('hero') ? '0' : '30px'})`,
                     transitionDelay: '800ms'
                   }}>
                <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
                  <Clock className="h-4 w-4" />
                  <span>13 minutes</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
                  <Globe className="h-4 w-4" />
                  <span>EN / ES / FR</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
                  <Award className="h-4 w-4" />
                  <span>2025</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200">
                  <Shield className="h-4 w-4" />
                  <span>SKU: AT197</span>
                </div>
              </div>
            </div>

            {/* Training Objectives */}
            <div ref={objectivesRef} id="objectives" className={`transition-all duration-1000 ${isVisible('objectives') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="gradient-title text-3xl mb-8 transform transition-all duration-700"
                      style={{ 
                        transform: `translateX(${isVisible('objectives') ? '0' : '-100px'})`,
                        transitionDelay: '200ms'
                      }}>
                    Training Objectives
                  </h2>
                  <div className="space-y-6">
                    {trainingObjectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-4 group transform transition-all duration-500"
                           style={{ 
                             transform: `translateX(${isVisible('objectives') ? '0' : '-50px'})`,
                             transitionDelay: `${400 + index * 100}ms`
                           }}>
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-200 transition-all duration-300 group-hover:scale-110">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300 group-hover:translate-x-2">
                          {objective}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                          style={{ 
                            transform: `translateY(${isVisible('objectives') ? '0' : '30px'})`,
                            transitionDelay: '900ms'
                          }}>
                    Get Pricing
                  </button>
                </div>
                <div className="relative transform transition-all duration-1000"
                     style={{ 
                       transform: `translateX(${isVisible('objectives') ? '0' : '100px'}) scale(${isVisible('objectives') ? '1' : '0.8'})`,
                       transitionDelay: '300ms'
                     }}>
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Professional handshake"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl transition-all duration-300 hover:from-black/20"></div>
                </div>
              </div>
            </div>

            {/* Course Overview */}
            <div ref={overviewRef} id="overview" className={`transition-all duration-1000 ${isVisible('overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:scale-[1.01]">
                <h2 className="gradient-title text-3xl mb-8 transform transition-all duration-700"
                    style={{ 
                      transform: `translateY(${isVisible('overview') ? '0' : '-30px'})`,
                      transitionDelay: '200ms'
                    }}>
                  Course Overview
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed transform transition-all duration-700"
                     style={{ 
                       transform: `translateY(${isVisible('overview') ? '0' : '30px'})`,
                       transitionDelay: '400ms'
                     }}>
                  <p className="hover:text-gray-900 transition-colors duration-300">
                    Data breaches are not just technical mishaps—they're full-scale crises that can severely impact an organization's reputation, trust, and finances. This course is designed to equip you with the knowledge to understand, prevent, and respond to these threats with confidence. A data breach happens when unauthorized individuals gain access to sensitive or confidential data, often through tactics like malware attacks, phishing scams, insider threats, weak credentials, or stolen devices. Beyond the immediate technical disruption, breaches can lead to costly investigations, legal consequences, regulatory fines, and long-term damage to customer trust.
                  </p>
                  <p className="hover:text-gray-900 transition-colors duration-300">
                    The course emphasizes proactive data protection strategies such as robust access controls, strong passwords, Multi-Factor Authentication (MFA), and applying the Principle of Least Privilege. You'll also learn about encryption, regular security audits, vulnerability testing, timely software updates, and the critical role of employee training and awareness in identifying and reporting potential threats. When prevention isn't enough, the course walks you through a proven breach response playbook: containment, eradication, recovery, and post-incident investigation.
                  </p>
                  <p className="hover:text-gray-900 transition-colors duration-300">
                    Additionally, you'll gain insights into the legal and ethical requirements of notifying affected individuals, regulators, and even law enforcement when necessary. The training concludes with post-breach reviews and continuous improvement practices, turning every incident into a stepping stone for stronger, more resilient security measures. This holistic approach ensures that, rather than being paralyzed by fear, your organization can emerge as a vigilant and trusted defender of data.
                  </p>
                </div>
              </div>
            </div>

            {/* Super Flexible Formatting */}
            <div ref={featuresRef} id="features" className={`transition-all duration-1000 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h2 className="gradient-title text-3xl mb-4 transform transition-all duration-700"
                    style={{ 
                      transform: `translateY(${isVisible('features') ? '0' : '-30px'})`,
                      transitionDelay: '200ms'
                    }}>
                  Super Flexible Formatting
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-700"
                   style={{ 
                     transform: `translateY(${isVisible('features') ? '0' : '30px'})`,
                     transitionDelay: '400ms'
                   }}>
                  You'll never find yourself scratching your head, trying to figure out why you can't get our videos to play or courses loaded into any platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Play,
                    title: "Access courses in our EHS Software.",
                    description: "View this course in a classroom environment, or assign it to your team individually with testing and recordkeeping capabilities."
                  },
                  {
                    icon: Download,
                    title: "Load courses into your platform.",
                    description: "Each title includes an embed feature that allows users to add videos to their existing training platform or LMS."
                  },
                  {
                    icon: Monitor,
                    title: "Access courses in our LMS.",
                    description: "View this course in a classroom environment, or assign it to your team individually with testing and recordkeeping capabilities."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 group transform hover:scale-105 hover:translate-y-[-8px]"
                       style={{ 
                         transform: `translateY(${isVisible('features') ? '0' : '50px'})`,
                         transitionDelay: `${600 + index * 200}ms`
                       }}>
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="gradient-title text-xl mb-4 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div ref={faqRef} id="faq" className={`transition-all duration-1000 ${isVisible('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h2 className="gradient-title text-3xl mb-4 transform transition-all duration-700"
                    style={{ 
                      transform: `translateY(${isVisible('faq') ? '0' : '-30px'})`,
                      transitionDelay: '200ms'
                    }}>
                  Not Ready to Sign Up?
                </h2>
                <p className="text-xl text-gray-600 transform transition-all duration-700"
                   style={{ 
                     transform: `translateY(${isVisible('faq') ? '0' : '30px'})`,
                     transitionDelay: '400ms'
                   }}>
                  No Worries. Here's Some Helpful Info.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 transform"
                   style={{ 
                     transform: `translateY(${isVisible('faq') ? '0' : '50px'})`,
                     transitionDelay: '600ms'
                   }}>
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 transform transition-all duration-300"
                       style={{ 
                         transform: `translateX(${isVisible('faq') ? '0' : '-30px'})`,
                         transitionDelay: `${800 + index * 100}ms`
                       }}>
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-all duration-300 flex items-center justify-between group hover:translate-x-2"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-gray-500 transition-all duration-300 group-hover:text-blue-600 ${expandedFaq === index ? 'rotate-180 scale-110' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-6 transform transition-all duration-300"
                           style={{ transform: expandedFaq === index ? 'translateY(0)' : 'translateY(-20px)' }}>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Courses */}
            <div ref={relatedRef} id="related" className={`transition-all duration-1000 ${isVisible('related') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h2 className="gradient-title text-3xl mb-4 transform transition-all duration-700"
                    style={{ 
                      transform: `translateY(${isVisible('related') ? '0' : '-30px'})`,
                      transitionDelay: '200ms'
                    }}>
                  Frequently Taken With...
                </h2>
                <p className="text-xl text-gray-600 transform transition-all duration-700"
                   style={{ 
                     transform: `translateY(${isVisible('related') ? '0' : '30px'})`,
                     transitionDelay: '400ms'
                   }}>
                  Build your plan or make it simple and gain access to the entire Atlantic Training Bundle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {relatedCourses.map((course, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:translate-y-[-8px]"
                       style={{ 
                         transform: `translateY(${isVisible('related') ? '0' : '50px'}) rotate(${isVisible('related') ? '0' : `${(index - 1) * 2}deg`})`,
                         transitionDelay: `${600 + index * 200}ms`
                       }}>
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h3 className="gradient-title transition-all duration-300 group-hover:translate-x-2">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center space-x-4 transform transition-all duration-700"
                   style={{ 
                     transform: `translateY(${isVisible('related') ? '0' : '30px'})`,
                     transitionDelay: '1200ms'
                   }}>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                  Create Your Plan
                </button>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]">
                  View Complete Library
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 transition-all duration-1000 delay-300 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
                   style={{ 
                     transform: `translateX(${isVisible('hero') ? '0' : '100px'})`,
                     transitionDelay: '500ms'
                   }}>
                <div className="text-center mb-6">
                  <h3 className="gradient-title text-2xl mb-2 transition-colors duration-300">Per-User License</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1 transform transition-all duration-300 hover:scale-110">$37</div>
                  <p className="text-sm font-semibold text-gray-700">1 course</p>
                  <p className="text-sm font-semibold text-gray-700">Minimum Spend $725</p>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300"
                         style={{ 
                           transform: `translateX(${isVisible('hero') ? '0' : '-30px'})`,
                           transitionDelay: `${700 + index * 100}ms`
                         }}>
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]">
                    Preview Course
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                  <p className="text-base text-gray-700 mb-4 font-semibold">
                    Unlock pricing options and volume discounts for your business
                  </p>
                  <button className="w-full text-white py-4 rounded-xl font-medium bg-gradient-to-r from-[#374a9e] to-[#3ac4de] hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                    Explore Solutions & Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;