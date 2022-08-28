apiready = function () {
    var headerH = $api.fixStatusBar($api.dom('header'));
    new Vue({
        el: "#app",
        data: function () {
            return {
                list: [],
                deleteShow: false,
                checkedList: [],
                checkAll: false, // 是否已全选
                test:false
            }
        },
        created: function () {
            this.initList()
        },
        watch: {
            checkedList: function (val) {
                if (val && val.length == this.list.length) {
                    this.checkAll = true
                } else {
                    this.checkAll = false
                }
            },
        },
        computed:{
            newVal:function(){
                var list = this.list
                var checkedList = this.checkedList
                var newArr = list.concat(checkedList)
                return newArr
            },

        },
        methods: {
            change:function(val){
                // 
                this.newVal
            },
            initList: function () {
                // 为list 赋值
                var arr = []
                for (var i = 0; i < 20; i++) {
                    arr.push({
                        order: i + 1,
                        HRC: 'HRC' + i,
                        value: 2 * i
                    })
                }
                this.list = arr
            },
            showDelete: function () {
                // 显示删除的复选框
                this.deleteShow = true
            },
            hideDelete: function () {
                // 隐藏删除的复选框
                this.deleteShow = false
            },
            deletConfirm: function () {
                // 确定删除
                var checkedList = this.checkedList // 选中的数据order
                if (!checkedList || !checkedList.length) return
                var list = this.list

                // 被删除的数据详情列表 
                var deleteList = list.filter(item=>checkedList.includes(item.order))
                console.log('deleteList')
                console.log(JSON.stringify(deleteList))

                // 剩余的数据
                var afterDelete = list.filter(item=>!checkedList.includes(item.order))
                console.log('afterDelete')
                console.log(JSON.stringify(afterDelete))

                // for(var i=0;i<list)

            },
            deletCancel: function () {
                // 取消刪除
                this.checkAll = false
                this.checkedList = []
                this.hideDelete()
            },
            switchCheckAll: function () {
                // 全选 || 取消全选
                console.log("121111")
                var checkAll = this.checkAll
                var list = this.list
                var checkedList = []
                if (!checkAll) {
                    //全选
                    for (var i = 0; i < list.length; i++) {
                        checkedList.push(list[i].order)
                    }
                    this.checkedList = checkedList
                } else {
                    // 取消全选
                    this.checkedList = []
                }
                this.checkAll = !this.checkAll
            },
        }

    })
}