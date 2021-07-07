/* 函数封装 */
// 方法：ajax get 五部曲
function ajax_get (url,data) {
    // 异步对象
    var ajax = new XMLHttpRequest();
    // url 方法
    // 如果是get发送数据，发送格式为 xxx.php?name=jack&age=18
    // 所以这里需要拼接url
    if (data) {
        // 如果有值 需要拼接字符串
        // 拼接为xxx.php?name=jack&age=18
            url+='?';
            url+=data;
    }else {

    }
    ajax.open('get', url);
    //发送
    ajax.send();
    // 注册事件
    ajax.onreadystatechange = function (){
        if (ajax.readyState==4 && ajax.status==200){
            console.log(ajax.responseText);
        }
    }
}

// post方法
    function ajax_post (url, data){
        //异步对象
        var ajax = XMLHttpRequest();
        //url方法
        ajax.open('post',url);
        //设置请求报文
        ajax.setRequestHeader('Content-type','application/x-www-for');

        //发送
        if (data) {
            // 如果有值 post请求 是在send中 发送给服务器
            ajax.send(data);
        }else {
            ajax.send();
        }

        // 注册事件
        ajax.onreadystatechange = function (){
            if (ajax.readyState=4 && status==200){
                console.log(ajax.responseText);
            }
        }
    }

    //将get post方法封装在一起
    function ajax_tool(url,data,method,success){
        //异步对象
        var ajax = new XMLHttpRequest();
        //get 跟 post 需要分别写不同的代码
        if (method=='get'){
            //get请求
            if (data){
                //如果有值
                url+='?';
                url+=data;
            }else {

            }
            //设置方法以及url
            ajax.open(method,url);
            //send即可
            ajax.send();
        }else {
            //post请求
            //post请求 url是不需要改变的
            ajax.open(method,url);
            //需要设置请求把报文
            ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
            // 判断data send 发送数据
            if (data){
                //如果有值 从send发送
                ajax.send(data);
            }else {
                //没有值 直接发送就可以
                ajax.send();
            }
        }

        //注册事件
        ajax.onreadystatechange=function () { 
            // 在事件中获取数据 并修改页面
            if (ajax.readyState==4 && ajax.status==200){
                // console.log(ajax.responseText);

			// 将 数据 让 外面可以使用
			// return ajax.responseText;

			// 当 onreadystatechange 调用时 说明 数据回来了
			// ajax.responseText;

			// 数据成功获取以后，执行方法success()。
			//我们把获取的数据作为 success()的参数，意思是：
			//success方法是外面的，数据是里面给的。那数据就变相地传递到了外面去【重要】
            success(ajax.responseText);
            }
         }

    }