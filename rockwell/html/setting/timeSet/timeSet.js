apiready = function () {
    var headerH = $api.fixStatusBar($api.dom('header'));
    new Vue({
        el: "#app",
        data: function () {
            return {
                time: "09:30",
                date: "2022-08-03"
            }
        },
        created: function () {},
        methods: {
            timeClick: function () {
                console.log(this.date)
                console.log(this.time)
            },
        }

    })
}