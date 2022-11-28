<template>
    <div>
        <router-link to="/random-generator">随机数生成器</router-link>
        <router-link to="/matrix-primary-transform">矩阵初等变换</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "MainPage"
}
</script>