define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C:\\Users\\Administrator\\Desktop\\yz\\cms\\serve\\apidoc\\main.js",
    "groupTitle": "C:\\Users\\Administrator\\Desktop\\yz\\cms\\serve\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "http://localhost:3030/vipMange/changeVipMsg",
    "title": "",
    "name": "vipMange/changeVipMsg",
    "group": "会员信息修改",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "petname",
            "description": "<p>宠物名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "petage",
            "description": "<p>宠物年龄</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/vipManage.js",
    "groupTitle": "会员信息修改"
  },
  {
    "type": "get",
    "url": "http://localhost:3030/vipMange/delVip",
    "title": "",
    "name": "vipMange/delVip",
    "group": "会员信息删除",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>会员的主键id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/vipManage.js",
    "groupTitle": "会员信息删除"
  },
  {
    "type": "get",
    "url": "http://localhost:3030/vipMange/list",
    "title": "",
    "name": "vipMange/list",
    "group": "会员信息查看",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minNum",
            "description": "<p>第几页的页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>一页显示几个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>如果你想获取所有数据就传一个 'total' 字符串</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/vipManage.js",
    "groupTitle": "会员信息查看"
  },
  {
    "type": "get",
    "url": "http://localhost:3030/vipMange/add",
    "title": "",
    "name": "vipMange/add",
    "group": "会员信息添加",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "petname",
            "description": "<p>宠物名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "petage",
            "description": "<p>宠物年龄</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/vipManage.js",
    "groupTitle": "会员信息添加"
  },
  {
    "type": "get",
    "url": "http://localhost:3030/spmanage/add",
    "title": "",
    "name": "spmanage/add",
    "group": "商品信息添加",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spname",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>品牌</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory",
            "description": "<p>库存</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/spRouter.js",
    "groupTitle": "商品信息添加"
  }
] });
