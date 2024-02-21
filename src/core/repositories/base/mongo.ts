import mongoose, { Model } from 'mongoose';
import { IGenericRepository } from './mongo-abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: string): Promise<T> {
    const _id = new mongoose.Types.ObjectId(id);

    return this._repository.findById(_id).populate(this._populateOnFind).exec() as Promise<T>;
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: Partial<T>) {
    const _id = new mongoose.Types.ObjectId(id);
    return this._repository.findByIdAndUpdate(_id, item);
  }

  delete(id:string) {
    const _id = new mongoose.Types.ObjectId(id);
        return this._repository.deleteOne(_id);
  }
}