<!-- <template>

      <div class="z-[8] space-y-10  mt-[140px] lg:ml-[130px] md:ml-[130px] ml-[10px] lg:mr-[100px] md:mr-[100px] mr-[10px]">
      <h1 class="text-2xl font-semibold text-white mb-4">Basic Tabs</h1>
    

      <Tab :tabs="tabsList1">
        <template #tab1>
          <p class="text-gray-700 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </template>

        <template #tab2>
          <p class="text-gray-700 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).        </p>
        </template>
      </Tab>


      <Tab :tabs="tabsList2">
        <template #tab1>
          <h1 class="text-2xl font-semibold text-black mb-4">Boxed Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </template>

        <template #tab2>
            <h1 class="text-2xl font-semibold text-black mb-4">Boxed Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).        </p>
        </template>
      </Tab>

      <Tab :tabs="tabsList3"  :underline="true">
        <template #tab1>
          <h1 class="text-2xl font-semibold text-black mb-4">Link Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </template>

        <template #tab2>
                  <h1 class="text-2xl font-semibold text-black mb-4">Link Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).        </p>
        </template>
      </Tab>


    
    </div>




  

    
  </template>

  <script>
  import BaseCard from '@/components/newcomponents/BaseCard.vue';
  import Tab from '@/components/newcomponents/tab.vue'

  export default {
    name: "TabsView",
    components: {
      Tab,BaseCard
    },
    data() {
      return {
        tabsList1: [
          { label: "Example Tab 1", slot: "tab1" },
          { label: "Example Tab 2", slot: "tab2" }
        ],
        tabsList2: [
          { label: "Example Tab 1", slot: "tab1" },
          { label: "Example Tab 2", slot: "tab2" }
        ],
        tabsList3: [
          { label: "Example Tab 1", slot: "tab1" },
          { label: "Example Tab 2", slot: "tab2" }
        ],

        
      }
    }
  }
  </script> -->



