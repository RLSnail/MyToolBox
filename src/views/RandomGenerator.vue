<template>
    <div>
        随机数生成范围: <input type="text" v-model.number="lbound">~<input type="text" v-model.number="ubound">
        <br>
        随机数个数：<input type="text" v-model="num">
        <br>
        <input type="checkbox" v-model="allowed_repeat">允许重复
        <br>
        <button v-on:click="generate">生成</button>
        <br>
        生成结果：<br>
        <span v-for="(num,index) in this.random_list" :key="index">
            <strong>{{index+1}}: </strong>{{num}}
            <br>
        </span>
    </div>
</template>
<script>
export default {
    name: "RandomGenerator",
    data() {
        return {
            ubound: 100,
            lbound: 0,
            num: 10,
            allowed_repeat: false,
            random_list: []
        }
    },
    methods: {
        //生成随机数的函数
        generate() {
            var res_list = []

            //判断是否存在num>ubound-lbound的情况
            if(this.num > this.ubound - this.lbound) {
                alert("要生成的随机数的个数大于区间长度！")
                return
            }

            for(var i = 0; i < this.num; i++) {
                var random = this.lbound + parseInt(Math.random()*(this.ubound-this.lbound))
                if(this.allowed_repeat){
                    //允许重复
                    res_list.push(random)
                }
                else {
                    while(res_list.indexOf(random) != -1) random = this.lbound + parseInt(Math.random()*(this.ubound-this.lbound))
                    res_list.push(random)
                }
            }
            this.random_list = res_list
        }
    }
}
</script>
<style>
input[type=text] {
    width: 30px;
}
</style>