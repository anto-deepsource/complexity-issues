<template>
  <div>
    <NuxtLink to="/product">Product</NuxtLink>
    <NuxtLink to="/product">Product</NuxtLink>
    <Nuxt-Link to="/product">Product</Nuxt-Link>
    <n-Link to="/product">Product</n-Link>

    <NuxtLink href="/product">Product</NuxtLink>
    <NuxtLink href="/product" to="/product">Product</NuxtLink>
    <nuxt-link href="/product" to="/product">Product</nuxt-link>
    <N-link href="/product" :to="`/product/${id}`">Product</N-link>
    <NuxtLink href="/product" to="/product" someOtherProp="someOtherValue">Product</NuxtLink>
    <NLink href="/product">Product</NLink>
    <n-link href="/product">Product</n-link>
    <n-link href="/product">Product</n-link>
  </div>
</template>