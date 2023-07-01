<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 7 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div class="button flex" @click="invoiceModal">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const store = useStore();
    const invoiceModal = () => {
      store.commit("TOGGLE_INVOICE_MODAL");
    };

    const filterMenu = ref(false);

    const toggleFilterMenu = () => {
      filterMenu.value = !filterMenu.value;
    };

    return {
      filterMenu,
      toggleFilterMenu,
      invoiceModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }
      .filter {
        margin-right: 40px;
        position: relative;
        cursor: pointer;

        img {
          margin-left: 8px;
          width: 9px;
          height: 5px;
        }
        .filter-menu {
          position: absolute;
          top: 25px;
          left: 0;
          width: 120px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
            0px 2px 4px -1px rgba(0, 0, 0, 0.06);
          li {
            padding: 10px 20px;
            cursor: pointer;
            font-size: 12px;
            &:hover {
              background-color: #7c5dfa;
            }
          }
        }
      }
      .button {
        cursor: pointer;
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;
        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}
</style>
