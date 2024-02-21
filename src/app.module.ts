import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { MongoModule } from './core/databases/mongo/mongo.module';
import { ConfigModule } from '@nestjs/config';
import { configApp } from './core/config/config.app';

@Module({

  imports: [
    ConfigModule.forRoot({
      load: [configApp],
    }),
    UsuariosModule,
     ProductosModule,
     MongoModule,

    ],

  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
