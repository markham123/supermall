<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'TabBar'
    }
</script>

<style  scoped>
    #tab-bar{
        height: 49px;
        width: 100%;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
    }
</style>