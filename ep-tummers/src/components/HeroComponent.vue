<template>
  <div class="product-list-banner">
    <b-container>
      <b-row>
        <b-col md="12" sm="6" lg="4"  order-lg="1" order-xs="2" order-sm="2">
          <ul class="product-list">
            <li>
              <span><b-img alt="led" :src="P1"/></span>Televisies
            </li>
            <li>
              <span><b-img alt="led" :src="P1"/></span>Telefonie
            </li>
            <li>
              <span><b-img alt="led" :src="P1"/></span>Vaatwassers
            </li>
            <li>
              <span><b-img alt="led" :src="P1"/></span>Wasmachines
            </li>
            <li>
              <span><b-img alt="led" :src="P1"/></span>Koffieztapparaten
            </li>
            <li>
              <span><b-img alt="led" :src="P1"/></span>Volledig assortiment
            </li>
          </ul>
        </b-col>
        <b-col  md="12" lg="8" order-lg="2" order-xs="1" order-sm="1">
          <div id="Hero_slider">
            <div>
              <VueSlickCarousel 
                :arrows="false" 
                :dots="true"
                :autoplay ="false"
                :speed = 1000
                >
                <div><b-img alt="Hero_image" :src="Hero_img1" /></div>
                <div><b-img alt="Hero_image" :src="Hero_img1" /></div>
                <div><b-img alt="Hero_image" :src="Hero_img1" /></div>
                <div><b-img alt="Hero_image" :src="Hero_img1" /></div>
              </VueSlickCarousel>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import P1 from "../assets/images/P1.png";
import Hero_img1 from "../assets/images/Banner_1.png";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "ProductListAndBanner",
  props: {
    msg: String,
  },
  components: { VueSlickCarousel },
  data() {
    return {
      P1,
      Hero_img1,
    };
  },
};
</script>
