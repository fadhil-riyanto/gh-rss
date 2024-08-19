import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';


@Controller()
export class AppController {
        constructor(private readonly appService: AppService) {}

        @Get("/")
        public Index(@Res() res: Response) {
                return res.status(200).contentType("text/plain").send("see https://github.com/fadhil-riyanto/gh-rss/blob/master/README.md")
        }



}
