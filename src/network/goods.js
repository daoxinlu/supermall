import {request} from '@/network/request'

export function Getgoods(type,page,timeout){
    
    return request({
        url:'home/data',
        params:{
            type,
            page,
        },
        timeout,
    })
}