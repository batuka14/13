const title=document.querySelector('.title');
const img=document.querySelector('.image');
const desc=document.querySelector('.desc');
let i=0;
const postBtn=document.querySelector('.post');
function savePost(){
	if(title.value=="" || img.value=="" || desc.value==""){
		alert("Can't be empty");
		i=i
	}else{
		i++;
		let data={
			id:i,
			title:title.value,
			img:img.value,
			desc:desc.value,
		}
		let sav=JSON.parse(localStorage.getItem("post")) || [];
		sav.push(data);
		localStorage.setItem("post", JSON.stringify(sav));
		function removeLastPost(){
			sav.pop(data);
		}
	}
	// JSON.stringify()-> string/text ruu hurvuuleh
}
postBtn.addEventListener('click',()=>{
	savePost();
	// window.open("index.html", "_blank");
});