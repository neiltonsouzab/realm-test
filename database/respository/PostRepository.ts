import { container, singleton } from 'tsyringe';
import Post, { PostSchema } from '../models/Post';
import RealmRepository from './RealmRepository';

@singleton()
class PostRepository extends RealmRepository<Post> {
  constructor () {
    super(PostSchema.name);
  }
}


export default container.resolve(PostRepository);