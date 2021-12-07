<template>
  <div class="mega-menu-box">
    <b-container class="">
      <b-row>
        <b-col>
          <div class="mega-menu-list-box text-white pt-2 pb-2">
            <span class="mega-menu-icon mr-2"> </span>
            Bekijk ons assortiment
          </div>
        </b-col>
        <b-col class="text-right ">
          <ul class="middle-rt-list pt-2 pb-2">
            <li><b-link class="text-white" href="#">EK Deals</b-link></li>
            <li><b-link class="text-white" href="#">Folder</b-link></li>
            <li><b-link class="text-white" href="#">Onze winkels</b-link></li>
            <li><b-link class="text-white" href="#">Zakelijk</b-link></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "HeaderMegaMenuComponent",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {};
  },
};
</script>
