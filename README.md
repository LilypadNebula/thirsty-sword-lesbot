# Thirsty Sword Lesbot - A Discord bot for Thirsty Sword Lesbians

## About

This is both an info page to describe the bot, and the actual bot. Thirsty Sword Lesbot (refered to as Tassel from here) is made to help with playing the table top roleplaying game [Thirsty Sword Lesians](https://evilhat.com/product/thirsty-sword-lesbians/)

It's built on Remix, the Blues Stack specifically, Prisma, Discord.js, and deployed to Fly.io

## Development

- Initial db setup. Creates db and seeds with base data

  ```sh
  npm run setup
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
