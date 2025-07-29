<template>
  <div
    class="flex flex-col justify-between lg:flex-row md:flex-row absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0 lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px]"
  >
    <div class="flex flex-col w-full">
      <div class="flex justify-between">
        <input
          class="inline-block max-w-[200px] mb-10 border focus:outline-none focus:ring"
          type="text"
          placeholder="search"
          v-model="searching"
        />
        <div
          class="flex justfify-center items-center gap-4 text-[16px] font-[500]"
        >
          <label class="flex mr-2 items-center">
            <input
              type="radio"
              name="show"
              checked
              v-model="radioFilter"
              value="all"
            />
            <span>show All</span>
          </label>

          <label class="flex ml-2 items-center">
            <input
              type="radio"
              name="show"
              value="today"
              v-model="radioFilter"
            />
            <span>Today</span>
          </label>

          <label class="flex ml-2 items-center">
            <input
              type="radio"
              name="show"
              value="past"
              v-model="radioFilter"
            />
            <span>Past</span>
          </label>
        </div>
      </div>

      <table class="border-collapse border border-teal-500 w-full">
        <thead>
          <tr class="bg-teal-100 text-teal-700">
            <th class="border border-teal-500 py-2 text-left">Name</th>
            <th class="border border-teal-500 py-2 text-left">Second Name</th>
            <th class="border border-teal-500 py-2 text-left">Gender</th>
            <th class="border border-teal-500 py-2 text-left">Status</th>
            <th class="border border-teal-500 py-2 text-left">Location</th>
            <th class="border border-teal-500 py-2 text-left">
              Joined the Team
            </th>
            <th class="border border-teal-500 py-2 text-left">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detail in filteredDetails" :key="detail">
            <td class="border border-teal-500 px-4 py-2">{{ detail.name }}</td>
            <td class="border border-teal-500 px-4 py-2">
              {{ detail.second }}
            </td>
            <td class="border border-teal-500 px-4 py-2">
              {{ detail.gender }}
            </td>
            <td :class="detail.status === 'Active'? 'text-green-500' : 'text-red-500'" class="border border-teal-500 px-4  py-2">
              {{ detail.status }}
            </td>
            <td class="border border-teal-500 px-4 py-2">
              {{ detail.location }}
            </td>
            <td class="border border-teal-500 px-4 py-2">
              {{ detail.joined }}
            </td>
            <td class="border border-teal-500 px-4 py-2">{{ detail.age }}</td>
          </tr>

          <tr v-if="filteredDetails.length === 0">
    <td colspan="7" class="text-center text-red-500 py-4">
      No matching results found
    </td>
  </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searching: "",
      radioFilter: "all",
      details: [
        {
          name: "maxamad",
          second: "cali",
          location: "mogadisho",
          age: 21,
          gender: "Rag",
          status: "Active",
          joined: "5-12-2025",
        },
        {
          name: "cali",
          second: "farax",
          location: "afgooye",
          age: 31,
          gender: "Rag",
          status: "Active",
          joined: "2025-07-28",
        },
        {
          name: "caasho",
          second: "farax",
          location: "afgooye",
          age: 21,
          gender: "Cumar",
          status: "inactive",
          joined: "2025-07-28",
        },
        {
          name: "cayni",
          second: "faraxan",
          location: "mogadisho",
          age: 19,
          gender: "dumar  ",
          status: "inactive",
          joined: "2025-07-28",
        },
        {
          name: "Warsame",
          second: "ciise",
          location: "mogadisho",
          age: 25,
          gender: "Rag",
          status: "Active",
          joined: "13-5-2023",
        },
        {
          name: "hidaayo",
          second: "cali",
          location: "howlWadaag",
          age: 18,
          gender: "cumar",
          status: "inactive",
          joined: "1-2-2024",
        },
      ],
    };
  },
 
  computed: {
    filteredDetails() {
      const today = new Date();
      const searchLower = this.searching.trim().toLowerCase();

      // Start with date filtering
      let filteredByDate;

      switch (this.radioFilter) {
        case "today":
          filteredByDate = this.details.filter((detail) => {
            const joinedDate = new Date(detail.joined);
            return joinedDate.toDateString() === today.toDateString();
          });
          break;

        case "past":
          filteredByDate = this.details.filter((detail) => {
            const joinedDate = new Date(detail.joined);
            return joinedDate < today;
          });
          break;

        case "all":
        default:
          filteredByDate = this.details;
          break;
      }

      // Then filter by search text if any
      if (searchLower === "") {
        return filteredByDate; // no search, return only date-filtered
      }

      return filteredByDate.filter((detail) => {
        return (
          detail.name.toLowerCase().includes(searchLower) ||
          detail.second.toLowerCase().includes(searchLower) ||
          detail.location.toLowerCase().includes(searchLower) ||
          detail.gender.toLowerCase().includes(searchLower) ||
          detail.status.toLowerCase().includes(searchLower)

        
        );
      });
    },
  },
};
</script>