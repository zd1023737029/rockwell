apiready = function () {
    new Vue({
        el: "#app",
        data: function () {
            return {}
        },
        created: function () {},
        methods: {
            openHRC: function () {
                // 打开HRC页面
                api.openWin({
                    name: 'HRC',
                    url: $Router.HRC,
                    pageParam: {},
                    bounces: false,
                    reload: true,
                    allowEdit: true,
                    slidBackEnabled: true, // 禁止主页以及登录页右滑返回至登录页
                });
            },
        }

    })
}