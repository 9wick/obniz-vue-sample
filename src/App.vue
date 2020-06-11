<template>
  <div id="app">
    obniz state : {{connectedState}} <br/>
    <div>
      DisplayPrint :
      <ObnizDisplayInput v-bind:obniz="obniz"/>
    </div>
    <div>
      SwitchState:
      <ObnizSwitchState v-bind:obniz="obniz"/>
    </div>
  </div>
</template>

<script>
  import ObnizDisplayInput from './components/ObnizDisplayInput.vue'
  import ObnizSwitchState from './components/ObnizSwitchState.vue'
  import Obniz from 'obniz';


  export default {
    name: 'App',
    components: {
      ObnizDisplayInput,
      ObnizSwitchState
    },
    created: function () {
      this.obniz = new Obniz("OBNIZ_ID_HERE");
      this.obniz.on('connect', () => {
        this.connectedState = "connected";
      });
      this.obniz.on('close', () => {
        this.connectedState = "offline";
      });
    },
    data: () => {
      return {
        obniz: null,
        connectedState: "offline"
      };
    }

  }
</script>
