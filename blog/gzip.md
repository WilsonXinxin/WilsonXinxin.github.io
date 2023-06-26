---
title: 性能优化之 gzip
date: 2022-12-5
tags: 性能优化
categories: 性能优化
---

::: tip 摘要
gzip 的作用以及如何使用
:::

# gzip

- gzip 是通过查找文件中的重复字符，临时替换它们，然后再使用压缩算法将文件压缩成后缀 `.GZ` 的文件，所以说文件中字符重复率越高，那么压缩效率越高，使用 gzip 的收益也越高，反之亦然。
- 使用 gzip 可以节约用户和服务器的流量，因为下载的资源包会变小，但是会加大服务器 CPU 的压力，因为服务器要解压 gzip，不过因此省出来的传输时间也是非常可观的，需要使用者进行权衡。一般来说项目越大收益越高。
- 需要 `nginx` 配合开启。

## Webpack 中的安装使用

### 安装

> yarn add compression-webpack-plugin -D

::: warning
注意此插件版本与 `webpack` 版本有依赖，确保安装相适应的版本
如 vue-element-admin 安装此版本： `npm i compression-webpack-plugin@6.1.1`
:::

### 使用

```js
// vue.config.js

const CompressionWebpackPlugin = require('compression-webpack-plugin')

configureWebpack: {
    plugins: [
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' + ['html', 'js', 'css'].join('|') + ')$'
            ),
            threshold: 10240, // 只有大小大于该值的资源会被处理 10240
            minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
            deleteOriginalAssets: false // 是否删除原文件 删除后nginx配置需要修改 建议不删
        })
    ],
}
```

## Vite 中的安装使用

### 安装

> yarn add vite-plugin-compression -D

### 使用

```js
// vite.config.dev.ts

import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';

function configCompressPlugin(compress: 'gzip' | 'brotli', deleteOriginFile = false): Plugin | Plugin[] {
	const plugins: Plugin[] = [];

	if (compress === 'gzip') {
		plugins.push(
			compressPlugin({
				ext: '.gz',
				deleteOriginFile,
			})
		);
	}

	if (compress === 'brotli') {
		plugins.push(
			compressPlugin({
				ext: '.br',
				algorithm: 'brotliCompress',
				deleteOriginFile,
			})
		);
	}
	return plugins;
}

export default mergeConfig({
	mode: 'dev',
	plugins: [configCompressPlugin('gzip')],
});
```

## nginx 配置

```nginx
server {
    #开启gzip功能
    gzip on;
    #开启gzip静态压缩功能
    gzip_static on;
    #gzip缓存大小
    gzip_buffers 4 16k;
    #gzip http版本
    gzip_http_version 1.1;
    #gzip 压缩级别 1-10
    gzip_comp_level 5;
    #gzip 压缩类型
    gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    # 是否在http header中添加Vary: Accept-Encoding，建议开启
    gzip_vary on;
}
```

## 查看请求/响应头是否成功使用

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);" 
    src="https://s1.ax1x.com/2022/12/06/z6YBG9.png" />
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9; display: inline-block; color: #999; padding: 2px;">
      请求头 accept-encoding: gzip, deflate, br
    </div>
</center>

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);" 
    src="https://s1.ax1x.com/2022/12/06/z6JO3R.png" />
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9; display: inline-block; color: #999; padding: 2px;">
      响应头 content-encoding: gzip
    </div>
</center>
