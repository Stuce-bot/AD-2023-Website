// TODO MAKE IT MOBILE ONLY !!!!!!!!!!!!
const nain = document.getElementById("nain");
const polygon = document.getElementById("polygon")
const main = document.querySelector("main");



var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var string;
var parterre = false;
var maxScroll = -600;
addEventListener("scroll", (event) => {});
onscroll = (event) => {
    if (!parterre) {
        maxScroll = Math.max(maxScroll,(document.documentElement.scrollTop || document.body.scrollTop) - 600);
        string = "0px "+maxScroll+"px";
        nain.style.objectPosition = string;
    }

    if (!parterre && window.innerHeight + window.scrollY > height - 50 ) { 
        parterre = true;
        console.log("NEED TO PUT THE NAIN PARTERRE");
        nain.style.opacity="0"
        const div = document.createElement("img");
        div.src = "images/nain2.png";
        div.style.position = "absolute";
        div.style.bottom = "0px"
        div.style.left = "0"
        div.style.width= "200px"
        div.style.height= "240px"
        document.body.appendChild(div)
    }  
 
};
