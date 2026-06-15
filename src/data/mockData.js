import { TRAVEL_IMAGES } from "../utils/images.js";

const { destinations: dest, hotels: hotelImg, blogs } = TRAVEL_IMAGES;

export const MOCK_FLIGHTS = [
  { id: "f1", airline: "IndiGo", from: "Mumbai", to: "Delhi", departTime: "06:30", arriveTime: "08:45", duration: "2h 15m", price: 4899, class: "Economy" },
  { id: "f2", airline: "Air India", from: "Mumbai", to: "Delhi", departTime: "10:15", arriveTime: "12:30", duration: "2h 15m", price: 5299, class: "Economy" },
  { id: "f3", airline: "Vistara", from: "Mumbai", to: "Bangalore", departTime: "07:00", arriveTime: "08:45", duration: "1h 45m", price: 3999, class: "Economy" },
  { id: "f4", airline: "SpiceJet", from: "Delhi", to: "Goa", departTime: "14:30", arriveTime: "17:00", duration: "2h 30m", price: 4599, class: "Economy" },
  { id: "f5", airline: "IndiGo", from: "Bangalore", to: "Chennai", departTime: "09:00", arriveTime: "10:15", duration: "1h 15m", price: 2899, class: "Economy" },
  { id: "f6", airline: "Air India", from: "Delhi", to: "Kolkata", departTime: "11:45", arriveTime: "14:00", duration: "2h 15m", price: 4199, class: "Business", rating: 4.5 },
];

export const MOCK_HOTELS = [
  { id: "h1", name: "Taj Mahal Palace", city: "Mumbai", rating: 4.8, reviews: 2340, price: 12500, image: hotelImg.mumbai, amenities: ["Pool", "Spa", "WiFi"] },
  { id: "h2", name: "The Oberoi", city: "Delhi", rating: 4.9, reviews: 1890, price: 9800, image: hotelImg.delhi, amenities: ["Pool", "Gym", "WiFi"] },
  { id: "h3", name: "ITC Grand Chola", city: "Chennai", rating: 4.7, reviews: 1560, price: 8500, image: hotelImg.chennai, amenities: ["Spa", "Restaurant", "WiFi"] },
  { id: "h4", name: "Leela Palace", city: "Bangalore", rating: 4.8, reviews: 2100, price: 11000, image: hotelImg.bangalore, amenities: ["Pool", "Spa", "Gym"] },
  { id: "h5", name: "Marriott Resort", city: "Goa", rating: 4.6, reviews: 980, price: 7200, image: hotelImg.goa, amenities: ["Beach", "Pool", "WiFi"] },
  { id: "h6", name: "Hyatt Regency", city: "Kolkata", rating: 4.5, reviews: 870, price: 6500, image: hotelImg.kolkata, amenities: ["Gym", "Restaurant", "WiFi"] },
];

export const MOCK_BUSES = [
  { id: "b1", operator: "VRL Travels", from: "Mumbai", to: "Pune", departTime: "07:00", arriveTime: "10:30", duration: "3h 30m", price: 450, type: "AC Sleeper" },
  { id: "b2", operator: "SRS Travels", from: "Bangalore", to: "Chennai", departTime: "22:00", arriveTime: "05:30", duration: "7h 30m", price: 680, type: "AC Seater" },
  { id: "b3", operator: "RedBus Express", from: "Delhi", to: "Jaipur", departTime: "06:30", arriveTime: "11:00", duration: "4h 30m", price: 520, type: "AC Sleeper" },
  { id: "b4", operator: "Volvo Travels", from: "Mumbai", to: "Goa", departTime: "20:00", arriveTime: "06:00", duration: "10h", price: 890, type: "Volvo AC" },
];

export const MOCK_TRAINS = [
  { id: "t1", name: "Rajdhani Express", number: "12951", from: "Mumbai", to: "Delhi", departTime: "16:35", arriveTime: "08:35", duration: "16h", price: 2450, class: "AC 2 Tier" },
  { id: "t2", name: "Shatabdi Express", number: "12009", from: "Delhi", to: "Jaipur", departTime: "06:10", arriveTime: "10:35", duration: "4h 25m", price: 890, class: "Chair Car" },
  { id: "t3", name: "Duronto Express", number: "12213", from: "Mumbai", to: "Bangalore", departTime: "23:00", arriveTime: "14:30", duration: "15h 30m", price: 1890, class: "AC 3 Tier" },
  { id: "t4", name: "Coromandel Express", number: "12841", from: "Chennai", to: "Kolkata", departTime: "07:15", arriveTime: "12:45", duration: "5h 30m", price: 720, class: "Sleeper" },
];

