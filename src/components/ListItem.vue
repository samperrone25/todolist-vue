<script setup>
import { items, currIndex } from '../state';

const props = defineProps(['item']);

let string = props.item.done === true ? "Completed" : "TO DO";

let active = (props.item.title === items.value[currIndex.num].title);

function onClick(e) {
    currIndex.num = items.value.indexOf(props.item);
    console.log(currIndex.num);
}

</script>

<template>
    <div v-if="active" className="ListItem" @click="e => onClick(e)">
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <div>{{ string }}</div>
    </div>
    <div v-else className="ActiveListItem" @click="e => onClick(e)">
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <div>{{ string }}</div>
    </div>
</template>

<style scoped>
.ListItem {
  width: 100px;
  height: 75px;
  padding: 10px;
  margin: 20px;
  border: 2px solid black;
}

.ActiveListItem {
  width: 100px;
  height: 75px;
  padding: 10px;
  margin: 20px;
  border: 2px solid green;
}
</style>