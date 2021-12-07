<template>
    <div>
        <div class="ViewVacancies">
    <ProductInfoCarouselComponent />
    <StoreViewCompoment />
    </div>


    </div>
</template>
<script>
import ProductInfoCarouselComponent from "../components/ProductInfoCarouselComponent.vue";
import StoreViewCompoment from "../components/StoreViewCompoment.vue";

export default {
    name:"ViewVacancies",
    props:{
        msg:String,
    },
    components:{
            ProductInfoCarouselComponent,
    StoreViewCompoment,

    },
    data(){
        return{}
    }
}
</script>