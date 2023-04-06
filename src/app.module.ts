import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantModule } from './etudiant/etudiant.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';

@Module({
  imports: [EtudiantModule, UtilisateursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
