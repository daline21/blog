#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf docs/assets
rm -rf docs/img
rm -rf docs/*.html

# 生成静态文件
yarn run build

# 进入生成的文件夹
mv docs/.vuepress/dist/* docs