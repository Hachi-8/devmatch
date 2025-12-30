import { Injectable, NotFoundException } from '@nestjs/common';
import { UUID, randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './proriles.entity';
import { Repository } from 'typeorm';

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

  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  async findAll() {
    return await this.profileRepository.find();
  }

  async findOne(id: string) {
    const found = await this.profileRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return found;
  }
  async create(createProfileDto: CreateProfileDto) {
    return await this.profileRepository.save(
      this.profileRepository.create({ ...createProfileDto }),
    );
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    const found = await this.profileRepository.findOneBy({ id: id });

    if (!found) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return await this.profileRepository.save(
      this.profileRepository.merge(found, updateProfileDto),
    );
  }

  async remove(id: string) {
    const found = await this.profileRepository.findOneBy({ id: id });

    if (!found) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return await this.profileRepository.remove(found);
  }
}
