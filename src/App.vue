<script setup>
import PageHeader from './components/PageHeader.vue'
import ListParent from './components/ListParent.vue'
import CurrItemBox from './components/CurrItemBox.vue'
import ActionList from './components/ActionList.vue'
import NewItemHeader from './components/NewItemHeader.vue'
import NewItemForm from './components/NewItemForm.vue'

/*
APP LAYOUT

App (root)
|
|--PageHeader
|
|--ListParent
|  |--ListItem
|
|--CurrItemHeader
|
|--ActionList
|--| MarkDone
|--| UpdateDescription
|--| DelteItem
|
|--NewItemHeader
|--NewItemForm?
*/
</script>

<template>
  <PageHeader />
  <ListParent />
  <CurrItemBox />
  <ActionList />
  <NewItemHeader />
  <NewItemForm />
</template>