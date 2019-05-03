<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Words</router-link> |
      <router-link :to="{name: 'new'}">New</router-link> |
      <router-link to="/about">Test</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
</style>
