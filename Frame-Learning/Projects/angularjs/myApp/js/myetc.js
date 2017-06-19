/* 小测试  */
var t = document.title;
var title = {
    focus: t,
    exit: 'TAT 不要离开我',
}

window.onblur = () => {
    document.title = title.exit;
}

window.onfocus = () => {
    document.title = title.focus;
}