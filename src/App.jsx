export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/forest.png"
        alt="Forest background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-center items-center p-6 text-white z-20">
        <h1 className="text-2xl font-bold flex-1 text-center">LANDTRIBE</h1>
        <ul className="flex gap-6 flex-1 justify-end">
          <li className="hover:text-green-300 cursor-pointer">Forest of Memories</li>
          <li className="hover:text-green-300 cursor-pointer">Events</li>
          <li className="hover:text-green-300 cursor-pointer">About</li>
          <li className="hover:text-green-300 cursor-pointer">Shop</li>
          <li className="hover:text-green-300 cursor-pointer">More</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h2 className="text-lg md:text-2xl">Welcome to our</h2>
        <h1 className="text-4xl md:text-6xl font-bold">Route of Fertility</h1>
        <button className="mt-6 px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition">
          Join the Journey
        </button>
      </div>
    </div>
  );
}