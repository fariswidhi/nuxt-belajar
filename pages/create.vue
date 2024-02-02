<template>
    <div>
        
     
<div class="container mt-5">
  <form>
    <div class="mb-3">
      <label for="kode" class="form-label">Kode</label>
      <input type="text" class="form-control" id="kode" v-model="supplier.kode" required>
    </div>
    <div class="mb-3">
      <label for="nama" class="form-label">Nama</label>
      <input type="text" class="form-control" id="nama" v-model="supplier.nama" required>
    </div>
    <div class="mb-3">
      <label for="alamat" class="form-label">Alamat</label>
      <textarea class="form-control" id="alamat" v-model="supplier.alamat" rows="3" required></textarea>
    </div>
    <div class="mb-3">
      <label for="nohp" class="form-label">No HP</label>
      <input type="tel" class="form-control" id="nohp" v-model="supplier.nohp" required>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" v-model="supplier.email" required>
    </div>
    <div class="mb-3">
      <label for="rekening" class="form-label">Rekening</label>
      <input type="text" class="form-control" id="rekening" v-model="supplier.rekening" required>
    </div>
    <button @click="handleSave()" :disabled="isSaving" class="btn btn-primary">Submit</button>
  </form>
</div>

    </div>
</template>

<script>

import { createSupplier } from '../services/supplier';
const router = useRouter()


 export default{
    data(){
        return {
            supplier:{
                kode:'',
                nama:'',
                alamat:'',
                nohp:'',
                email:'',
                rekening:''
            },
            isSaving:false
        }
    },
    methods:{
        handleSave(){
            this.isSaving=true
            createSupplier(this.supplier)
                .then(response=>{
                    alert("berhasil")

                    this.isSaving=false
                    this.supplier.kode=""
                    this.supplier.nama=""
                    this.supplier.alamat=""
                    this.supplier.nohp=""
                    this.supplier.email=""
                    this.supplier.rekening=""

                    router.push({ path: "/" })

                    return response
                })
                .catch(error=>{
                    this.isSaving=false
                    alert('gagal')
                    return error
                })
                
        }
    }
 }

</script>