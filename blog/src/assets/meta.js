export {default as article0} from "raw-loader!@/assets/Hello.md"
export {default as article1} from "raw-loader!@/assets/Spring210702/Spring210702.md"
export {default as article2} from "raw-loader!@/assets/MarkdownArticle20210707/MarkdownArticle20210707.md"
export {default as article3} from "raw-loader!@/assets/NuscenesDownload20220907/NuscenesDownload20220907.md"

export {default as news90000} from "raw-loader!@/assets/news/FirstNews.md"

export const articles = [
    {
        id: "0",
        title: "Hello",
        author: "Honminden",
        createTime: "2021.07.06",
        editTime: "2021.07.06",
        description: "a hello message"
    },
    {
        id: "1",
        title: "Spring项目搭建踩坑经验",
        author: "Honminden",
        createTime: "2021.07.07",
        editTime: "2021.07.07",
        description: "总结一下从头开始搭建一个Spring项目过程中踩的一些坑和其它经验。"
    },
    {
        id: "2",
        title: "如何搭建一个简单的Markdown博客",
        author: "Honminden",
        createTime: "2021.07.09",
        editTime: "2021.07.09",
        description: "着重讲一下如何使用raw-loader和showdown来导入并转换HTML"
    },
    {
        id: "3",
        title: "nuScenes数据集-通过命令行下载",
        author: "Honminden",
        createTime: "2022.09.07",
        editTime: "2022.09.07",
        description: "介绍download-nuscenes"
    }
]

export const news = [
    {
        id: "90000",
        title: "News Module Is Now Available",
        author: "Honminden",
        createTime: "2021.07.07",
        editTime: "2021.07.07",
        description: "You can find development news and other important announcements here."
    }
]