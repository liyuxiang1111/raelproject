import axios from "axios";

// 删除项目
export function logout(token) {
    axios({
        url: "http://127.0.0.1:8888/proejct/delete",
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