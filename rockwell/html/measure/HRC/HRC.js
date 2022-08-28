apiready = function () {
    var headerH = $api.fixStatusBar($api.dom('header'));
    var footerH = $api.fixTabBar($api.dom('footer'));
    new Vue({
        el: "#app",
        data: function () {
            return {
                t1: ""
            }
        },
        created: function () {
            var t1 = localStorage.getItem("t1Session")
            this.t1 = t1 || ''
        },
        methods: {
            T1Click: function () {
                localStorage.setItem('t1Session',this.t1 || '')
                alert(this.t1)
            },
        }

    })
}