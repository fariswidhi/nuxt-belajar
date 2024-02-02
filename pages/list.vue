<script >
import { getSuppliers } from '../services/supplier';



export default {
    data(){
        return {
            suppliers:[]
        }
    },
    created(){
        this.fetchSupplier()
    },
    methods:{
        fetchSupplier(){
            getSuppliers()
                .then(response=>{
                    this.suppliers = response.data.suppliers
                })
                .catch(error=>{
                    return error
                })
        }
    }
}


</script>



<template>
    <div>
        <div class="container">
            <NuxtLink to="/create" class="btn btn-primary">Tambah</NuxtLink>

            <table class="table table-striped">
                <thead>
                    <th>Kode</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Nohp</th>
                    <th>email</th>
                    <th>rekening</th>
                </thead>

                <tbody>
                    <tr v-for="supplier in suppliers" key="supplier.id">
                        <td>{{ supplier.kode }}</td>
                        <td>{{ supplier.nama }}</td>
                        <td>{{ supplier.alamat }}</td>
                        <td>{{ supplier.nohp }}</td>
                        <td>{{ supplier.email }}</td>
                        <td>{{ supplier.rekening }}</td>
                        <td><button class="btn btn-danger">HAPUS</button></td>

                    </tr>
                </tbody>
            </table>
        
        </div>
    </div>
</template>