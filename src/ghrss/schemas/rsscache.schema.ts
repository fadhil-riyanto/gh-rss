

// export const RssCacheSchema = new mongoose.Schema({
//         id: String,
//         updated: String,
//         link: String,
//         title: String,
//         content: String,
//         author: {
//                 name: String
//         },
//         'media:thumbnail': String
// })


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RssCacheDocument = HydratedDocument<RssCache>

@Schema()
export class RssCache {
        @Prop()
        id: string;

        @Prop()
        updated: string;

        @Prop()
        link: string;

        @Prop()
        title: string;

        @Prop()
        content: string;



        @Prop()
        'media:thumbnail': string;

}


export const RssCacheSchema = SchemaFactory.createForClass(RssCache)