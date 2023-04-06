import { Injectable } from '@nestjs/common';
import { CreateUtilisateurInput } from './dto/create-utilisateur.input';
import { UpdateUtilisateurInput } from './dto/update-utilisateur.input';

@Injectable()
export class UtilisateursService {
  create(createUtilisateurInput: CreateUtilisateurInput) {
    return 'This action adds a new utilisateur';
  }

  findAll() {
    return `This action returns all utilisateurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utilisateur`;
  }

  update(id: number, updateUtilisateurInput: UpdateUtilisateurInput) {
    return `This action updates a #${id} utilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
