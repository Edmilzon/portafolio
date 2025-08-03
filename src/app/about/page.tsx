"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 animate-fade-in">
            Sobre Mí
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
            Desarrollador Full Stack apasionado por crear experiencias digitales únicas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Personal Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Personal Info */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">👨‍💻 Quién Soy</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Soy Edmilzon, un desarrollador Full Stack con más de 3 años de experiencia en la creación de aplicaciones web y móviles. 
                  Me apasiona transformar ideas en realidad digital, creando soluciones innovadoras que marcan la diferencia.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mi enfoque se centra en desarrollar experiencias de usuario excepcionales, utilizando las tecnologías más modernas 
                  y mejores prácticas de la industria.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">🎯 Mi Misión</h2>
                <p className="text-gray-300 leading-relaxed">
                  Crear soluciones tecnológicas que no solo cumplan con los requisitos funcionales, sino que también 
                  proporcionen una experiencia memorable y significativa para los usuarios finales.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6 animate-fade-in-delay">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">📊 Estadísticas</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                    <div className="text-gray-300 text-sm">Años de Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-300 text-sm">Proyectos Completados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">20+</div>
                    <div className="text-gray-300 text-sm">Clientes Satisfechos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-gray-300 text-sm">Compromiso</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">📍 Ubicación</h2>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Cochabamba, Bolivia</p>
                    <p className="text-gray-300 text-sm">Disponible para proyectos remotos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16 animate-fade-in-delay-2">
            <h2 className="text-3xl font-bold text-white text-center mb-12">🛠️ Tecnologías y Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </span>
                  Frontend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">React</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Next.js</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">TypeScript</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Tailwind CSS</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                  </span>
                  Backend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Node.js</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Express.js</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">MongoDB</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">PostgreSQL</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile & Tools */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </span>
                  Mobile & Tools
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">React Native</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Git</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Docker</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">AWS</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="animate-fade-in-delay-2">
            <h2 className="text-3xl font-bold text-white text-center mb-12">💼 Experiencia Profesional</h2>
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Desarrollador Full Stack Senior</h3>
                  <span className="text-purple-400 text-sm">2022 - Presente</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Liderando el desarrollo de aplicaciones web y móviles complejas, trabajando con equipos multidisciplinarios 
                  y implementando las mejores prácticas de desarrollo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">MongoDB</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Desarrollador Frontend</h3>
                  <span className="text-purple-400 text-sm">2021 - 2022</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Especializado en la creación de interfaces de usuario modernas y responsivas, 
                  optimizando la experiencia del usuario y la accesibilidad.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-200 rounded-full text-sm">CSS3</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-sm">HTML5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
