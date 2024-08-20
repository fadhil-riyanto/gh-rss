import { Module } from '@nestjs/common';
import { GithubRssController } from './app.controller';
import { GithubRssService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GhrssModule } from './ghrss/ghrss.module';

@Module({
        imports: [
                GhrssModule, 
                MongooseModule.forRoot('mongodb://localhost/rsscache', {
                        connectionName: 'rsscache',
                })
        ],
        controllers: [],
        providers: [],
})

export class AppModule {}