export const MOCK_HOLIDAYS = [
  { id: "hol1", title: "Goa Beach Paradise", destination: "Goa", duration: "5 Days / 4 Nights", price: 14999, image: dest.goa, highlights: ["Beach Resort", "Water Sports", "Sunset Cruise"] },
  { id: "hol2", title: "Kerala Backwaters", destination: "Kerala", duration: "6 Days / 5 Nights", price: 18999, image: dest.kerala, highlights: ["Houseboat Stay", "Ayurveda Spa", "Tea Plantations"] },
  { id: "hol3", title: "Rajasthan Royal Tour", destination: "Rajasthan", duration: "7 Days / 6 Nights", price: 22999, image: dest.rajasthan, highlights: ["Palace Hotels", "Desert Safari", "Fort Tours"] },
  { id: "hol4", title: "Himalayan Adventure", destination: "Manali", duration: "4 Days / 3 Nights", price: 12999, image: dest.manali, highlights: ["Skiing", "Mountain Trek", "Hot Springs"] },
  { id: "hol5", title: "Andaman Island Escape", destination: "Andaman", duration: "5 Days / 4 Nights", price: 19999, image: dest.andaman, highlights: ["Scuba Diving", "Island Hopping", "Coral Reefs"] },
  { id: "hol6", title: "Kashmir Valley Retreat", destination: "Kashmir", duration: "6 Days / 5 Nights", price: 21999, image: dest.kashmir, highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Mughal Gardens"] },
];

export const POPULAR_DESTINATIONS = [
  { id: "d1", name: "Goa", country: "India", image: dest.goa, price: "₹4,999", tag: "Beach" },
  { id: "d2", name: "Kerala", country: "India", image: dest.kerala, price: "₹6,499", tag: "Nature" },
  { id: "d3", name: "Rajasthan", country: "India", image: dest.rajasthan, price: "₹5,999", tag: "Heritage" },
  { id: "d4", name: "Manali", country: "India", image: dest.manali, price: "₹3,999", tag: "Adventure" },
  { id: "d5", name: "Udaipur", country: "India", image: dest.udaipur, price: "₹4,499", tag: "Romantic" },
  { id: "d6", name: "Andaman", country: "India", image: dest.andaman, price: "₹7,999", tag: "Island" },
  { id: "d7", name: "Kashmir", country: "India", image: dest.kashmir, price: "₹8,499", tag: "Scenic" },
];

export const TRENDING_OFFERS = [
  { id: "o1", title: "Fly Smart", subtitle: "Up to 40% off on domestic flights", code: "FLY40", color: "from-blue-600 to-indigo-700", icon: "✈️" },
  { id: "o2", title: "Hotel Deals", subtitle: "Extra 25% off on premium hotels", code: "STAY25", color: "from-purple-600 to-pink-600", icon: "🏨" },
  { id: "o3", title: "Bus Bonanza", subtitle: "Flat ₹200 off on bus bookings", code: "BUS200", color: "from-orange-500 to-red-500", icon: "🚌" },
  { id: "o4", title: "Holiday Special", subtitle: "Package deals starting ₹9,999", code: "HOLI99", color: "from-teal-500 to-cyan-600", icon: "🌴" },
];

export const TESTIMONIALS = [
  { id: "t1", name: "Priya Sharma", location: "Mumbai", rating: 5, text: "TravelEase made booking our family vacation effortless. The interface is beautiful and prices are unbeatable!", avatar: "PS" },
  { id: "t2", name: "Rahul Verma", location: "Delhi", rating: 5, text: "I've booked flights, hotels, and trains through TravelEase. Every experience has been smooth and reliable.", avatar: "RV" },
  { id: "t3", name: "Ananya Patel", location: "Bangalore", rating: 4, text: "The holiday packages are amazing! Our Kerala trip was perfectly planned with great hotel recommendations.", avatar: "AP" },
  { id: "t4", name: "Vikram Singh", location: "Chennai", rating: 5, text: "Best travel platform in India. Fast search, great deals, and excellent customer support. Highly recommended!", avatar: "VS" },
];

export const BLOG_POSTS = [
  { id: "bl1", title: "10 Hidden Gems in South India", excerpt: "Discover offbeat destinations that will take your breath away.", image: blogs.southIndia, date: "Jun 10, 2026", author: "Travel Team" },
  { id: "bl2", title: "Budget Travel Tips for 2026", excerpt: "Smart strategies to save money while exploring the world.", image: blogs.budget, date: "Jun 5, 2026", author: "Priya Sharma" },
  { id: "bl3", title: "Ultimate Goa Travel Guide", excerpt: "Everything you need to know for an unforgettable Goa trip.", image: blogs.goaGuide, date: "May 28, 2026", author: "Rahul Verma" },
];
