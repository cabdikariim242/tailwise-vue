  <template>
  <div
      class="flex flex-col justify-between lg:flex-row md:flex-row  absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] ">
     <Input
      title="search up"
      type="text"
      v-model="modelValue"
      :customClass="'p-4 focus:outline-none focus:ring border'"
      />
      <p>{{ modelValue }}</p>
    </div>
      
  </template>

  <script>
  import Input  from '@/components/newcomponents/input-comp.vue'

  export default {
    components:
    {Input},
    data(){
      return{
        customClass:'',
        title: '',
        modelValue: '',
        type: null,

      }
    }
  }

      
  </script>