import axios from "axios";

const api = axios.create({
  // chỗ này bị thiếu https, cách tốt nhất là lấy url rồi quăng lên browser xong copy lại, đó đc òi nè.
  baseURL: "http://fiverr.cybersoft.edu.vn/api/",
});

api.interceptors.request.use((config) => {
  config.headers = {
    tokenByClass:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
    token: localStorage.getItem("Admin")
      ? `${JSON.parse(localStorage.getItem("Admin")).token}`
      : "",
    // chỗ này Vân phải code thống nhất với chỗ login á
    // ví dụ: khi Vân login, có user object trả về, nếu Vân localStorage.setItem("user", JSON.stringify(user)) thì ở đây mình cũng phải JSON.parse(localStorage.getItem("user")).accessToken á, kiểu kiểu v.
    //ko phải .token th hả H
    // bây giờ tui ví dụ 1 cái flow cho dễ hiểu:
    // admin đăng nhập -> Vân sẽ stringify cái object trả về. JSON.stringify(response.data)
    // ở cái api này, điều mình gần gắn ở headers. đó là 1 cái header có tên là "token"
    // nên ở chỗ config.headers này nè, thay vì Authorization thì mình phải gửi lên 1 cái header có tên là token á => cái chỗ này lại i H
    // api này nó đòi mình tạo 1 cái gọi là token ở headers á Vân, cho nên mình phải cho token vô cái headers này, nếu Backend đặt là Authorization thì mình phải ghi là Authorization á Vân.
    // và cái token này có giá trị là JSON.parse(localStorage.getItem("key-hồi-nãy-đặt-khi-setitem")).token
    // chỗ này là .token, nãy tui sai, làm theo api trả về thôi => còn muốn chấm . tới j là dựa vào dưới trả về token thì .token đó hả H
    // giờ Vân hiểu như này đc nè:
    // mình call api = axios
    // thì response.data là 1 cái object mà server trả về
    // trong trường hợp này server trả về là:
    /**
 * 
 * 
đó thì cái réponse.data là cái object bên dưới.
rồi hàm JSON.stringify() có nghĩa là: biến object thành 1 chuỗi!
nếu mình đưa response.data vào trong stringify() thì cái object bên dưới đc convert thành 1 chuỗi.

cái mình JSON.parse(localStorage.getItem("")) là nó lấy cái chuỗi bên dưới rồi biến chuỗi đó trở lại thành object á Vân. nên mình chấm tới token vẫn đc. => ở dưới đang là object mà H?


đây để tui ví dụ

Vân hiểu hông Vân. cho Vân 1 phút đọc ngẫm nha. ok
 {
    "message": "Đăng Nhập Thành Công ! ",
    "user": {
        "skill": [
            "LoL",
            "WEB",
            "DESIGN"
        ],
        "certification": [
            "DIB",
            "PYNOW"
        ],
        "bookingJob": [
            "618cc96995d99f001c0c080e"
        ],
        "deleteAt": false,
        "_id": "61d3bcd2f80ff0001d71a5b9",
        "name": "Nguyễn Phong Dinh",
        "email": "an13@gmail.com",
        "password": "$2a$10$Ou76xrqhPZrGJRgb7fW74eJu3zC8OFMDSYh83JPyZvb58JlZ0oZHm",
        "phone": "0934657867",
        "birthday": "1998-05-11T00:00:00.000Z",
        "gender": true,
        "role": "CLIENT",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzYmNkMmY4MGZmMDAwMWQ3MWE1YjkiLCJlbWFpbCI6ImFuMTNAZ21haWwuY29tIiwicm9sZSI6IkNMSUVOVCIsImlhdCI6MTY0NjMxNTYzMn0.u7qtAWSHQqbZr9u7C809U0qRQyRwiBi3Nb_LEglmtUk"
}

 */
  };
  return config;
});
export default api;
