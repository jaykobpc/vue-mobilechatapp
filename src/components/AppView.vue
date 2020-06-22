<template>
  <div class="appview">
    <Navbar />
    <keep-alive>
      <component :is="selected_view"></component>
    </keep-alive>
    <Bottombar />
  </div>
</template>

<script>
/** Event bus */
import EventBus from '../EventBus/EventBus';

/** Navigation */
import Navbar from './Widgets/Navbar';
import Bottombar from './Widgets/Bottombar';

/** Pages */
import ContactsView from './Pages/ContactsView';
import HomeView from './Pages/HomeView';
import SettingsView from './Pages/SettingsView';

export default {
  name: 'AppView',
  components: {
    HomeView,
    ContactsView,
    SettingsView,
    Navbar,
    Bottombar,
  },
  mounted() {
    EventBus.$on('selected_tab', this.change_view);
  },
  beforeDestroy() {
    EventBus.$off('selected_tab', this.change_view);
  },
  data() {
    return {
      selected_view: 'HomeView'
    }
  },
  methods: {
    change_view(value) {
      this.selected_view = value;
    }
  }
}
</script>

<style lang="scss">

</style>
