<template>
  <img :src="country.countryFlag" alt="country flag" style="width: 100px" />
  <h1>{{ country.name.common }}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{country.capital}}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>Area {{country.area}} km <sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            <li v-for="el in country.borders">
              <p>{{el}}</p>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import { useCountryStore } from '../stores/country';

  const country = useCountryStore()
</script>

<style scoped>  
</style>
