import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';

@Controller()
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @MessagePattern('createEtudiant')
  create(@Payload() createEtudiantDto: CreateEtudiantDto) {
    return this.etudiantService.create(createEtudiantDto);
  }

  @MessagePattern('findAllEtudiant')
  findAll() {
    return this.etudiantService.findAll();
  }

  @MessagePattern('findOneEtudiant')
  findOne(@Payload() id: number) {
    return this.etudiantService.findOne(id);
  }

  @MessagePattern('updateEtudiant')
  update(@Payload() updateEtudiantDto: UpdateEtudiantDto) {
    return this.etudiantService.update(updateEtudiantDto.id, updateEtudiantDto);
  }

  @MessagePattern('removeEtudiant')
  remove(@Payload() id: number) {
    return this.etudiantService.remove(id);
  }
}
