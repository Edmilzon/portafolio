"use client";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 animate-fade-in">
            Proyectos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
            Algunos de mis trabajos más destacados
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">E-commerce Platform</h3>
              <p className="text-gray-300 mb-4">Plataforma completa de comercio electrónico con React y Node.js.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Task Management App</h3>
              <p className="text-gray-300 mb-4">Aplicación móvil para gestión de tareas con React Native.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">Redux</span>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
            <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
              <p className="text-gray-300 mb-4">Sitio web personal con Next.js y Tailwind CSS.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">Tailwind</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 