apiready = function () {
    new Vue({
        el: "#app",
        data: function () {
            return {}
        },
        created: function () {},
        methods: {
            fun1: function (params) {
                alert(params)
            },
        }

    })
}