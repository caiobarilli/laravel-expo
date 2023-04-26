# Docker Laravel Boilerplate

<br />

| Software    | Port |
| ----------- | ---- |
| **laravel** | 8000 |

<br />

## Pré-requisitos

Para começar, certifique-se de ter o [Docker](https://docs.docker.com/) e também o [Docker Compose](https://docs.docker.com/compose/install/) no seu sistema.

<br />

## Download

Faça o download do projeto com o comando:

```sh
git clone git@github.com:caiobarilli/docker-laravel-boilerplate.git
```

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

Você pode instalar o laravel com o comando

```
sh ./app install
```

Adicione as permissões da pasta storage com o comando

```
sh ./app permissions
```

acesse seu [navegador](http://localhost:8000/) para visualizar o projeto.
