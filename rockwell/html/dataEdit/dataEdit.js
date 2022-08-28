apiready = function () {
    new Vue({
        el: "#app",
        data: function () {
            return {}
        },
        created: function () {},
        methods: {
            openPage: function () {
                api.openWin({
                    name: 'measureDataList',
                    url: $Router.measureDataList,
                    pageParam: {},
                    bounces: false,
                    reload: true,
                    allowEdit: true,
                    slidBackEnabled: true, // 禁止主页以及登录页右滑返回至登录页
                });
            }
        }

    })
}