import { Usuario } from "../entities/usuario.entity";

export abstract class UserUseCases {
    abstract getAllUsers();
    abstract saveUser(user:Usuario);
    abstract updateUser(id:string,user:Partial<Usuario>);
    abstract deleteUser(id:string);
}