# GitHub Pages 项目主页：中文部署指南

项目名称：**Test-Time Scaling for Multi-View Diffusion Models: Generation, Verification, and Search**

这套页面已经制作好，不需要你自己写代码，也不需要服务器、Node.js、框架或付费域名。网页采用英文内容以适合国际学术项目展示，部署说明使用中文。

## 0. 部署前最重要的提醒：匿名审稿

提供的 PDF 是 **ICLR 2027 匿名审稿版本**。页面没有真实作者、单位、个人主页或代码仓库信息。但如果你把它部署在个人 GitHub 账号下，这个 GitHub 账号和 Git 提交元数据仍可能揭露身份。请先确认当前审稿阶段的公开政策以及你打算如何对外分享。ICLR 2027 官方规则允许符合匿名要求的演示链接，但匿名要求包括站点本身和相关链接，不只是去掉作者名字。项目也不应添加会记录访问者身份的分析脚本。

详情：https://iclr.cc/Conferences/2027/AuthorGuidelines

## 1. 准备项目文件

1. 下载 `tts-multiview-site.zip`。
2. 解压，得到 `tts-multiview-site` 文件夹。
3. 确认这个文件夹**直接包含** `index.html` 和 `assets` 文件夹。
4. 其中 `assets/paper.pdf` 是论文 PDF，`assets/figures` 包含从论文提取的原始图。

## 2. 在 GitHub 创建仓库

1. 登录 https://github.com 。
2. 进入 https://github.com/new 。
3. Repository name 填 `tts-multiview`。
4. 选择 **Public**（一般个人免费 GitHub Pages 使用公共仓库）；不要在仓库中添加任何敏感信息。
5. 点击 **Create repository**。

仓库名称你可以自行更换，例如 `test-time-scaling-multiview`。下文假设使用 `tts-multiview`。

## 3A. 不用命令行：通过网页上传

1. 打开新建的仓库，点击 **uploading an existing file**，或 **Add file → Upload files**。
2. 将解压后的文件夹**内部的文件与子文件夹**上传到仓库，而不是外层文件夹；尤其确认 `index.html` 位于仓库根目录。
3. GitHub 网页可能因操作系统或浏览器而不能完整上传目录层级。如果上传后的结构不对，请改用下一节的 Git 命令方式。
4. 在页面底部提交（Commit changes）。
5. 进入仓库的 **Code** 标签，确认能看到 `index.html` 和 `assets` 目录。

## 3B. 推荐方法：通过 Git 上传，最不容易丢失文件夹结构

先安装 Git：https://git-scm.com/downloads

打开本地文件夹 `tts-multiview-site`，在其目录下打开终端或 Git Bash，执行以下命令。**把 `YOUR_USERNAME` 改成自己的 GitHub 用户名。**

```bash
git init
git add .
git commit -m "Create research project website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tts-multiview.git
git push -u origin main
```

如果提示未设置用户信息（只在本地 Git 配置），先执行：

```bash
git config --global user.name "YOUR_GIT_COMMIT_NAME"
git config --global user.email "YOUR_GIT_COMMIT_EMAIL"
```

**匿名提示：** `user.name` 和 `user.email` 将体现在 Git 提交信息中。匿名审稿期避免使用可识别的个人身份；公开仓库的 owner 也可能暴露身份。请谨慎处理，不能仅靠页面匿名保护审稿匿名性。

如果使用 HTTPS 上传 GitHub 要求认证，通常通过 Git Credential Manager、`gh auth login` 或有权限的 personal access token 完成，而不是直接输入 GitHub 账户密码。

## 4. 开启 GitHub Pages

1. 在仓库页面进入 **Settings**。
2. 左侧找到 **Pages**。
3. **Build and deployment → Source**：选择 **Deploy from a branch**。
4. **Branch**：选择 `main`；文件夹选择 `/(root)`。
5. 点击 **Save**。
6. 在 Pages 配置页查看状态或部署网址。通常页面需要一些时间完成首次部署。

访问地址：

```text
https://YOUR_USERNAME.github.io/tts-multiview/
```

如果你另建了名为 `YOUR_USERNAME.github.io` 的特殊仓库，访问地址是：

```text
https://YOUR_USERNAME.github.io/
```

## 5. 如何修改网站

页面对应文件：

| 想修改什么 | 文件 |
|---|---|
| 标题、摘要、内容、页面按钮 | `index.html` |
| 颜色、字体、间距、手机自适应 | `assets/style.css` |
| N=4 / 16 / 64 交互式结果数据 | `assets/main.js` |
| PDF 链接对应的论文 | `assets/paper.pdf` |
| 图表与案例图片 | `assets/figures/` |

- 改代码仓库链接：等代码仓库公开后，在 `index.html` 搜索 `Code link not provided`，改成真正的链接。不要在代码未公开时放虚假链接。
- 改论文作者：目前未显示作者，等审稿匿名要求不再适用再添加。
- 改论文版本：把你的最新合法公开版本复制为 `assets/paper.pdf`，覆盖旧文件。
- 添加演示视频：可以把 `demo.mp4` 加入 `assets/`，然后在 HTML 中增加 `<video controls src="assets/demo.mp4"></video>`；大文件需要考虑 Pages 的托管限制。

以后每次改完，通过以下命令更新：

```bash
git add .
git commit -m "Update paper project page"
git push
```

## 6. 本地预览

在项目文件夹内运行：

```bash
python -m http.server 8000
```

浏览器打开 `http://localhost:8000` 即可预览，按 `Ctrl+C` 停止。

也可以直接双击 `index.html`，但 HTTP 服务器更接近 GitHub Pages 的加载方式。

## 7. 常见问题

**出现 404：** 查看 `index.html` 是否在仓库根目录；Pages 是否选择 `main` + `/(root)`；地址里的仓库名是否正确；部署是否完成。

**图片不显示：** 检查 `assets/figures` 是否完整上传。不要把网站文件多套一层目录；项目页面使用相对路径，根目录一定要有 `index.html`。

**PDF 打不开：** 确保 `assets/paper.pdf` 存在。

**页面没有更新：** 先检查代码是否推送到了 Pages 使用的分支，之后查看仓库的 **Actions** 或 **Pages** 部署状态，再刷新浏览器。

**移动端显示问题：** 此页面已有响应式布局；更新时尽量保留 `assets/style.css` 中的 `@media` 规则。

## 8. 发布之后的推荐事项

确认匿名政策允许后，可添加作者、机构和个人主页；代码公开后添加对应仓库；有定性视频后增加演示；有 arXiv 正式版再替换 `paper.pdf` 并增加公开论文链接。保持论文版本、实验指标与网站一致。

官方 GitHub Pages 文档：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
