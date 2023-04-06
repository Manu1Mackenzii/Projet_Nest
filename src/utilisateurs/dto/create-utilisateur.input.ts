import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUtilisateurInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
