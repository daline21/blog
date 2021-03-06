#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf docs/assets
rm -rf docs/img
rm -rf docs/*.html

# 生成静态文件
cp  docs/.vuepress/README.md docs/
yarn run build
rm -f docs/README.md

# 进入生成的文件夹
mv docs/.vuepress/dist/* docs/