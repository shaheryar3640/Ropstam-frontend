<template>
  <div class="row mt-5" >
    <div class="col-lg-8 offset-lg-2">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="mb-0">Category List</h1>
        <router-link class="btn btn-primary" to="/addCategory">+ Add  Category</router-link>
    </div>
    <div class="table-responsive">
      <DataTable class="table table-striped table-bordered table-hover nowrap w-100" :options="{responsive:true, autoWidth: false, dom: 'Bfrtip', language: {
        search: 'Search', zeroRecords: 'No Category Found',
        paginate: { first: 'first', previous: 'previous', next: 'next', last: 'last'}
        },Buttons:botones}" 
        :columns="columns"
        :data="category"
        ref="table"
      />
    </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import $ from "jquery"
import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5'
import Buttons from 'datatables.net-buttons-bs5'
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfFonts.vfs = pdfFonts.pdfMake.vfs
import 'datatables.net-responsive-bs5';
import JsZip from 'jszip';
window.JsZip = JsZip;
DataTable.use(Buttons);
DataTable.use(print);
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
export default {
  name: "CategoryList",
  components: {
    DataTable,
  },
  data(){
    return {
        category: [
        ],
    };
  },
  computed: {
  columns: function () {
    let cols = [
      {
        title: "Id",
        name: "Id",
        data: "id",
      },
      {
        title: "Name",
        name: "name",
        data: "name",
      },
      {
        title: 'Edit',
        data: null,
        render: function(data, type, row) {
          return `<button class="btn btn-sm btn-secondary edit-btn" data-id="${row.id}">Edit</button>`;
        },
        orderable: false,
        searchable: false,
      },
      {
        title: 'Delete',
        data: null,
        render: function(data, type, row) {
          return `<button class="btn btn-sm btn-danger delete-btn" data-id="${row.id}">Delete</button>`;
        },
        orderable: false,
        searchable: false,
      },

    ];
    return cols;
  },
  options: function () {
    return {
      lengthMenu: [5, 10, 20],
      order: [
        [8, "desc"],
        [7, "desc"],
        [5, "desc"],
      ],
      dom: "lftipr",
      buttons: [
        'excelHtml5',
        'pdfHtml5',
        'print',
        'copy',
      ],
      language: {
        search: 'Search',
        zeroRecords: 'No Category Found',
        paginate: { first: 'First', previous: 'Previous', next: 'Next', last: 'Last' },
      },
    };
  },
  botones: [
    {
    title: 'Reporte de productos',
    extend: 'excelHtml5',
    text: '<i class="fa-solid fa-file-excel"></i> Excel',
    className: 'btn btn-success'
    },
    {
    title: 'Reporte de productos',
    extend: 'pdfHtml5',
    text: '<i class="fa-solid fa-file-pdf"></i> PDF',
    className: 'btn btn-danger'
    },
    {
    title: 'Reporte de productos',
    extend: 'print',
    text: '<i class="fa-solid fa-file-print"></i> Imprimir',
    className: 'btn btn-danger'
    },
    {
    title: 'Reporte de productos',
    extend: 'copy',
    text: '<i class="fa-solid fa-file-copy"></i> Imprimir',
    className: 'btn btn-danger'
    }
  ]
  
},
  mounted() {
    this.getCategory();
    this.addEventListeners();
  },
  methods: {
    getCategory() {
      this.$store.dispatch('category/getAllCategory')
      .then((response) =>{
        this.isMounted = true;
        this.category = response.data.data
      //   this.getUser();
      })
    },
    deleteCategory(id){
        let payload = {
            id:id
        }
        this.$store.dispatch('category/deleteCategory', payload)
      .then(() =>{
        this.getCategory();
        this.$router.push('/CategoryList');
      })
    },
    addEventListeners() {
      const self = this;
      $(this.$refs.table.$el).on('click', '.delete-btn', function () {
        const id = $(this).data('id');
        console.log('id',id)
        self.deleteCategory(id);
      });
      $(this.$refs.table.$el).on('click', '.edit-btn', function () {
        const id = $(this).data('id');
        self.$router.push('/editCategory/'+id);
      });
    },

  }
};
</script>
  
<style scoped>
  @import "datatables.net-bs5";
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal-overlay {
      opacity: 0.7;

  }
  .feedback-card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .feedback-card:hover {
    transform: translateY(-5px);
  }
  
  .card-title {
    color: #333;
  }
  
  .card-text {
    color: #666;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .btn-primary:focus {
    box-shadow: none;
  }
</style>
  