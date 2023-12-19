//  拓展的js

// 禁止右键和F12
function forbidden_control() {
    $.extend({
        message: function (a) {
            var b = {
                title: "提示",
                message: "操作成功",
                time: "3000",
                type: "success",
                showClose: !0,
                autoClose: !0,
                onClose: function () {
                }
            };
            "string" == typeof a && (b.message = a), "object" == typeof a && (b = $.extend({}, b, a));
            var c, d, e, f = b.showClose ? '<div class="c-message--close">×</div>' : "",
                g = "" !== b.title ? '<h2 class="c-message__title">' + b.title + "</h2>" : "",
                h = '<div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--' + b.type + '"></i><div class="el-notification__group">' + g + '<div class="el-notification__content">' + b.message + "</div>" + f + "</div></div>",
                i = $("body"),
                j = $(h);
            d = function () {
                j.addClass("slideOutRight"), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e()
                })
            }, e = function () {
                j.remove(), b.onClose(b), clearTimeout(c)
            }, $(".c-message").remove(), i.append(j), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                j.removeClass("messageFadeInDown")
            }), i.on("click", ".c-message--close", function (a) {
                d()
            }), b.autoClose && (c = setTimeout(function () {
                d()
            }, b.time))
        }
    }),
        document.onkeydown = function (e) {
            if (123 == e.keyCode || e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode) || (e.ctrlKey && 85 === e.keyCode)) return $.message({
                message: "采用本站js及css请注明来源，禁止商业使用！",
                title: "你真坏，不能打开控制台喔!",
                type: "error",
                autoHide: !1,
                time: "3000"
            }), event.keyCode = 0, event.returnValue = !1, !1
        }, document.oncontextmenu = function () {
        return $.message({
            message: "采用本站js及css请注明来源，禁止商业使用！",
            title: "不能右键/长按喔！",
            type: "error",
            autoHide: !1,
            time: "3000"
        }), !1
    }
}

forbidden_control()


// 动态小人
function initSakanaWidget() {
    if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {

        const ikun = SakanaWidget.getCharacter('chisato');
        ikun.image = './img/kun.png';
        SakanaWidget.registerCharacter('ikun', ikun,);

        new SakanaWidget({
            // character: 'ikun' | 'chisato' | 'takina', // 角色
            controls: true, // 是否显示控制台
            // size : 400, // 组件大小
            // autoFit: true, //自动适应容器大小
        }).setState().mount('#sakana-widget');
    }
}

// 跳转打开fuck you
((function () {
    var callbacks = [],
        timeLimit = 50,
        open = false;
    setInterval(loop, 1);
    return {
        addListener: function (fn) {
            callbacks.push(fn);
        },
        cancleListenr: function (fn) {
            callbacks = callbacks.filter(function (v) {
                return v !== fn;
            });
        }
    }

    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function (fn) {
                    fn.call(null);
                });
            }
            open = true;
            window.stop();
            document.body.innerHTML = `
                        <style>
                            * {
                                /* 清除预设margin和padding */
                                margin: 0;
                                padding: 0;
                                /* 把borders和padding全都包含在定义的宽高里面 */
                                box-sizing: border-box;
                                /* 设置字体（cursive为备选字体） */
                                font-family: "MV Boli", cursive;
                            }
                            body {
                                background: #111;
                            }
                            h2 {
                                /* flex布局 */
                                display: flex;
                                /* 初始文字透明 */
                                color: transparent;
                                /* 文字水平垂直居中显示 */
                                justify-content: center;
                                align-items: center;
                                /* h2高度 */
                                height: 95vh;
                                /* 字号 */
                                font-size: 15vw;
                            }
                            h2 span:nth-child(6) {
                                /* 单词间隙 */
                                margin-left: 5vw;
                            }
                            h2 span {
                                animation: LetterColor 3s linear infinite;
                                /* 计算每个字的动画起始时间 */
                                animation-delay: calc(0.1s * var(--o));
                            }
                            @keyframes LetterColor {
                                0% {
                                    color: #fff;
                                    /* 利用模糊距离不同的阴影实现霓虹灯光晕效果 */
                                    text-shadow: 
                                    0 0 10px #00b3ff,
                                    0 0 20px #00b3ff,
                                    0 0 40px #00b3ff,
                                    0 0 80px #00b3ff,
                                    0 0 120px #00b3ff,
                                    0 0 200px #00b3ff,
                                    0 0 300px #00b3ff,
                                    0 0 400px #00b3ff;
                                    /* 设置高斯模糊与色调，实现模糊效果和颜色变换 */
                                    filter: blur(2px) hue-rotate(0deg);
                                }
                                30%,
                                70% {
                                    color: #fff;
                                    /* 减少光晕大小 */
                                    text-shadow: 
                                    0 0 10px #00b3ff,
                                    0 0 20px #00b3ff,
                                    0 0 40px #00b3ff,
                                    0 0 80px #00b3ff,
                                    0 0 120px #00b3ff,
                                    0 0 200px #00b3ff;
                                    /* 色调变换360度 */
                                    filter: blur(2px) hue-rotate(360deg);
                                }
                                100% {
                                    /* 动画结束字变透明 */
                                    color: transparent;
                                    /* 动画结束消除阴影 */
                                    text-shadow: none;
                                    /* 动画结束色调重置 */
                                    filter: blur(2px) hue-rotate(0deg);
                                }
                            }
                            </style>
                        <body>
                            <h2>
                                <!-- 利用var()给字母排序，以实现依次闪烁效果 -->
                                <span style="--o:1">f</span>
                                <span style="--o:2">u</span>
                                <span style="--o:3">c</span>
                                <span style="--o:4">k</span>
                                <span style="--o:5"> </span>
                                <span style="--o:6">y</span>
                                <span style="--o:7">o</span>
                                <span style="--o:8">u</span>
                                <span style="--o:9"></span>
                            </h2>
                        </body>
            `;

            setTimeout(() => {
                window.location.href = 'https://www.mps.gov.cn/'
            }, 10000)

        } else {
            open = false;
        }
    }
})()).addListener(function () {
    window.location.reload();
});
