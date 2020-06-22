<template>
  <div class="bottombar">
    <div class="bottombar__container">
      <div
        @click="change_tab('HomeView')"
        :class="{ 'selected_tab_bt':selected_tab == 'HomeView' }"
        class="bottombar__tabitem"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
      </div>
      <div
        @click="change_tab('ContactsView')"
        :class="{ 'selected_tab_bt':selected_tab == 'ContactsView' }"
        class="bottombar__tabitem"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
          />
        </svg>
      </div>
      <div
        @click="change_tab('SettingsView')"
        :class="{ 'selected_tab_bt':selected_tab == 'SettingsView' }"
        class="bottombar__tabitem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path
              d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../EventBus/EventBus";

export default {
  name: "Bottombar",
  data() {
    return {
      selected_tab: "HomeView",
      selected_fill_theme: "fill-theme-blue-touch",
    };
  },
  mounted() {
    EventBus.$on("switch_theme", this.change_fill_theme);
  },
  methods: {
    change_tab(value) {
      if (!value) return "";
      EventBus.$emit("selected_tab", value);
      this.selected_tab = value;
    },
    change_fill_theme(value) {
      if (!value) return "";

      var fill_theme = document.querySelector(".selected_tab_bt");

      switch (value) {
        case "theme-pink":
          fill_theme.classList.remove("fill-theme-red");
          fill_theme.classList.remove("fill-theme-purple");
          fill_theme.classList.remove("fill-theme-blue-touch");
          fill_theme.classList.remove("fill-theme-pink");
          fill_theme.classList.remove("fill-theme-orange");
          fill_theme.classList.add("fill-theme-pink");
          break;
        case "theme-purple":
          fill_theme.classList.remove("fill-theme-red");
          fill_theme.classList.remove("fill-theme-purple");
          fill_theme.classList.remove("fill-theme-blue-touch");
          fill_theme.classList.remove("fill-theme-pink");
          fill_theme.classList.remove("fill-theme-orange");
          fill_theme.classList.add("fill-theme-purple");
          break;
        case "theme-blue-touch":
          fill_theme.classList.remove("fill-theme-red");
          fill_theme.classList.remove("fill-theme-purple");
          fill_theme.classList.remove("fill-theme-blue-touch");
          fill_theme.classList.remove("fill-theme-pink");
          fill_theme.classList.remove("fill-theme-orange");
          fill_theme.classList.add("fill-theme-blue-touch");
          break;
        case "theme-red":
          fill_theme.classList.remove("fill-theme-red");
          fill_theme.classList.remove("fill-theme-purple");
          fill_theme.classList.remove("fill-theme-blue-touch");
          fill_theme.classList.remove("fill-theme-pink");
          fill_theme.classList.remove("fill-theme-orange");
          fill_theme.classList.add("fill-theme-red");
          break;
        case "theme-orange":
          fill_theme.classList.remove("fill-theme-red");
          fill_theme.classList.remove("fill-theme-purple");
          fill_theme.classList.remove("fill-theme-blue-touch");
          fill_theme.classList.remove("fill-theme-pink");
          fill_theme.classList.remove("fill-theme-orange");
          fill_theme.classList.add("fill-theme-orange");
          break;
        default:
          fill_theme.classList.add("fill-theme-blue-touch");
      }
    }
  }
};
</script>

<style lang="scss">
.bottombar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: $color-white;
  box-shadow: 0 2px 5px rgba($color-grey-600, 0.3);
  z-index: 99;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0rem;
  }

  &__tabitem {
    margin: 0 auto;
    text-align: center;
    fill: $color-grey-600;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    padding: 0.8rem;
    background-color: $color-white;
    transform: scale(1.05);
    transition: all 0.3s;

    &:hover {
      background-color: $color-grey-200;
    }
  }
}

.selected_tab_bt {
  fill: $theme-color;
}

.fill-theme-pink {
  fill: $color-pink-500;
}

.fill-theme-purple {
  fill: $color-purple-500;
}

.fill-theme-blue-touch {
  fill: $theme-color;
}

.fill-theme-red {
  fill: $color-red-500;
}

.fill-theme-orange {
  fill: $color-orange-500;
}
</style>