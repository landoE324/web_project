import React from "react";


function App() {
return (
<div className="min-h-screen bg-[#f5f0e6] flex flex-col items-start p-8">
{/* Nav Bar */}
<nav className="w-full flex items-center justify-between">
<div className="text-xl font-semibold text-gray-800">My Nav</div>
<button className="sm:hidden p-2 border rounded-lg">Menu</button>
</nav>
{/* Search Bar Container */}
<div className="w-full flex justify-center mt-6">
<input$1 className="w-full sm:w-1/2 p-3 rounded-2xl shadow-md border border-gray-300 focus:outline-none focus:ring-2" />
</div>


{/* Content Placeholder */}
<div className="mt-10 text-xl text-gray-700">
Welcome to the basic React webpage!
</div>
</div>
);
}

export default App
