    <template>
    <BaseCard class="mt-[250px] lg:ml-[150px] md:ml-[150px] ml-[5px] z-[9]  " >
     <inputGroup v-model="modelValue" :customClass="'border '" :labelClass="'text-green-500'" :required="true" id="text" type="text" title="this not " label="this is label" />
      
     
      </BaseCard>
      
    </template>

    <script>  
    import inputGroup  from '@/components/newcomponents/input-group.vue'
    import BaseCard  from '@/components/newcomponents/BaseCard.vue'


    export default {
      components:
      {inputGroup,BaseCard},
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