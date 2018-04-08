
const div=require("./div.js");
const a =document.querySelector(".a");
function fn(a){
if(a){
div(a)
}else{
alert("标签不存在");
}

}
fn(a);
