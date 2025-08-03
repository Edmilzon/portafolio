# 🚀 Portfolio - Next.js Professional Application

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-8.0-4B32C3?style=for-the-badge&logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.0-F7B93E?style=for-the-badge&logo=prettier)](https://prettier.io/)

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características](#-características)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura de Directorios](#-estructura-de-directorios)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Variables de Entorno](#-variables-de-entorno)
- [Desarrollo](#-desarrollo)
- [Testing](#-testing)
- [Build y Despliegue](#-build-y-despliegue)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 🎯 Descripción del Proyecto

Este es un portfolio profesional desarrollado con **Next.js 14** utilizando el App Router, diseñado para mostrar proyectos, habilidades y experiencia de manera elegante y moderna. La aplicación implementa las mejores prácticas de desarrollo web moderno con un enfoque en rendimiento, accesibilidad y SEO.

## ✨ Características

### 🎨 **Frontend & UX**
- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Modo Oscuro/Claro**: Tema dinámico con persistencia
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **Accesibilidad**: Cumple con estándares WCAG 2.1
- **SEO Optimizado**: Meta tags dinámicos y sitemap automático

### ⚡ **Rendimiento**
- **Server-Side Rendering (SSR)**: Para mejor SEO y rendimiento inicial
- **Static Site Generation (SSG)**: Para páginas estáticas
- **Incremental Static Regeneration (ISR)**: Para contenido dinámico
- **Code Splitting**: Carga diferida de componentes
- **Image Optimization**: Optimización automática de imágenes

### 🔧 **Desarrollo**
- **TypeScript**: Tipado estático para mayor robustez
- **ESLint + Prettier**: Linting y formateo de código
- **Husky**: Git hooks para calidad de código
- **Commitlint**: Convenciones de commits
- **Testing**: Jest + React Testing Library

## 🏗️ Arquitectura del Proyecto

### **Patrón de Arquitectura**
```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │   Pages     │  │ Components  │  │   Layouts   │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    BUSINESS LAYER                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │   Hooks     │  │   Utils     │  │  Services   │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    DATA LAYER                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │   API       │  │   Database  │  │   Cache     │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

### **Principios de Diseño**
- **Separation of Concerns**: Separación clara de responsabilidades
- **Single Responsibility**: Cada componente tiene una única responsabilidad
- **Dependency Injection**: Inyección de dependencias para testing
- **Composition over Inheritance**: Composición preferida sobre herencia
- **Immutable Data**: Datos inmutables para mejor predictibilidad

## 🛠️ Tecnologías Utilizadas

### **Core Framework**
- **Next.js 14**: Framework React con App Router
- **React 18**: Biblioteca de UI con hooks modernos
- **TypeScript 5.0**: Tipado estático para JavaScript

### **Styling & UI**
- **Tailwind CSS 3.3**: Framework CSS utility-first
- **Framer Motion**: Animaciones y transiciones
- **Lucide React**: Iconografía moderna
- **clsx/tailwind-merge**: Utilidades para clases condicionales

### **Development Tools**
- **ESLint**: Linting de código JavaScript/TypeScript
- **Prettier**: Formateo automático de código
- **Husky**: Git hooks para calidad de código
- **lint-staged**: Linting de archivos staged
- **commitlint**: Validación de mensajes de commit

### **Testing**
- **Jest**: Framework de testing
- **React Testing Library**: Testing de componentes React
- **@testing-library/jest-dom**: Matchers personalizados
- **MSW**: Mock Service Worker para API mocking

### **Performance & Monitoring**
- **@next/bundle-analyzer**: Análisis de bundle
- **web-vitals**: Métricas de rendimiento web
- **Sentry**: Monitoreo de errores (opcional)

## 📁 Estructura de Directorios

```
src/
├── app/                          # App Router (Next.js 14)
│   ├── (auth)/                   # Route groups
│   ├── api/                      # API routes
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout raíz
│   ├── loading.tsx               # Loading UI
│   ├── error.tsx                 # Error UI
│   └── not-found.tsx             # 404 page
├── components/                   # Componentes reutilizables
│   ├── ui/                       # Componentes base (shadcn/ui)
│   ├── forms/                    # Componentes de formularios
│   ├── layout/                   # Componentes de layout
│   └── sections/                 # Secciones específicas
├── lib/                          # Utilidades y configuraciones
│   ├── utils.ts                  # Funciones utilitarias
│   ├── constants.ts              # Constantes de la aplicación
│   ├── validations.ts            # Esquemas de validación
│   └── api.ts                    # Configuración de API
├── hooks/                        # Custom hooks
│   ├── use-local-storage.ts      # Hook para localStorage
│   ├── use-theme.ts              # Hook para tema
│   └── use-debounce.ts           # Hook para debounce
├── types/                        # Definiciones de tipos TypeScript
│   ├── index.ts                  # Exportaciones de tipos
│   ├── api.ts                    # Tipos de API
│   └── components.ts             # Tipos de componentes
├── styles/                       # Estilos adicionales
│   ├── animations.css            # Animaciones CSS
│   └── components.css            # Estilos de componentes
└── data/                         # Datos estáticos
    ├── projects.ts               # Datos de proyectos
    ├── skills.ts                 # Datos de habilidades
    └── experience.ts             # Datos de experiencia

public/                           # Archivos estáticos
├── images/                       # Imágenes optimizadas
├── icons/                        # Iconos SVG
└── fonts/                        # Fuentes personalizadas

docs/                             # Documentación
├── architecture.md                # Documentación de arquitectura
├── api.md                        # Documentación de API
└── deployment.md                 # Guía de despliegue

tests/                            # Tests
├── __mocks__/                    # Mocks para testing
├── components/                    # Tests de componentes
├── hooks/                        # Tests de hooks
└── utils/                        # Tests de utilidades
```

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js 18.17.0 o superior
- npm 9.0.0 o superior
- Git 2.30.0 o superior

### **Instalación**

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

4. **Verificar instalación**
```bash
npm run type-check
npm run lint
```

## 📜 Scripts Disponibles

### **Desarrollo**
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Iniciar servidor de producción
npm run preview      # Vista previa de build
```

### **Calidad de Código**
```bash
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Corregir errores de linting
npm run format       # Formatear código con Prettier
npm run type-check   # Verificar tipos TypeScript
```

### **Testing**
```bash
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:coverage # Tests con cobertura
npm run test:e2e     # Tests end-to-end
```

### **Build y Análisis**
```bash
npm run build        # Build de producción
npm run analyze      # Análisis de bundle
npm run export       # Exportar como sitio estático
```

### **Git Hooks**
```bash
npm run prepare      # Configurar Husky hooks
npm run commit       # Commit interactivo
```

## 🔧 Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Aplicación
NEXT_PUBLIC_APP_NAME=Portfolio
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_VERSION=1.0.0

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX

# APIs
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com

# Social Media
NEXT_PUBLIC_GITHUB_URL=https://github.com/tu-usuario
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/tu-usuario
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/tu-usuario

# Features
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_COMMENTS=true
NEXT_PUBLIC_ENABLE_DARK_MODE=true
```

## 💻 Desarrollo

### **Flujo de Trabajo**

1. **Crear nueva rama**
```bash
git checkout -b feature/nueva-funcionalidad
```

2. **Desarrollar con hot reload**
```bash
npm run dev
```

3. **Verificar calidad de código**
```bash
npm run lint
npm run type-check
```

4. **Ejecutar tests**
```bash
npm run test
```

5. **Commit con convenciones**
```bash
npm run commit
```

### **Convenciones de Código**

#### **Nomenclatura**
- **Componentes**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useLocalStorage.ts`)
- **Utilidades**: camelCase (`formatDate.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Tipos**: PascalCase con sufijo `Type` (`UserType`)

#### **Estructura de Componentes**
```typescript
// 1. Imports
import React from 'react'
import { cn } from '@/lib/utils'

// 2. Types
interface ComponentProps {
  className?: string
  children: React.ReactNode
}

// 3. Component
export function Component({ className, children }: ComponentProps) {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  )
}
```

## 🧪 Testing

### **Estrategia de Testing**

- **Unit Tests**: Componentes individuales y utilidades
- **Integration Tests**: Interacciones entre componentes
- **E2E Tests**: Flujos completos de usuario
- **Visual Regression**: Comparación de snapshots

### **Ejemplo de Test**
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
})
```

## 🚀 Build y Despliegue

### **Build de Producción**
```bash
npm run build
```

### **Análisis de Bundle**
```bash
npm run analyze
```

### **Optimizaciones Automáticas**
- **Code Splitting**: División automática de código
- **Tree Shaking**: Eliminación de código no utilizado
- **Minificación**: Compresión de código
- **Image Optimization**: Optimización automática de imágenes
- **Font Optimization**: Optimización de fuentes web

### **Plataformas de Despliegue**

#### **Vercel (Recomendado)**
```bash
npm install -g vercel
vercel --prod
```

#### **Netlify**
```bash
npm run build
npm run export
# Subir carpeta out/
```

#### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribución

### **Proceso de Contribución**

1. **Fork del repositorio**
2. **Crear rama feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit cambios** (`git commit -m 'Add some AmazingFeature'`)
4. **Push a la rama** (`git push origin feature/AmazingFeature`)
5. **Abrir Pull Request**

### **Guías de Contribución**

- **Código**: Seguir convenciones de ESLint y Prettier
- **Commits**: Usar convenciones de Conventional Commits
- **Tests**: Mantener cobertura mínima del 80%
- **Documentación**: Actualizar README y docs según sea necesario

### **Conventional Commits**
```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: agregar o modificar tests
chore: cambios en build o herramientas
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Email**: contact@example.com
- **LinkedIn**: [Tu Nombre](https://linkedin.com/in/tu-usuario)
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **Portfolio**: [tu-portfolio.com](https://tu-portfolio.com)

---

<div align="center">
  <p>Hecho con ❤️ usando <a href="https://nextjs.org">Next.js</a></p>
  <p>⭐ Si te gusta este proyecto, dale una estrella en GitHub</p>
</div>
