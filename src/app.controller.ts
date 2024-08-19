import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

import { GetResponse } from './types/api'

@Controller()
export class GithubRssController {
        constructor(private readonly appService: AppService) {}

        @Get("/")
        public index(@Query() Query, @Res() res: Response) {
                return res.status(200).contentType("text/plain").send("see https://github.com/fadhil-riyanto/gh-rss/blob/master/README.md")
        }

        @Get("/get")
        public get(@Query() Query, @Res() res: Response) {
                return res.status(200).contentType("text/plain").send(
                        Query
                )
        }
}
