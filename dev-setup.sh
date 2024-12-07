#!/bin/bash

# 检查是否提供了 vault 路径
if [ -z "$1" ]; then
    echo "请提供 Obsidian vault 的路径"
    echo "用法: ./dev-setup.sh /path/to/your/vault"
    exit 1
fi

VAULT_PATH="$1"
PLUGIN_DIR="$VAULT_PATH/.obsidian/plugins/obsidian-wallabag"

# 检查 vault 路径是否存在
if [ ! -d "$VAULT_PATH" ]; then
    echo "错误: Vault 路径不存在: $VAULT_PATH"
    exit 1
fi

# 创建插件目录
mkdir -p "$PLUGIN_DIR"

# 安装依赖
npm install

# 构建插件
npm run build

# 复制必要文件到插件目录
cp main.js manifest.json styles.css "$PLUGIN_DIR/"

echo "开发环境设置完成！"
echo "插件已安装到: $PLUGIN_DIR"
echo "现在你可以在 Obsidian 中启用 Wallabag 插件了"
