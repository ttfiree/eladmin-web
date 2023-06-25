<template>
  <div class="itemdisplay" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
    <div class="item-name">
      <slot name="name"></slot>
    </div>
    <div class="item-text">
      <slot></slot>
    </div>
    <div class="tooltip" v-show="showTooltip">
      <div class="tooltip-name">
        <slot name="name"></slot>
      </div>
      <div class="tooltip-separator"></div>
      <slot name="tooltip"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTooltip: false
    }
  }
}
</script>

<style>
.itemdisplay {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;
  max-width: 500px;
  text-align: center;
}

.tooltip-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.tooltip-separator {
  height: 1px;
  margin: 5px 0;
  background-color: #fff;
}

.tooltip::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.8);
}

.itemdisplay:hover .tooltip {
  opacity: 1;
}
</style>
