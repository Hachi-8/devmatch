import { Injectable, NotFoundException } from '@nestjs/common';
import { UUID, randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'test1',
      description: 'aaaaa',
    },
    {
      id: randomUUID(),
      name: 'test2',
      description: 'iiiiiiiiiiii',
    },
    {
      id: randomUUID(),
      name: 'test3',
      description: 'uuuuuu',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const found = this.profiles.find((profile) => profile.id === id);
    if (!found) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return found;
  }
  create(createProfileDto: CreateProfileDto) {
    const created = {
      id: randomUUID(),
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
    this.profiles.push(created);
    return created;
  }

  // findで実装しなおす
  update(id: string, updateProfileDto: UpdateProfileDto): UpdateProfileDto {
    const found = this.profiles.find((profile) => profile.id === id);

    if (!found) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    found.name = updateProfileDto.name;
    found.description = updateProfileDto.description;
    return found;
  }

  remove(id: string) {
    const index = this.profiles.findIndex((profile) => profile.id === id);

    if (index === -1) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    delete this.profiles[index];
  }
}
