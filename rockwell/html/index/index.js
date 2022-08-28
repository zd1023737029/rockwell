apiready = function () {
    var headerH = $api.fixStatusBar($api.dom('header'));
    var footerH = $api.fixTabBar($api.dom('footer'));
    new Vue({
        el: "#app",
        data: function () {
            return {
                pageActive: 0, // 默认激活的页面
                header: 0,
                footer: 0,
                pageList: [{
                        page: 'measure',
                        name: '测量',
                        value: 0
                    },
                    {
                        page: 'dataEdit',
                        name: '数据编辑',
                        value: 1
                    },
                    {
                        page: 'setting',
                        name: '设置',
                        value: 2
                    },
                    {
                        page: 'factorySetting',
                        name: '工厂设置',
                        value: 3
                    },
                ]
            }
        },
        mounted: function () {
            var header = $api.offset($api.byId('header')).h
            var footer = $api.offset($api.byId('footer')).h
            this.header = header
            this.footer = footer
            this.pageInit()
        },
        watch: {},
        computed: {},
        methods: {
            pageInit: function () {
                this.openFrame(this.pageList[0])

            },
            openFrame: function (params) {
                var _this = this
                var pageList = _this.pageList
                params = params || pageList[0]
                for (var i = 0; i < pageList.length; i++) {
                    api.setFrameAttr({
                        name: pageList[i].page || '',
                        bounces: true,
                        hidden: true
                    });
                }
                api.openFrame({
                    name: params.page,
                    url: $Router[params.page],
                    bounces: false, // （可选项）页面是否弹动
                    allowEdit: true,
                    reload: false,
                    rect: { // 推荐使用Margin布局，用于适配屏幕的动态变化
                        marginTop: _this.header || '', // main页面距离win顶部的高度
                        marginBottom: _this.footer || '',
                        w: 'auto' // main页面的宽度 自适应屏幕宽度
                    },
                    pageParam: null
                });



            },
            switchPageActive: function (params) {
                var _this = this
                if (this.pageActive == params.value) {
                    return
                }
                this.pageActive = params.value || 0
                this.$nextTick(function () {
                    _this.openFrame(params)
                })
            },
        }
    })
}