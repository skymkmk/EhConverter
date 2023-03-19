# EhConverter

将你的 EhViewer 数据文件从 SXJ 版本转换为通用版本。

可以点击 [这里](https://ehconverter.skymkmk.com) 直接使用本项目。

## 重要提示

现在所有 EhViewer 的主要分支都已经不检查数据库版本号。本转换器已经完成了历史任务，不再维护。

## 依赖、预览及编译

你首先需要安装 [node.js](https://nodejs.org) 最新 LTS 版本并开启 corepack（可以在命令行中执行 `corepack enable` 来开启）。之后，请在命令行中切换到项目目录，执行如下命令来安装依赖：

```
yarn
```

执行下面的命令来预览页面：

```
yarn dev
```

如果你想自行部署，可以执行下面的命令：

```
yarn build
```

之后你就可以在项目文件夹中的 `dist` 文件夹找到编译好的文件。

## 原理

SXJ 版的 EhViewer 会将数据库中的版本由 4 改为 6。由于目前 SXJ 版还未对其他通用表做出修改，故简单将版本由 6 替换为 4。可见 [Ehviewer Overhauled 源码](https://github.com/Ehviewer-Overhauled/Ehviewer/blob/a56d54138000fe6c60394a67a9873ea8eeb0e45a/app/src/main/java/com/hippo/ehviewer/EhDB.java#L481)、[EhvXj2Ge README](https://github.com/duzhaokun123/EhvXj2Ge/blob/e365865d24f112f2a12b1ea6285d01e6b6aac4be/README.md) 及 [Telegram 群的讨论](https://t.me/ehviewer/2126046)。