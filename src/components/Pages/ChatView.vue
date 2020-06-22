<template>
  <div class="chatview">
    <div class="chatview__container">
      <div class="chatview__navbar">
        <div @click="back_home" class="chatview__navbar--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </div>
        <h3 class="chatview__navbar--smtext">Sheila</h3>
      </div>
      <div class="chatview__chatcontainer">
        <div
          v-for="data in layoutData"
          :key="data.id"
          :class="{ 'justify-flex-end':data.is_sender }"
          class="chatcard"
        >
          <img
            :class="{ 'display-none':data.is_sender }"
            :src="require(`@/Images/${data.image}`)"
            :alt="data.name"
            class="chatcard__image"
          />
          <div :class="{ 'bg-light': data.is_sender}" class="chatcard__chatbox">
            <p class="chatcard__chatbox--text">{{ data.text }}.</p>
            <p
              :class="{ 'text-align-left':data.is_sender }"
              class="chatcard__chatbox--smtext"
            >{{ data.time }}</p>
          </div>
        </div>
      </div>
      <div class="chatview__chatwidget">
        <div class="chatview__chatwidget--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
            />
          </svg>
        </div>
        <div class="chatview__flexview">
          <div class="chatview__flexview--iconplus">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
          <input
            type="text"
            autocomplete="off"
            placeholder="Type a message"
            class="chatview__flexview--input"
          />
          <div class="chatview__flexview--iconsend">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatView",
  data() {
    return {
      user_text: null,
      layoutData: [
        {
          id: 1,
          image: "image6.jpeg",
          name: "Teleport",
          text: "Why aren't you answering?",
          time: "09:30 AM",
          is_sender: false
        },
        {
          id: 2,
          image: "image6.jpeg",
          name: "Teleport",
          text: "Hello, I can see you online!!",
          time: "09:31 AM",
          is_sender: false
        },
        {
          id: 3,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "Sorry I dropped my phone and I can't find it. I'll text you when I find it.",
          time: "09:35 AM",
          is_sender: true
        },
        {
          id: 4,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "Okay, let me know :)",
          time: "09:38 AM",
          is_sender: false
        },
        {
          id: 5,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "Did you find it?",
          time: "10:15 AM",
          is_sender: false
        },
        {
          id: 6,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "Nope",
          time: "10:20 AM",
          is_sender: true
        },
        {
          id: 7,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "I'll let you know when I find it :(",
          time: "10:21 AM",
          is_sender: true
        },
        {
          id: 8,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "Okay, let me know when you do",
          time: "10:25 AM",
          is_sender: false
        },
        {
          id: 9,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "I need something urgently :)",
          time: "10:26 AM",
          is_sender: false
        },
        {
          id: 10,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "Sure I will :>",
          time: "10:30 AM",
          is_sender: true
        },
        {
          id: 11,
          image: "image6.jpeg",
          name: "Teleport",
          text:
            "I will call you later in the evening :/",
          time: "10:33 AM",
          is_sender: true
        },
      ]
    };
  },
  methods: {
    back_home() {
      this.$router.push("/");
    },
  }
};
</script>

<style lang="scss">
.chatview {
  margin-top: 5.5rem;

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
  }

  &__navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: $theme-color;
    z-index: 999;
    padding: 0.7rem 0.3rem;
    position: fixed;
    width: 100%;
    top: 0;

    &--iconview {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: inherit;
      transform: scale(1.05);
      padding: 0.5rem;
      fill: $color-grey-100;
      cursor: pointer;
      transition: all 0.3s;

      &:active {
        background-color: $color-grey-400;
      }
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      color: $color-grey-100;
      margin-left: 0.3rem;
    }
  }

  &__chatcontainer {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
    margin-top: 0.5rem;
    order: 2;
    padding-bottom: 8rem;
  }

  &__chatwidget {
    background-color: $color-grey-200;
    display: flex;
    flex-direction: row;
    align-items: center;
    order: 3;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1.5rem 0.5rem;

    &--iconview {
      fill: $color-grey-600;
      width: 3rem;
      height: 3rem;
      text-align: center;
      padding: 0.3rem;
      border-radius: 50%;
      margin-right: 0.3rem;
    }
  }

  &__flexview {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: $color-white;
    padding: 0.5rem 0.8rem;
    border-radius: 2rem;

    &--iconplus {
      fill: $color-grey-600;
      width: 3.5rem;
      height: 3.5rem;
      text-align: center;
      padding: 0.6rem;
    }

    &--input {
      width: 100%;
      padding: 1.1rem 0.5rem;
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 500;
      color: $color-grey-600;
      border: none;
      outline: none;
    }

    &--iconsend {
      fill: $color-grey-600;
      width: 3rem;
      height: 3rem;
      text-align: center;
      padding: 0.4rem;
    }
  }
}

.chatcard {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  margin-top: 0.3rem;

  &__image {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
  }

  &__chatbox {
    margin-left: 0.3rem;
    background-color: #253499;
    max-width: 25rem;
    padding: 0.7rem;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 3px rgba(#233189, 0.3);

    &--text {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-100;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      color: $color-grey-100;
      text-align: right;
    }
  }
}

.justify-flex-end {
  justify-content: flex-end;
}

.display-none {
  display: none;
}

.text-align-left {
  text-align: left;
}

.bg-light {
  background-color: #5365d8;
}
</style>