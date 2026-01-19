# 📝 我的 Web3 学习笔记 | My Web3 Learning Notes

<div align="center">

**记录我的 Rust、Solana 和 Arbitrum 学习历程**

**My personal notes and learning journey in Rust, Solana, and Arbitrum development**

[English](#english) | [中文](#中文)

</div>

---

## 中文

### 📖 关于这个博客

这是我学习 Rust、Solana 和 Arbitrum 开发的个人笔记网站。这里记录了我从零开始学习 Web3 开发的过程、心得体会和整理的知识点。希望这些笔记也能帮助到同样在学习路上的你。

### ✨ 笔记内容

- **🦀 Rust 学习笔记** - 所有权、借用、生命周期等核心概念的个人理解
- **◎ Solana 开发笔记** - Anchor 框架使用心得和代码示例
- **🔵 Arbitrum & Stylus** - 使用 Rust 编写智能合约的学习记录
- **🌓 深色/浅色模式** - 舒适的阅读体验
- **📱 响应式设计** - 完美适配桌面和移动设备
- **🔍 搜索功能** - 快速找到需要的笔记内容
- **📋 代码复制** - 一键复制代码示例

### 🎨 UI 设计风格

#### 配色方案
- **Rust 主题色**：`#ce422b` (橙红色)
- **Solana 主题色**：`#9945FF` (紫色) + `#14F195` (绿色渐变)
- **Arbitrum 主题色**：`#28A0F0` (蓝色)
- **支持浅色和深色模式切换**

#### 设计元素
- **渐变背景** - 使用品牌色的微妙渐变
- **卡片式布局** - 内容组织清晰，易于阅读
- **代码高亮** - Rust 代码语法高亮
- **动画效果** - 平滑的过渡和滚动动画
- **图标使用** - Emoji 图标增添视觉趣味

### 🛠️ 技术栈

#### 前端技术
- **HTML5** - 语义化结构
- **CSS3** - 自定义 CSS（无框架依赖）
  - CSS 变量实现主题切换
  - Flexbox & Grid 布局
  - 响应式媒体查询
- **JavaScript (ES6+)** - 交互功能
  - 主题切换
  - 平滑滚动
  - 搜索功能
  - 代码复制
  - 阅读进度条

#### 无后端/框架
- **纯静态网站** - 无需后端服务器
- **零依赖** - 无外部库依赖
- **快速加载** - 优化性能

### 📂 项目结构

```
solana-arbitrum-rust-learning/
├── index.html          # 主页面，包含所有内容
├── styles.css          # 样式表
├── script.js           # JavaScript 交互
└── README.md           # 项目说明
```

### 🚀 本地开发

1. **克隆项目**
```bash
git clone https://github.com/YOUR_USERNAME/solana-arbitrum-rust-learning.git
cd solana-arbitrum-rust-learning
```

2. **直接在浏览器中打开**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

3. **或使用本地服务器**
```bash
# Python 3
python -m http.server 8000

# Node.js (需要安装 http-server)
npx http-server

# 然后访问 http://localhost:8000
```

### 🌐 部署到 Vercel（免费）

#### 方法一：通过 Vercel CLI 部署（推荐）

1. **安装 Vercel CLI**
```bash
npm install -g vercel
```

2. **在项目目录中运行**
```bash
cd solana-arbitrum-rust-learning
vercel
```

3. **按照提示操作**
   - 登录或注册 Vercel 账号
   - 选择项目设置（使用默认设置即可）
   - 等待部署完成

4. **完成！** 你会得到一个类似 `https://your-project.vercel.app` 的 URL

#### 方法二：通过 Vercel 网站部署

1. **准备代码**
   - 将项目推送到 GitHub
   - 或下载项目 ZIP 文件

2. **访问 Vercel**
   - 打开 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录（推荐）

3. **创建新项目**
   - 点击 "Add New Project" 或 "New Project"
   - 选择导入你的 GitHub 仓库
   - 或选择上传 ZIP/拖放文件夹

4. **配置项目**
   - **Project Name**: 输入项目名称
   - **Framework Preset**: 选择 "Other"
   - **Root Directory**: 保持默认 `./`
   - **Build Command**: 留空（静态网站无需构建）
   - **Output Directory**: 留空或输入 `./`

5. **部署**
   - 点击 "Deploy"
   - 等待几秒钟
   - 部署完成后点击访问 URL

#### 方法三：使用 Vercel 的拖放部署

1. **准备文件夹**
   - 确保项目文件夹包含 `index.html`

2. **访问 Vercel**
   - 打开 [vercel.com/new](https://vercel.com/new)
   - 登录账号

3. **拖放部署**
   - 将整个项目文件夹拖到 Vercel 上传区域
   - 等待上传和部署完成

#### Vercel 部署配置（可选）

如果需要自定义配置，在项目根目录创建 `vercel.json`：

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 📝 内容更新

网站内容完全包含在 `index.html` 中。要更新内容：

1. 用文本编辑器打开 `index.html`
2. 找到需要修改的部分
3. 编辑 HTML 内容
4. 保存并重新部署

### 🎯 自定义

#### 修改颜色
编辑 `styles.css` 中的 CSS 变量：

```css
:root {
    --rust-color: #ce422b;
    --solana-color: #9945FF;
    --arbitrum-color: #28A0F0;
    /* ... 其他颜色 */
}
```

#### 添加新内容
在 `index.html` 的相应 section 中添加新的 `content-card`：

```html
<div class="content-card">
    <h3>你的新标题</h3>
    <p>你的新内容</p>
</div>
```

### 📊 网站特性说明

#### 交互功能
- **主题切换** - 点击导航栏的月亮/太阳图标
- **平滑滚动** - 点击导航链接平滑滚动到对应部分
- **搜索功能** - 按 Ctrl/Cmd + K 或点击搜索框
- **代码复制** - 点击代码块右上角的复制按钮
- **返回顶部** - 滚动超过 300px 后显示返回顶部按钮
- **阅读进度** - 顶部显示页面阅读进度条

#### 响应式断点
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### 🔗 学习路径

网站建议的学习顺序：

1. **Rust 基础** (2-4 周)
   - 阅读 Rust Book
   - 完成 Rustlings 练习
   - 理解所有权和借用

2. **选择方向** (4-8 周)
   - Solana 路线：学习 Anchor 框架
   - Arbitrum 路线：学习 Stylus (Rust)

3. **实战项目** (持续)
   - 构建完整的 DApp
   - 部署到主网

### 📚 相关资源

- [Rust 官方文档](https://doc.rust-lang.org/book/)
- [Solana 开发者文档](https://solana.com/docs)
- [Arbitrum Stylus 文档](https://docs.arbitrum.io/stylus/quickstart)
- [Vercel 文档](https://vercel.com/docs)

### 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 📄 许可证

MIT License - 自由使用和修改

---

## English

### 📖 About This Blog

This is my personal learning notes website for studying Rust, Solana, and Arbitrum development. It documents my journey from zero to Web3 development, including insights, experiences, and organized knowledge points. I hope these notes can also help others on their learning path.

### ✨ Note Contents

- **🦀 Rust Study Notes** - Personal understanding of ownership, borrowing, lifetimes
- **◎ Solana Notes** - Anchor framework insights and code examples
- **🔵 Arbitrum & Stylus** - Learning notes on writing smart contracts in Rust
- **🌓 Dark/Light Mode** - Comfortable reading experience
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **🔍 Search Function** - Quickly find what you need
- **📋 Code Copy** - One-click code example copying

### 🎨 UI Design Style

#### Color Scheme
- **Rust Theme**: `#ce422b` (Orange-red)
- **Solana Theme**: `#9945FF` (Purple) + `#14F195` (Green gradient)
- **Arbitrum Theme**: `#28A0F0` (Blue)
- **Supports light and dark mode switching**

#### Design Elements
- **Gradient backgrounds** - Subtle gradients using brand colors
- **Card-based layout** - Clear content organization
- **Code highlighting** - Rust syntax highlighting
- **Smooth animations** - Transitions and scroll animations
- **Emoji icons** - Visual appeal

### 🛠️ Tech Stack

#### Frontend Technologies
- **HTML5** - Semantic structure
- **CSS3** - Custom CSS (no framework dependencies)
  - CSS variables for theming
  - Flexbox & Grid layout
  - Responsive media queries
- **JavaScript (ES6+)** - Interactive features
  - Theme toggle
  - Smooth scrolling
  - Search functionality
  - Code copying
  - Reading progress bar

#### No Backend/Framework
- **Pure static site** - No backend server needed
- **Zero dependencies** - No external libraries
- **Fast loading** - Performance optimized

### 📂 Project Structure

```
solana-arbitrum-rust-learning/
├── index.html          # Main page with all content
├── styles.css          # Stylesheet
├── script.js           # JavaScript interactions
└── README.md           # Project documentation
```

### 🚀 Local Development

1. **Clone the project**
```bash
git clone https://github.com/YOUR_USERNAME/solana-arbitrum-rust-learning.git
cd solana-arbitrum-rust-learning
```

2. **Open directly in browser**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

3. **Or use a local server**
```bash
# Python 3
python -m http.server 8000

# Node.js (requires http-server)
npx http-server

# Then visit http://localhost:8000
```

### 🌐 Deploy to Vercel (Free)

#### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Run in project directory**
```bash
cd solana-arbitrum-rust-learning
vercel
```

3. **Follow the prompts**
   - Login or sign up for Vercel
   - Choose project settings (use defaults)
   - Wait for deployment to complete

4. **Done!** You'll get a URL like `https://your-project.vercel.app`

#### Method 2: Deploy via Vercel Website

1. **Prepare your code**
   - Push project to GitHub
   - Or download project as ZIP

2. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Login with GitHub (recommended)

3. **Create new project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Or upload ZIP/drag & drop folder

4. **Configure project**
   - **Project Name**: Enter project name
   - **Framework Preset**: Select "Other"
   - **Root Directory**: Keep default `./`
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty or enter `./`

5. **Deploy**
   - Click "Deploy"
   - Wait a few seconds
   - Click the URL to visit your site

#### Method 3: Drag & Drop Deployment

1. **Prepare folder**
   - Ensure folder contains `index.html`

2. **Visit Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Login to your account

3. **Drag & drop**
   - Drag the entire project folder to the upload area
   - Wait for upload and deployment

### 📝 Updating Content

All content is in `index.html`. To update:

1. Open `index.html` in a text editor
2. Find the section you want to modify
3. Edit the HTML content
4. Save and redeploy

### 🎯 Customization

#### Change Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --rust-color: #ce422b;
    --solana-color: #9945FF;
    --arbitrum-color: #28A0F0;
    /* ... other colors */
}
```

#### Add New Content
Add a new `content-card` in the appropriate section of `index.html`:

```html
<div class="content-card">
    <h3>Your New Title</h3>
    <p>Your new content</p>
</div>
```

### 📊 Website Features

#### Interactive Features
- **Theme Toggle** - Click moon/sun icon in navbar
- **Smooth Scrolling** - Click nav links for smooth scroll
- **Search Function** - Press Ctrl/Cmd + K or click search box
- **Code Copy** - Click copy button on code blocks
- **Back to Top** - Appears after scrolling 300px
- **Reading Progress** - Top progress bar

#### Responsive Breakpoints
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### 🔗 Learning Path

Recommended learning order:

1. **Rust Basics** (2-4 weeks)
   - Read Rust Book
   - Complete Rustlings exercises
   - Understand ownership & borrowing

2. **Choose Direction** (4-8 weeks)
   - Solana path: Learn Anchor framework
   - Arbitrum path: Learn Stylus (Rust)

3. **Build Projects** (Ongoing)
   - Build complete DApps
   - Deploy to mainnet

### 📚 Related Resources

- [Rust Official Documentation](https://doc.rust-lang.org/book/)
- [Solana Developer Docs](https://solana.com/docs)
- [Arbitrum Stylus Docs](https://docs.arbitrum.io/stylus/quickstart)
- [Vercel Documentation](https://vercel.com/docs)

### 🤝 Contributing

Issues and Pull Requests are welcome!

### 📄 License

MIT License - Free to use and modify

---

<div align="center">

**📝 我的 Web3 学习笔记 | 持续更新中...**

**My Web3 Learning Notes | Continuously Updated**

</div>