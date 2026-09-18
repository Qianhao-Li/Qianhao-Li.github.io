# qianhao-li.github.io

个人主页 + 博客。左栏个人信息 + 右栏履历/作品的学术主页风格，用 [Astro](https://astro.build) 搭建，推送到 `main` 后由 GitHub Actions 自动发布到 GitHub Pages。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm install` | 装依赖（只需第一次） |
| `npm run dev` | 本地预览 http://localhost:4321 |
| `npm run build` | 编译到 `dist/`，检查有没有报错 |

## 目录说明

- **`src/data/profile.ts`** — 首页的全部内容（左栏信息、介绍、作品、经历、教育、荣誉），改站基本只改这个文件
- `src/assets/avatar.jpg` — 头像，换成同名文件即可
- `src/styles/home.css` — 首页配色与排版
- `src/components/Sidebar.astro` — 左侧栏结构
- `src/pages/index.astro` — 首页骨架（决定各区块的顺序）
- `src/content/blog/*.md` — 文章，一个文件一篇
- `src/styles/global.css` — 博客页面样式
- `src/consts.ts` — 站点标题、署名
- `.github/workflows/deploy.yml` — 自动部署

## 发新文章

在 `src/content/blog/` 新建 `.md`，frontmatter 需要 `title` / `description` / `pubDate`，然后 commit + push 即可。
