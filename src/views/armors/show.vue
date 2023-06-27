<template>
  <div class="itemdisplay">
    <div ref="itemName" class="item-name" @mouseenter="showTooltipOnHover" v-html="item.nameHtml" />
    <div v-show="showTooltip" :style="{ left: tooltipLeft, top: tooltipTop }" class="tooltip-wrapper">
      <div ref="tooltip" class="tooltip">
        <div class="tooltip-name" v-html="item.nameHtml" />
        <div class="tooltip-content" :style="{ maxHeight: maxHeight }">
          <div v-for="(tooltipLine, index) in item.statsHtml" :key="index" class="tooltip-line" v-html="tooltipLine" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showTooltip: false,
      maxHeight: '80vh', // 设置最大高度为屏幕高度的50%
      tooltipWidth: null // 初始化tooltip框的宽度为null
    }
  },
  computed: {
    tooltipLeft() {
      if (!this.showTooltip) {
        return null
      }
      const tooltipWidth = this.tooltipWidth || 0 // 如果tooltipWidth为null，则将其设置为0
      const itemNameWidth = this.$refs.itemName.offsetWidth
      const itemNameLeft = this.$refs.itemName.getBoundingClientRect().left
      const tooltipLeft = itemNameLeft + itemNameWidth / 2 - tooltipWidth / 2 // 计算tooltip框的左侧坐标
      const screenRight = window.innerWidth // 获取屏幕右侧坐标
      const tooltipRight = tooltipLeft + tooltipWidth
      if (tooltipLeft < 0) {
        return 0
      } else if (tooltipRight > screenRight) {
        return screenRight - tooltipWidth
      } else {
        return tooltipLeft
      }
    },
    tooltipTop() {
      if (!this.showTooltip) {
        return null
      }
      const itemNameHeight = this.$refs.itemName.offsetHeight
      const itemNameTop = this.$refs.itemName.getBoundingClientRect().top
      const tooltipTop = itemNameTop + itemNameHeight
      const screenBottom = window.innerHeight + window.pageYOffset // 获取屏幕底部坐标
      const tooltipHeight = this.$refs.tooltip.offsetHeight
      if (tooltipTop + tooltipHeight > screenBottom) {
        return itemNameTop - tooltipHeight
      } else {
        return tooltipTop
      }
    }
  },
  mounted() {
    const tooltipWrapper = this.$el.querySelector('.tooltip-wrapper')
    tooltipWrapper.addEventListener('mouseleave', () => {
      this.showTooltip = false
    })
  },
  methods: {
    showTooltipOnHover() {
      this.showTooltip = true
      this.tooltipWidth = this.$refs.tooltip.offsetWidth // 获取tooltip框的宽度
    },
    hideTooltipOnLeave() {
      this.showTooltip = false
    }
  }
}
</script>

<style>
.itemdisplay {
  position: relative;
  display: inline-block;
}

.tooltip-wrapper {
  position: fixed;
}

.tooltip {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.16rem;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;
  max-width: 500px;
  text-align: center;
  border: 2px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px rgba(154, 143, 143, 0.5);
}

.tooltip-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.tooltip-content {
  overflow-y: auto;
}

.tooltip-line {
  margin-bottom: 5px;
}

.tooltip::before {
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
