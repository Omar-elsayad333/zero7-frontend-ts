<template>
  <header class="w-full container py-3 md:py-6 flex justify-between items-center">
    <img src="../../../assets/images/logo.png" alt="Zero7" class="lg:h-[70px] h-[60px]" />
    <nav class="lg:block hidden">
      <ul class="flex gap-[35px] items-center capitalize">
        <li v-for="(link, index) in NavLinks" :key="index">
          <RouterLink :to="link.to">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="flex lg:gap-6 gap-4 items-center text-sm capitalize">
      <RouterLink to="/login" class="flex gap-1 items-end font-bold">
        <img src="../../../assets/icons/Login.svg" alt="Login" />
        <span class="lg:block hidden">login</span>
      </RouterLink>
      <RouterLink to="/cart" class="flex gap-1 items-end font-bold">
        <img src="../../../assets/icons/Cart.svg" alt="Cart" />
        <span class="lg:block hidden">cart</span>
      </RouterLink>
      <img src="../../../assets/icons/Notification.svg" alt="Notification" />
      <img src="../../../assets/icons/Menu.svg" alt="Menu" class="block lg:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { NavLinks } from '../NavLinks'
</script>
