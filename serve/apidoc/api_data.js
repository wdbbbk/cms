define({ "api": [
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
    "filename": "router/vipManage.js",
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
    "filename": "router/vipManage.js",
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
    "filename": "router/vipManage.js",
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
    "filename": "router/vipManage.js",
    "groupTitle": "会员信息添加"
  }
] });
