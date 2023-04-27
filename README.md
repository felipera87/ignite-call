This project is just for study, to sharpen development skills. It uses this [design system](https://github.com/felipera87/ignite_design_system).

This project was bootstraped with `npx create-next-app@latest --use-npm`.


## Prisma
Prisma ORM was initialized with `npx prisma init --datasource-provider SQLite`.

The file `schema.prisma` contains all models, its columns and relations. After modifying this file you need to generate a migration based on its changes, run `npx prisma migrate dev` to achieve this (this command also runs the migration).

If you prefer just to execute existing migrations, without comparing with model, just run `npx prisma db push`.

To view database tables and registers you can use prisma studio with `npx prisma studio`.

### Google OAuth and Calendar activation
To use google OAuth you need to create a new project on [Google Cloud](https://console.cloud.google.com/). Once it's created, follow this step by step:
- Open OAuth permission section
- Just hit next on the next pages, filing only required fields is enough
- After it's done, publish it on the OAuth screen
- Go to credentials section and create a new credential
- Select client OAuth ID, for authorized origin put http://localhost:3000, for redirect put http://localhost:3000/api/auth/callback/google
- Copy the values and fill the .env variables
- Go to API and services section to activate calendar API
- Click Activate API and services, search for the google calendar and activate it

### Start MySQL
For first time users:
```
docker run --name mysqlignite -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest

# to start/stop container
docker start mysqlignite
docker stop mysqlignite
```

Database is hosted on [planetscale](https://app.planetscale.com/), which is a good option to integrate with Vercel because it kills the instance if there is no usage, which would be a problem to deal with db connection pooling.