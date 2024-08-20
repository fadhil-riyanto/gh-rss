import { Test, TestingModule } from '@nestjs/testing';
import { GhrssController } from './ghrss.controller';
import { GhrssService } from './ghrss.service';

describe('GhrssController', () => {
  let controller: GhrssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GhrssController],
      providers: [GhrssService],
    }).compile();

    controller = module.get<GhrssController>(GhrssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
