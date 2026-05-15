const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-3 text-white mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-xl font-bold">B</div>
            <span className="text-2xl font-bold tracking-tight">Blogora</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Thoughtful writing from independent voices. Discover, read, and share stories that inspire.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Browse</a></li>
            <li><a href="#" className="hover:text-white">Popular</a></li>
            <li><a href="#" className="hover:text-white">Latest</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs">
        © 2026 Blogora. Made with ❤️ in Nepal.
      </div>
    </footer>
  );
};

export default Footer;