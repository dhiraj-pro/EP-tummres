<template>
    <div>
        <div class="StoreViewCompoment">
        <b-container>
            <b-row>
                <b-col md="6"><b-img alt="promoter" :src="floor_image"/></b-col>
                <b-col md="6"><b-img alt="promoter" :src="Promoter_image"/></b-col>


            </b-row>
        </b-container>
        </div>
    </div>
</template>
<script>
import Promoter_image from "../assets/images/promotion_image.jpg";
import floor_image from "../assets/images/promotion_image1.jpg";

export default {
    name: "StoreViewCompoment",
    props: {
        mas:String,
    },
    data(){
        return{
            Promoter_image,
            floor_image,
        };
    },
}
</script>