  <template>
    <div :class="customClass">
       <i :class="icon"></i>
  <P>{{ alert }}</P>
   <div class="flex justify-between items-center">
    <h1 class="font-[500] ">{{ alerth }}</h1>
     <p class=" bg-white rounded-[5px] " :class="spanClass"> {{newe}}</p>
       
   </div>
   
  
  <P>{{ alertContent }}</P>
  <slot></slot>

    </div>


    
  

  </template>

  <script>

  export default {
    props:{
        alert:{
            type:String,
            default:''
        },
        newe:{
            type:String,
            default:''
        },
        alertContent:{
            type:String,
            default:''
        },
        alerth:{
            type:String,
            default:''
        },
        customClass:{
            type:String,
            default:''
        },
        spanClass:{
            type:String,
            default:''
        },
         icon: {
      type: String,
      required: true
    }
    }

    

  };
  </script>