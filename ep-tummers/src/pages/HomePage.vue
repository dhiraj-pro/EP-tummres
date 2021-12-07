<template>
  <div class="home">
    <HeaderComponent />
    <HeaderMegaMenuComponent />
    <InfoListComponent/>
    <HeroComponent />
    <ViewVacancies />
    <ToppersOfWeekComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import HeaderMegaMenuComponent from '../components/HeaderMegaMenuComponent.vue';
import InfoListComponent from "../components/InfoListComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import ViewVacancies from "../components/ViewVacancies.vue";
import ToppersOfWeekComponent from "../components/ToppersOfWeekComponent.vue";




export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    HeaderMegaMenuComponent,
    InfoListComponent,
    HeroComponent,
    ViewVacancies,
    ToppersOfWeekComponent,
  }
}
</script>
