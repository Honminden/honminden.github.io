# nuScenes数据集-通过命令行下载

给服务器下nuScenes的时候发现命令行批量下载比较麻烦，因为网站需要先登录再手动点击下载，一个个获取链接复制到服务器命令行。于是自己写了个微型下载脚本（以及md5校验），以后在别的机器上下载方便很多了。

repo: [download-nuscenes](https://github.com/Honminden/download-nuscenes)

当然token还是要手动复制，没有写自动登录部分（写了的话后面如果有人机验证也用不了了）。另外一些代码写的很糙，比如url后处理，不过能用就行。

nuScenes官网：[nuScenes](https://nuscenes.org/)