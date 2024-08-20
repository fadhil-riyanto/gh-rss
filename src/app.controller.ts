import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { GhRelease } from './ghrss/interfaces/gh.interface';
import { GithubRssService } from './app.service'

@Controller()
export class GithubRssController {
        constructor(private ghservice: GithubRssService) {}

        
}
