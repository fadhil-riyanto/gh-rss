import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { GhrssService } from './ghrss.service';
import { Response } from 'express';
import { GhRelease } from './interfaces/gh.interface';

@Controller('ghrss')
export class GhrssController {
        constructor(private readonly ghrssService: GhrssService) {}

        @Get("/")
        public index(@Query() Query, @Res() res: Response) {
                return res.status(200).contentType("text/plain").send("see https://github.com/fadhil-riyanto/gh-rss/blob/master/README.md")
        }

        @Get("/get/:username/:repo")
        async get(@Query() Query, @Param() params: any) : Promise<GhRelease[]> {
                return this.ghrssService.getdata(
                        params.username,
                        params.repo
                )

        }
}
