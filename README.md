# hexo-native-lazy-load

As is known, Chrome76 start to support native lazy load. And Firefox also has a open bug for this feature.

For more infomation about native lazy load go ahead and see [here](https://web.dev/native-lazy-loading)

This plugin add lazy load attribute to img tag.

To use the plugin add following setting to the site config file. That mean the `_config,yml` in root directory.

```yaml
lazy_load: #native load
  enable: true
```

The plugin only add attribute in post page by default. To add attribute in other page as well set `lazy_load.all` to true
```yaml
lazy_load:
  enable: true
  all: true

```
By default it will add fallback polyfill use lazysizes. It can be disable by setting `lazy_load.fallback` to false
```yaml
lazy_load:
  enable: true
  fallback: false
```
