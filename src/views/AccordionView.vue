<template>
   <div class="z-[8]  mt-[200px] lg:ml-[130px] md:ml-[130px] ml-[10px] lg:mr-[80px] md:mr-[50px] mr-[30px] ">
      <p class="text-white mr-[80px] lg:flex md:hidden hidden"><strong>Accordion</strong>   .  Explore our accordion component, effortless content organization and presentation!</p>

     <BaseCard>
  <div class="space-y-4">
    <h1 class="font-bold ml-[10px]">Basic Accordion</h1>
    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
      </p>
    </Accordion>

    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL">
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...      </p>
    </Accordion>
  </div>

  </BaseCard>




   <BaseCard>
  <div class="space-y-4">
    <h1 class="font-bold ml-[10px]">Boxed Accordion</h1>
    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL" :bordered="true">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
      </p>
    </Accordion>

    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL" :bordered="true">
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...      </p>
    </Accordion>
  </div>

  </BaseCard>
   </div>
</template>

<script>
import Accordion from '@/components/newcomponents/acordian.vue'
  import BaseCard  from '@/components/newcomponents/BaseCard.vue'

export default {
  name: "AccordionView",
  components: {
    Accordion,
    BaseCard,
  },
};
</script>
