<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="text-right">
          <ProductForm
            :product="selectedItem"
            ref="productForm"
            @save="saveProduct"
          ></ProductForm>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="productItems" :fields="fields">
            <template #cell(price)="{ item }">
              ฿{{ item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
            </template>
            <template #cell(operators)="{ item }">
              <b-button @click="editProduct(item)">แก้ไข</b-button
              ><b-button
                class="ml-1"
                variant="danger"
                @click="deleteProduct(item)"
                >ลบ</b-button
              >
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProductForm from './ProductForm.vue'
import axios from 'axios'
export default {
  components: {
    ProductForm
  },
  methods: {
    makeToast (title, msg, variant = 'sucess', append = false) {
      this.toastCount++
      this.$bvToast.toast(msg, {
        title: title,
        autoHideDelay: 3000,
        appendToast: append
      })
    },
    async saveProduct (product) {
      if (product._id === '') {
        axios.post('http://localhost:3000/products', product).then(res => {
          this.refreshProducts()
          this.makeToast('Successfully Add New Product', `สินค้า ${product.name} ถูกเพิ่มแล้ว / ไอดี ${res.data._id}`)
        }).catch(e => {
          this.makeToast('Can\'t Add New Product', `ไม่สามารถเพิ่มสินค้า ${product._id}`, 'danger')
          this.refreshProducts()
        })
      } else {
        axios.put(`http://localhost:3000/products/${product._id}`, product).then(res => {
          this.refreshProducts()
          this.makeToast('Successfully Edited Product', `สินค้าไอดี ${product._id} ถูกแก้ไขแล้ว`)
        }).catch(e => {
          this.makeToast('Can\'t Edited Product', `ไม่สามารถปรับปรุงสินค้า ${product._id}`, 'danger')
          this.refreshProducts()
        })
      }
    },
    editProduct (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.productForm.show()
      })
    },
    deleteProduct (product) {
      if (confirm(`คุณต้องการจะลบสินค้า ${product._id} หรือไม่`)) {
        axios.delete(`http://localhost:3000/products/${product._id}`).then(res => {
          this.refreshProducts()
          this.makeToast('Successfully Deleted Product', `สินค้าไอดี ${product._id} ถูกลบแล้ว (${product.name})`)
        }).catch(e => {
          this.makeToast('Can\'t Delete Product', `ไม่สามารถลบสินค้า ${product._id}`, 'danger')
          this.refreshProducts()
        })
      }
    },
    refreshProducts () {
      axios.get('http://localhost:3000/products').then(respone => {
        this.productItems = respone.data
      })
    }
  },
  data () {
    return {
      fields: [
        { key: '_id', label: 'ไอดี' },
        { key: 'name', label: 'ชื่อสินค้า' },
        { key: 'price', label: 'ราคา' },
        { key: 'operators', label: 'กระบวนการ' }
      ],
      productItems: [],
      productId: 11,
      selectedItem: null
    }
  },
  mounted () {
    this.refreshProducts()
  }
}
</script>
<style></style>
