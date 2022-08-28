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
                    name: 'timeSet',
                    url: $Router.timeSet,
                    pageParam: {},
                    bounces: false,
                    reload: true,
                    allowEdit: true,
                    slidBackEnabled: true, // 
                });
            },
        }

    })
}