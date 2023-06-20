<template>
  <div class="app-container">
    <el-button type="text" @click="fightbutton">战斗</el-button>
    <!--工具栏-->
    <div ref="editorContainer" v-html="editorContent" />
  </div>
</template>

<script>
import { fight } from '@/api/gameCharacter'
let battleTime = null
let co1 = null
let co2 = null
export default {
  name: 'GameCharacter',
  components: { },
  data() {
    return {
      editorContent: ''
    }
  },
  watch: {
    editorContent() {
      // 等待 DOM 更新完成后将 editorContainer 元素的滚动条滚动到底部
      this.$nextTick(() => {
        if (this.editorContainer) {
          console.log('chufa1')
          this.editorContainer.scrollTop = this.editorContainer.scrollHeight
        }
      })
    },
    clearText() {
      // 获取 editorContainer 元素
      const editorContainer = this.$refs.editorContainer
      // 获取每行的高度
      const lineHeight = parseInt(getComputedStyle(editorContainer).lineHeight)
      // 获取元素的高度
      const height = editorContainer.clientHeight
      // 计算行数
      const lines = Math.floor(height / lineHeight)
      // 如果行数超过最大行数，清空 editorContent
      if (lines > 200) {
        this.editorContent = ''
      }
    }
  },
  mounted() {
    // 等待元素渲染完成后获取 editorContainer 元素的引用
    this.$nextTick(() => {
      this.editorContainer = this.$refs.editorContainer
    })
    co1 = setInterval(() => {
      const now = new Date().getTime() // 获取当前时间的时间戳
      if (battleTime) {
        if (now >= battleTime) {
          this.editorContent += '继续战斗...' + '<br>'
          this.fightbutton()
          battleTime = null
        }
      }
    }, 1000) // 每秒钟检查一次
  },
  beforeDestroy() {
    clearInterval(co1) // 组件销毁前清除定时器
  },
  methods: {
    // 钩子：在获取表格数据之前执行，false 则代表不获取数据
    fightbutton() {
      fight().then(res => {
        battleTime = res.battleAgainTime
        const log = res.battleLog.split('END')
        let i = 0
        // 每隔0.5秒打印一行日志
        co2 = setInterval(() => {
          if (i < log.length - 1) {
            this.editorContent += '[' + new Date().toLocaleString() + '] ' + log[i] + '<br>'
            i++
          } else {
            if (battleTime) {
              this.editorContent += '下次战斗时间：' + new Date(battleTime).toLocaleString() + '<br>'
            }
            clearInterval(co2)
          }
        }, 500)
      })
    }
  }
}
</script>

<style scoped>

</style>
