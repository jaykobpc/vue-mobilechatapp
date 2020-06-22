<template>
  <div class="contactview">
    <div class="contactview__container">
      <ContactCard v-for="data in contactData" :key="data.id" :contact="data" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ContactCard from "../Widgets/ContactCard";

export default {
  name: "Contactview",
  components: {
    ContactCard
  },
  computed: {
    ...mapState({
      contactData: "contactData"
    })
  }
};
</script>

<style lang="scss">
.contactview {
  margin-top: 5.6rem;

  &__container {
    overflow-y: auto;
    padding-bottom: 6rem;
  }
}
</style>