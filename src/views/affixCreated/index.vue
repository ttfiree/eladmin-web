<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <crudOperation :permission="permission" />
      <!--表单组件-->
      <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
          <el-form-item label="属性ID">
            <el-input v-model="form.id" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="角色id">
            <el-input v-model="form.charId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备id">
            <el-input v-model="form.armId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="武器id">
            <el-input v-model="form.weaponId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否装备">
            <el-input v-model="form.isEquip" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性名称">
            <el-input v-model="form.name" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="版本">
            <el-input v-model="form.version" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否可生成">
            <el-input v-model="form.spawnable" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否稀有属性">
            <el-input v-model="form.rare" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最小等级">
            <el-input v-model="form.level" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最大等级">
            <el-input v-model="form.maxlevel" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备等级要求">
            <el-input v-model="form.levelreq" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否职业专属">
            <el-input v-model="form.classspecific" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="职业名称">
            <el-input v-model="form.class" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="职业等级要求">
            <el-input v-model="form.classlevelreq" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="生成频率">
            <el-input v-model="form.frequency" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性分组">
            <el-input v-model="form.groups" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性1代码">
            <el-input v-model="form.mod1code" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性1参数">
            <el-input v-model="form.mod1param" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性1最小值">
            <el-input v-model="form.mod1min" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性1最大值">
            <el-input v-model="form.mod1max" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性2代码">
            <el-input v-model="form.mod2code" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性2参数">
            <el-input v-model="form.mod2param" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性2最小值">
            <el-input v-model="form.mod2min" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性2最大值">
            <el-input v-model="form.mod2max" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性3代码">
            <el-input v-model="form.mod3code" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性3参数">
            <el-input v-model="form.mod3param" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性3最小值">
            <el-input v-model="form.mod3min" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性3最大值">
            <el-input v-model="form.mod3max" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性转化">
            <el-input v-model="form.transform" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性转化颜色">
            <el-input v-model="form.transformcolor" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品类型1">
            <el-input v-model="form.itype1" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品类型2">
            <el-input v-model="form.itype2" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品类型3">
            <el-input v-model="form.itype3" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品类型4">
            <el-input v-model="form.itype4" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品类型5">
            <el-input v-model="form.itype5" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品类型6">
            <el-input v-model="form.itype6" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品类型7">
            <el-input v-model="form.itype7" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备类型1">
            <el-input v-model="form.etype1" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备类型2">
            <el-input v-model="form.etype2" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备类型3">
            <el-input v-model="form.etype3" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备类型4">
            <el-input v-model="form.etype4" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备类型5">
            <el-input v-model="form.etype5" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性值除数">
            <el-input v-model="form.divide" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性值乘数">
            <el-input v-model="form.multiply" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="属性值增量">
            <el-input v-model="form.addAffix" style="width: 370px;" />
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
        <el-table-column prop="id" label="属性ID" />
        <el-table-column prop="charId" label="角色id" />
        <el-table-column prop="armId" label="装备id" />
        <el-table-column prop="weaponId" label="武器id" />
        <el-table-column prop="isEquip" label="是否装备" />
        <el-table-column prop="name" label="属性名称" />
        <el-table-column prop="version" label="版本" />
        <el-table-column prop="spawnable" label="是否可生成" />
        <el-table-column prop="rare" label="是否稀有属性" />
        <el-table-column prop="level" label="最小等级" />
        <el-table-column prop="maxlevel" label="最大等级" />
        <el-table-column prop="levelreq" label="装备等级要求" />
        <el-table-column prop="classspecific" label="是否职业专属" />
        <el-table-column prop="class" label="职业名称" />
        <el-table-column prop="classlevelreq" label="职业等级要求" />
        <el-table-column prop="frequency" label="生成频率" />
        <el-table-column prop="groups" label="属性分组" />
        <el-table-column prop="mod1code" label="属性1代码" />
        <el-table-column prop="mod1param" label="属性1参数" />
        <el-table-column prop="mod1min" label="属性1最小值" />
        <el-table-column prop="mod1max" label="属性1最大值" />
        <el-table-column prop="mod2code" label="属性2代码" />
        <el-table-column prop="mod2param" label="属性2参数" />
        <el-table-column prop="mod2min" label="属性2最小值" />
        <el-table-column prop="mod2max" label="属性2最大值" />
        <el-table-column prop="mod3code" label="属性3代码" />
        <el-table-column prop="mod3param" label="属性3参数" />
        <el-table-column prop="mod3min" label="属性3最小值" />
        <el-table-column prop="mod3max" label="属性3最大值" />
        <el-table-column prop="transform" label="属性转化" />
        <el-table-column prop="transformcolor" label="属性转化颜色" />
        <el-table-column prop="itype1" label="物品类型1" />
        <el-table-column prop="itype2" label="物品类型2" />
        <el-table-column prop="itype3" label="物品类型3" />
        <el-table-column prop="itype4" label="物品类型4" />
        <el-table-column prop="itype5" label="物品类型5" />
        <el-table-column prop="itype6" label="物品类型6" />
        <el-table-column prop="itype7" label="物品类型7" />
        <el-table-column prop="etype1" label="装备类型1" />
        <el-table-column prop="etype2" label="装备类型2" />
        <el-table-column prop="etype3" label="装备类型3" />
        <el-table-column prop="etype4" label="装备类型4" />
        <el-table-column prop="etype5" label="装备类型5" />
        <el-table-column prop="divide" label="属性值除数" />
        <el-table-column prop="multiply" label="属性值乘数" />
        <el-table-column prop="addAffix" label="属性值增量" />
        <el-table-column v-if="checkPer(['admin','gameAffixCreated:edit','gameAffixCreated:del'])" label="操作" width="150px" align="center">
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
import crudGameAffixCreated from '@/api/gameAffixCreated'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'

const defaultForm = { id: null, charId: null, armId: null, weaponId: null, isEquip: null, name: null, version: null, spawnable: null, rare: null, level: null, maxlevel: null, levelreq: null, classspecific: null, class: null, classlevelreq: null, frequency: null, groups: null, mod1code: null, mod1param: null, mod1min: null, mod1max: null, mod2code: null, mod2param: null, mod2min: null, mod2max: null, mod3code: null, mod3param: null, mod3min: null, mod3max: null, transform: null, transformcolor: null, itype1: null, itype2: null, itype3: null, itype4: null, itype5: null, itype6: null, itype7: null, etype1: null, etype2: null, etype3: null, etype4: null, etype5: null, divide: null, multiply: null, addAffix: null }
export default {
  name: 'GameAffixCreated',
  components: { pagination, crudOperation, rrOperation, udOperation },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  cruds() {
    return CRUD({ title: 'affixCreated', url: 'api/gameAffixCreated', idField: 'id', sort: 'id,desc', crudMethod: { ...crudGameAffixCreated }})
  },
  data() {
    return {
      permission: {
        add: ['admin', 'gameAffixCreated:add'],
        edit: ['admin', 'gameAffixCreated:edit'],
        del: ['admin', 'gameAffixCreated:del']
      },
      rules: {
      }    }
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
