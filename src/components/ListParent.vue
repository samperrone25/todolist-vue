<script setup>
import { items, currIndex } from '../state.js'
import ListItem from './ListItem.vue'
</script>

<template>
    <div className="ListParentFlexBox">
        <li v-for="item in items.value" :key="[item.id, item.done]">
            <ListItem :item="item"/>
        </li>

    </div>
</template>

<style scoped>
.ListParentFlexBox {
  /*border: 1px solid black;*/
  list-style-type: none; /* no bullet points */
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>