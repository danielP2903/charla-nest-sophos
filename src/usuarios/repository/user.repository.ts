import { MongoGenericRepository } from "src/core/repositories/base/mongo";
import { Usuario } from '../entities/usuario.entity';
import { UserUseCases } from "./user.repository.usecases";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class UserRepository extends MongoGenericRepository<Usuario> implements UserUseCases{

    constructor( @InjectModel(Usuario.name)
    private readonly usuario: Model<Usuario>,){
        super(usuario);
    }
    
    getAllUsers() {
        return this.getAll();
    }
    async saveUser(usuario:Usuario) {
        return await this.create(usuario);
    }
    async updateUser(id:string,user:Partial<Usuario>) {
        return await this.update(id,user)
    }
    async deleteUser(id:string) {
        return await this.delete(id)
    }


}