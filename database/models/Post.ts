import { ObjectSchema } from 'realm';

export const PostSchema = {
  name: 'posts',
  properties: {
    id: 'int',
    title: 'string',
  },
  primaryKey: 'id',
} as ObjectSchema;

export default interface Post {
  id: number;
  title: string;
}