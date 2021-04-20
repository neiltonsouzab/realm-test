import realm from '../';

export default abstract class RealmRepository<T> {
  private type: string;

  constructor (type: string) {
    this.type = type;
  }

  findAll(): T[]  {
    const results = realm.objects<T>(this.type);

    return results.map(result => result);
  }

  create(data: T) {
    realm.write(() => {
      realm.create<T>(this.type, data);
    });
  }
}