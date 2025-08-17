import { Diet } from '@/domains/diet/diet.entity';
import type { Context } from 'hono';
import type { HandlerResponse } from 'hono/types';
import { v7 } from 'uuid';

export class DietController {
  getById(context: Context): HandlerResponse<Diet> {
    return context.json(new Diet({
      id: v7(),
      doctorId: v7(),
      repeaterId: v7(),
      startingDate: new Date(),
      endingDate: new Date()
    }), 200);
  }
}
