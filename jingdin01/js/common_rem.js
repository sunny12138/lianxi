   (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                //如果设计稿为720px/  如果是750.改为750px
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        //添加转屏或resize事件!
        win.addEventListener(resizeEvt, recalc, false);
        //页面加载完后也执行函数
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);