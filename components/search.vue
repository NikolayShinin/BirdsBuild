<template>
    <div class="search">
      <form
        @submit.prevent="$emit('search', text)"
      >
        <input type="text" v-model="text" >
        <button type="submit">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.91667 2.5C9.35326 2.5 10.731 3.07068 11.7468 4.0865C12.7627 5.10233 13.3333 6.48008 13.3333 7.91667C13.3333 9.25833 12.8417 10.4917 12.0333 11.4417L12.2583 11.6667H12.9167L17.0833 15.8333L15.8333 17.0833L11.6667 12.9167V12.2583L11.4417 12.0333C10.4917 12.8417 9.25833 13.3333 7.91667 13.3333C6.48008 13.3333 5.10233 12.7627 4.0865 11.7468C3.07068 10.731 2.5 9.35326 2.5 7.91667C2.5 6.48008 3.07068 5.10233 4.0865 4.0865C5.10233 3.07068 6.48008 2.5 7.91667 2.5ZM7.91667 4.16667C5.83333 4.16667 4.16667 5.83333 4.16667 7.91667C4.16667 10 5.83333 11.6667 7.91667 11.6667C10 11.6667 11.6667 10 11.6667 7.91667C11.6667 5.83333 10 4.16667 7.91667 4.16667Z" fill="white"/>
          </svg>
        </button>
      </form>
    </div>
</template>

<script>
export default {
  name: "search",
  model: {
    prop: 'textValue',
    event: 'search'
  },
  props:['textValue'],
  data() {
    return {
      text: this.textValue
    }
  }
}
</script>

<style scoped lang="scss">

.search {
  background: #FFFFFF;
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  padding: 4px;
  form {
    display: flex;
    align-items: center;
    margin: 0px 0px 0px 16px;
  }
  input {
    font-size: 15px;
    color: #2D3B87;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2D3B87;
    border-radius: 10px;
    height: 40px;
    width: 40px;
  }
}

</style>
