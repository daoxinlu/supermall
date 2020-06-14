import {request} from '@/network/request'

export function Multidata(timeout){
    
    return request({
        url:'home/multidata',
        timeout,
    })
}