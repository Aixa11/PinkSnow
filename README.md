# Pink Snow Interface

Una interfaz web moderna para explorar y monitorear los efectos del cambio climático en regiones glaciares, con enfoque especial en el fenómeno de la "nieve rosa" y sus implicaciones ambientales.

## 🌟 Características

- **Diseño Split-Screen**: Interfaz dividida con imagen impactante y contenido informativo
- **Integración con Google Earth Engine**: Enlaces directos a aplicaciones especializadas de monitoreo
- **Diseño Responsivo**: Optimizado para dispositivos móviles y de escritorio
- **Interfaz Bilingüe**: Contenido en español para audiencia hispanohablante
- **Navegación Intuitiva**: Botones de acción claros y accesibles

## 🚀 Tecnologías Utilizadas

- **Next.js 15**: Framework de React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de CSS utilitario
- **shadcn/ui**: Componentes de UI modernos y accesibles
- **Next.js Image**: Optimización automática de imágenes

## 📋 Requisitos Previos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd pink-snow-interface
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
pink-snow-interface/
├── app/
│   ├── layout.tsx          # Layout principal de la aplicación
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   └── ui/                 # Componentes de shadcn/ui
├── pink-snow-landing.tsx   # Componente principal de la landing page
├── lib/
│   └── utils.ts           # Utilidades y funciones helper
├── public/                # Archivos estáticos
├── README.md
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

## 🌍 Funcionalidades

### Monitoreo Glaciar
- Acceso directo a aplicación de Google Earth Engine
- Visualización de datos glaciares en tiempo real
- Análisis de cambios temporales en formaciones glaciares

### Monitoreo del Albedo
- Medición del albedo en superficies glaciares
- Análisis del impacto del cambio climático
- Visualización de datos de reflectancia

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    blue: '#3B82F6',    // Azul de los botones
    gray: '#6B7280',    // Gris del texto
  }
}
```

### Contenido
El contenido se puede modificar directamente en `pink-snow-landing.tsx`:

- Título principal
- Descripción
- Texto de los botones
- Enlaces de las aplicaciones

## 🔗 Enlaces de las Aplicaciones

- **Monitoreo Glaciar**: [https://ee-my-projectee.projects.earthengine.app/view/glaciaralgasapp](https://ee-my-projectee.projects.earthengine.app/view/glaciaralgasapp)
- **Monitoreo del Albedo**: [https://ee-my-projectee.projects.earthengine.app/view/albedoglaciarapp](https://ee-my-projectee.projects.earthengine.app/view/albedoglaciarapp)

## 📱 Responsividad

La interfaz está optimizada para:
- **Desktop**: Layout split-screen completo
- **Tablet**: Adaptación de espaciado y tipografía
- **Mobile**: Stack vertical con imagen superior

## 🧪 Testing

Para ejecutar las pruebas:

```bash
npm run test
# o
yarn test
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Otros Proveedores
```bash
npm run build
npm run start
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Google Earth Engine**: Por proporcionar las herramientas de análisis geoespacial
- **Next.js Team**: Por el excelente framework
- **shadcn**: Por los componentes de UI
- **Vercel**: Por la plataforma de despliegue

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto, puedes:
- aixa_bentitez@outlook.es
- Linkedin

---

**Nota**: Este proyecto está diseñado para fines educativos y de investigación sobre el cambio climático y sus efectos en regiones glaciares.
