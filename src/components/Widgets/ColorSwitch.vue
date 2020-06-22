<template>
  <div v-if="modal_open" class="colorswitch">
    <div class="colorswitch__container">
      <div class="colorswitch__close">
        <p @click="close_modal" class="colorswitch__close--btn">Close</p>
      </div>
      <div class="colorswitch__tabselect">
        <div @click="change_theme('theme-pink')" class="colorswitch__tabview theme-pink"></div>
        <div @click="change_theme('theme-purple')" class="colorswitch__tabview theme-purple"></div>
        <div @click="change_theme('theme-blue-touch')" class="colorswitch__tabview theme-blue-touch"></div>
        <div @click="change_theme('theme-red')" class="colorswitch__tabview theme-red"></div>
        <div @click="change_theme('theme-orange')" class="colorswitch__tabview theme-orange"></div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../EventBus/EventBus';

export default {
  name: "ColorSwitch",
  data() {
    return {
      selected_tab: "",
      modal_open: false,
    };
  },
  mounted() {
    EventBus.$on('open_switch_box', this.open_modal)
  },
  beforeDestroy() {
    EventBus.$off('open_switch_box', this.open_modal)
  },
  methods: {
    change_theme(value) {
      if (!value) return "";

      EventBus.$emit('switch_theme', value);

      var metaThemeColor = document.querySelector("meta[name=theme-color]");

      switch (value) {
        case "theme-pink":
          metaThemeColor.setAttribute("content", "#E91E63");
          break;
        case "theme-purple":
          metaThemeColor.setAttribute("content", "#9C27B0");
          break;
        case "theme-blue-touch":
          metaThemeColor.setAttribute("content", "#4b64f2");
          break;
        case "theme-red":
          metaThemeColor.setAttribute("content", "#f44336");
          break;
        case "theme-orange":
          metaThemeColor.setAttribute("content", "#FF9800");
          break;
        default:
          metaThemeColor.setAttribute("content", "#4b64f2");
      }
    },
    close_modal() {
      this.modal_open = false;
    },
    open_modal(value) {
      this.modal_open = value;
    }
  }
};
</script>

<style lang="scss">
.colorswitch {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    rgba($color-dark, 0.4),
    rgba($color-dark, 0.4)
  );
  height: 100%;
  width: 100%;
  z-index: 999;

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    background-color: $color-white;
    border-radius: 0.6rem;
    overflow: hidden;
  }

  &__close {
    display: flex;
    justify-content: flex-end;
    padding: 0.4rem 0.8rem;

    &--btn {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 600;
      color: $color-blue-500;
      text-transform: uppercase;
      padding: 0.3rem;
    }
  }

  &__tabselect {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__tabview {
    width: 4.5rem;
    height: 4.5rem;
    background-color: inherit;
    border-radius: 50%;
    margin: 0.3rem;
  }
}

.theme-pink {
  background-color: $color-pink-500;
}

.theme-purple {
  background-color: $color-purple-500;
}

.theme-blue-touch {
  background-color: $theme-color;
}

.theme-red {
  background-color: $color-red-500;
}

.theme-orange {
  background-color: $color-orange-500;
}
</style>