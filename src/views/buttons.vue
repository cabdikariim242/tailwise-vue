  <template>
    <div class="mt-[202px]  ml-[150px] z-[8]">
      <p class="text-white mr-[80px] "><strong>Buttons</strong> . Explore the versatility of our Buttons component for enhancing user interactions on your application.
</p>
   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Basic Buttons</h1>
    <div class="flex flex-wrap items-center gap-2">
      <AppButton :customClass="'p-3 bg-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring border'">Primary</AppButton>
      <AppButton :customClass="'p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring border'">Secondary</AppButton>
      <AppButton :customClass="'p-3 bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring border'">Success</AppButton>
      <AppButton :customClass="'p-3 bg-yellow-600 text-black hover:bg-yellow-700 focus:outline-none focus:ring border'">Warning</AppButton>
      <AppButton :customClass="'p-3 bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring border'">Pending</AppButton>
      <AppButton :customClass="'p-3 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring border'">Danger</AppButton>
      <AppButton :customClass="'p-3 bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring border'">Dark</AppButton>
    </div>
  </BaseCard>


   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Button Sizes</h1>
    <div class="flex flex-wrap items-center gap-2">
      <AppButton :customClass="'bg-blue-900 text-white text-sm font-semibold px-3 py-1 rounded-md focus:outline-none focus:ring border'">Small</AppButton>
      <AppButton :customClass="'p-3 bg-gray-100 text-base hover:bg-gray-200 focus:outline-none focus:ring border'">medium</AppButton>
      <AppButton :customClass="'p-3 bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring border'">Success</AppButton>
      <AppButton :customClass="'p-3 bg-yellow-600 text-black hover:bg-yellow-700 focus:outline-none focus:ring border'">Warning</AppButton>
      <AppButton :customClass="'p-3 bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring border'">Pending</AppButton>
      <AppButton :customClass="'p-3 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring border'">Danger</AppButton>
      <AppButton :customClass="'p-3 bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring border'">Dark</AppButton>
    </div>
  </BaseCard>

    </div>


    
  

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
    }

    

  };
  </script>