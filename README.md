# NodeJs Template

A template project for Node.js applications using Express and Mongoose/Sequelize.

## Project Structure

```
src/
├── config/
├── controllers/
├── data/
├── handlers/
├── middlewares/
├── models/
├── routes/
├── services/insertDB/
├── storage/
├── utils/
├── app.js
├── .env.example
├── .gitignore
├── README.md
├── jsconfig.json
└── package.json
```

## Scripts

- `npm run dev`: Start the development server using nodemon
- `npm start`: Start the production server

## Dependencies

- Node.js
- Express
- Mongoose
- Nodemon (dev dependency)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/Gersom/gersom-nodejs-template.git
   ```

2. Install dependencies:

   ```
   npm install || pnpm install || bun install
   ```

3. Create a `.env` file based on `.env.example` and configure your environment variables.

4. Run the development server:
   ```
   npm run dev || pnpm run dev || bun run dev
   ```

## Author

Gersom

## GitHub Repository

[Gersom/gersom-nodejs-template](https://github.com/Gersom/gersom-nodejs-template)

## Version

1.0.2

## License

This project is open source and available under the [MIT License](LICENSE).
