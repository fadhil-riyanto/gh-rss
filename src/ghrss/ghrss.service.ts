import { Injectable } from '@nestjs/common';
import { GhRelease } from './interfaces/gh.interface';
import * as util from "node:util"
import axios from "axios"
import { XMLParser, XMLBuilder, XMLValidator} from "fast-xml-parser";
import { RssCache, RssCacheDocument } from './schemas/rsscache.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

interface req_data {
        username: string;
        repo_name: string;
}

class githubRssReader {
        static url_template: string = "https://github.com/%s/%s/releases.atom"
        private atomres: string;
        private req_data: req_data;

        private async build_url() {
                return util.format(githubRssReader.url_template, this.req_data.username, this.req_data.repo_name)
        }

        private async download_rss(): Promise<void> {
                let url = await this.build_url()
                try {
                        const response = await axios.get(url)
                        this.atomres = response.data;
                } catch(err) {
                        console.error(err)
                }
        }

        constructor(username: string, repo_name: string, ) {
                this.req_data = {
                        username, repo_name
                }
        }

        public async GetRes(): Promise<string> {
                await this.download_rss();
                return this.atomres;
        }

        public async parse()  : Promise<GhRelease[]> {
                await this.download_rss();

                const parser = new XMLParser();
                let jObj = parser.parse(this.atomres);

                return jObj.feed.entry;
        }
}

@Injectable()
export class GhrssService {
        constructor(@InjectModel(RssCache.name) private RssCacheModel: Model<RssCacheDocument>) {}

        public async getdata(username: string, reponame: string): Promise<GhRelease[]> {
                let ghctx = new githubRssReader(username, reponame)
                const createdAt = new this.RssCacheModel(ghctx);
                createdAt.save()
                return await ghctx.parse();
        }
}
