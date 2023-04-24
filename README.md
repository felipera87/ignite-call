This project is just for study, to sharpen development skills. It uses this [design system](https://github.com/felipera87/ignite_design_system).

This project was bootstraped with `npx create-next-app@latest --use-npm`.


## Prisma
Prisma ORM was initialized with `npx prisma init --datasource-provider SQLite`.

The file `schema.prisma` contains all models, its columns and relations. After modifying this file you need to generate a migration based on its changes, run `npx prisma migrate dev` to achieve this (this command also runs the migration).

To view database tables and registers you can use prisma studio with `npx prisma studio`.