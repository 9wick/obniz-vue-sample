<template>
  <input @input="handleChange" />
</template>

<script>
export default {
  name: 'ObnizDisplayInput',
  props: {
    obniz : Object
  },
  methods: {
    handleChange : function(e){
      const text = e.target.value;
      if(this.obniz.connectionState === "connected"){
        this.obniz.display.clear();
        this.obniz.display.print(text);
      }
    }
  }
}
</script>

