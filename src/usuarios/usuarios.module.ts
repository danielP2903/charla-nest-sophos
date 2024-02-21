import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioModelo } from './entities/usuario.entity';
import { UserUseCases } from './repository/user.repository.usecases';
import { UserRepository } from './repository/user.repository';

@Module({
  imports:[
    ProductosModule,
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioModelo }]),
  ],
  controllers: [UsuariosController],
  providers: [
    {
      provide:UserUseCases,
      useClass:UserRepository
    },
    UsuariosService],
})
export class UsuariosModule {}
