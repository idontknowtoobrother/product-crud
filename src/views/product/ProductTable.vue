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
    makeToast (title, msg, append = false) {
      this.toastCount++
      this.$bvToast.toast(msg, {
        title: title,
        autoHideDelay: 3000,
        appendToast: append
      })
    },
    saveProduct (product) {
      console.log('Submit', product)
      if (product.id < 0) {
        axios.post('http://localhost:3000/products', product).then(res => {
          this.refreshProducts()
          this.makeToast('Successfully Add New Product', `สินค้า ${product.name} ถูกเพิ่มแล้ว / ไอดี ${res.data.id}`)
        }).catch(e => {
          this.makeToast('Can\'t Add New Product', `ไม่สามารถเพิ่มสินค้า ${product.id}`)
          this.refreshProducts()
        })
      } else {
        axios.put('http://localhost:3000/products', product).then(res => {
          this.refreshProducts()
          this.makeToast('Successfully Edited Product', `สินค้าไอดี ${product.id} ถูกแก้ไขแล้ว`)
        }).catch(e => {
          this.makeToast('Can\'t Edited Product', `ไม่สามารถปรับปรุงสินค้า ${product.id}`)
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
      if (confirm(`คุณต้องการจะลบสินค้า ${product.id} หรือไม่`)) {
        axios.delete(`http://localhost:3000/products/${product.id}`).then(res => {
          this.refreshProducts()
          this.makeToast('Successfully Deleted Product', `สินค้าไอดี ${product.id} ถูกลบแล้ว (${product.name})`)
        }).catch(e => {
          this.makeToast('Can\'t Delete Product', `ไม่สามารถลบสินค้า ${product.id}`)
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
        { key: 'id', label: 'ไอดี' },
        { key: 'name', label: 'ชื่อสินค้า' },
        { key: 'price', label: 'ราคา' },
        { key: 'operators', label: 'กระบวนการ' }
      ],
      productItems: [
        { id: 1, name: 'IPad gen1 64G Wifi', price: 11000.0 },
        { id: 2, name: 'IPad gen2 64G Wifi', price: 12000.0 },
        { id: 3, name: 'IPad gen3 64G Wifi', price: 13000.0 },
        { id: 4, name: 'IPad gen4 64G Wifi', price: 14000.0 },
        { id: 5, name: 'IPad gen5 64G Wifi', price: 15000.0 },
        { id: 6, name: 'IPad gen6 64G Wifi', price: 16000.0 },
        { id: 7, name: 'IPad gen7 64G Wifi', price: 17000.0 },
        { id: 8, name: 'IPad gen8 64G Wifi', price: 18000.0 },
        { id: 9, name: 'IPad gen9 64G Wifi', price: 19000.0 },
        { id: 10, name: 'IPad gen10 64G Wifi', price: 20000.0 }
      ],
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
