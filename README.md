# AI Agent 学习营（iPhone PWA）

## 文件
- `index.html`：学习 App 主页面，包含 49 天课程、打卡、笔记、进度统计、导入/导出备份。
- `manifest.webmanifest`：PWA 配置。
- `sw.js`：离线缓存。

## iPhone 安装方式
PWA 需要 HTTPS 网站地址。把这三个文件部署到支持静态网页和 HTTPS 的服务（例如 GitHub Pages、Cloudflare Pages 或自己的 HTTPS 网站）。

部署后：
1. 在 iPhone 上用 Safari 打开网站地址。
2. 点 Safari 的“分享”按钮。
3. 选择“添加到主屏幕”。
4. 从主屏幕图标打开，首次加载后可缓存离线资源。

仅把 `index.html` 下载到“文件”App 并打开，不会自动成为可安装的 PWA。

## 数据
打卡、笔记保存在当前浏览器的 localStorage。建议在“学习进度”页定期导出 JSON 备份。清除 Safari 网站数据或更换设备前先备份。

## 内容说明
学习路线依据用户上传的《深入理解 AI Agent：设计原理与工程实践》v2.0 的目录页码安排。Python 零基础预备课并非该 PDF 正文内容；书中引言将 Python、命令行、Git、JSON、REST API 等列为前置知识。第 6 周选读部分包含 PDF 第6章、第7章和第10章；第8、9章在本轮计划中仅作了解，不要求深入实现。
