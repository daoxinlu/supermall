import {request} from './request'
export function CateGory(){
    return request({
        url:'/category',
        
    })
}
export function CateContent(){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey:10062603,
            type:'pop'
        },
        
    })
}