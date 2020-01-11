import { Button } from "antd"

export default [
 
    {
      title: 'Shop',
      dataIndex: 'Shop',
      fixed:'left',
      width:200,
      filters: [
        {
          text: '成都',
          value: '成都',
        },
        {
          text: '贵阳',
          value: '贵阳',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: '香格里拉',
              value: '香格里拉',
            },
            {
              text: '西双版纳',
              value: '西双版纳',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'name',
      dataIndex: 'name',
      width:200,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'bigclass',
      dataIndex: 'bigclass',
      width:100,

    },
    {
      title: 'smallclass',
      dataIndex: 'smallclass',
      width:100,

    },
   {
      title:'img',
      dataIndex:'imgpath',
      key:'img',
      width:400,
      render(data){
        return (<img src={data}/>)
      },


   },
    {
      title: 'price',
      dataIndex: 'price',
      width:100,

    },
    {
      title: 'sallprice',
      dataIndex: 'sallprice',
      width:100,

    }, 
    {
      title: 'cleandifficulty',
      dataIndex: 'cleandifficulty',
      width:100,

    },
    {
      title: 'Productnumber',
      dataIndex: 'Productnumber',
      width:200,

    },

  




]