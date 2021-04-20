import Realm from 'realm';

import { PersonSchema } from './models/Person';
import { PostSchema } from './models/Post';

export default new Realm({
  schema: [
    PersonSchema,
    PostSchema,
  ],
  schemaVersion: 5,
})