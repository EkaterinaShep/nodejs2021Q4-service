import { FromSchema } from 'json-schema-to-ts';
import { boardModelSchema } from './board.model';

type Board = FromSchema<typeof boardModelSchema>;

export { Board };
