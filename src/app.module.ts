import { Module } from '@nestjs/common';
import { GithubRssController } from './app.controller';
import { AppService } from './app.service';

@Module({
        imports: [],
        controllers: [GithubRssController],
        providers: [AppService],
})

export class AppModule {}
