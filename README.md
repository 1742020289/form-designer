# 项目名称

## 项目简介
这是一个基于 Vue.js 的表单设计器项目，允许用户通过拖拽组件来创建和管理表单。

## 目录结构
- `src/`: 源代码目录
  - `components/`: 组件目录
    - `form-designer/`: 表单设计器相关组件
    - `svg-icon/`: SVG 图标组件
  - `shims-vue.d.ts`: Vue 类型声明文件
- `public/`: 公共资源目录
- `node_modules/`: 项目依赖
- `tsconfig.json`: TypeScript 配置文件
- `vite.config.ts`: Vite 配置文件

## 安装与运行
1. 克隆项目到本地：
   ```bash
   git clone <repository-url>
   ```
2. 安装依赖：
   ```bash
   yarn install
   ```
3. 启动开发服务器：
   ```bash
   yarn dev
   ```

## 功能
- 拖拽组件到设计区域
- 实时预览表单布局
- 支持多种基础组件

## 贡献
欢迎提交问题和请求合并。请确保在提交前运行所有测试。

## 许可证
MIT License
