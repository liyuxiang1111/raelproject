import axios from 'axios'

// 点击不同的proejct
export function clickProject(projectId) {
  axios
    .post({
      url: 'https://127.0.0.1:8888/project/view/' + projectId
    })
    .then(({ data: res }) => {
      if (res.success == false) {
        alter(res.message)
      } else {
        return res.data
      }
    })
}

// 点击不同的type
export function clickType(typeId) {
  axios
    .post({
      url: 'https://127.0.0.1:8888/type/view/' + typeId
    })
    .then(({ data: res }) => {
      if (res.success == false) {
        alter(res.message)
      } else {
        return res.data
      }
    })
}

// 去除资源
export function deleteResource(resourceId) {
  axios({
    url: 'https://127.0.0.1:8888/proejct/resource/' + resourceId,
    method: 'delete'
  }).then(({ data: res }) => {
    if (res.success == false) {
      alter(res.message)
    } else {
      return res.data
    }
  })
}

// 删除项目
export function deleteProject(projectId) {
  axios({
    url: 'http://127.0.0.1:8888/proejct/delete',
    method: 'delete',
    headers: {
      projectId: projectId
    }
  }).then(({ data: res }) => {
    if (res.success == false) {
      alter(res.message)
    } else {
      return res.data
    }
  })
}

// 点击加入项目 需要在使用方法前 做一个简单的判断
/*
        是否是项目的创建者 
                true  alter一个提示框  : 项目的发起者不可以加入这个项目
    拿到数据之后 
        正常的 false :  数据不正确 
        特殊的false : 显示 你已经是这个项目的组员的 不需要重复加入
*/
export function joinProject(projectName, projectId, userIntroduction, postTime) {
  axios({
    url: 'http://127.0.0.1:8888/project/join',
    method: 'post',
    headers: {
      projectName: projectName,
      projectId: projectId,
      userIntroduction: userIntroduction,
      postTime: postTime
    }
  }).then(({ data: res }) => {
    if (res.success == false) {
      alter(res.message)
    } else {
      return res.data
    }
  })
}

// 搜索项目

//   tips : 进入搜索界面就是 设置默认的值  需要搜索不不同的信息 也是调用这一个方法 但是加上具体的parms
/**
 *     发送的数据 :
 *          pageNum : 进入第几页  第一次进入search 默认是1
 *          pageSize : 固定 6
 *          projectName : 需要具体搜索就加 没有就不需要加
 *          searchDay : 如上
 *          province : 如上  tips : 这个地方不可以传递多个 后端的sql没有做好
 *          projectTypeId : 如上
 *          userSec : 如上
 *          userStudy : 如上
 *          memberNum : 如上
 *
 *
 *      拿到的数据
 *          pageNum : 当前页
 *          pageSize : 每页多少
 *          totalCount : 所有的项目数量
 *          prePage : 上一页的num
 *          nextPage : 下一页的num
 *          startNavPage : 页面显示的最前面的page  默认当前页-2
 *          endNavPage : 页面显示的最后面的page 默认当前页 + 2
 *          dataList : 查询出来的数量 是一个list
 */
export function searchProject(pageNum, pageSize, projectName, searchDay, province, projectTypeId, userSex, userStudy, memberNum) {
  axios({
    method: 'get',
    url: 'http://1270.0.1:8888/view',
    data: {
      pageNum: pageNum,
      pageSize: pageSize,
      projectName: projectName,
      searchDay: searchDay,
      province: province,
      projectTypeId: projectTypeId,
      userSex: userSex,
      userStudy: userStudy,
      memberNum: memberNum
    }
  }).then(({ data: res }) => {
    if (res.success == false) {
      alter(res.message)
    } else {
      return res.data
    }
  })
}

// 进入成员界面   返回一个member的列表
export function intoMemberPage(projectId) {
  axios({
    url: 'http://127.0.0.1:8888/member/' + projectId,
    method: 'post'
  }).then(({ data: res }) => {
    if (res.success == false) {
      alter(res.message)
    } else {
      return res.data
    }
  })
}

// 移除组员
export function removeMember(memberId) {
  axios({
    url: 'http://127.0.0.1:8888/member/remove',
    method: 'delete',
    headers: {
      memberId: memberId
    }
  }).then(({ data: res }) => {
    if (res.success == false) {
      alter(res.message)
    } else {
      return res.data
    }
  })
}

//从后端拿东西
export function removeMember(memberId) {
  axios({
    url: 'http://127.0.0.1:8888/member/remove',
    method: 'delete',
    headers: {
      memberId: memberId
    }
  }).then(({ data: res }) => {
    if (res.success == false) {
      alter(res.message)
    } else {
      return res.data
    }
  })
}
