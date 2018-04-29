# AlMundo Front

Para iniciar la aplicación en desarrollo, es necesario setear las variables de entorno del archivo ".env"

```sh
cp .env.dist .env # copiar archivo environment propio 
```

## Correr dev con Docker
```sh
  docker-compose build #Construimos nuestro entorno
  docker-compose up -d #Levantamos el contenedor 
  docker-compose exec almundofront /bin/sh
  npm install # si es la primera vez
  npm run start
```

## Deploy iin github pages
```sh
    npm run deploy #Este corre el deploy en modo prod y aot, y finalmente sube todo a github pages
```

## Demo en vivo
- Front: [https://jairofernandez.github.io/AlMundoFrontend/](https://jairofernandez.github.io/AlMundoFrontend/)
- Back: [https://api-almundo.herokuapp.com/api](https://api-almundo.herokuapp.com/api)

## Repositorios:
- Backend: [https://github.com/jairoFernandez/AlMundoBackend](https://github.com/jairoFernandez/AlMundoBackend)
- Frontend: [https://github.com/jairoFernandez/AlMundoFrontend](https://github.com/jairoFernandez/AlMundoFrontend)

