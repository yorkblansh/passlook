import { Test, TestingModule } from '@nestjs/testing';
import { PasslookService } from './passlook.service';

describe('PasslookService', () => {
  let service: PasslookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasslookService],
    }).compile();

    service = module.get<PasslookService>(PasslookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
