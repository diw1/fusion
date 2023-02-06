import {request} from 'umi'
import {SOFIHUB_API_BASE} from '../constants'

const requestOption = (params) => ({
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // 'x-api-key':'51Kx7cFJNAxKWAIjMg4aObI7QOQVnvqi',
    },
    params
})

export const getEventTasks = async(params)=> {
    return request(SOFIHUB_API_BASE+'events/api/v3/tasks?search=action+eq+10&sort=modifiesAt,asc&inlinecount=true', requestOption(params)).then(function(response) {
        return response
    }).catch(function(error) {
        console.log(error)
    })
}

export const getEventObjects = async(params)=> {
    return request(SOFIHUB_API_BASE+'objects/api/v3/objects?search=active+eq+true+and+foreignKeys.key1+eq+@SNS@+and+devices.type+in+mmwave&inlinecount=true&sort=code,desc&page=0&size=5000', requestOption(params)).then(function(response) {
        return response
    }).catch(function(error) {
        console.log(error)
    })
}

export const patchEventTask = async(payload)=> {
    return request(SOFIHUB_API_BASE+'events/api/v3/tasks', {
        method: 'PATCH',
        data: payload,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            // 'x-api-key':'51Kx7cFJNAxKWAIjMg4aObI7QOQVnvqi',
        }}).then(function(response) {
        return response
    }).catch(function(error) {
        console.log(error)
    })
}
