import { Test, TestingModule } from '@nestjs/testing';
import { PasslookController } from './passlook.controller';
import { PasslookService } from './passlook.service';

describe('PasslookController', () => {
  let controller: PasslookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasslookController],
      providers: [PasslookService],
    }).compile();

    controller = module.get<PasslookController>(PasslookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
