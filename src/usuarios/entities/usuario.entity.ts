import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'usuarios', timestamps: true })
export class Usuario {
    @Prop({ type: String, required: true })
    nombre: string;
  
    @Prop({ type: String, required: true })
    apellido: string;
  
    @Prop({ type: String, required: true })
    correo: string;
  
    @Prop({ type: String, required: true })
    contrasena: string;
  
}
export const UsuarioModelo = SchemaFactory.createForClass(Usuario);
