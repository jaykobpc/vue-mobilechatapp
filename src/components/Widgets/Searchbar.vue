<template>
  <div class="searchbar">
      <div class="searchbar__container">
          <input type="text" autocomplete="off" placeholder="Search Messages" class="searchbar__container--input">
          <span class="searchbar__container--iconview">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Searchbar',
}
</script>

<style lang="scss">
.searchbar {
    position: relative;
    width: 100%;
    background-color: $color-grey-100;

    &__container {
        padding: 1.5rem 1.8rem;

        &--input {
            width: 100%;
            padding: 1.5rem 1rem;
            font-family: inherit;
            font-size: 1.3rem;
            font-weight: 400;
            color: $color-grey-600;
            border: none;
            outline: none;
            border: 1px solid $color-grey-500;
            background-color: $color-white;
            border-radius: 1.5rem;
        }

        &--iconview {
            fill: $color-grey-600;
            position: absolute;
            right: 30px;
            margin-top: 1.3rem;
        }
    }
}
</style>