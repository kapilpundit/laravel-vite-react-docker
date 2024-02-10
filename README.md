# laravel-vite-react-docker

## _Laravel, Vite, React and Docker..._

A Project built using Laravel (10) as backend, React (18) as frontend, using vite inside docker containers.

## Pre-requisites

The following pre-requisites are required to be setup on your local machine in order to run this locally. The setup guide links given below have guides for Windows, Linux and Mac OS.

- Docker and Docker Compose setup on your local machine
  -- [Docker setup guide](https://nodejs.org/)
  -- [Docker Composer setup guide](https://docs.docker.com/compose/gettingstarted/)
- Git client
  -- [Git client setup guide](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)
- Code editor of yur liking. But I suggest either VS Code or Sublime Text. Install one of them.
  -- [VS Code setup guide](https://code.visualstudio.com/docs/setup/setup-overview)
  -- [Sublime Text setup guide](https://www.sublimetext.com/download)

## Docker Commands for running the project:

Once docker, docker-compose, and git client are installed on your machine, you can clone this repository in a directory of your liking. The run the following docker commands to start the project:

- `docker-compose run --rm laravel-migrate-seed`: This command needs to be executed only once when you initially setup the project. This will create the default laravel database tables and seed (put) data into them.
- `docker-compose up -d --build nginx`: For this command, the `--build` option is required only during the initial setup, and later if you do some changes in your docker files.
- `./composer install`: This is also required for the initial setup and thereafter whenever you want install any composer (php) dependencies use this syntax `./composer install <dependency-name>@<version-number>`
- `./run-project`: Finally run this to start the project. After running this, you can access you application at `http://localhost:8000`

## Microservices

This project is distributed into microservices namely:
| Main containers | Description |
| ------ | ------ |
| NGINX | It is the webserver. |
| PHP | Runs PHP-FPM process manager. |
| Mysql | It is the database. |
| Redis | Store cache and sessions. |
| Cron jobs | Runs laravel cron jobs. |
| Queues | Runs laravel queues. |
| Mailhog | Local email testing. It is optional. |
| phpMyAdmin | Database management. It is optional. |

| Utility containers | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| Migrate-Seed       | Runs migrations and seeders. Should be run just after starting the main containers. |
| Composer           | Runs composer commands.                                                             |
| Artisan            | Runs artisan commands.                                                              |
| Npm                | Runs npm commands.                                                                  |

## Scripts

The repository contains the following scripts which are:
| Script | Description | Example |
| ------ | ------ | ------|
| artisan | Runs artisan commands. | `./artisan --version` on linux/Mac and `artisan.bat --version` in windows. |
| composer | Runs composer commands. | `./composer --version` on linux/Mac and `composer.bat --version` in windows. |
| npm | Runs npm commands. | `./npm --version` on linux/Mac and `npm.bat --version` in windows. |
| run-project | Runs and serves the project. | `./run-project` on linux/Mac and `run-project.bat` in windows. |

## References

Shoutout to [Elvin Lari](https://medium.com/@elvinlari) for his article on [Medium](https://betterprogramming.pub/dockerize-laravel-vite-react-application-in-your-development-environment-a118aea4a02d), based on which this project is created.
