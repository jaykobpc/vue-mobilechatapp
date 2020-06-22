<template>
  <div class="settingsview">
    <ColorSwitch />
    <div class="settingsview__container">
      <div class="settingsview__profile">
        <div class="settingsview__profile--outter">
          <img src="@/Images/image4.jpeg" alt="User" class="settingsview__profile--image" />
        </div>
        <h3 class="settingsview__profile--textview">Tamara Webber</h3>
        <p class="settingsview__profile--smtext">hello@tamara-webber.io</p>
      </div>

      <div class="settingsview__panel">
        <div class="settingsview__card">
          <div class="settingsview__card--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M24 0H0v24h24z" fill="none" />
              <path
                d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"
              />
            </svg>
          </div>
          <div @click="open_switch_modal(true)" class="settingsview__card--textview">
            <h3 class="settingsview__card--h3">Theme</h3>
            <p class="settingsview__card--smtext">Customize your Application theme</p>
          </div>
        </div>
        <div class="settingsview__card">
          <div class="settingsview__card--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
          </div>
          <div class="settingsview__card--textview">
            <h3 class="settingsview__card--h3">Notifications</h3>
            <p class="settingsview__card--smtext">Message group &amp; call tones</p>
          </div>
        </div>
        <div class="settingsview__tabwidget">
          <h3 class="settingsview__tabwidget--title">Automatic zoom</h3>
          <div class="mt-android">
            <input id="6.1.2" type="checkbox" />
            <label for="6.1.2"></label>
          </div>
        </div>
        <div class="settingsview__tabwidget">
          <h3 class="settingsview__tabwidget--title">Image Compression</h3>
          <div class="mt-android">
            <input id="6.1.3" type="checkbox" checked />
            <label for="6.1.3"></label>
          </div>
        </div>
        <div class="settingsview__tabwidget">
          <h3 class="settingsview__tabwidget--title">Automatic Media Download</h3>
          <div class="mt-android">
            <input id="6.1.4" type="checkbox" checked />
            <label for="6.1.4"></label>
          </div>
        </div>
        <div class="settingsview__tabwidget">
          <h3 class="settingsview__tabwidget--title">Launch on start-up</h3>
          <div class="mt-android">
            <input id="6.1.5" type="checkbox" checked />
            <label for="6.1.5"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../EventBus/EventBus';
import ColorSwitch from '../Widgets/ColorSwitch';

export default {
  name: "SettingsView",
  components: {
    ColorSwitch,
  },
  data() {
    return {

    };
  },
  methods: {
    open_switch_modal(value) {
      if(!value) return '';
      EventBus.$emit('open_switch_box', value);
    }
  }
};
</script>

<style lang="scss">
.settingsview {
  margin-top: 5.6rem;

  &__container {
    overflow-y: auto;
    padding-bottom: 6rem;
  }

  &__profile {
    padding: 1rem 1.3rem;

    &--image {
      width: 150px;
      height: 150px;
      object-fit: cover;
      margin: 0 auto;
      border-radius: 50%;
      background-color: $color-grey-300;
    }

    &--outter {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      margin: 0 auto;
      background-color: $color-grey-300;
      padding: 0.5rem 0.4rem;
    }

    &--textview {
      margin-top: 2rem;
      text-align: center;
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-600;
    }

    &--smtext {
      margin-top: 0.5rem;
      text-align: center;
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 500;
      color: $color-grey-600;
    }
  }

  &__panel {
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    margin-top: 3.5rem;
  }

  &__card {
    background-color: $color-white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid $color-grey-200;

    &--iconview {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      background-color: $color-grey-300;
      text-align: center;
      fill: $color-grey-600;
      padding: 0.7rem;
    }

    &--textview {
      margin-left: 1rem;
      padding: 0.5rem;
    }

    &--h3 {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-600;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }

  &__tabwidget {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    border-bottom: 1px solid $color-grey-200;

    &--title {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-600;
    }
  }
}
</style>