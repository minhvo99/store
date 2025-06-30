import express from 'express';
import morgan from 'morgan';
import appRouter from './routes/index.js';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/v1', appRouter);
export default app;

if (process.argv[1] === new URL(import.meta.url).pathname) {
   const port = process.env.PORT || 3000;
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
