---
title: '这个博客是怎么搭起来的'
description: '顺便记一下以后怎么发新文章。'
pubDate: '2026-09-18'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

第一篇，先把使用方法记下来，免得自己忘了。

## 怎么发一篇新文章

在 `src/content/blog/` 下新建一个 `.md` 文件，比如 `my-post.md`，开头写上这段 frontmatter：

```markdown
---
title: '文章标题'
description: '一句话摘要，会显示在首页和列表里'
pubDate: '2026-09-18'
---

正文从这里开始，正常写 Markdown 就行。
```

文件名就是网址：`my-post.md` → `/blog/my-post/`。所以文件名尽量用英文和连字符。

`heroImage` 是可选的，想配图就把图片放进 `src/assets/`，然后写 `heroImage: '../../assets/图片名.jpg'`。

## 本地预览

```
npm run dev
```

打开 <http://localhost:4321> 就能看到，改文件会自动刷新。

## 发布

```
git add .
git commit -m "新文章"
git push
```

推上去之后 GitHub Actions 会自动编译并发布，大概一两分钟后线上就更新了。

## 想改样式的话

- 全站配色和字体：`src/styles/global.css`
- 首页：`src/pages/index.astro`
- 导航栏 / 页脚：`src/components/Header.astro`、`Footer.astro`
- 站点标题、署名、社交链接：`src/consts.ts`
