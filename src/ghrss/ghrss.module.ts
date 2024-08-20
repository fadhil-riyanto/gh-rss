import { Module } from '@nestjs/common';
import { GhrssService } from './ghrss.service';
import { GhrssController } from './ghrss.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RssCache, RssCacheSchema } from './schemas/rsscache.schema';

@Module({
        controllers: [
                GhrssController
        ],
        providers: [GhrssService],
        imports: [
                MongooseModule.forFeature([{ name: RssCache.name, schema: RssCacheSchema }], 'rsscache')
        ]
})
export class GhrssModule {}
