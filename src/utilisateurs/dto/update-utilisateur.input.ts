import { CreateUtilisateurInput } from './create-utilisateur.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUtilisateurInput extends PartialType(CreateUtilisateurInput) {
  @Field(() => Int)
  id: number;
}
