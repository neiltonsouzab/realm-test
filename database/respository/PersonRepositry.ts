import { container, singleton } from 'tsyringe';
import Person, { PersonSchema } from '../models/Person';
import RealmRepository from './RealmRepository';

@singleton()
class PersonRepository extends RealmRepository<Person> {
  constructor () {
    super(PersonSchema.name);
  }
}


export default container.resolve(PersonRepository);