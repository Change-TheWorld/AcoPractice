function serUrl(url) {
    var result = {};
    var temp = url.split('?')[1].split('&');
    for(var i = 0; i < temp.length; i++){
        var s = temp[i].split('=');
        result[s[0]] = s[1];
    }
}

