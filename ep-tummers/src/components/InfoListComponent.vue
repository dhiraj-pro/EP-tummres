<template>
<div class="list-icon-menu">
    <b-container>
    <ul>
        <li> <span><b-img alt="green-icon" :src="GreenIcon"/></span> Voor <span>23,59 urr</span> besteld, morgen <span>gratis</span> bezorgd</li>
        <li><span><b-img alt="green-icon" :src="GreenIcon"/></span> Binja <span>100 jaar</span> ervaring</li>
        <li><span><b-img alt="green-icon" :src="GreenIcon"/></span> Niet goed? <span>Geld terug!</span></li>
        <li><span><b-img alt="green-icon" :src="GreenIcon"/></span> <span>7 dagen per </span>week geopend</li>

    </ul>
    </b-container>
</div>
</template>
<script>
import GreenIcon from "../assets/images/green-circle-check.png";


export default {
     name: "InfoListComponent",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      GreenIcon,
      };
    
  },
}
</script>