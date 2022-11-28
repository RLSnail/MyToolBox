<template>
    <div>
        请输入矩阵，各元素之间用空格分隔：<br>
        <textarea cols="30" rows="10" placeholder="这里输入矩阵" ref="mat"></textarea>
        <br>
        <p>
            代码：
            <ol>
                <li><b>ch r1 r2</b>:  交换r1和r2两行</li>
                <li><b>mul m k</b>:   把第m行乘以k</li>
                <li><b>add m k n</b>: 把第m行的k倍加到第n行上</li>
            </ol>
        </p>
        <br>
        请输入矩阵初等行变换代码：<br>
        <textarea cols="30" rows="10" placeholder="这里输入初等变换" ref="code"></textarea>
        <br>
        <button @click="this.transfrom">开始变换</button>
        <hr>
        变换结果：<br>
        <p ref="res"></p>
    </div>
</template>
<script>
export default {
    name: "MatrixPrimaryTransform",
    data() {
        return {
            array_result: ""
        }
    },
    methods: {
        transfrom() {
            var array = []
            var code_text = this.$refs.code.value
            var codes = []
            var text = this.$refs.mat.value
            //解析矩阵
            var rows = text.split('\n')
            rows.forEach((row) => {
                var row_arr = []
                var elements = row.split(' ')
                elements.forEach((ele) => {
                    row_arr.push(eval(ele))
                })
                array.push(row_arr)
            })
            //解析指令
            rows = code_text.split('\n')
            rows.forEach((row) => {
                var row_arr = []
                var elements = row.split(' ')
                elements.forEach((ele) => {
                    row_arr.push(ele)
                })
                codes.push(row_arr)
            })

            //进行变换
            for(var i = 0; i < codes.length; i++) {
                var cmd = codes[i][0]
                if(cmd === 'ch') {
                    //交换两行
                    var row1 = codes[i][1] - 1
                    var row2 = codes[i][2] - 1
                    var tmp = array[row1]
                    array[row1] = array[row2]
                    array[row2] = tmp
                } else if(cmd === 'mul') {
                    //把第m行乘以k
                    var row = codes[i][1] - 1
                    var k = codes[i][2]
                    for(var j = 0; j < array[row].length; j++) {
                        array[row][j] *= k
                    }
                } else if(cmd === 'add') {
                    //把第m行的k倍加到第n行上
                    var m = codes[i][1] - 1
                    k = codes[i][2]
                    var n = codes[i][3] - 1
                    row = array[m]

                    for(j = 0; j < array[m].length; j++) {
                        array[n][j] += row[j] * k
                    }
                }
            }

            //完成变换，输出
            this.array_result = ""
            for(i = 0; i < array.length; i++) {
                for (j = 0; j < array[i].length; j++) {
                    this.array_result += array[i][j] + " "
                }
                this.array_result += "<br>"
            }
            this.$refs.res.innerHTML = this.array_result
        }
    }
}
</script>
<style>

</style>