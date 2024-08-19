import { Module } from '@nestjs/common';
import { GithubRssController } from './app.controller';
import { GithubRssService } from './app.service';

@Module({
        imports: [],
        controllers: [GithubRssController],
        providers: [GithubRssService],
})

export class AppModule {}
