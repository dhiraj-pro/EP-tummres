<template>
  <div class="haeder-box bg-dark">
    <b-container>
      <b-navbar
        class="custom-navbar"
        toggleable="lg"
        type="dark"
        variant="dark"
      >
        <b-navbar-brand href="/"><b-img alt="" :src="logo"/></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse class="custom-nav-collapse" id="nav-collapse" is-nav>
          <b-navbar-nav class="search-box">
            <b-nav-form class="search-form">
              <b-form-input
                size=""
                class="search-control"
                placeholder="Zoeken"
              ></b-form-input>
              <b-button size="" class="btn search-btn" type="submit">
                <font-awesome-icon icon="search" style="color: #515150" />
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
          <div class="right-nav-box">
            <ul>
              <li>
                <b-link href="#">
                  <font-awesome-icon icon="user" />
                </b-link>
              </li>
              <li>
                <b-link href="#">
                  <font-awesome-icon icon="heart" />
                </b-link>
              </li>
              <li>
                <b-link href="#">
                  <font-awesome-icon icon="shopping-cart" />
                </b-link>
              </li>
            </ul>
          </div>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>
<script>
import logo from "../assets/images/logo.png";
export default {
  name: "HeaderComponent",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      logo,
    };
  },
};
</script>
