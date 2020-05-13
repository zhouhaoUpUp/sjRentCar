export default (params)=>{
		//发送请求加载中
	uni.showLoading({
		title:'加载中'
	})
	
	return new Promise ((resolove,reject)=>{
		my.request({
			...params,
			success(resp){
				resolve(resp)
			},
			fail(err){
				reject(err)
			},
			complete(){
				// uni.hideLoading();
			}
		})
	
	})
}