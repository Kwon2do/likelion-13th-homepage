import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // 추가
import { Repository } from 'typeorm';
import { Application } from './applications.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application) // 이 데코레이터를 사용해 Repository 주입
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async createApplication(data: Partial<Application>): Promise<Application> {
    const application = this.applicationRepository.create(data);
    return await this.applicationRepository.save(application);
  }
  //지원정보 조회API
  async findAllApplications(): Promise<Application[]> {
    return await this.applicationRepository.find();
  }
}
