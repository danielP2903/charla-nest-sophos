import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UserUseCases } from './repository/user.repository.usecases';
// import * as fs from 'fs';

@Injectable()
export class UsuariosService {

  constructor(private readonly repository:UserUseCases){}

  async create(createUsuarioDto: CreateUsuarioDto) {
      const usuario = {...createUsuarioDto};
      return await this.repository.saveUser(usuario);
  }

  async findAll() {
    return await this.repository.getAllUsers();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = {...updateUsuarioDto};

    return await this.repository.updateUser(id,usuario);
  }

 async remove(id: string) {
    return await this.repository.deleteUser(id);
  }
}
