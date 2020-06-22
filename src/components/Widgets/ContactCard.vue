<template>
  <div class="contactcard">
    <div class="contactcard__imageview">
      <img
        :src="require(`@/Images/${contact.image}`)"
        :alt="contact.firstName"
        class="contactcard__imageview--image"
      />
    </div>
    <div class="contactcard__textview">
      <h3 class="contactcard__textview--title">{{ contact.firstName }} {{ contact.lastName }}</h3>
      <p class="contactcard__textview--smtext">{{ contact.email }}</p>
    </div>
    <div class="contactcard__widgets">
      <div title="start call" class="contactcard__iconview">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
          />
        </svg>
      </div>
      <div title="start message" @click="change_route" class="contactcard__iconview">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    contact: {
      type: Object,
      required: false
    }
  },
  methods: {
    change_route() {
      this.$router.push('/chat');
    }
  }
};
</script>

<style lang="scss">
.contactcard {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1.3rem 0.5rem;
  border-bottom: 1px solid $color-grey-200;
  background-color: $color-white;
  transition: all 0.3s;

  &:hover {
    background-color: $color-grey-200;
  }

  &__imageview {
    &--image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__textview {
    flex: 1;
    padding: 0.2rem 1rem;

    &--title {
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

  &__widgets {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__iconview {
    width: 4rem;
    height: 4rem;
    text-align: center;
    padding: 0.6rem;
    border-radius: 50%;
    fill: $color-grey-600;
    margin: 0.2rem;
    background-color: $color-white;
    transition: all 0.3s;

    &:hover {
      background-color: $color-grey-200;
    }
  }
}
</style>