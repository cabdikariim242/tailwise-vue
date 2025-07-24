  <template>
  <div
      class="flex flex-col justify-between absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] ">
      <Label label="this label is for text" :labelClass="'text-red-600'" id="text" :required="true"/>
     
      <Input
      title="this is input"
      type="text"
      v-model="modelValue"
      :customClass="'p-4 focus:outline-none focus:ring border '"
      />

      <Label label="this is second lable" :labelClass="'text-red-600'" id="text" :required="false"/>
     
      <Input
      title="this is second input"
      type="text"
      v-model="modelValue"
      :customClass="'p-4 focus:outline-none focus:ring border'"
      />
      <p>{{ modelValue }}</p>
    </div>
      
  </template>

  <script>
  import Input  from '@/components/newcomponents/input-comp.vue'
    import Label  from '@/components/newcomponents/Label.vue'


  export default {
    components:
    {Input,Label},
    data(){
      return{
        customClass:'',
        title: '',
        modelValue: '',
        type: null,
        labelClass:'',
        id:'',
        required:true,
        label:''


      }
    },
    emits: ['update:modelValue'],
  }

      
  </script>