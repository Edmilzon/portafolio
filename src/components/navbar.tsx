export default function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-lg backdrop-blur-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="self-center text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-white transition-all duration-300">
                Edmilzon
              </span>
          </a>
          
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-purple-200 rounded-lg md:hidden hover:bg-purple-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-purple-500/20 rounded-lg bg-slate-800/50 backdrop-blur-sm md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:bg-transparent md:text-purple-200 md:p-0 md:hover:text-white md:hover:bg-gradient-to-r md:hover:from-blue-600/20 md:hover:to-purple-600/20 md:hover:rounded-lg transition-all duration-300 font-semibold relative group">
                  <span className="relative z-10">Home</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-purple-800/50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:bg-gradient-to-r md:hover:from-purple-600/20 md:hover:to-pink-600/20 md:hover:rounded-lg transition-all duration-300 font-medium relative group">
                  <span className="relative z-10">About</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-purple-800/50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:bg-gradient-to-r md:hover:from-pink-600/20 md:hover:to-orange-600/20 md:hover:rounded-lg transition-all duration-300 font-medium relative group">
                  <span className="relative z-10">Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-purple-800/50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:bg-gradient-to-r md:hover:from-orange-600/20 md:hover:to-red-600/20 md:hover:rounded-lg transition-all duration-300 font-medium relative group">
                  <span className="relative z-10">Projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-purple-800/50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:hover:bg-gradient-to-r md:hover:from-red-600/20 md:hover:to-purple-600/20 md:hover:rounded-lg transition-all duration-300 font-medium relative group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}