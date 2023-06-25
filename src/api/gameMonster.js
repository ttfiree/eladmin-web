import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/gameMonster',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/gameMonster/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/gameMonster',
    method: 'put',
    data
  })
}
export function fight() {
  return request({
    url: '/api/gameBattle/battle',
    method: 'post',
    data: {}
  })
}export function map() {
  return request({
    url: '/api/gameBattle/map',
    method: 'post'
  })
}export function drop() {
  return request({
    url: '/api/gameBattle/drop',
    method: 'post'
  })
}

export default { add, edit, del }
