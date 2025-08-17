import { Hono } from 'hono';
import { DietController } from '../../presentation/diet.controller';

export function makeDietRouter(): Hono {
  const router = new Hono();
  const dietController = new DietController();

  router.get(
    '/',
    dietController.getById.bind(dietController),
  );

  return router;
}