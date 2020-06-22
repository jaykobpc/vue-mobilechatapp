<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__iconview">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
      </div>
      <div class="navbar__titleview">
        <h3 class="navbar__titleview--text">{{ nav_text }}</h3>
      </div>
      <div class="navbar__iconview">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../EventBus/EventBus";

export default {
  name: "Navbar",
  mounted() {
    EventBus.$on("selected_tab", this.render_text);
    EventBus.$on("switch_theme", this.render_theme);
  },
  beforeDestroy() {
    EventBus.$off("selected_tab", this.render_text);
    EventBus.$off("switch_theme", this.render_theme);
  },
  methods: {
    render_text(value) {
      var self = this;
      switch (value) {
        case "HomeView":
          self.nav_text = "Messages";
          break;
        case "ContactsView":
          self.nav_text = "Contacts";
          break;
        case "SettingsView":
          self.nav_text = "Settings";
          break;
      }
    },
    render_theme(value) {
      var navbar = document.querySelector(".navbar");
      navbar.classList.remove("theme-red");
      navbar.classList.remove("theme-purple");
      navbar.classList.remove("theme-blue-touch");
      navbar.classList.remove("theme-pink");
      navbar.classList.remove("theme-orange");
      navbar.classList.add(`${value}`);
    },
  },
  data() {
    return {
      nav_text: "Messages"
    };
  }
};
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba($color-grey-600, 0.4);
  background-color: #4b64f2;
  z-index: 999;
  padding: 0.7rem 0.3rem;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__iconview {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    text-align: center;
    fill: $color-grey-200;
    background-color: inherit;
    padding: 0.6rem;
    transition: all 0.3s;
    cursor: pointer;
  }

  &__titleview {
    text-shadow: 2px;

    &--text {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      color: $color-grey-200;
    }
  }
}
</style>