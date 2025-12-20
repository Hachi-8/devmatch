"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProfilesService = class ProfilesService {
    profiles = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'test1',
            description: 'aaaaa',
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'test2',
            description: 'iiiiiiiiiiii',
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'test3',
            description: 'uuuuuu',
        },
    ];
    findAll() {
        return this.profiles;
    }
    findOne(id) {
        const found = this.profiles.find((profile) => profile.id === id);
        if (!found) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        return found;
    }
    create(createProfileDto) {
        const created = {
            id: (0, crypto_1.randomUUID)(),
            name: createProfileDto.name,
            description: createProfileDto.description,
        };
        this.profiles.push(created);
        return created;
    }
    update(id, updateProfileDto) {
        const found = this.profiles.find((profile) => profile.id === id);
        if (!found) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        found.name = updateProfileDto.name;
        found.description = updateProfileDto.description;
        return found;
    }
    remove(id) {
        const index = this.profiles.findIndex((profile) => profile.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        delete this.profiles[index];
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)()
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map