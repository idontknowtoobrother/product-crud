<template>
  <div>
    <b-img src="../assets/logoBuu.png" width="80%" class="pt-2 pb-2"></b-img>
    <b-nav vertical>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item @click="showFormInput = !showFormInput"
        >Form Input
        <b-icon
          :icon="showFormInput ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput1"
        >Form Input 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput2"
        >Form Input 2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput3"
        >Form Input 3</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput4"
        >Form Input 4</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput5"
        >Form Input 5</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput6"
        >Form Input 6</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput7"
        >Form Input 7</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput8"
        >Form Input 8</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput9"
        >Form Input 9</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput10"
        >Form Input 10</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput11"
        >Form Input 11</b-nav-item
      >

      <b-nav-item @click="showForm = !showForm"
        >Form
        <b-icon
          :icon="showForm ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showForm" to="./form1"
        >Form 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form2"
        >Form 2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form3"
        >Form 3</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form4"
        >Form 4</b-nav-item
      >

      <b-nav-item @click="showCrudExample = !showCrudExample"
        >CRUD Example
        <b-icon
          :icon="showCrudExample ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showCrudExample" to="./datatable1"
        >Data table 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showCrudExample" to="./productform1"
        >Product Form 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showCrudExample" to="./productTable"
        >Product Table</b-nav-item
      >
    </b-nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showFormInput: false,
      showForm: false,
      showCrudExample: false
    }
  }
}
</script>
<style>
.app-menu {
  background-color: gray;
  font-size: 10pt;
}
.nav-link {
  color: white;
  text-align: left;
}
.nav-link:hover {
  color: gold;
}
.sub-menu {
  padding-left: 10pt;
}
</style>
