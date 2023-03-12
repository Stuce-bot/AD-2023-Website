// TODO MAKE IT MOBILE ONLY !!!!!!!!!!!!
const nain = document.getElementById("nain");
const nain2 = document.getElementById("nain2");
const polygon = document.getElementById("polygon")
const main = document.querySelector("main");



var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var scrollPercentage=0;

var string;
var parterre = false;
var maxScroll = -500;
addEventListener("scroll", (event) => {});
onscroll = (event) => {
    if (window.innerWidth > 991){
        var docElm = document.documentElement,
            pos = ( document.body.scrollTop || docElm.scrollTop || docElm.scrollTop) / ( docElm.scrollHeight - docElm.clientHeight );



        if (!parterre) {
            string = (-500 + (window.innerHeight-400)*pos)+"px";
            console.log(string+" <- "+pos);
            nain.style.top = string;
        }

        if (!parterre && window.innerHeight + window.scrollY > height - 10 ) { 
            parterre = true;
            // console.log("NEED TO PUT THE NAIN PARTERRE");
            nain.style.opacity="0";
            nain2.style.opacity="1";
        }  
    }
};
