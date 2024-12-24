<template>
  <div class="calculator max-w-xs mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
    <input
      type="text"
      v-model="display"
      disabled
      class="w-full h-12 text-right mb-4 p-2 border border-gray-300 rounded"
    />
    <div class="grid grid-cols-4 gap-2">
      <button @click="clear" class="btn bg-red-500 text-white">C</button>
      <button @click="append('/')" class="btn">/</button>
      <button @click="append('*')" class="btn">*</button>
      <button @click="append('-')" class="btn">-</button>
      <button @click="append('7')" class="btn">7</button>
      <button @click="append('8')" class="btn">8</button>
      <button @click="append('9')" class="btn">9</button>
      <button @click="append('+')" class="btn row-span-2">+</button>
      <button @click="append('4')" class="btn">4</button>
      <button @click="append('5')" class="btn">5</button>
      <button @click="append('6')" class="btn">6</button>
      <button @click="append('1')" class="btn">1</button>
      <button @click="append('2')" class="btn">2</button>
      <button @click="append('3')" class="btn">3</button>
      <button @click="append('0')" class="btn col-span-2">0</button>
      <button @click="append('.')" class="btn">.</button>
      <button @click="calculate" class="btn bg-green-500 text-white">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: ''
    };
  },
  methods: {
    append(char) {
      this.display += char;
    },
    clear() {
      this.display = '';
    },
    calculate() {
      try {
        this.display = eval(this.display).toString();
      } catch (e) {
        this.display = 'Error';
      }
    }
  }
};
</script>

<style scoped>
.btn {
  @apply h-12 bg-gray-200 text-gray-800 font-bold rounded;
  @apply flex items-center justify-center;
  @apply transition duration-200 ease-in-out;
}
.btn:hover {
  @apply bg-gray-300;
}
</style>