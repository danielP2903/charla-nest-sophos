export interface IGenericRepository<T> {
    getAll(): Promise<T[]>;
    get(id: any): Promise<T>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
  }
  