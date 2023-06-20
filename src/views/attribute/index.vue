<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <crudOperation :permission="permission" />
      <!--表单组件-->
      <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
          <el-form-item label="角色ID" prop="id">
            <el-input v-model="form.id" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="力量" prop="strength">
            <el-input v-model="form.strength" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="敏捷" prop="dexterity">
            <el-input v-model="form.dexterity" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="体质" prop="constitution">
            <el-input v-model="form.constitution" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="智力" prop="intelligence">
            <el-input v-model="form.intelligence" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="感知" prop="wisdom">
            <el-input v-model="form.wisdom" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="魅力" prop="charisma">
            <el-input v-model="form.charisma" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="基础伤害" prop="damage">
            <el-input v-model="form.damage" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻速" prop="attactSpeed">
            <el-input v-model="form.attactSpeed" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="暴击" prop="criticalChance">
            <el-input v-model="form.criticalChance" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="爆伤" prop="criticalDamage">
            <el-input v-model="form.criticalDamage" style="width: 370px;" />
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
          <el-form-item label="生命值">
            <el-input v-model="form.hitPoints" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="护甲值">
            <el-input v-model="form.armorClass" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="迷宫id">
            <el-input v-model="form.mazeid" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="金钱加成">
            <el-input v-model="form.moneyPlus" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="经验加成">
            <el-input v-model="form.expPlus" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="掉率加成">
            <el-input v-model="form.itemPlus" style="width: 370px;" />
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
        <el-table-column prop="id" label="角色ID" />
        <el-table-column prop="strength" label="力量" />
        <el-table-column prop="dexterity" label="敏捷" />
        <el-table-column prop="constitution" label="体质" />
        <el-table-column prop="intelligence" label="智力" />
        <el-table-column prop="wisdom" label="感知" />
        <el-table-column prop="charisma" label="魅力" />
        <el-table-column prop="damage" label="基础伤害" />
        <el-table-column prop="attactSpeed" label="攻速" />
        <el-table-column prop="criticalChance" label="暴击" />
        <el-table-column prop="criticalDamage" label="爆伤" />
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
        <el-table-column prop="hitPoints" label="生命值" />
        <el-table-column prop="armorClass" label="护甲值" />
        <el-table-column prop="mazeid" label="迷宫id" />
        <el-table-column prop="moneyPlus" label="金钱加成" />
        <el-table-column prop="expPlus" label="经验加成" />
        <el-table-column prop="itemPlus" label="掉率加成" />
        <el-table-column v-if="checkPer(['admin','gameAttribute:edit','gameAttribute:del'])" label="操作" width="150px" align="center">
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
import crudGameAttribute from '@/api/gameAttribute'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'

const defaultForm = { id: null, strength: null, dexterity: null, constitution: null, intelligence: null, wisdom: null, charisma: null, damage: null, attactSpeed: null, criticalChance: null, criticalDamage: null, extStringOne: null, extStringTwo: null, extStringThree: null, extStringFour: null, extStringFive: null, extDecimalOne: null, extDecimalTwo: null, extDecimalThree: null, extDecimalFour: null, extDecimalFive: null, hitPoints: null, armorClass: null, mazeid: null, moneyPlus: null, expPlus: null, itemPlus: null }
export default {
  name: 'GameAttribute',
  components: { pagination, crudOperation, rrOperation, udOperation },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  cruds() {
    return CRUD({ title: 'attribute', url: 'api/gameAttribute', idField: 'id', sort: 'id,desc', crudMethod: { ...crudGameAttribute }})
  },
  data() {
    return {
      permission: {
        add: ['admin', 'gameAttribute:add'],
        edit: ['admin', 'gameAttribute:edit'],
        del: ['admin', 'gameAttribute:del']
      },
      rules: {
        id: [
          { required: true, message: '角色ID不能为空', trigger: 'blur' }
        ],
        strength: [
          { required: true, message: '力量不能为空', trigger: 'blur' }
        ],
        dexterity: [
          { required: true, message: '敏捷不能为空', trigger: 'blur' }
        ],
        constitution: [
          { required: true, message: '体质不能为空', trigger: 'blur' }
        ],
        intelligence: [
          { required: true, message: '智力不能为空', trigger: 'blur' }
        ],
        wisdom: [
          { required: true, message: '感知不能为空', trigger: 'blur' }
        ],
        charisma: [
          { required: true, message: '魅力不能为空', trigger: 'blur' }
        ],
        damage: [
          { required: true, message: '基础伤害不能为空', trigger: 'blur' }
        ],
        attactSpeed: [
          { required: true, message: '攻速不能为空', trigger: 'blur' }
        ],
        criticalChance: [
          { required: true, message: '暴击不能为空', trigger: 'blur' }
        ],
        criticalDamage: [
          { required: true, message: '爆伤不能为空', trigger: 'blur' }
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
