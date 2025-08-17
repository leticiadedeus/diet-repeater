import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { makeDietRouter } from './routes/diet.router';

export const app = new Hono();

const dietRouter = new Hono();
dietRouter.route('/diets', makeDietRouter())

app.route('/v1/diets-repeater', dietRouter);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Listening on http://localhost:${info.port}`);
  },
)