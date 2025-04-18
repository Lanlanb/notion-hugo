import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://notion-hugo.pages.dev",
    mount: {
        manual: false,
        page_url: 'https://portfolioku.notion.site/Notion-Hugo-1d9c813f9c5480fa9cc1caf9c2884dd6?pvs=4',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '1d9c813f9c5480fa9cc1caf9c2884dd6',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: '15cc813f9c5480258f06000c1616986d',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
