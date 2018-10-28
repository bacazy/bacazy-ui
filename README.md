# bacazy-ui
a repository for build home pages.


目录结构

```
|- src
    |- assets           //静态资源文件
    |- components       //通用型组件
    |- models           //全局共享数据
    |- routes           //业务页面,按业务模块分组
    |- services         //后台接口服务及复杂逻辑处理
    |- utils            //工具类库
    |- locales          //国际化相关
    |- styles           //全局样式
```


|名称|命名方法| 词汇种类 | 说明 | 举例 |
|-----|------|-------|-----|-----|
|变量名 | Camel命名法 | 名词 | fristName |
|参数名 | Camel命名法 | 名词 | fristName |
|常量名 | 大写 | 名词 | 下划线+全体大写 |  ADD_METHOD | 
|类名 | Pascal命名法 | 名词 | AtiveDic | 
|Bool类型 | Camel命名法 | 名词 | 前缀:is/has |hasChild |