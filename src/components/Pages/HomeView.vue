<template>
  <div class="homeview">
    <div class="homeview__container">
      <MessageCard v-for="data in messageData" :key="data.id" :contact="data" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MessageCard from "../Widgets/MessageCard";

export default {
  name: "Homeview",
  components: {
    MessageCard
  },
  computed: {
    ...mapState({
      messageData: "messageData"
    })
  }
};
</script>

<style lang="scss">
.homeview {
  margin-top: 5.6rem;

  &__container {
    overflow-y: auto;
    padding-bottom: 6rem;
  }
}
</style>