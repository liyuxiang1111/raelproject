import axios from "axios";

// 删除项目
export function deleteProject(projectId) {
    axios({
        url: "http://127.0.0.1:8888/proejct/delete",
        method: "delete",
        headers: {
            'projectId': projectId
        }
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}



// 注销用户
export function deleteUser(token) {
    axios({
        url: "http://127.0.0.1:8888/user/delete",
        method: "delete",
        headers: {
            'Authorization': token
        }
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}



// 是否通同意请求
export function Attitude(situation, requestId) {
    axios({
        url: "http://127.0.0.1:8888/member/agree",
        method: "post",
        data: {
            "situation": situation,
            "requestId": requestId
        }
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}


// 进入个人中心
/**
 *   返回的数据
 *          user : 用户 
 *        (列表)  requestList : {
 *                  requestId : 个人中心的请求id
 *                  projectId : 项目id
 *                  uerName : 请求的用户名字
 *                  userLargestStudy : 请求人的学历
 *                  userId : 请求人的id 
 *          }
 *          (列表)  projectLessVoList {
 *                  projectId : 项目id 
 *                  projectName : 项目的name 
 *                  projectContent : 项目简介
 *                  projectImg : 项目图片的src
 *          }
 */
export function intoPersonCenter() {
    axios({
        url: "http://127.0.0.1:8888/person",
        method: "post",
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}