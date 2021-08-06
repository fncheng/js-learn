const qs = require('querystring')

const url = `https://saas.shengyunmedical.com:8322/ecg/patientManagement/HBPFollowFormView?isHide=1&id=undefined&friend={"empiId":"248992877214560257","name":"张三","belongDocId":206,"sex":"0","sexName":"男","birthday":"1989-07-18","age":"32","idCardNo":"310113194509157325","phone":"13312344321","grading":"3","gradingName":"高危","followId":1,"followUpStatus":"3","status":"2","avatar":null,"dateAdded":"2021-03-08 10:40:40","itemId":"37","referralDocId":206,"historyState":"0","state":null,"fatFlag":null}
&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYiLCJpYXQiOjE2MjgyMTIwODIsImV4cCI6MTYyODgxNjg4Mn0.YlQO_rSc_IC31ObgOPyX0iyicIwR1QyUZ8GT8TJFHQDsTJHXu4p9Qz_1P-XqnP-0lk3N_w9oz-j_dgSirAEYWg&wxSystemId=37&dataObj={}&followUserId=undefined&activeIndex=-1`

let search: string = url.split('?')[1]
function getParam(searchString: string): object {
  if (typeof searchString === 'string') {
    return qs.parse(searchString)
  }
}

console.log(getParam(search))

export {}
