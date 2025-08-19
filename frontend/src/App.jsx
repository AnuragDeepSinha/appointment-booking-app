import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [slots] = useState([
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
  ]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [myBookings, setMyBookings] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setUser(username);
    } else {
      alert("Enter username & password");
    }
  };

  const handleBook = (slot) => {
    if (bookedSlots.includes(slot)) {
      alert("Slot already booked!");
      return;
    }
    setBookedSlots([...bookedSlots, slot]);
    setMyBookings([...myBookings, slot]);
  };

  // If not logged in → show login screen
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
            Clinic Login
          </h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // After login → show booking dashboard
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Welcome, {user}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Available Slots */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Available Slots
            </h3>
            <ul className="space-y-3">
              {slots.map((slot) => (
                <li
                  key={slot}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{slot}</span>
                  {bookedSlots.includes(slot) ? (
                    <span className="text-red-500 font-medium">Booked</span>
                  ) : (
                    <button
                      onClick={() => handleBook(slot)}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                    >
                      Book
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* My Bookings */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              My Bookings
            </h3>
            {myBookings.length === 0 ? (
              <p className="text-gray-500">No bookings yet</p>
            ) : (
              <ul className="space-y-2">
                {myBookings.map((b) => (
                  <li
                    key={b}
                    className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
