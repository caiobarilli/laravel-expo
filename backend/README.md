# Backend

<br />

| Software    | Port |
| ----------- | ---- |
| **laravel** | 8000 |

<br />

## Pré-requisitos

Para começar, certifique-se de ter o [Docker](https://docs.docker.com/) e também o [Docker Compose](https://docs.docker.com/compose/install/) no seu sistema.

<br />

## Instalação

Acesse a pasta e faça download das imagens e construa os containers com o comando:

```sh
docker-compose build
```

Suba a primera vez os containers com o comando:

```sh
docker-compose up
```

Acesse o bash do container com o comando:

```

sh ./app bash

// No bash do container execute os comando:
composer install
cp .env.example .env
php artisan migrate:fresh --seed

// para sair do container execute os comando:
exit 

```

Adicione as permissões da pasta storage com o comando

```
sh ./app lumen:permissions
```

acesse seu [navegador](http://localhost:8000/) para visualizar o projeto.
