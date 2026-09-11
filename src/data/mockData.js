// Mock restaurant data
export const restaurants = [
  {
    id: 1,
    name: "The Garden Table",
    cuisine: "Mediterranean",
    rating: 4.8,
    reviews: 342,
    price: "₹₹₹",
    distance: "0.3 km",
    image: "🌿",
    gradient: "linear-gradient(135deg, #06D6A0, #4ECDC4)",
    tags: ["Outdoor", "Vegetarian Friendly", "Fine Dining"],
    openNow: true,
  },
  {
    id: 2,
    name: "Urban Spice",
    cuisine: "Indian Fusion",
    rating: 4.6,
    reviews: 218,
    price: "₹₹",
    distance: "0.8 km",
    image: "🌶️",
    gradient: "linear-gradient(135deg, #FF6B6B, #FF8C42)",
    tags: ["Spicy", "Craft Cocktails"],
    openNow: true,
  },
  {
    id: 3,
    name: "Bistro 24",
    cuisine: "French",
    rating: 4.9,
    reviews: 501,
    price: "₹₹₹₹",
    distance: "1.2 km",
    image: "🥐",
    gradient: "linear-gradient(135deg, #9B5FE3, #FF6FB3)",
    tags: ["Romantic", "Wine List"],
    openNow: false,
  },
  {
    id: 4,
    name: "The Terrace",
    cuisine: "Continental",
    rating: 4.7,
    reviews: 189,
    price: "₹₹₹",
    distance: "1.5 km",
    image: "☀️",
    gradient: "linear-gradient(135deg, #FFD166, #FF8C42)",
    tags: ["Rooftop", "City View"],
    openNow: true,
  },
  {
    id: 5,
    name: "Saffron House",
    cuisine: "North Indian",
    rating: 4.5,
    reviews: 423,
    price: "₹₹",
    distance: "0.5 km",
    image: "🍛",
    gradient: "linear-gradient(135deg, #FF8C42, #FFD166)",
    tags: ["Family Friendly", "Buffet"],
    openNow: true,
  },
];

// Mock table data for floor plan
export const floorTables = [
  { id: 1, number: "T01", seats: 2, status: "available", x: 10, y: 10, type: "round" },
  { id: 2, number: "T02", seats: 4, status: "occupied", x: 28, y: 10, type: "square" },
  { id: 3, number: "T03", seats: 2, status: "reserved", x: 50, y: 10, type: "round" },
  { id: 4, number: "T04", seats: 6, status: "available", x: 68, y: 10, type: "rectangle" },
  { id: 5, number: "T05", seats: 4, status: "occupied", x: 10, y: 40, type: "square" },
  { id: 6, number: "T06", seats: 2, status: "available", x: 30, y: 42, type: "round" },
  { id: 7, number: "T07", seats: 4, status: "reserved", x: 52, y: 38, type: "square" },
  { id: 8, number: "T08", seats: 4, status: "available", x: 72, y: 42, type: "square" },
  { id: 9, number: "T09", seats: 8, status: "occupied", x: 10, y: 68, type: "rectangle" },
  { id: 10, number: "T10", seats: 2, status: "available", x: 38, y: 70, type: "round" },
  { id: 11, number: "T11", seats: 4, status: "reserved", x: 58, y: 68, type: "square" },
  { id: 12, number: "T12", seats: 6, status: "available", x: 76, y: 68, type: "rectangle" },
];

// Mock reservations
export const mockReservations = [
  {
    id: "R001",
    table: "Table 08",
    tableType: "Window Table",
    date: "Today",
    time: "8:00 PM",
    guests: 4,
    status: "confirmed",
    restaurant: "The Garden Table",
  },
  {
    id: "R002",
    table: "Table 03",
    tableType: "Indoor Table",
    date: "Tomorrow",
    time: "7:30 PM",
    guests: 2,
    status: "pending",
    restaurant: "Urban Spice",
  },
];

// Admin stats
export const adminStats = [
  { label: "Total Tables", value: "24", icon: "🪑", color: "#9B5FE3", change: "+2 this month" },
  { label: "Today's Bookings", value: "18", icon: "📅", color: "#FF6B6B", change: "+5 from yesterday" },
  { label: "Occupied Tables", value: "12", icon: "🔴", color: "#FF8C42", change: "50% occupancy" },
  { label: "Available Tables", value: "12", icon: "🟢", color: "#06D6A0", change: "50% available" },
  { label: "Revenue Today", value: "₹42,800", icon: "💰", color: "#FFD166", change: "+12% vs last week" },
];

// Admin recent reservations
export const adminReservations = [
  { id: "R001", guest: "Priya S.", table: "T08", time: "8:00 PM", guests: 4, status: "confirmed" },
  { id: "R002", guest: "Rahul M.", table: "T03", time: "7:30 PM", guests: 2, status: "confirmed" },
  { id: "R003", guest: "Ananya K.", table: "T12", time: "9:00 PM", guests: 6, status: "pending" },
  { id: "R004", guest: "Karthik R.", table: "T05", time: "6:30 PM", guests: 3, status: "confirmed" },
  { id: "R005", guest: "Meera J.", table: "T01", time: "8:30 PM", guests: 2, status: "cancelled" },
];

// Features for landing page
export const features = [
  {
    icon: "🗺️",
    title: "Smart Table Selection",
    description: "Choose your exact table from a visual restaurant floor plan.",
    color: "#9B5FE3",
    bg: "rgba(155, 95, 227, 0.1)",
  },
  {
    icon: "🟢",
    title: "Live Availability",
    description: "See which tables are available, reserved or occupied in real-time.",
    color: "#06D6A0",
    bg: "rgba(6, 214, 160, 0.1)",
  },
  {
    icon: "⚡",
    title: "Easy Reservations",
    description: "Reserve a table in just a few simple steps.",
    color: "#FF8C42",
    bg: "rgba(255, 140, 66, 0.1)",
  },
  {
    icon: "✨",
    title: "Smart Recommendations",
    description: "Get the best table based on your party size and preferences.",
    color: "#FF6FB3",
    bg: "rgba(255, 111, 179, 0.1)",
  },
  {
    icon: "📱",
    title: "QR Reservation",
    description: "Keep your reservation details easily accessible via QR code.",
    color: "#4ECDC4",
    bg: "rgba(78, 205, 196, 0.1)",
  },
  {
    icon: "⏱️",
    title: "Less Waiting",
    description: "Know availability and estimated waiting time before arriving.",
    color: "#FFD166",
    bg: "rgba(255, 209, 102, 0.1)",
  },
];
