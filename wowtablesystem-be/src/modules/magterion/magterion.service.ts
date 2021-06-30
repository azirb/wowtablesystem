import { Injectable } from '@nestjs/common';
import { Magterion } from 'src/entities/Magterion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MagterionService {

    constructor( 
        @InjectRepository(Magterion)
        private readonly infoRepo: Repository<Magterion>
    ) {}

    async findAll(): Promise<Magterion[]> {
        return await this.infoRepo.find(); 
    }

    async findByNickname(params): Promise<Magterion[]> {
        return await this.infoRepo.find({creatorNickName: params.nickname}); 
    }

    async create(Magterion: Magterion): Promise<Magterion> { 
        delete Magterion.id; 
        return await this.infoRepo.save(Magterion); 
    }

    async delete(id: number) { 
        await this.infoRepo.delete(id); 
    }

}
