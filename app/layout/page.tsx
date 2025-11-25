// import React from 'react';
// import Button from '../components/Button';

// const layout = () => {
//   return (
//     <div>

//         <h3 className="text-4xl text-center font-bold md:text-sm  lg:text-9xl">Layout</h3>

//         <div className='flex flex-wrap justify-evenly md:flex-row lg:mt-30 gap-4 mt-8 items-center'>
//         <div className='size-40 bg-slate-400'></div>
//         <div className='size-40 bg-slate-700'></div>
//         <div className='size-40 bg-slate-800'></div>
//         <div className='size-40 bg-slate-400'></div>
//         <div className='size-40 bg-slate-700'></div>
//         <div className='size-40 bg-slate-800'></div>
//         <div className='size-40 bg-slate-400'></div>
//         <div className='size-40 h-46 bg-green-700'></div>
//         <div className='size-40 bg-slate-800'></div>
//         <div className='size-40 bg-slate-400'></div>
//         <div className='size-40 bg-slate-700'></div>
//         <div className='size-40 bg-slate-800'></div>
//         <div className='size-40 bg-slate-400'></div>
//         <div className='size-40 bg-slate-700'></div>
//         <div className='size-40 bg-slate-800'></div>
//         <div className='size-40 bg-slate-400'></div>
//         <div className='size-40 bg-slate-700'></div>
//         <div className='size-40 bg-slate-800'></div>
//         </div>

//         <div>
//           <h3 className="text-blue-800 text-5xl  text-center my-20 font-bold">Grid</h3>

//           <div className='grid grid-cols-6 gap-9 md:flex-row'>
//             <div className='border h-40 bg-teal-500'></div>
//             <div className='border h-40'></div>
//             <div className='border h-40 col-span-2'></div>
//             <div className='border h-40 bg-amber-700'></div>
//             <div className='border h-40 bg-blue-700 col-span-3 col-start-2'></div>
//             {/* <div className='border h-40'></div> */}
//           </div>
//         </div>

//         <div className='p-20'>
//           <input type="text" className='px-4 py-2 rounded-lg border border-gray-300 focus:border-gray-800 transition-outline-none placeholder-blue-700 ' placeholder='Username' />
//         </div>
        
//       <Button text="Click Me"/>
//     </div>


    
//   );
// };

// export default layout;
'use client';


import HeroMotion from "../components/HeroMotion";

import React from 'react'

const page = () => {
  return (
    <div>
      <main className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="text-2xl font-bold text-green-700">Zendesk Clone</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-green-700">Products</a>
          <a href="#" className="hover:text-green-700">Solutions</a>
          <a href="#" className="hover:text-green-700">Pricing</a>
          <a href="#" className="hover:text-green-700">Resources</a>
        </nav>
        <div className="flex gap-3">
          <button className="text-sm font-medium text-green-700 border border-green-700 px-4 py-2 rounded-full hover:bg-green-700 hover:text-white">
            Sign in
          </button>
          <button className="text-sm font-medium bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800">
            Get started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 bg-gradient-to-b from-green-50 to-white">
        <HeroMotion />
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Zendesk helps businesses deliver exceptional customer experiences with powerful, easy-to-use tools.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
            Get Started
          </button>
          <button className="border border-green-700 text-green-700 px-6 py-3 rounded-full hover:bg-green-50">
            View Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-10">
          Everything you need for customer success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Support Suite",
              text: "Connect with customers on any channel—email, chat, phone, and more.",
            },
            {
              title: "Sales Suite",
              text: "Build relationships and close deals faster with an integrated platform.",
            },
            {
              title: "Messaging",
              text: "Provide fast, personalized support using automation and AI.",
            },
          ].map((item, index) => (
            <div key={index} className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-green-700 text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 py-20 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Why businesses choose Zendesk Clone
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We make it easy to build strong relationships with your customers.
          Our flexible, scalable solutions grow with your business.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white shadow-md p-8 rounded-2xl max-w-sm">
            <h4 className="text-lg font-semibold mb-2">Scalable Solutions</h4>
            <p className="text-gray-600">
              Whether you are a startup or enterprise, our tools adapt to your needs.
            </p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-2xl max-w-sm">
            <h4 className="text-lg font-semibold mb-2">Powerful Integrations</h4>
            <p className="text-gray-600">
              Seamlessly integrate with your favorite tools and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-green-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start delivering better customer experiences today
        </h2>
        <p className="text-green-100 max-w-2xl mx-auto mb-8">
          Join thousands of teams who use Zendesk Clone to simplify support, boost sales, and grow faster.
        </p>
        <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-100">
          Try it Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold mb-3 text-white">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Support Suite</a></li>
              <li><a href="#" className="hover:underline">Sales Suite</a></li>
              <li><a href="#" className="hover:underline">Messaging</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Developers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Follow us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-10 border-t border-gray-700 pt-6">
          © 2025 Zendesk Clone. All rights reserved.
        </div>
      </footer>
    </main>
    </div>
  )
}

export default page


