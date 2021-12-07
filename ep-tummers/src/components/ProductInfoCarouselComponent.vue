<template>
  <div>
    <b-container>
      <div id="product_list_carousel">
        <VueSlickCarousel
          :arrows="true"
          :dots="true"
          :slidesToShow="3"
          :autoplay="false"
          :speed="1000"
        >
          <div class="inner_slide">
            <p class="tittle">Nu 50 euro cashback</p>
            <p class="desc">Op diverse LG Producten</p>
          </div>
          <div class="inner_slide bg_image">
            <p class="tittle">Airco en ventilatron</p>
            <p class="desc">Houd je hoofd koel!</p>
          </div>
          <div class="inner_slide">
            <p class="tittle">Voor 14:00 besteld</p>
            <p class="desc">Vandaag besteld</p>
          </div>
        </VueSlickCarousel>
      </div>
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "ProductInfoCarouselComponent",
  props: {
    msg: String,
  },
  components: { VueSlickCarousel },
};
</script>