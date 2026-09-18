# Portal de Clientes — Frontend

Portal web desarrollado en **TypeScript + Vite**, conectado en tiempo real a una API REST en .NET ([PortalClientesApi](https://github.com/luleiacom/PortalClientesApi)) para la gestión de clientes y pedidos.

Proyecto de portfolio orientado a roles de desarrollo frontend con integración a plataformas CRM (Creatio/Freedom UI).

## Stack técnico

- TypeScript
- Vite
- Fetch API (consumo de API REST)
- CSS

## Funcionalidades

- Listado de clientes obtenido en vivo desde la API
- Alta de nuevos clientes mediante formulario
- Actualización automática de la vista sin recargar la página

## Cómo correrlo localmente

1. Cloná el repositorio
2. Instalá las dependencias: `npm install`
3. Asegurate de tener corriendo el backend ([PortalClientesApi](https://github.com/luleiacom/PortalClientesApi)) en `https://localhost:7101`
4. Corré el proyecto: `npm run dev`
5. Accedé a `http://localhost:5173`

## Backend relacionado

Este portal consume la API del repositorio [PortalClientesApi](https://github.com/luleiacom/PortalClientesApi), que incluye endpoints REST, OData, y una automatización asistida por IA.
