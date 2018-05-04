
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./resources/libs/service.worker.js').then(function(registration) {
//           alert("支持serviceWorker");
//           // Registration was successful
//           console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }).catch(function(err) {
//           alert("不支持serviceWorker");
//           // registration failed :(
//               console.log('ServiceWorker registration failed: ', err);
//     });
// }
// //Listen to fetch events
// self.addEventListener('fetch', function(event) {
//     console.log("靠");
//     // Clone the request
//     var req = event.request.clone();  
//     console.log("进来了1。。。。。")
//   	// Check if the image is a jpeg
//   	if (/\.webp$/.test(event.request.url)) {

//            console.log("进来了2。。。。。")

//             console.log(req.headers.entries());

//     		// Get all of the headers
//     		var headers = req.headers.entries();

//     		// Inspect the accept header for WebP support
//     		var acceptHeader = headers.filter(function(item){
//                 item[0] == 'accept';
//             });

//     		// 是否支持webp
//     		var supportsWebp = acceptHeader[1].indexOf('webp')>-1;

//     		// If we not support WebP
//     		if (supportsWebp) {
//                 // Build the return URL
//     			var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".jpg";
//                 console.log("returnUrl:"+returnUrl);
// 	            event.respondWith(
// 	              fetch(returnUrl, {
// 	                mode: 'no-cors'
// 	              })
// 	            )
//     	    }else{
//     	    	console.log("不支持");
//     	    }
//   	}
// })
