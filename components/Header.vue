<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <nav class="header__nav">
          <NuxtLink class="header__link" to="/favorites" exact active-class="active">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33423 2.15646C1.76936 2.66876 1.37143 3.48526 1.37143 4.72395C1.37143 5.49178 1.74054 6.37595 2.39401 7.31711C3.0395 8.24677 3.91325 9.16191 4.80764 9.97678C5.69901 10.7889 6.59325 11.4856 7.26619 11.98C7.5571 12.1937 7.80563 12.3689 7.99334 12.4985C8.18198 12.3641 8.43262 12.1821 8.72639 11.9604C9.40033 11.4517 10.296 10.7378 11.1889 9.9135C12.0848 9.08641 12.9605 8.16421 13.6075 7.24032C14.2647 6.30178 14.6286 5.44202 14.6286 4.72398C14.6286 2.85557 13.1163 1.35487 11.2692 1.35487C10.1581 1.35487 9.17135 1.89912 8.55652 2.74372C8.42767 2.92072 8.22047 3.02564 7.99979 3.02563C7.77911 3.02562 7.57192 2.92069 7.44309 2.74369C6.82837 1.89912 5.84181 1.35487 4.73039 1.35487C3.73916 1.35487 2.90933 1.63487 2.33423 2.15646ZM7.99982 13.3229C7.62433 13.8897 7.6242 13.8897 7.62404 13.8896L7.62215 13.8883L7.61733 13.8852L7.5999 13.8738C7.58488 13.864 7.56313 13.8497 7.5351 13.831C7.47905 13.7938 7.39785 13.7394 7.29508 13.669C7.08961 13.5284 6.79758 13.3242 6.44779 13.0672C5.74933 12.554 4.81505 11.8266 3.87789 10.9728C2.94375 10.1217 1.98898 9.12898 1.26308 8.0835C0.545151 7.04952 0 5.89125 0 4.72395C0 3.1806 0.507664 1.97383 1.40677 1.15839C2.29563 0.352238 3.48815 0 4.73039 0C6.00311 0 7.15307 0.503906 7.99985 1.31539C8.84671 0.503913 9.99675 0 11.2692 0C13.8899 0 16 2.12338 16 4.72398C16 5.85265 15.4496 6.99111 14.7353 8.01113C14.0108 9.04579 13.0579 10.0425 12.1252 10.9034C11.1895 11.7672 10.2565 12.5105 9.55901 13.037C9.20971 13.3007 8.91813 13.5109 8.71307 13.6559C8.61051 13.7284 8.5295 13.7845 8.47364 13.823C8.4457 13.8422 8.42405 13.8569 8.40912 13.8671L8.39183 13.8788L8.38707 13.882L8.38568 13.8829C8.38552 13.883 8.38495 13.8834 7.99982 13.3229ZM7.99982 13.3229L8.38568 13.8829C8.15667 14.0365 7.85564 14.0393 7.62404 13.8896L7.99982 13.3229Z" fill="#2D3B87"/>
            </svg>
            <span>
              Избранное
            </span>
          </NuxtLink>
          <NuxtLink class="header__link" to="/" exact active-class="active">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9998 7.57592L5 2.99994" stroke="#2D3B87" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 13.4426V6.33151C16.9997 6.01975 16.9174 5.71356 16.7614 5.44365C16.6054 5.17375 16.3811 4.94961 16.1111 4.79373L9.88889 1.23818C9.61863 1.08214 9.31206 1 9 1C8.68793 1 8.38137 1.08214 8.11111 1.23818L1.88889 4.79373C1.6189 4.94961 1.39465 5.17375 1.23863 5.44365C1.08262 5.71356 1.00032 6.01975 1 6.33151V13.4426C1.00032 13.7544 1.08262 14.0606 1.23863 14.3305C1.39465 14.6004 1.6189 14.8245 1.88889 14.9804L8.11111 18.536C8.38137 18.692 8.68793 18.7741 9 18.7741C9.31206 18.7741 9.61863 18.692 9.88889 18.536L16.1111 14.9804C16.3811 14.8245 16.6054 14.6004 16.7614 14.3305C16.9174 14.0606 16.9997 13.7544 17 13.4426Z" stroke="#2D3B87" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.5 5.50006L9.00024 9.89618L16.5 5.50006" stroke="#2D3B87" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.99951 18L8.99951 9.88867" stroke="#2D3B87" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>
              Склад
            </span>
          </NuxtLink>
          <NuxtLink class="header__link" to="/transactions" exact active-class="active">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.00012 1.66669L1.50012 5.00002V16.6667C1.50012 17.1087 1.67572 17.5326 1.98828 17.8452C2.30084 18.1578 2.72476 18.3334 3.16679 18.3334H14.8335C15.2755 18.3334 15.6994 18.1578 16.012 17.8452C16.3245 17.5326 16.5001 17.1087 16.5001 16.6667V5.00002L14.0001 1.66669H4.00012Z" stroke="#2D3B87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.50012 5H16.5001" stroke="#2D3B87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.3334 8.33337C12.3334 9.21743 11.9822 10.0653 11.3571 10.6904C10.732 11.3155 9.88414 11.6667 9.00008 11.6667C8.11603 11.6667 7.26818 11.3155 6.64306 10.6904C6.01794 10.0653 5.66675 9.21743 5.66675 8.33337" stroke="#2D3B87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>
              Сделки
            </span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header"
}
</script>

<style lang="scss" scoped>

.header {
  // .header__body
  &__body {
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 40px;
      background: #E0E3EE;
      border-radius: 0px 0px 10px 10px;
    }
  }

  // .header__nav
  &__nav {
    display: flex;
    justify-content: flex-end;
    margin: 20px 0px 0px 0px;
  }

  // .header__link
  &__link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 7px 19px;
    transition: background 0.3s ease;
    &.active {
      background: #F4F5F9;
    }
    span {
      margin: 7px 0px 0px 0px;
      color: #2D3B87;
    }
  }
}

</style>
