<template>
  <div>
    <b-container>
      <div id="toppersWeek" >
        <h5 class="tittle">Toppers van de week</h5>
        
           <VueSlickCarousel :arrows="true" :dots="true" :slidesToShow="4" :slidesToScroll="1">
          <div class="inner_slide">
            <div class="product_offers">
              <div class="heading">Tummers keuze budget OLED televisie</div>
              <div class="cashback">&euro;100,- cashback</div>
              <div class="offer">Aanbieding</div>
            </div>
            <b-img alt="Oled-Smart" :src="Oled_Smart" />
            <h6 class="tittle">
              Hisense 4K OLED Smart <br />
              TVH55U8QF
            </h6>
            <div class="rating_star">
            <b-form-rating
              v-model="value"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <span class="review">(52)</span>
            </div>
            

            <div class="check_icon">
              <span
                ><b-img alt="check_icon" :src="green_circle_white_check"/></span
              ><span>Morgen in huis</span>
            </div>
            <div class="price">
              <span>Adviesprijs</span><span>1999,-</span><span>1999,-</span>
            </div>
          </div>
          <div class="inner_slide">
            <div class="product_offers">
              <div class="heading">Tummers keuze budget OLED televisie</div>
              <!-- <div class="cashback">&euro;100,- cashback</div> -->
              <div class="offer">Aanbieding</div>
            </div>
            <b-img alt="Oled-Smart" :src="Oled_Smart" />
            <h6 class="tittle">
              Hisense 4K OLED Smart <br />
              TVH55U8QF
            </h6>
           <div class="rating_star">
            <b-form-rating
              v-model="value"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <span class="review">(52)</span>
            </div>

            <div class="check_icon">
              <span
                ><b-img alt="check_icon" :src="green_circle_white_check"/></span
              ><span>Morgen in huis</span>
            </div>
            <div class="price">
              <span>Adviesprijs</span><span>1999,-</span><span>1999,-</span>
            </div>
          </div>

          <div class="inner_slide">
            <div class="product_offers">
              <div class="heading">Tummers keuze budget OLED televisie</div>
              <!-- <div class="cashback">&euro;100,- cashback</div> -->
              <div class="offer">Aanbieding</div>
            </div>
            <b-img alt="Oled-Smart" :src="Oled_Smart" />
            <h6 class="tittle">
              Hisense 4K OLED Smart <br />
              TVH55U8QF
            </h6>
            <div class="rating_star">
            <b-form-rating
              v-model="value"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <span class="review">(52)</span>
            </div>
            
            <div class="check_icon">
              <span
                ><b-img alt="check_icon" :src="green_circle_white_check"/></span
              ><span>Morgen in huis</span>
            </div>
            <div class="price">
              <span>Adviesprijs</span><span>1999,-</span><span>1999,-</span>
            </div>
          </div>
          <div class="inner_slide">
            <div class="product_offers">
              <div class="heading">Tummers keuze budget OLED televisie</div>
              <!-- <div class="cashback">&euro;100,- cashback</div> -->
              <div class="offer">Aanbieding</div>
            </div>
            <b-img alt="Oled-Smart" :src="Oled_Smart" />
            <h6 class="tittle">
              Hisense 4K OLED Smart <br />
              TVH55U8QF
            </h6>
            <b-form-rating
              v-model="value"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <div class="check_icon">
              <span
                ><b-img alt="check_icon" :src="green_circle_white_check"/></span
              ><span>Morgen in huis</span>
            </div>
            <div class="price">
              <span>Adviesprijs</span><span class="cut_price">1999,-</span
              ><span>1999,-</span>
            </div>
          </div>
           <div class="inner_slide">
            <div class="product_offers">
              <div class="heading">Tummers keuze budget OLED televisie</div>
              <!-- <div class="cashback">&euro;100,- cashback</div> -->
              <div class="offer">Aanbieding</div>
            </div>
            <b-img alt="Oled-Smart" :src="Oled_Smart" />
            <h6 class="tittle">
              Hisense 4K OLED Smart <br />
              TVH55U8QF
            </h6>
          <div class="rating_star">
            <b-form-rating
              v-model="value"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <span class="review">(52)</span>
            </div>
            <div class="check_icon">
              <span
                ><b-img alt="check_icon" :src="green_circle_white_check"/></span
              ><span>Morgen in huis</span>
            </div>
            <div class="price">
              <span>Adviesprijs</span><span class="cut_price">1999,-</span
              ><span>1999,-</span>
            </div>
          </div>
           <div class="inner_slide">
            <div class="product_offers">
              <div class="heading">Tummers keuze budget OLED televisie</div>
              <!-- <div class="cashback">&euro;100,- cashback</div> -->
              <div class="offer">Aanbieding</div>
            </div>
            <b-img alt="Oled-Smart" :src="Oled_Smart" />
            <h6 class="tittle">
              Hisense 4K OLED Smart <br />
              TVH55U8QF
            </h6>
           <div class="rating_star">
            <b-form-rating
              v-model="value"
              variant="warning"
              class="mb-2"
            ></b-form-rating>
            <span class="review">(52)</span>
            </div>
            <div class="check_icon">
              <span
                ><b-img alt="check_icon" :src="green_circle_white_check"/></span
              ><span>Morgen in huis</span>
            </div>
            <div class="price">
              <span>Adviesprijs</span><span class="cut_price">1999,-</span
              ><span>1999,-</span>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </b-container>
  </div>
</template>

<script>
import Oled_Smart from "../assets/images/oled-smart.jpg";
import green_circle_white_check from "../assets/images/green_circle_white_check.jpg";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "ToppersOfWeekComponent",
  props: {
    msg: String,
  },
  components: { VueSlickCarousel },
  data() {
    return {
      Oled_Smart,
      green_circle_white_check,
      value: 4,
    };
  },
};
</script>
