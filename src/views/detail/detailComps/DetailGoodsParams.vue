<template>
    <div class="goods-params">
       <div class="rules">
           <table v-for="(table,index) in paramInfo.sizes" class="info-size" :key="index">
               <tr v-for="(tr, indey) in table" :key="indey">
                 <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
                </tr>
           </table>
        </div> 
       <div class="params">
           <table>
               <tr v-for="(info, index) in paramInfo.infos" :key="index">
                  <td class="key">{{info.key}}</td>
                  <td class="value">{{info.value}}</td>
                </tr>
           </table>
       </div>
       <div class="info-img" v-if="paramInfo.image !== null">
           <img :src="paramInfo.image" alt="">
       </div>
    </div>
</template>

<script>
export default {
    name: 'DetailGoodsParams',
    props: {
        paramInfo:{
            type: Object,
            default() {
                return {};
            }
        }
    }
}
</script>

<style scoped>
.goods-params {
    width: 100%;
    padding: 8px 8px 20px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.rules table {
    width: 100%;
}
.rules table tr td, .params table tr td {
    padding: 8px 16px;
    border-bottom: 1px solid rgba(100,100,100, .1);
}
.params table {
    width: 100%;
}
.params table tr .key {
    width: 30%;
}
.params table tr .value {
    width: 70%;
    color: var(--color-high-text);
}
</style>