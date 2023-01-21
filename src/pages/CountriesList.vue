<template>
  <div class="list-group">
    <div
      class="list-group-item list-group-item-action"
      v-for="el in countries"
      @click="showCountry(el)"
    >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/
${el.alpha2Code.toLowerCase()}.png`"
      />
      <p>{{ el.name.common }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCountryStore } from "../stores/country";

const countries = ref("");

async function getCountries() {
  const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
  const finalRes = await res.json();
  countries.value = finalRes;
}

getCountries();

const country = useCountryStore();

function showCountry(el) {
  country.changeName(el.name);
  country.changeCapital(el.capital[0]);
  country.changeCountryFlag(`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`)
  country.changeArea(el.area)
  country.changeBorders(el.borders)
};

</script>

<style></style>
