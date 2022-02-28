<template>
  <div>
    <b-button @click="addNew" variant="primary">เพิ่มสินค้า</b-button>
    <b-modal
      id="modal-product"
      ref="modalProduct"
      title="สินค้า"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.stop.prevent="reset">
        <b-form-group
          id="form-group-product-name"
          label="ชื่อสินค้า"
          label-for="product-name"
        >
          <b-form-input
            type="text"
            id="product-name"
            placeholder="ชื่อสินค้า Iphone xxx"
            v-model="form.name"
            :state="validateName"
            autofocus
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateName">
            ชื่อสินค้าต้องมีความยาวอย่างน้อย 3 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="form-group-product-price"
          label="ราคาสินค้า"
          label-for="product-price"
        >
          <b-form-input
            type="text"
            id="product-price"
            placeholder="ราคา 10.0"
            v-model="form.price"
            :state="validatePrice"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validatePrice">
            ราคาสินค้าต้องไม่น้อยกว่าหรือเท่ากับ 0 บาท
          </b-form-invalid-feedback>
        </b-form-group>
      </b-form>
      <b-card>
        <pre>
        {{ form }}
      </pre
        >
      </b-card>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  data () {
    return {
      form: {
        id: -1,
        name: '',
        price: 0
      },
      isAddNew: false
    }
  },
  computed: {
    validateName () {
      return this.form.name.length >= 3
    },
    validatePrice () {
      return this.form.price !== '' && this.form.price >= 0
    },
    validateForm () {
      return this.validateName && this.validatePrice
    }
  },
  methods: {
    addNew () {
      this.isAddNew = true
      this.$nextTick(() => {
        this.show()
        this.isAddNew = false
      })
    },
    show () {
      this.$refs.modalProduct.show()
    },
    submit () {
      const product = JSON.parse(JSON.stringify(this.form))
      product.price = parseFloat(product.price)
      this.$emit('save', product)
      this.reset()
    },
    reset () {
      this.form = {
        id: -1,
        name: '',
        price: 0
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form.id = this.product.id
        this.form.name = this.product.name
        this.form.price = this.product.price
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      if (!this.validateForm) return
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-product')
      })
    }
  }
}
</script>
<style></style>
