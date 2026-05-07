---
draft: true
title: Markdown 撰写教程 - 从入门到精通
timestamp: 2026-04-20 16:30:00+00:00
tags: [Markdown, Guide]
description: 全面介绍博客支持的 Markdown 语法，包括文字样式、链接、图片、代码块、数学公式等常用功能。
toc: true
top: 2
---

欢迎来到博客创作指南！本教程将详细介绍本博客支持的所有 Markdown 语法，帮助你创作出美观、专业的内容。

<style>
.demo-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5em;
  border-radius: 0.5em;
  color: white;
  margin: 1em 0;
}

.tip-box {
  background-color: #f0fdf4;
  border-left: 4px solid #22c55e;
  padding: 1em;
  margin: 1em 0;
}

.warning-box {
  background-color: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1em;
  margin: 1em 0;
}

.code-demo {
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 1em;
  border-radius: 0.5em;
  font-family: 'Maple Mono NF CN', 'Courier New', monospace;
  font-size: 0.9em;
  overflow-x: auto;
  margin: 1em 0;
}

.example-title {
  font-weight: bold;
  color: #667eea;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
</style>

---

## 📝 基础文字样式

### 粗体和斜体

**语法：**
```markdown
**这是粗体**
*这是斜体*
***这是粗斜体***
```

**效果：**
- **这是粗体** - 用于强调重要内容
- *这是斜体* - 用于引用或特殊术语
- ***这是粗斜体*** - 强烈强调

---

### 高亮标记

**语法：**
```markdown
==这是高亮文字==
```

**效果：**
==这是高亮文字==

<div class="tip-box">
💡 **使用场景**：标记关键词、重点内容，类似荧光笔效果
</div>

---

### 插入文字

**语法：**
```markdown
++这是插入的文字++
```

**效果：**
++这是插入的文字++

<div class="tip-box">
💡 **使用场景**：表示新增内容、补充说明
</div>

---

### 删除线

**语法：**
```markdown
~~这是删除的文字~~
```

**效果：**
~~这是删除的文字~~

<div class="tip-box">
💡 **使用场景**：表示废弃内容、更正前的错误信息
</div>

---

### 遮罩（Spoiler）

**语法：**
```markdown
!!这是剧透内容!!
```

**效果：**
!!这是剧透内容!!

<div class="warning-box">
⚠️ **提示**：鼠标悬停或点击后才会显示内容，适合剧透、答案等
</div>

---

## 🔗 链接与邮箱

### 普通超链接

**语法：**
```markdown
[链接文字](https://example.com)
```

**效果：**
[链接文字](https://example.com)

**特性：**
- 鼠标悬停时显示下划线
- 外部链接自动添加 ↗ 图标
- 新标签页打开

---

### 带标题的链接

**语法：**
```markdown
[GitHub](https://github.com "访问 GitHub 网站")
```

**效果：**
[GitHub](https://github.com "访问 GitHub 网站")

<div class="tip-box">
💡 **提示**：鼠标悬停会显示工具提示文字
</div>

---

### 邮箱链接

**语法：**
```markdown
<hi@example.com>
[发送邮件](mailto:hi@example.com)
```

**效果：**
- <hi@example.com>
- [发送邮件](mailto:hi@example.com)

**特性：**
- 点击后自动打开邮件客户端
- 邮箱地址自动添加 ✉ 图标

---

### 内部链接

**语法：**
```markdown
[查看内容创作指南](/zh-cn/note/content)
[跳转到指定章节](#标题 ID)
```

**效果：**
- [查看内容创作指南](/zh-cn/note/content)
- [跳转到指定章节](#链接与邮箱)

---

## 🖼️ 图片插入

### 基础图片

**语法：**
```markdown
![图片描述](https://example.com/photo.png)
```

**效果：**
![示例图片](https://picsum.photos/800/400?random=10)

---

### 带尺寸的图片

**语法：**
```markdown
![图片描述](https://example.com/image.jpg){width=400}
![图片描述](https://example.com/image.jpg){width=60%}
```

**效果：**
![小尺寸图片](https://picsum.photos/800/400?random=2){width=400}

---

### 带链接的图片

**语法：**
```markdown
[![图片描述](https://example.com/image.jpg)](https://example.com)
```

**效果：**
[![可点击的图片](https://picsum.photos/800/400?random=3)](https://example.com)

<div class="tip-box">
💡 **提示**：点击图片会跳转到指定链接
</div>

---

### 多图并排

**语法：**
```markdown
![图 1](https://picsum.photos/400/300?random=4){width=48%}
![图 2](https://picsum.photos/400/300?random=5){width=48%}
```

**效果：**

![图 1](https://picsum.photos/400/300?random=4){width=48%}
![图 2](https://picsum.photos/400/300?random=5){width=48%}

---

## 💻 代码块

### 行内代码

**语法：**
```markdown
使用 `console.log()` 输出内容
```

**效果：**
使用 `console.log()` 输出内容

---

### 代码块（带语法高亮）

**语法：**
\`\`\`javascript
// JavaScript 示例
function hello() {
  console.log("Hello, World!");
}
\`\`\`

**效果：**
```javascript
// JavaScript 示例
function hello() {
  console.log("Hello, World!");
}
```

**支持的语言：**
- `javascript` / `js`
- `typescript` / `ts`
- `python`
- `java`
- `cpp`
- `css`
- `html`
- `markdown` / `md`
- `bash` / `shell`
- 等 100+ 种语言

<div class="tip-box">
💡 **提示**：代码块右上角有复制按钮，鼠标悬停时显示
</div>

---

### 显示行号

**语法：**
\`\`\`javascript showLineNumbers
// 带行号的代码
function test() {
  return true;
}
\`\`\`

**效果：**
```javascript showLineNumbers
// 带行号的代码
function test() {
  return true;
}
```

---

## 📊 表格

### 基础表格

**语法：**
```markdown
| 姓名 | 年龄 | 城市 |
|------|------|------|
| 张三 | 25   | 北京 |
| 李四 | 30   | 上海 |
```

**效果：**

| 姓名 | 年龄 | 城市 |
|------|------|------|
| 张三 | 25   | 北京 |
| 李四 | 30   | 上海 |

---

### 对齐方式

**语法：**
```markdown
| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| 内容   | 内容 |   内容 |
```

**效果：**

| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| 内容   | 内容 |   内容 |

---

### 合并单元格

**语法：**
```markdown
| 标题 1 | 标题 2 | 标题 3 |
|:-|:-:|-:|
| 普通 | 合并两列 ||
| 普通 | 2×2 单元格 ||
| 普通 | ^ || 普通 |
```

**效果：**

| 标题 1 | 标题 2 | 标题 3 |
|:-|:-:|-:|
| 普通 | 合并两列 ||
| 普通 | 2×2 单元格 ||
| 普通 | ^ || 普通 |

<div class="tip-box">
💡 **提示**：`||` 表示合并列，`^` 表示合并行
</div>

---

## 📐 数学公式

### 行内公式

**语法：**
```markdown
欧拉公式：$e^{ix} = \cos x + i \sin x$
```

**效果：**
欧拉公式：$e^{ix} = \cos x + i \sin x$

---

### 块级公式

**语法：**
```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**效果：**

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

---

### 复杂公式

**语法：**
```markdown
$$
A = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

**效果：**

$$
A = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

<div class="tip-box">
💡 **提示**：支持 LaTeX 语法，适合科技、工程类文章
</div>

---

## 📌 脚注

### 基础脚注

**语法：**
```markdown
这是一个带脚注的句子^[这是脚注内容]
```

**效果：**
这是一个带脚注的句子^[这是脚注内容]

---

### 命名脚注

**语法：**
```markdown
引用内容 [^1]

[^1]: 这是脚注的详细内容，**支持 Markdown 语法**
```

**效果：**
引用内容 [^1]

[^1]: 这是脚注的详细内容，**支持 Markdown 语法**

---

## 🎨 特殊效果

### 渐变色文字

**语法：**
```markdown
**彩色文字**{.colorful}
```

**效果：**
**彩色文字**{.colorful}

---

### 红色强调

**语法：**
```markdown
*重要提示*{.red .big}
```

**效果：**
*重要提示*{.red .big}

---

### 自定义样式

**语法：**
```markdown
**自定义样式**{style="color: blue; font-size: 1.2em;"}
```

**效果：**
**自定义样式**{style="color: blue; font-size: 1.2em;"}

---

## 📦 提示框（GitHub Alerts）

### 普通信息

**语法：**
```markdown
> [!NOTE]
> 这是一条普通信息
```

**效果：**
> [!NOTE]
> 这是一条普通信息

---

### 提示信息

**语法：**
```markdown
> [!TIP]
> 这是一个实用小技巧
```

**效果：**
> [!TIP]
> 这是一个实用小技巧

---

### 重要信息

**语法：**
```markdown
> [!IMPORTANT]
> 这是重要内容，请仔细阅读
```

**效果：**
> [!IMPORTANT]
> 这是重要内容，请仔细阅读

---

### 警告信息

**语法：**
```markdown
> [!WARNING]
> 注意！这里有潜在风险
```

**效果：**
> [!WARNING]
> 注意！这里有潜在风险

---

###  caution 信息

**语法：**
```markdown
> [!CAUTION]
> 警告！可能导致严重后果
```

**效果：**
> [!CAUTION]
> 警告！可能导致严重后果

---

### 自定义标题

**语法：**
```markdown
> [!NOTE] (･ρ･) ﾉ
> 自定义标题的提示框
```

**效果：**
> [!NOTE] (･ρ･) ﾉ
> 自定义标题的提示框

---

## 📜 其他实用功能

### Emoji 表情

**语法：**
```markdown
:wink: :cry: :laughing: :yum: :rocket: :star:
```

**效果：**
:wink: :cry: :laughing: :yum: :rocket: :star:

<div class="tip-box">
💡 **提示**：[Emoji 速查表](https://github.com/ikatyang/emoji-cheat-sheet)
</div>

---

### Ruby 注音

**语法：**
```markdown
{拼音}(pīn|yīn)
{振り仮名}(ふ||が|な)
```

**效果：**
{拼音}(pīn|yīn)
{振り仮名}(ふ||が|な)

---

### 缩写

**语法：**
```markdown
ABBR 是缩写

*[ABBR]: Abbreviation（缩写词）
```

**效果：**
ABBR 是缩写

*[ABBR]: Abbreviation（缩写词）

<div class="tip-box">
💡 **提示**：鼠标悬停在 ABBR 上会显示完整解释
</div>

---

## 🎯 实战示例

<div class="demo-box">
### 📝 博客文章开头示例

```markdown
---
title: 我的第一篇博客
timestamp: 2026-04-20 16:30:00+00:00
tags: [Life, Diary]
description: 这是我的第一篇博客文章！
---

# 欢迎来到我的博客！🎉

这是我的**第一篇博客文章**，感到非常兴奋！

> [!NOTE]
> 本博客使用 Markdown 撰写，支持丰富的格式

## 📚 关于我

- 姓名：张三
- 城市：北京
- 爱好：编程、阅读、旅行

## 📧 联系方式

- 邮箱：<hi@example.com>
- GitHub：[我的主页](https://github.com)

![封面图片](https://picsum.photos/1200/600){width=100%}

开始写作吧！✍️
```
</div>

---

## 📖 快速参考表

| 功能 | 语法 | 示例 |
|------|------|------|
| 粗体 | `**文字**` | **文字** |
| 斜体 | `*文字*` | *文字* |
| 高亮 | `==文字==` | ==文字== |
| 删除线 | `~~文字~~` | ~~文字~~ |
| 链接 | `[文字](URL)` | [链接](https://example.com) |
| 图片 | `![描述](URL)` | ![图片](https://example.com/photo.png) |
| 代码 | `` `代码` `` | `code` |
| 引用 | `> 引用` | > 引用 |
| 列表 | `- 项目` | - 项目 |
| 表格 | `\| 表头 \|` | \| 表格 \| |

---

## 💡 写作建议

1. **结构清晰**：使用标题分级（H1 → H2 → H3）
2. **适度强调**：粗体、高亮不要滥用
3. **图片压缩**：大图片先压缩再上传
4. **代码精简**：只贴关键代码，完整代码放 GitHub
5. **定期保存**：写作时定期保存草稿

---

## 🔗 相关资源

- [Markdown 官方语法](https://www.markdownguide.org/)
- [Emoji 速查表](https://github.com/ikatyang/emoji-cheat-sheet)
- [LaTeX 数学公式](https://katex.org/docs/supported.html)
- [内容创作指南](/zh-cn/note/content)
- [Markdown 扩展手册](/zh-cn/jotting/markdown)

---

<div class="tip-box">
🎉 **恭喜！** 你已经掌握了博客的所有 Markdown 语法，开始创作吧！

如有问题，欢迎在评论区留言或发送邮件至 <hi@example.com> 咨询。
</div>

[^1]: 脚注示例，展示如何使用命名脚注
