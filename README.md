
## Project structure

docker-CI
```bash
.
|   .env
|   docker-compose.yml
|   README.md
|   
+---docker-backend
|   |   .env
|   |   .prettierrc
|   |   docker-compose.yml
|   |   Dockerfile
|   |   eslint.config.mjs
|   |   nest-cli.json
|   |   package-lock.json
|   |   package.json
|   |   README.md
|   |   tsconfig.build.json
|   |   tsconfig.json
|   |   
|   +---generated
|   |   \---prisma
|   |       |   client.d.ts
|   |       |   client.js
|   |       |   default.d.ts
|   |       |   default.js
|   |       |   edge.d.ts
|   |       |   edge.js
|   |       |   index-browser.js
|   |       |   index.d.ts
|   |       |   index.js
|   |       |   package.json
|   |       |   query_engine-windows.dll.node
|   |       |   schema.prisma
|   |       |   wasm.d.ts
|   |       |   wasm.js
|   |       |   
|   |       \---runtime
|   |               edge-esm.js
|   |               edge.js
|   |               index-browser.d.ts
|   |               index-browser.js
|   |               library.d.ts
|   |               library.js
|   |               react-native.js
|   |               wasm.js
|   |               
|   +---prisma
|   |   |   schema.prisma
|   |   |   
|   |   \---migrations
|   |       |   migration_lock.toml
|   |       |   
|   |       +---20250416002504_init
|   |       |       migration.sql
|   |       |       
|   |       \---20250429201135_init
|   |               migration.sql
|   |               
|   +---src
|   |   |   app.module.ts
|   |   |   main.ts
|   |   |   
|   |   \---users
|   |       |   users.controller.ts
|   |       |   users.module.ts
|   |       |   users.service.ts
|   |       |   
|   |       +---dto
|   |       |       create-user.dto.ts
|   |       |       update-user.dto.ts
|   |       |       
|   |       \---entities
|   |               user.entity.ts
|   |               
|   \---test
|           app.e2e-spec.ts
|           jest-e2e.json
|           
\---docker-frontend
    |   docker-compose.yml
    |   Dockerfile
    |   eslint.config.js
    |   index.html
    |   package-lock.json
    |   package.json
    |   README.md
    |   tsconfig.app.json
    |   tsconfig.json
    |   tsconfig.node.json
    |   vite.config.ts
    |   
    +---public
    |       vite.svg
    |       
    \---src
        |   App.css
        |   App.tsx
        |   index.css
        |   main.tsx
        |   vite-env.d.ts
        |   
        \---assets
                react.svg
                

