<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <crudOperation :permission="permission" />
      <!--表单组件-->
      <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
          <el-form-item label="怪物ID">
            <el-input v-model="form.id" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="迷宫ID" prop="mazeId">
            <el-input v-model="form.mazeId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="createTime" prop="createTime">
            <el-input v-model="form.createTime" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="isDelete" prop="isDelete">
            <el-input v-model="form.isDelete" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extStringOne">
            <el-input v-model="form.extStringOne" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extStringTwo">
            <el-input v-model="form.extStringTwo" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extStringThree">
            <el-input v-model="form.extStringThree" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extStringFour">
            <el-input v-model="form.extStringFour" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extStringFive">
            <el-input v-model="form.extStringFive" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extDecimalOne">
            <el-input v-model="form.extDecimalOne" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extDecimalTwo">
            <el-input v-model="form.extDecimalTwo" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extDecimalThree">
            <el-input v-model="form.extDecimalThree" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extDecimalFour">
            <el-input v-model="form.extDecimalFour" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="extDecimalFive">
            <el-input v-model="form.extDecimalFive" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="怪物名" prop="name">
            <el-input v-model="form.name" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="经验值" prop="experience">
            <el-input v-model="form.experience" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="金钱" prop="money">
            <el-input v-model="form.money" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="爆率" prop="item">
            <el-input v-model="form.item" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="爆率等级" prop="itemRate">
            <el-input v-model="form.itemRate" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="生命值" prop="hitPoints">
            <el-input v-model="form.hitPoints" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="速度">
            <el-input v-model="form.speed" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="暴击率">
            <el-input v-model="form.criticalChance" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="护甲">
            <el-input v-model="form.armorClass" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="伤害">
            <el-input v-model="form.damage" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="暴击伤害">
            <el-input v-model="form.criticalDamage" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="等级">
            <el-input v-model="form.level" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否是boss级别">
            <el-input v-model="form.isBoss" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="类型">
            <el-input v-model="form.type" style="width: 370px;" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="crud.cancelCU">取消</el-button>
          <el-button :loading="crud.status.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
        </div>
      </el-dialog>
      <!--表格渲染-->
      <el-table ref="table" v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="怪物ID" />
        <el-table-column prop="mazeId" label="迷宫ID" />
        <el-table-column prop="createTime" label="createTime" />
        <el-table-column prop="isDelete" label="isDelete" />
        <el-table-column prop="extStringOne" label="extStringOne" />
        <el-table-column prop="extStringTwo" label="extStringTwo" />
        <el-table-column prop="extStringThree" label="extStringThree" />
        <el-table-column prop="extStringFour" label="extStringFour" />
        <el-table-column prop="extStringFive" label="extStringFive" />
        <el-table-column prop="extDecimalOne" label="extDecimalOne" />
        <el-table-column prop="extDecimalTwo" label="extDecimalTwo" />
        <el-table-column prop="extDecimalThree" label="extDecimalThree" />
        <el-table-column prop="extDecimalFour" label="extDecimalFour" />
        <el-table-column prop="extDecimalFive" label="extDecimalFive" />
        <el-table-column prop="name" label="怪物名" />
        <el-table-column prop="experience" label="经验值" />
        <el-table-column prop="money" label="金钱" />
        <el-table-column prop="item" label="爆率" />
        <el-table-column prop="itemRate" label="爆率等级" />
        <el-table-column prop="hitPoints" label="生命值" />
        <el-table-column prop="speed" label="速度" />
        <el-table-column prop="criticalChance" label="暴击率" />
        <el-table-column prop="armorClass" label="护甲" />
        <el-table-column prop="damage" label="伤害" />
        <el-table-column prop="criticalDamage" label="暴击伤害" />
        <el-table-column prop="level" label="等级" />
        <el-table-column prop="isBoss" label="是否是boss级别" />
        <el-table-column prop="type" label="类型" />
        <el-table-column v-if="checkPer(['admin','gameMonster:edit','gameMonster:del'])" label="操作" width="150px" align="center">
          <template slot-scope="scope">
            <udOperation
              :data="scope.row"
              :permission="permission"
            />
          </template>
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <pagination />
    </div>
  </div>
</template>

<script>
import crudGameMonster from '@/api/gameMonster'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'

const defaultForm = { id: null, mazeId: null, createTime: null, isDelete: null, extStringOne: null, extStringTwo: null, extStringThree: null, extStringFour: null, extStringFive: null, extDecimalOne: null, extDecimalTwo: null, extDecimalThree: null, extDecimalFour: null, extDecimalFive: null, name: null, experience: null, money: null, item: null, itemRate: null, hitPoints: null, speed: null, criticalChance: null, armorClass: null, damage: null, criticalDamage: null, level: null, isBoss: null, type: null }
export default {
  name: 'GameMonster',
  components: { pagination, crudOperation, rrOperation, udOperation },
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
        ]
      }}
  },
  methods: {
    // 钩子：在获取表格数据之前执行，false 则代表不获取数据
    [CRUD.HOOK.beforeRefresh]() {
      return true
    }
  }
}
</script>

<style scoped>

</style>
