<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <el-button
        class="filter-item"
        size="mini"
        type="warning"
        icon="el-icon-download"
        @click="fight"
      >战斗</el-button>
      <el-button
        class="filter-item"
        size="mini"
        type="warning"
        icon="el-icon-download"
        @click="drop"
      >掉落</el-button>

      <div >
        <itemdisplay>
          <template #name ><p v-html="eqName"></p></template>
          <template #tooltip>
            <div v-for="(item, index) in items" :key="index">
              <p v-html="item"></p>
            </div>
          </template>
        </itemdisplay>
      </div>

    </div>
  </div>
</template>

<script>
import crudGameMonster, { drop } from '@/api/gameMonster'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
import { fight, map } from '../../api/gameMonster'
import itemdisplay from '../armors/show.vue'
import Center from '@/views/system/user/center.vue'
import {ref} from "vue";
const defaultForm = { id: null, mazeId: null, createTime: null, isDelete: null, extStringOne: null, extStringTwo: null, extStringThree: null, extStringFour: null, extStringFive: null, extDecimalOne: null, extDecimalTwo: null, extDecimalThree: null, extDecimalFour: null, extDecimalFive: null, name: null, experience: null, money: null, item: null, itemRate: null, hitPoints: null }
export default {
  name: 'GameMonster',
  components: { Center, pagination, crudOperation, rrOperation, udOperation, itemdisplay },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  cruds() {
    return CRUD({ title: 'monster', url: 'api/gameMonster', idField: 'id', sort: 'id,desc', crudMethod: { ...crudGameMonster }})
  },
  data() {
    return {
      permission: {
        add: ['admin', 'gameMonster:add'],
        edit: ['admin', 'gameMonster:edit'],
        del: ['admin', 'gameMonster:del']
      },
      editorContent: '11111',
      servers: [],
      rules: {
        mazeId: [
          { required: true, message: '迷宫ID不能为空', trigger: 'blur' }
        ],
        createTime: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        isDelete: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '怪物名不能为空', trigger: 'blur' }
        ],
        experience: [
          { required: true, message: '经验值不能为空', trigger: 'blur' }
        ],
        money: [
          { required: true, message: '金钱不能为空', trigger: 'blur' }
        ],
        item: [
          { required: true, message: '爆率不能为空', trigger: 'blur' }
        ],
        itemRate: [
          { required: true, message: '爆率等级不能为空', trigger: 'blur' }
        ],
        hitPoints: [
          { required: true, message: '生命值不能为空', trigger: 'blur' }
        ],
        deploys: [
          { required: true, message: '地图不能为空', trigger: 'blur' }
        ]
      }}
    // 给地图下拉框设置初始值
  },
  setup() {
    const items = ref([]);
    const eqName = ref('<p>这是一个 HTML 字符串</p>');
    const namecolor = ref('#ffdead');
    return {
      items,
      eqName,
      namecolor
    };
  },
  // 初始化调用map接口
  created() {
    map().then(res => {
      for (const i in res.data) {
        this.servers.push({
          id: res.data[i].level,
          name: res.data[i].name + ' 最高等级：' + res.data[i].level
        })
      }
      console.log(this.servers)
    })

    // 输出 Map 对象
    // 遍历res给servers赋值
  },
  methods: {
    // 钩子：在获取表格数据之前执行，false 则代表不获取数据
    [CRUD.HOOK.beforeRefresh]() {
      return true
    },
    fight() {
      fight().then(res => {
        // 打印日志
        console.log(res.battleLog)
      })
    }, drop() {
      drop().then(res => {
        // 打印日志
        console.log(res.statsHtml)
        console.log(res.nameHtml)
        let statsHtml = ''
        this.items =res.statsHtml
        console.log(this.items)
        this.eqName = res.nameHtml;
      })
    }
  }
}
</script>

<style scoped>

</style>
