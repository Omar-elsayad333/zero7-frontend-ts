<template>
  <footer class="w-fit px-4 m-auto flex flex-col justify-center gap-[25px] items-center py-7">
    <img src="../../../assets/images/logo_gold.png" alt="Zero7" width="95" />
    <nav>
      <ul class="flex gap-[35px] items-center justify-center flex-wrap capitalize">
        <li v-for="(link, index) in NavLinks" :key="index">
          <RouterLink :to="link.to">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="w-full border border-gray-500" />
    <div class="flex gap-[25px] items-center">
      <img src="../../../assets/icons/Behance.svg" alt="Behance" />
      <img src="../../../assets/icons/Facebook.svg" alt="Facebook" />
      <img src="../../../assets/icons/Twitter.svg" alt="Twitter" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { NavLinks } from '../NavLinks'
</script>
