<template>
  <span>{{switchState}}</span>
</template>

<script>
export default {
  name: 'ObnizSwitchState',
  data: function(){
    return {
      switchState: "undefined"
    }
  },
  props: {
    obniz : Object
  },
  created : function() {
    if (this.obniz.connectionState === "connected") {
      this.setupObniz();
    } else {
      this.obniz.on('connect', () => {
        this.setupObniz();
      })
    }
  },
  methods : {
    setupObniz : function(){
      this.obniz.switch.onchange = (state) => {
        this.switchState = state;
      }
    }
  }

}
</script>
