const title=document.querySelector('.title');
const img=document.querySelector('.image');
const desc=document.querySelector('.desc');
let allpost='';
function getPost(){
	let get=localStorage.getItem('post');
	// JSON.parse() -> Object ruu huvruulne
	let jsonPost=JSON.parse(get)
	console.log(jsonPost);
	// .slice(0.5);
	jsonPost.map(
		post=>{
			console.log(post.title);
			allpost+=`
				<h2 class="title">${post.title}</h2>
				<img src="${post.img}" class="image">
				<p class="desc">${post.desc}</p>
			`
		}
	);
	document.querySelector('.display').innerHTML=allpost;
}
getPost();