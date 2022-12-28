<template>
  <main>
    <Transition name="pet" appear>
      <img src="./../assets/bunny.png" alt="bunny">
    </Transition>
  </main>
</template>
  
<style lang="scss" scoped>
$pink: #FFAFCC;
$pink2: #FFC8DD;
$purple: #CDB4DB;
$blue: #A2D2FF;
$blue2: #BDE0FE;

.pet-enter-active,
.pet-leave-active {
  transition: opacity 0.3 ease;
}

.pet-enter-from,
.pet-leave-to {
  opacity: 0;
}

main {
  background-color: #adf7b6;
}
</style>