# Proyecto [Nombre del Proyecto] - Backend

Este es el backend del proyecto desarrollado con [NestJS](https://nestjs.com/) y [Prisma](https://www.prisma.io/) para la gestión de la base de datos. A continuación, se describen los pasos para configurar, ejecutar y migrar la base de datos.

---

## **Requisitos previos**

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu máquina:

-   [Node.js](https://nodejs.org/) (versión mínima recomendada: `16.x.x`)
-   [Git](https://git-scm.com/)
-   [PostgreSQL](https://www.postgresql.org/) u otro gestor de base de datos compatible
-   [Prisma CLI](https://www.prisma.io/docs/getting-started) (opcional):

```bash
npm install -g prisma
```

Clona este repositorio en tu máquina local con el siguiente comando:

```bash
git clone https://github.com/[usuario]/[repositorio].git
```

Ingresar al directorio del proyecto

```bash
cd [nombre-del-directorio]
```

Instalar las dependencias Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

Localiza el archivo .env.example en la raíz del proyecto.

Crea un archivo .env basado en .env.example:

```bash
cp .env.example .env
```

Edita el archivo .env para configurar la conexión a tu base de datos. Ejemplo para PostgreSQL:

```bash
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_datos"
```

Importante: No olvides configurar el resto de variables JWT_SECRET, NEXTJS_PUBLIC_DOMAIN, etc.

Luego genera el cliente de Prisma ejecutando:

```bash
npx prisma generate
```

Si no has importado manualmente la base de datos, debes ejecutar las migraciones para crear la estructura necesaria. Además, si ya importaste la base de datos pero realizaste algún cambio en el esquema (schema.prisma), también debes ejecutar el siguiente comando para aplicar los ajustes:

```bash
npx prisma migrate dev
```

Inicia el servidor en modo de desarrollo:

```bash
npm run start:dev
```

Visualizar la API en Swagger La documentación interactiva de la API estará disponible en:

```bash
http://localhost:3000/api
```
