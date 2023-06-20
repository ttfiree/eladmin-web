import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/gameCharacter',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/gameCharacter/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/gameCharacter',
    method: 'put',
    data
  })
}

export function fight() {
  return request({
    url: 'api/gameBattle/battle',
    method: 'post',
    data: { }
  })
}

export default { add, edit, del }
