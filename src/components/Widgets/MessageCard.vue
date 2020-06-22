<template>
  <div @click="change_route" class="messagecard">
      <div class="messagecard__imageview">
          <img draggable="false" :src="require(`@/Images/${contact.image}`)" :alt="contact.firstName" class="messagecard__imageview--image">
          <span :class="{ 'inactive': contact.is_active }" class="messagecard__imageview--indicator"></span>
      </div>
      <div class="messagecard__textview">
          <h3 class="messagecard__textview--title">{{ contact.firstName }} {{ contact.lastName }}</h3>
          <p class="messagecard__textview--text">{{ contact.text }}</p>
      </div>
      <h3 class="messagecard__timeview">{{ contact.time }}</h3>
  </div>
</template>

<script>
export default {
    name: "MessageCard",
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
}
</script>

<style lang="scss">
.messagecard {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-bottom: 1px solid $color-grey-200;
    padding: 1.3rem 0.6rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: $color-grey-200;
    }

    &__imageview {
        position: relative;
       
       &--image {
        object-fit: cover;
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 50%;
        box-shadow: 0 2px 3px rgba($color-grey-600, 0.4);
       }

       &--indicator {
           position: absolute;
           background-color: $color-green-500;
           width: 12px;
           height: 12px;
           border-radius: 50%;
           right: 3px;
           margin-top: -1rem;
           box-shadow: 0 2px 4px rgba($color-grey-600, 0.3);
       }
    }

    &__textview {
        padding: 0.2rem 0.7rem;
        flex: 1;
        width: 100%;

        &--title {
            font-family: inherit;
            font-size: 1.3rem;
            font-weight: 600;
            color: $color-dark-200;
            margin-bottom: 0.3rem;
        }

        &--text {
            font-family: inherit;
            font-size: 1.1rem;
            font-weight: 400;
            color: $color-grey-600;
            text-overflow: ellipsis;
        }
    }

    &__timeview {
        font-family: inherit;
        font-size: 1.1rem;
        font-weight: 600;
        color: $color-grey-600;
    }
}

.inactive {
    background-color: $color-red-500;
}
</style>