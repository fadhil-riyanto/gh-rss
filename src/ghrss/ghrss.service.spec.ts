import { Test, TestingModule } from '@nestjs/testing';
import { GhrssService } from './ghrss.service';

describe('GhrssService', () => {
  let service: GhrssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GhrssService],
    }).compile();

    service = module.get<GhrssService>(GhrssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
