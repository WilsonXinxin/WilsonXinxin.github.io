# yarn run publish

#!/usr/bin/env sh

if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
# cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init 
# git add -A
# git commit -m 'deploy'

# https://gist.github.com/cobyism/4730490
# 发布到子分支 
git add .
git commit -m'publish gh-pages'
git subtree push --prefix $1 origin gh-pages

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f https://github.com/WilsonXinxin/WilsonXinxin.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

