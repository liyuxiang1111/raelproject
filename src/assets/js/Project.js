import axios from "axios";


// 点击不同的proejct



/**
 *      这里返回的数据
 *          projectId : 项目id
 *          author : 作者的信息
 *          projectName : 项目名称
 *          projectTypeName : 项目类型
 *          projectImg : 项目图片的路径
 *          projectBody :  {
 *               id : bodyId  这个不用管
 *              projectContent : 项目的简介
 *              contentHtml : 项目的主体html页面
 *              projectId :  对应哪一个项目
 *          }
 *          visitNumber : 项目浏览次数
 *          province : 项目的省份
 *          creaetTime : 项目创建的时间
 */
export function intoProject(projectId) {
    axios.post({
        url: 'https://127.0.0.1:8888/project/view/' + projectId,
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}


// 去除资源
export function deleteResource(resourceId) {
    axios({
        url: 'https://127.0.0.1:8888/proejct/resource/' + resourceId,
        method: "delete"
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
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
export function joinProject(projectName, projectId, userIntroduction) {
    axios({
        url: "http://127.0.0.1:8888/member/join",
        method: "post",
        headers: {
            "projectName": projectName,
            "projectId": projectId,
            "userIntroduction": userIntroduction,
        }
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}

export function downloadResource(resourceId, projectId) {
    axios({
        url: "http://127.0.0.1:8888/download?projectId=" + projectId + "&resourceName=" + resourceId,
        method: 'get',
    }).then(({ data: res }) => {
        alter("下载成功")
    })
}