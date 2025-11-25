import React from 'react';

const ZendeskLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white via-78% to-[#d1f470] relative">
      
      <div className="bg-[#1f1f1f] text-white px-4 py-3 flex items-center justify-center relative">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">Zendesk AI Summit 2025</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">
            Join 20,000+ leaders at our biggest digital event to see how AI delivers resolutions at scale.
          </span>
          <a href="#register" className="underline hover:no-underline">Register now</a>
        </div>
        <a href="#" className="absolute text-3xl right-4 top-1/2 -translate-y-1/2 hover:bg-white/10 p-1 rounded">×</a>
      </div>

      
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#d8dcde]">
        <div className="flex items-center">
          <svg className="w-32 h-8" viewBox="0 0 160 40" fill="none">
            <text x="40" y="25" className="fill-[#03363D]" fontSize="30" fontWeight="bold" fontFamily="Arial, sans-serif">
              zendesk
            </text>
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="px-6 py-2 bg-[#d1f470] text-[#03363D] rounded-lg font-medium hover:bg-[#d1f179] transition-colors">
            Try for free
          </a>
          <a href="#" className="px-6 py-2 border border-[#03363D] text-[#03363D] rounded-lg font-medium hover:bg-[#e5e6e7] transition-colors">
            View demo
          </a>
        </div>
      </nav>

      
      <main className="flex flex-col items-center justify-center px-4 pt-20 pb-32">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-semibold text-[#000000] mb-8">
            Sign in to Zendesk
          </h1>

          <div className="mb-6">
            <label className="block font-semibold text-sm text-[#2f3941] mb-2">
              yoursubdomain.zendesk.com
            </label>
            <div className="flex items-center bg-white rounded-lg border border-[#d8dcde] focus-within:border-[#03363D] focus-within:ring-2 focus-within:ring-[#03363D]/20">
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-l-lg outline-none text-[#2f3941]"
                placeholder="yoursubdomain"
              />
              <span className="px-4 py-3 block font-semibold text-[#68737d] bg-[#f8f9f9] rounded-r-lg border-l border-[#d8dcde]">
                .zendesk.com
              </span>
            </div>
            <a href="#" className="text-sm inline-block font-semibold underline text-[#03363D] hover:underline mt-2">
              Forgot your subdomain?
            </a>
          </div>

          <a href="#" className="w-full block text-center font-medium py-3 bg-[#d1f470] text-[#03363D] rounded-lg text-lg hover:bg-[#d1f179] transition-colors mb-3">
            Sign in
          </a>

          <a href="#" className="w-full block text-center font-medium py-3 bg-white border-2 border-[#d8dcde] text-[#2f3941] rounded-lg text-lg hover:bg-[#e5e6e7] transition-colors">
            New here? Start free trial
          </a>
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-16 text-sm">
          <a href="#" className="text-[#03363D] block font-semibold underline hover:underline">
            Sign in to Chat
          </a>
          <a href="#" className="text-[#03363D] block font-semibold underline hover:underline">
            Sign in to Sell
          </a>
          <a href="#" className="text-[#03363D] block font-semibold underline hover:underline">
            Sign in to Sunshine Conversations
          </a>
        </div>
      </main>

      
      <footer className="absolute bottom-0 left-0 right-0 px-4 py-6 border-t border-[#d8dcde]">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#68737d]">
          <a href="#" className="block text-[#03363D] font-semibold hover:text-[#8a8b8c] hover:underline">
            Terms of Use
          </a>
          <a href="#" className="block text-[#03363D] font-semibold hover:text-[#8a8b8c] hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="block text-[#03363D] font-semibold hover:text-[#8a8b8c] hover:underline">
            Cookie Notice
          </a>
          <a href="#" className="block text-[#03363D] font-semibold hover:text-[#8a8b8c] hover:underline">
            Cookie settings
          </a>
          <a href="#" className="block text-[#03363D] font-semibold hover:text-[#8a8b8c] hover:underline">
            Trust Center
          </a>
          <a href="#" className="block text-[#03363D] font-semibold hover:text-[#8a8b8c] hover:underline">
            ©Zendesk 2025
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ZendeskLogin;