# Buenas Prácticas y Recomendaciones para Aplicaciones Inmobiliarias en Next.js

El desarrollo de una plataforma de bienes raíces (Real Estate) exige un alto rendimiento, excelente posicionamiento en buscadores (SEO) y una experiencia de usuario (UX) impecable. A continuación, se detallan las mejores prácticas aplicadas específicamente al ecosistema de Next.js.

## 1. Optimización de Imágenes (Crítico)
En aplicaciones inmobiliarias, las fotos de las propiedades son el principal atractivo, pero también el mayor cuello de botella en términos de rendimiento.
- **Uso de `next/image`:** Siempre utiliza el componente `<Image />` para cargar las fotos de propiedades. Esto garantiza formatos modernos (WebP/AVIF), redimensionamiento automático adaptado a la pantalla del dispositivo y *lazy loading* (carga diferida).
- **Priorización del LCP (Largest Contentful Paint):** Agrega la propiedad `priority` a la imagen principal (la más grande visible) de la propiedad en su página de detalle para que cargue inmediatamente.

## 2. Estrategias de Renderizado y SEO
El SEO es de suma importancia para que el catálogo aparezca en los primeros resultados de búsqueda.
- **Server Components (App Router):** Favorece el uso de componentes de servidor (`React Server Components`) para reducir la cantidad de JavaScript enviada al navegador, agilizando la interacción inicial.
- **Metadata Dinámica:** Implementa la función `generateMetadata` en las páginas de detalle para incluir etiquetas *Open Graph* (OG). Esto asegura que al compartir un enlace (por WhatsApp, X, Facebook), se muestre previsualizada la imagen atractiva de la casa, su título y su precio.
- **Generación Estática (ISR):** Aprovecha *Incremental Static Regeneration* (ISR) para páginas que no reciben cambios a cada segundo. Al pre-renderizar el sitio lograrás tiempos de respuesta milimétricos, con la base de datos revalidando el contenido en el fondo (por ejemplo, cada pocos minutos o al generarse un cambio).

## 3. Experiencia de Búsqueda y Filtrado (UX)
Un buscador veloz incrementa significativamente la conversión.
- **Filtros administrados por la URL:** Al buscar propiedades (ej. por precio, ubicación, habitaciones), usa `searchParams` y modifica la URL de forma progresiva (ej. `/propiedades?precio=1000000`). Esto permite a los usuarios compartir sus búsquedas, abrir propiedades en nuevas pestañas sin perder recuento y mejorar el cacheado del lado servidor.
- **Mapas con Carga Diferida:** Si vas a integrar mapas (Google Maps o Mapbox), cárgalos dinámicamente (`const Map = dynamic(() => import('@/components/Map'), { ssr: false })`) para evitar penalizar el rendimiento inicial.
- **Esqueletos de Carga:** Usa `loading.tsx` y React Suspense para desplegar _Skeleton UI_ (pantallas o tarjetas que parpadean) en vez de dejar la pantalla en blanco mientras se obtienen datos filtrados desde Supabase.

## 4. Base de Datos y Transporte al Cliente (Supabase)
- **Paginación desde Servidor:** Nunca descargues todo tu catálogo de casas. Utiliza `limit` y `offset` (paginación) en tus Server Actions.
- **Consultas Exactas:** En listados (HomeScreen), pide únicamente los campos indispensables (`id`, `title`, `price`, `thumbnail_url`). Reserva las consultas profundas (galería completa, agente asociado, amenidades en detalle) solo para la vista enfocada en una propiedad.
- **Mutaciones Optimizadas:** Integra un mecanismo de "Agregar a Favoritos" con actualizaciones optimistas en la interfaz (*Optimistic UI*) para brindar una sensación de rapidez instantánea, validando después en el servidor.

## 5. Accesibilidad (A11y) y Enfoque Móvil
- **Mobile First:** La gran mayoría de usuarios visualizarán el hogar de sus sueños desde un smartphone. El diseño tiene (y debe) comenzar por pantallas pequeñas (*Responsive Design* con foco inicial en móvil).
- **Atributos descriptivos (`alt`):** Asegúrate de que las imágenes tengan etiquetas como `alt="Amplia sala de estar con iluminación natural en casa venta ubicada en..."` No solo ayuda a personas usando un lector de pantalla, sino que rankea mejor para búsqueda de imágenes. 

## 6. Arquitectura General y Formularios
- **Server Actions protegidos:** Aprovecha los Server Actions del App Router para manejar formularios (contacto al agente, solicitud de visitas). Integra protección contra spam y validaciones robustas (usando bibliotecas como Zod) además del manejo de errores.
- **División de Responsabilidades:** Separa claramente UI (`components/ui`), llamadas y servicios (`lib/services` o `actions`), y lógica de negocio para mantener tu proyecto `luxe-real-state` ordenado sin importar cómo crezca a futuro.
