import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UtilisateursService } from './utilisateurs.service';
import { Utilisateur } from './entities/utilisateur.entity';
import { CreateUtilisateurInput } from './dto/create-utilisateur.input';
import { UpdateUtilisateurInput } from './dto/update-utilisateur.input';

@Resolver(() => Utilisateur)
export class UtilisateursResolver {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Mutation(() => Utilisateur)
  createUtilisateur(@Args('createUtilisateurInput') createUtilisateurInput: CreateUtilisateurInput) {
    return this.utilisateursService.create(createUtilisateurInput);
  }

  @Query(() => [Utilisateur], { name: 'utilisateurs' })
  findAll() {
    return this.utilisateursService.findAll();
  }

  @Query(() => Utilisateur, { name: 'utilisateur' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.utilisateursService.findOne(id);
  }

  @Mutation(() => Utilisateur)
  updateUtilisateur(@Args('updateUtilisateurInput') updateUtilisateurInput: UpdateUtilisateurInput) {
    return this.utilisateursService.update(updateUtilisateurInput.id, updateUtilisateurInput);
  }

  @Mutation(() => Utilisateur)
  removeUtilisateur(@Args('id', { type: () => Int }) id: number) {
    return this.utilisateursService.remove(id);
  }
}
