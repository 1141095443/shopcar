window.addEventListener('load', function () {
    // 标题
    var shoptitle = {
        props: ["uname"],
        template: '#shoptitle'

    }
    // 内容
    var shopcontent = {
        template: '#shopcontent',
        props: ['books'],
        methods: {
            add(index) {
                this.books[index].num++
            },
            jian(index) {
                this.books[index].num--
            },
            // 删除方法
            removebook(index) {
                this.books.splice(index, 1)
            }
        },
        // 过滤器
        filters: {
            showPrice(price) {
                return '￥' + price.toFixed(2)
            }
        },
    }
    // 总计
    var shoptotal = {
        template: '#shoptotal',
        props: ['sumprice']

    }
    // 总组件
    Vue.component('shopcar', {
        template: '#shopcar',

        // 数据
        data() {
            return {
                uname: 'LLY',
                books: [{
                    id: 1, uname: '算法导论', date: 2006, price: 85, num: 1,
                }, {
                    id: 2, uname: 'UNIX编程艺术', date: 2006, price: 59, num: 1,
                }, {
                    id: 3, uname: '编程珠玑', date: 2006, price: 39, num: 1,
                }, {
                    id: 4, uname: '代码大全', date: 2006, price: 128, num: 1,
                }],
            }
        },
        // 计算总价格
        computed: {
            sumprice() {
                var sumPrice = this.books.reduce((previousValue, value) => {
                    return previousValue + value.price * value.num;
                }, 0)
                return sumPrice;
            }
        },

        components: {
            'shop-title': shoptitle,
            'shop-content': shopcontent,
            'shop-total': shoptotal
        }
    })
    new Vue({
        el: '.app',
        data: {
        }
    })
})