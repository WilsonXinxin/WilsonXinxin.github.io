# yarn run publish

#!/usr/bin/env sh
echo
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build
# git add .
# git commit -m'publish gh-pages'

# https://gist.github.com/cobyism/4730490
# 发布到子分支 
# git subtree push --prefix $1 origin gh-pages
git push origin :gh-pages && git subtree push --prefix dist origin gh-pages
