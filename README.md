# mrflow-mean.github.io

个人主页 + 博客，用 [Astro](https://astro.build) 搭建，推送到 `main` 后由 GitHub Actions 自动发布到 GitHub Pages。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm install` | 装依赖（只需第一次） |
| `npm run dev` | 本地预览 http://localhost:4321 |
| `npm run build` | 编译到 `dist/`，检查有没有报错 |

## 目录说明

- `src/consts.ts` — 站点标题、署名、社交链接
- `src/pages/index.astro` — 首页（自我介绍、项目列表）
- `src/pages/about.astro` — 关于页
- `src/content/blog/*.md` — 文章，一个文件一篇
- `src/styles/global.css` — 全站样式
- `.github/workflows/deploy.yml` — 自动部署

## 发新文章

在 `src/content/blog/` 新建 `.md`，frontmatter 需要 `title` / `description` / `pubDate`，然后 commit + push 即可。
