const Mock = require('mockjs');


 const Random = Mock.Random;
    Mock.mock(`http://10.18.33.1/cateGory/right`,'get',{
    'list|16':[{
      'listItem|6-10':[
        {
          'id|+1':1,
          'name':'@cname',
          'img':Random.image('100x50'),
          'goodsName':'商品'
        }
      ]
    }
    
     
    ]
  
  })



