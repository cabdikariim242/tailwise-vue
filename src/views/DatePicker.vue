<template>
  <BaseCard
    class="flex w-full mt-[402px] md:ml-[150px] ml-[10px] lg:ml-[100px] z-[8] lg:mr-[350px] md:mr-[150px] mr-[10px]"
  >
    <div class="flex w-full flex-col gap-4 justify-center relative">
      <label class="text-[gold]" for="date">Pick Date</label>

       input field 
      <input
        class="border focus:outline-none focus:ring p-3 py-1 placeholder:text-[#ac9b3d]"
        type="text"
        placeholder="pick date"
        v-model="selectedDate"
        @focus="show = !show"
        readonly
      />

       datepicker dropdown 
      <div v-if="show" class=" bg-white border rounded  mt-2 p-4 z-10">
         Month + Year Selectors 
        <div class="flex gap-3 mb-3">
          <select class="p-2 border rounded" v-model="selectedMonth">
            <option v-for="monthName in monthNames" :key="monthName">{{ monthName }}</option>
          </select>
          <select class="p-2 border rounded" v-model="selectedYear">
            <option v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>

         Calendar Grid 
        <div class="grid grid-cols-7 text-center font-bold mb-2">
          <div v-for="day in weekDays" :key="day">{{ day }}</div>
        </div>
        <div class="grid grid-cols-7 text-center">
           Blank cells for days before the 1st 
          <div v-for="n in firstDayOfMonth" :key="'empty'+n"></div>

           Real days 
          <div
            v-for="day in daysInMonth"
            :key="day"
            class="p-2 cursor-pointer rounded hover:bg-blue-200"
            :class="{'bg-blue-500 text-white': selectedDay === day}"
            @click="selectDay(day)"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/newcomponents/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      show: false,
      selectedDate: "",
      selectedMonth: "January",
      selectedDay: null,
      selectedYear: new Date().getFullYear(),
      years: [],
      monthNames: [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
      ],
      weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  },
  computed: {
    // numeric month index
    monthIndex() {
      return this.monthNames.indexOf(this.selectedMonth);
    },
    // number of days in selected month/year
    daysInMonth() {
      return new Date(this.selectedYear, this.monthIndex + 1, 0).getDate();
    },
    // weekday index of the first day of the month (0=Sun,...6=Sat)
    firstDayOfMonth() {
      return new Date(this.selectedYear, this.monthIndex, 1).getDay();
    }
  },
  methods: {
    selectDay(day) {
      this.selectedDay = day;
      this.selectedDate = `${this.selectedYear}-${this.monthIndex + 1}-${day}`;
      this.show = false; // close after selecting
    }
  },
  mounted() {
    const currentYear = new Date().getFullYear();
    const startYear = 2000;
    const endYear = currentYear + 20;
    for (let y = startYear; y <= endYear; y++) {
      this.years.push(y);
    }
  }
};
</script>























  <!-- <template>
   <div
    class="flex flex-col mt-[502px] md:ml-[150px] ml-[10px] lg:ml-[450px] z-[8] lg:mr-[150px] md:mr-[150px] mr-[10px]"
  >
     <!-- Label     <label class="block mb-2 font-medium">
      {{ label }}
    </label>

     <!-- Input f    <input
      type="text"
      v-model="selectedDateTime"
      placeholder="Select date and time"
      readonly
      class="w-full p-2 border rounded cursor-pointer"
      @focus="showPicker = true"
    />

     <!-- Date Pi    <div
      v-if="showPicker"
      class="absolute mt-[60px] md:ml-[150px] ml-[10px] lg:ml-[20px]  lg:mr-[150px] md:mr-[150px] mr-[10px] bg-white border rounded shadow p-4 z-10"
    >
       <!-- Month &       <div class="flex justify-between items-center mb-3">
        <button @click="prevMonth">◀</button>
        <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
        <button @click="nextMonth">▶</button>
      </div>

       <!--       <div class="grid grid-cols-7 text-center font-bold">
        <div v-for="day in days" :key="day">{{ day }}</div>
      </div>

       <!-- D      <div class="grid grid-cols-7 text-center">
        <div
          v-for="(date, index) in dates"
          :key="index"
          @click="selectDate(date)"
          class="p-1 cursor-pointer rounded hover:bg-blue-100"
          :class="{'bg-blue-500 text-white': date === selectedDay}"
        >
          {{ date }}
        </div>
      </div>

       <!-- Time Selec      <div class="flex justify-between mt-4">
        <input type="number" v-model="hour" min="0" max="23" class="w-16 border rounded p-1 text-center" />
        <input type="number" v-model="minute" min="0" max="59" class="w-16 border rounded p-1 text-center" />
        <button @click="confirmDate" class="bg-blue-500 text-white px-3 rounded">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label"],
  data() {
    return {
      showPicker: false,
      selectedDateTime: "",
      selectedDay: null,
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNames: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    };
  },
  computed: {
    dates() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      const dates = [];

      // Empty slots before the first day
      for (let i = 0; i < firstDay; i++) {
        dates.push("");
      }

      // Dates of the month
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push(i);
      }

      return dates;
    }
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    selectDate(day) {
      if (!day) return;
      this.selectedDay = day;
    },
    confirmDate() {
      if (!this.selectedDay) return;
      this.selectedDateTime = `${this.currentYear}-${this.currentMonth + 1}-${this.selectedDay} ${this.hour}:${this.minute}`;
      this.showPicker = false;
    }
  }
};
</script>

<style scoped>
/* Just a little styling for beginners */
<!-- </style> --->