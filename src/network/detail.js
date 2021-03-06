import { request2} from './request'

export function getDetail(iid) {
  return request2({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columns=columns;
    this.services=services;
    this.realPrice=itemInfo.lowNowPrice;
  }
}

export class GoodParam{
  constructor(info,rule){
    //注：images可能没有值（某些商品有值，有些商品没有值）
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export function getRecommend() {
  return request2({
    url:'/recommend'
  })
}