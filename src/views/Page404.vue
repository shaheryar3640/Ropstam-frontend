<template>
  <div class="bannerbgimage">
    <NavBar> </NavBar>
    <div class="page-template-not-found">
      <div class="page-title text-center">
        <h1 class="text-center mb-3">
          Sorry, <strong class="border-green-full">something </strong>
          <strong class="text-green"> went wrong</strong>
        </h1>
        <span class="banner-desc text-center d-block mb-4"
          ><router-link to="/">Go Back</router-link>
          </span
        >
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue"
export default {
  name: "not-found",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.bannerbgimage {
  height: 100vh;
  background-image: url("data:image/svg+xml,%0A%3Csvg id='Group_3306' data-name='Group 3306' xmlns='http://www.w3.org/2000/svg' width='1920' height='1080.5' viewBox='0 0 1920 1080.5'%3E%3Cpath id='Path_11904' data-name='Path 11904' d='M0,0H1920V1080.5H0Z' fill='%23fbfbfb'/%3E%3Cg id='Group_2258' data-name='Group 2258' transform='translate(31 82.26)'%3E%3Cpath id='Path_9679' data-name='Path 9679' d='M322.423,285.084H222.033a6.526,6.526,0,0,1-6.533-6.533V178.133a6.526,6.526,0,0,1,6.533-6.533H322.452a6.526,6.526,0,0,1,6.533,6.533V278.552A6.569,6.569,0,0,1,322.423,285.084Z' transform='translate(122.267 156.901)' fill='blue' opacity='0.025'/%3E%3Cpath id='Path_9694' data-name='Path 9694' d='M325.428,288.274H222.216a6.709,6.709,0,0,1-6.716-6.716V178.316a6.709,6.709,0,0,1,6.716-6.716H325.457a6.709,6.709,0,0,1,6.716,6.716V281.557A6.754,6.754,0,0,1,325.428,288.274Z' transform='translate(1398.873 491.719)' fill='blue' opacity='0.025'/%3E%3Cpath id='Path_9680' data-name='Path 9680' d='M597.085,533.586H537.469a3.867,3.867,0,0,1-3.869-3.87V470.07a3.867,3.867,0,0,1,3.869-3.87h59.616a3.867,3.867,0,0,1,3.87,3.87v59.616A3.894,3.894,0,0,1,597.085,533.586Z' transform='translate(-110.632 -61.419)' fill='blue' opacity='0.025'/%3E%3Cpath id='Path_9693' data-name='Path 9693' d='M593.571,529.856H537.255A3.653,3.653,0,0,1,533.6,526.2V469.855a3.653,3.653,0,0,1,3.655-3.655h56.316a3.653,3.653,0,0,1,3.655,3.655v56.316A3.678,3.678,0,0,1,593.571,529.856Z' transform='translate(1175.306 284.669)' fill='blue' opacity='0.025'/%3E%3Cpath id='Path_9681' data-name='Path 9681' d='M1821.176,366.287h-69.665a7.6,7.6,0,0,1-7.611-7.611V289.011a7.6,7.6,0,0,1,7.611-7.611h69.665a7.6,7.6,0,0,1,7.611,7.611v69.665A7.582,7.582,0,0,1,1821.176,366.287Z' transform='translate(-702.338 184.299)' fill='blue' opacity='0.025'/%3E%3Cpath id='Path_9690' data-name='Path 9690' d='M1834.482,380.9h-81.661a8.911,8.911,0,0,1-8.922-8.922V290.322a8.911,8.911,0,0,1,8.922-8.922h81.661a8.911,8.911,0,0,1,8.921,8.922v81.661A8.887,8.887,0,0,1,1834.482,380.9Z' transform='translate(-1700.9 379.743)' fill='blue' opacity='0.025'/%3E%3Cpath id='Path_9682' data-name='Path 9682' d='M2062.488,508.272H1888.472A10.063,10.063,0,0,1,1878.4,498.2V453.472a10.063,10.063,0,0,1,10.072-10.072h174.016a10.063,10.063,0,0,1,10.073,10.072V498.2A10.1,10.1,0,0,1,2062.488,508.272Z' transform='translate(-793.277 74.766)' fill='blue' opacity='0.025'/%3E%3Cpath id='Path_9689' data-name='Path 9689' d='M2094.187,519.442H1890.207a11.8,11.8,0,0,1-11.807-11.807V455.207a11.8,11.8,0,0,1,11.807-11.807h203.981a11.8,11.8,0,0,1,11.807,11.807v52.428A11.844,11.844,0,0,1,2094.187,519.442Z' transform='translate(-1784.338 279.245)' fill='blue' opacity='0.025'/%3E%3Cg id='Group_1567' data-name='Group 1567' transform='translate(440.496 778.377)' opacity='0.025'%3E%3Cpath id='Path_9684' data-name='Path 9684' d='M238.744,1381.189a31.244,31.244,0,1,1,31.244-31.245A31.27,31.27,0,0,1,238.744,1381.189Zm0-47.3a16.059,16.059,0,1,0,16.059,16.059A16.089,16.089,0,0,0,238.744,1333.885Z' transform='translate(-207.5 -1318.7)' fill='blue'/%3E%3C/g%3E%3Cg id='Group_1572' data-name='Group 1572' transform='translate(79.863 191.13)' opacity='0.025'%3E%3Cpath id='Path_9684-2' data-name='Path 9684' d='M238.744,1381.189a31.244,31.244,0,1,1,31.244-31.245A31.27,31.27,0,0,1,238.744,1381.189Zm0-47.3a16.059,16.059,0,1,0,16.059,16.059A16.089,16.089,0,0,0,238.744,1333.885Z' transform='translate(-207.5 -1318.7)' fill='blue'/%3E%3C/g%3E%3Cg id='Group_1571' data-name='Group 1571' transform='translate(1385.94 758.884)' opacity='0.025'%3E%3Cpath id='Path_9684-3' data-name='Path 9684' d='M238.744,1381.189a31.244,31.244,0,1,1,31.244-31.245A31.27,31.27,0,0,1,238.744,1381.189Zm0-47.3a16.059,16.059,0,1,0,16.059,16.059A16.089,16.089,0,0,0,238.744,1333.885Z' transform='translate(-207.5 -1318.7)' fill='blue'/%3E%3C/g%3E%3Cg id='Group_2734' data-name='Group 2734' transform='translate(1126.94 696.884)' opacity='0.025'%3E%3Cpath id='Path_9684-4' data-name='Path 9684' d='M238.744,1381.189a31.244,31.244,0,1,1,31.244-31.245A31.27,31.27,0,0,1,238.744,1381.189Zm0-47.3a16.059,16.059,0,1,0,16.059,16.059A16.089,16.089,0,0,0,238.744,1333.885Z' transform='translate(-207.5 -1318.7)' fill='blue'/%3E%3C/g%3E%3Cg id='Group_2735' data-name='Group 2735' transform='translate(666.94 902.884)' opacity='0.025'%3E%3Cpath id='Path_9684-5' data-name='Path 9684' d='M238.744,1381.189a31.244,31.244,0,1,1,31.244-31.245A31.27,31.27,0,0,1,238.744,1381.189Zm0-47.3a16.059,16.059,0,1,0,16.059,16.059A16.089,16.089,0,0,0,238.744,1333.885Z' transform='translate(-207.5 -1318.7)' fill='blue'/%3E%3C/g%3E%3Cg id='Group_2736' data-name='Group 2736' transform='translate(1201.94 912.884)' opacity='0.025'%3E%3Cpath id='Path_9684-6' data-name='Path 9684' d='M238.744,1381.189a31.244,31.244,0,1,1,31.244-31.245A31.27,31.27,0,0,1,238.744,1381.189Zm0-47.3a16.059,16.059,0,1,0,16.059,16.059A16.089,16.089,0,0,0,238.744,1333.885Z' transform='translate(-207.5 -1318.7)' fill='blue'/%3E%3C/g%3E%3Cg id='Ellipse_62' data-name='Ellipse 62' transform='translate(607.145 531.397)' fill='none' stroke='blue' stroke-miterlimit='10' stroke-width='10' opacity='0.025'%3E%3Ccircle cx='20.712' cy='20.712' r='20.712' stroke='none'/%3E%3Ccircle cx='20.712' cy='20.712' r='15.712' fill='none'/%3E%3C/g%3E%3Cg id='Ellipse_67' data-name='Ellipse 67' transform='translate(451.195 129.34)' fill='none' stroke='blue' stroke-miterlimit='10' stroke-width='10' opacity='0.025'%3E%3Ccircle cx='20.712' cy='20.712' r='20.712' stroke='none'/%3E%3Ccircle cx='20.712' cy='20.712' r='15.712' fill='none'/%3E%3C/g%3E%3Cg id='Ellipse_440' data-name='Ellipse 440' transform='translate(992.195 222.34)' fill='none' stroke='blue' stroke-miterlimit='10' stroke-width='10' opacity='0.025'%3E%3Ccircle cx='20.712' cy='20.712' r='20.712' stroke='none'/%3E%3Ccircle cx='20.712' cy='20.712' r='15.712' fill='none'/%3E%3C/g%3E%3Cg id='Ellipse_65' data-name='Ellipse 65' transform='translate(1478.269 269.451)' fill='none' stroke='blue' stroke-miterlimit='10' stroke-width='10' opacity='0.025'%3E%3Ccircle cx='20.712' cy='20.712' r='20.712' stroke='none'/%3E%3Ccircle cx='20.712' cy='20.712' r='15.712' fill='none'/%3E%3C/g%3E%3Cg id='Ellipse_63' data-name='Ellipse 63' transform='translate(142.951 465.606)' fill='none' stroke='blue' stroke-miterlimit='10' stroke-width='10' opacity='0.025'%3E%3Ccircle cx='20.712' cy='20.712' r='20.712' stroke='none'/%3E%3Ccircle cx='20.712' cy='20.712' r='15.712' fill='none'/%3E%3C/g%3E%3Cg id='Ellipse_64' data-name='Ellipse 64' transform='translate(1773.111 489.973)' fill='none' stroke='blue' stroke-miterlimit='10' stroke-width='10' opacity='0.025'%3E%3Ccircle cx='20.712' cy='20.712' r='20.712' stroke='none'/%3E%3Ccircle cx='20.712' cy='20.712' r='15.712' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
}
.border-green-full {
  border-bottom: 2px solid #6cc04a;
}
.page-template-not-found {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
