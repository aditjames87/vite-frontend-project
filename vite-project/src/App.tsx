import { useState } from "react";
import { Input } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/input.tsx";
import { Button } from "/workspaces/vite-frontend-project/vite-project/src/components/ui/button.tsx";
import {
  Search,
  Bell,
  Home,
  Users,
  Video,
  Image as ImageIcon,
  Calendar,
  Bookmark,
  Gamepad2,
  Heart,
  Settings,
} from "lucide-react";

// LoginPage component
const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(); // simulate successful login
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Login Form</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <Button type="submit" className="w-full bg-blue-600 text-white rounded">
          Log In
        </Button>
      </form>
    </div>
  );
};

// FacebookLayout component
const FacebookLayout = () => {
  const [showMore, setShowMore] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-[#1877f2] shadow-md">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <div className="text-4xl font-bold text-white tracking-tighter cursor-pointer">f</div>
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-100" />
            <Input
              placeholder="Search Facebook"
              className="pl-9 bg-blue-500/20 border-none text-white placeholder:text-blue-100 w-[240px] rounded-full h-10"
            />
          </div>
        </div>

        {/* Center nav */}
        <div className="flex gap-6 text-white">
          <Home className="h-6 w-6 cursor-pointer hover:text-blue-100" />
          <Users className="h-6 w-6 cursor-pointer hover:text-blue-100" />
          <Video className="h-6 w-6 cursor-pointer hover:text-blue-100" />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="h-6 w-6 text-white cursor-pointer hover:text-blue-100" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full px-1">3</span>
          </div>
          <img
            src="https://via.placeholder.com/32"
            alt="User Avatar"
            className="h-8 w-8 rounded-full cursor-pointer border-2 border-white"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-14 flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white shadow-md h-screen p-4 hidden md:block overflow-y-auto">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <Home className="h-5 w-5" /> News Feed
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <Users className="h-5 w-5" /> Friends
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <Video className="h-5 w-5" /> Watch
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <ImageIcon className="h-5 w-5" /> Photos
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">🛒 Marketplace</li>
            {showMore && (
              <>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                  <Calendar className="h-5 w-5" /> Events
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">📸 Memories</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                  <Bookmark className="h-5 w-5" /> Saved
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">📄 Pages</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                  <Gamepad2 className="h-5 w-5" /> Gaming
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                  <Heart className="h-5 w-5" /> Fundraisers
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                  <Settings className="h-5 w-5" /> Settings & Privacy
                </li>
              </>
            )}
            <li
              className="flex items-center gap-2 cursor-pointer text-blue-600 font-semibold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See Less" : "See More"}
            </li>
          </ul>
        </aside>

        {/* Feed */}
        <section className="w-1/2 p-6 space-y-6">
          {/* What's on your mind box */}
          <div className="bg-white shadow rounded-lg p-4">
            <div className="flex items-center gap-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="h-10 w-10 rounded-full"
              />
              <Input
                placeholder="What's on your mind?"
                className="flex-1 border rounded-full px-4 py-2"
              />
            </div>
            <div className="flex justify-around mt-3 text-sm text-gray-600">
              <button className="flex items-center gap-1 hover:text-blue-600">
                <Video className="h-5 w-5 text-red-500" /> Live Video
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600">
                <ImageIcon className="h-5 w-5 text-green-500" /> Photo/Video
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600">😊 Feeling/Activity</button>
            </div>
          </div>

          {/* Example post */}
          <div className="bg-white shadow rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Friend Avatar"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">2 hrs ago</p>
              </div>
            </div>
            <p className="mb-3">Enjoying a sunny day at the park!</p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Post Image"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Right column */}
        <aside className="w-1/4 p-4 hidden md:block">
          <div className="bg-white shadow rounded-lg p-4 mb-6">
            <h2 className="font-semibold mb-3">Sponsored</h2>
            <img src="https://via.placeholder.com/250x150" alt="Ad" className="rounded-lg mb-2"></img>
            <p className="text-sm text-gray-600">Ad description goes here.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="font-semibold mb-3">Contacts</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <img
                  src="https://via.placeholder.com/32"
                  alt="Contact Avatar"
                  className="h-8 w-8 rounded-full"
                />
                <span>Jane Smith</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <img
                  src="https://via.placeholder.com/32"
                  alt="Contact Avatar"
                  className="h-8 w-8 rounded-full"
                />
                <span>Mike Johnson</span>
              </li>
              {/* More contacts... */}
            </ul>
          </div>
        </aside>
      </main>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-0 right-0 m-4 w-80 bg-white shadow-lg rounded-lg">
          <div className="flex items-center justify-between p-3 border-b">
            <span className="font-semibold">Chat with Jane</span>
            <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <div className="p-3 h-64 overflow-y-auto">
            {/* Chat messages would go here */}
            <p className="text-sm text-gray-600">Jane: Hey! How are you?</p>
          </div>
          <div className="p-3 border-t">
            <Input placeholder="Type a message..." className="w-full border rounded-full px-4 py-2" />
          </div>
        </div>
      )}

      {/* Chat toggle button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        💬
      </button>
    </div>
  );
};

// Main App component
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <FacebookLayout /> : <LoginPage onLogin={() => setLoggedIn(true)} />}
    </div>
  );
};

export default App;