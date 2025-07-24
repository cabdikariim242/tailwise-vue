  <template>
 <BaseCard class="mt-[400px] z-10 ml-[200px]">
 <AppButton @clickme="toggle" title="click here" :customClass="'bg-blue-300 p-3 focus:outline-none focus:ring border rounded-2xl text-white'"/>

<AppButton
    :title="'Click me'"
    :customClass="` text-white p-4 rounded transition-all duration-200 focus:outline-none focus:ring border`"
    
  />      

      <AppButton  @clickme="submit" title="click here" :customClass="'bg-orange-300 px-20 py-2 focus:outline-none focus:ring border rounded-[20px] text-[green]'">
       submit 
      </AppButton>

      <AppButton :disabled="false" @clickme="clicked" title="click here" :customClass="'bg-black px-10 py-[10px] rounded-[30px] text-[white]'">
       verify 
      </AppButton>

    </BaseCard>
      
        </template>

  <script>
  import AppButton  from '@/components/newcomponents/AppButton.vue'
  import BaseCard  from '@/components/newcomponents/BaseCard.vue'

  export default {
    components:
    {AppButton, BaseCard},
    data(){
      return{
        title:'',
        customClass:'',
        disabled:false,
        }
    },

      methods: {
    toggle() {
      alert('u clicked the button ')
    },
    clicked() {
      alert('you are verified')
    },
    submit() {
      alert('you submitted')
    },
    
    visit() {
      alert('you visited this link')
    }
  }

  };
  </script>