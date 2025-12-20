import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  HttpException,
  NotFoundException,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  // Get /profiles
  @Get()
  fildAll() {
    return this.profilesService.findAll();
  }

  @Get('/:id')
  @UseGuards(ProfilesGuard)
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.findOne(id);
  }

  // @Post()
  // create(@Body() createProfileDto: CreateProfileDto) {
  //   return {
  //     name: createProfileDto.name,
  //     description: createProfileDto.description,
  //   };
  // }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    const created = this.profilesService.create(createProfileDto);
    return created;
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    this.profilesService.remove(id);
  }

  // 46:01
  // https://www.youtube.com/watch?v=21_I-12f5JE&t=2761s
}
