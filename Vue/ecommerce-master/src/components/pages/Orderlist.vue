<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in sortOrder" :key="key" v-if="orders.length" :class="{'text-secondary': !item.is_paid}">
          <td>{{ item.create_at | date }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未起用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="Openmodal(item)" data-target="#exampleModal" data-toggle="modal">編輯</button>

          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
    <!-- openModal start-->
    <!-- add&edit Modal -->
    <div class="modal fade" id="orderlistModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-drk text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>修改訂單</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>a
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm">
                <div class="form-group">
                  <label for="Email">Email</label>
                  <input type="text" class="form-control" id="Email" v-model="tempOrder.user.email" placeholder="Email">
                </div>
                <label for="products">購買款項</label>
                <div class="form-group">
              
                  <input type="text" class="form-control" id="products" v-model="tempOrder.products" placeholder="購買款項">
                </div>
                <div class="form-group">
                  <label for="total">應付金額</label>
                  <input type="number" class="form-control" id="total" v-model="tempOrder.total">
                </div>

              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- add&edit Modal -->

    <!-- openModal end -->

  </div>
</template>

<script>
import Pagination from "../Pagination.vue";
import $ from "jquery";
export default {
  data() {
    return {
      orders: {
        user: {
          email: '',
        }
      },
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {
          user: {
              email:'',
          }
      },
    };
  },
  components: {
    Pagination
  },
  methods: {
    getOrders(currentPage = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMERPATH
      }/admin/orders?page=${currentPage}`;
      vm.isLoading = true;
      this.$http.get(url, vm.tempProduct).then(response => {
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
        console.log(response);
      });
    },
    Openmodal(item) {
    //   if (isNew) {
    //     this.tempProduct = {};
    //     this.isNew = true;
    //   } else {
    //     this.tempProduct = Object.assign({}, item); // 將item寫入空物件來避免this.tempProduct=item會直接傳參考
    //     this.isNew = false;
    //   }
      this.tempOrder = Object.assign({}, item);
      $("#orderlistModal").modal("show");
    }
  },
  computed: {
    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0;
          const bIsPaid = b.is_paid ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    }
  },
  created() {
    this.getOrders();
    console.log(process.env.APIPATH);
  }
};
</script>