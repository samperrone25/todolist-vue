<script setup>
import MarkAsDone from './MarkAsDone.vue'
import UpdateDescription from './UpdateDescription.vue'
import DeleteItem from './DeleteItem.vue'
</script>

<template>
    <div className="ActionList">
        <MarkAsDone />
        <UpdateDescription />
        <DeleteItem />
    </div>
</template>

<style scoped>
.ActionList {
  margin: 10px;
}
</style>