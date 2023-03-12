function showPosition(){
    var docElm = document.documentElement,
        pos = ( document.body.scrollTop || docElm.scrollTop || docElm.scrollTop) / ( docElm.scrollHeight - docElm.clientHeight ) * 100;
    console.log(Math.round(pos) + '%')
};
