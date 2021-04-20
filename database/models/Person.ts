import { ObjectSchema } from 'realm';

export const PersonSchema = {
  name: 'persons',
  properties: {
    id: 'int',
    name: 'string',
  },
  primaryKey: 'id',
} as ObjectSchema;

export default interface Person {
  id: number;
  name: string;
}