export interface GhRelease {
        id: string;
        updated: string;
        link: string;
        title: string;
        content: string;
        author: {
                name: string
        };
        'media:thumbnail': string;
}