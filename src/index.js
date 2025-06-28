import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
export default app;

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const port = process.env.PORT || 8080;
  const server = app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/`);
  });
  process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED Rejection! 💣 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });

  process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT Exception! 💣 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
}
