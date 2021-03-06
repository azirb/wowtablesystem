import { Injectable } from '@nestjs/common';
import { Naxxramas } from 'src/entities/Naxxramas.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UuidQuery } from 'src/dto/Query.dto';

@Injectable()
export class NaxxaramasService {

    
    constructor( 
        @InjectRepository(Naxxramas)
        private readonly infoRepo: Repository<Naxxramas>
    ) {}

    async findAll(): Promise<Naxxramas[]> { 
        return await this.infoRepo.find(); 
    }

    async findAllByQuery(params: UuidQuery): Promise<Naxxramas[]> {
        return await this.infoRepo.find({encryptedUrlToTable: params.uuid});
    }

    async findByNickName(params): Promise<Naxxramas[]> {
        return await this.infoRepo.find({creatorNickName: params.nickname})
    }

    async create(Naxxramas: Naxxramas): Promise<Naxxramas>{ 
        delete Naxxramas.id; 
        return await this.infoRepo.save(Naxxramas); 
    }

    async delete(id: number){ 
        await this.infoRepo.delete(id);
    }
}
