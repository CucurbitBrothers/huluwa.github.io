(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{376:function(a,e,t){"use strict";t.r(e);var s=t(42),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("RouterLink",{attrs:{to:"/resource/database/elasticsearch/!https://zq99299.github.io/note-book/elasticsearch-core/"}},[a._v("转自")])],1),a._v(" "),t("h2",{attrs:{id:"core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[a._v("#")]),a._v(" core")]),a._v(" "),t("ul",[t("li",[a._v("全文搜索, 倒排索引")]),a._v(" "),t("li",[a._v("Lucene")]),a._v(" "),t("li",[a._v("Elasticsearch\n"),t("ul",[t("li",[a._v("自动维护数据的分布到多个节点的索引建立、检索请求分布到多个节点的执行")]),a._v(" "),t("li",[a._v("自动维护数据的冗余副本，保证一些机器宕机了，不会丢失任何数据")]),a._v(" "),t("li",[a._v("封装了更多的高级功能, 复杂搜索, 聚合分析全文检索，同义词处理，相关度排名，复杂数据分析，海量数据的近实时处理, 基于地理位置搜索")]),a._v(" "),t("li",[a._v("支持PB级数据")]),a._v(" "),t("li",[a._v("作为传统数据库的补充, 提供了数据库所不能提供的很多功能")])])])]),a._v(" "),t("p",[a._v("https://uzshare.com/view/822075")]),a._v(" "),t("h2",{attrs:{id:"入门案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入门案例"}},[a._v("#")]),a._v(" 入门案例")]),a._v(" "),t("ul",[t("li",[a._v("面向文档的数据格式")])]),a._v(" "),t("h3",{attrs:{id:"集群管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群管理"}},[a._v("#")]),a._v(" 集群管理")]),a._v(" "),t("ol",[t("li",[a._v("快速查看集群健康状况\n"),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("GET /_cat/health?v\n参数v: 显示标题头\nunassign：未分配数量\nactive_shards_percent：可用 shards 百分比\n")])])])]),a._v(" "),t("li",[a._v("status 状态\n"),t("ul",[t("li",[a._v("green：每个索引的 primary shard 和 replica shard 都是 active 状态的")]),a._v(" "),t("li",[a._v("yellow：每个索引的 primary shard 都是 active 状态的，但是部分 replica shard 不是 active 状态，处于不可用的状态")]),a._v(" "),t("li",[a._v("red：不是所有索引的 primary shard 都是 active 状态的，部分索引有数据丢失了")])])])])]),a._v(" "),t("li",[a._v("查看集群索引\n"),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")])])])]),a._v("\nGET /_cat/indices?v\npri 默认是 5 个，rep 默认是 1 个"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"crud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crud"}},[a._v("#")]),a._v(" CRUD")]),a._v(" "),t("ol",[t("li",[a._v("创建索引")])]),a._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('PUT test_index\n{\n  "mappings": {\n    "properties" : {\n      "create_time" : {\n        "type":   "date",\n        "format": "yyyy-MM-dd HH:mm:ss"\n        },\n      "gender" : {\n        "type" : "long"\n      },\n      "id" : {\n        "type" : "long"\n      },\n      "image_thumbnail" : {\n        "type" : "text",\n        "fields" : {\n          "keyword" : {\n            "type" : "keyword",\n            "ignore_above" : 256\n          }\n        }\n      },\n      "liked_number" : {\n        "type" : "long"\n      },\n      "name" : {\n        "type" : "text",\n        "fields" : {\n          "keyword" : {\n            "type" : "keyword",\n            "ignore_above" : 256\n          }\n        }\n      },\n      "state" : {\n        "type" : "long"\n      }\n    }\n  }\n}\n')])])])])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[a._v("删除索引")]),a._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" DELETE /test_index?pretty\n")])])])])])]),a._v(" "),t("li",[t("p",[a._v("新增数据")]),a._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' PUT /test_index/_doc/1\n {\n   "create_time": "2020-05-30 12:26:25"\n }\n\n *** resp ***\n\n {\n   "_index" : "test_index",\n   "_type" : "_doc",\n   "_id" : "4005",  # 数据版本号\n   "_version" : 1,\n   "result" : "created",\n   "_shards" : {\n     "total" : 2,  # 总的要写的分片数量\n     "successful" : 2,\n     "failed" : 0\n   },\n   "_seq_no" : 6,\n   "_primary_term" : 1\n }\n')])])])])])]),a._v(" "),t("li",[t("p",[a._v("查询数据")]),a._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' GET /test_index/_search\n {\n   "query": {\n     "match_all": {}\n   }\n }\n')])])])])])]),a._v(" "),t("li",[t("p",[a._v("替换数据")]),a._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' PUT /test_index/_doc/4005\n {\n   "create_time": "2020-05-30 14:26:25"\n }\n')])])])]),a._v(" "),t("li",[a._v("替换_id 为4005的所有数据")])])]),a._v(" "),t("li",[t("p",[a._v("更新数据")]),a._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" \n")])])])]),a._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" \n")])])])]),a._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" \n")])])])]),a._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" \n")])])])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);