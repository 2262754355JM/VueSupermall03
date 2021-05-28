import {request3, request2} from './request'
// import {request3} from './request'


export function cateGory() {
  return request2({
    url:'/category'
  })
}

export function getCategoryRight(){

  return request3({
    url:'/right'
  });
}