import axios from "axios";


// 进入成员界面   返回一个member的列表
export function intoMemberPage(projectId) {
    axios({
        url: 'http://127.0.0.1:8888/member/' + projectId,
        method: "post"
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}


// 移除组员
export function removeMember(memberId) {
    axios({
        url: "http://127.0.0.1:8888/member/remove",
        method: "delete",
        headers: {
            "memberId": memberId
        }
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}

// 增加组员的权限
export function upMemberAuthority(memberId) {
    axios({
        url: "http://127.0.0.1:8888/member/up",
        method: "post",
        headers: {
            "memberId": memberId
        }
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}


// 降低组员的权限
export function lowMemberAuthority(memberId) {
    axios({
        url: "http://127.0.0.1:8888/member/low",
        method: "post",
        headers: {
            "memberId": memberId
        }
    }).then(({ data: res }) => {
        if (res.success == false) {
            alter(res.message);
        } else {
            return res.data;
        }
    })
}