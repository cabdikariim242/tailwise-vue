    <template>
    <div
        class="flex flex-col justify-between lg:flex-row md:flex-row  absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] ">
      <inputGroup v-model="modelValue" :customClass="'border '" :labelClass="'text-green-500'" :required="true" id="text" type="text" title="this not " label="this is label" />
        </div>
    </template>

    <script>  
    import inputGroup  from '@/components/newcomponents/input-group.vue'


    export default {
      components:
      {inputGroup},
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
      }
    }

        
    </script>