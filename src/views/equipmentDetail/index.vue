<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <crudOperation :permission="permission" />
      <!--表单组件-->
      <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
          <el-form-item label="ID">
            <el-input v-model="form.id" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备ID 关联game_armors_created或者game_affix_created">
            <el-input v-model="form.itemId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="角色id">
            <el-input v-model="form.charId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="类型">
            <el-input v-model="form.equipType" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="装备代码">
            <el-input v-model="form.code" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="防御值">
            <el-input v-model="form.ac" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="防御值加成">
            <el-input v-model="form.acPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="减少敌人魔法抵抗">
            <el-input v-model="form.redMag" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="力量">
            <el-input v-model="form.str" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="敏捷">
            <el-input v-model="form.dex" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="体力">
            <el-input v-model="form.vit" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="精力">
            <el-input v-model="form.enr" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="魔法值">
            <el-input v-model="form.mana" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="魔法值加成">
            <el-input v-model="form.manaPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="生命值">
            <el-input v-model="form.hp" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="生命值加成">
            <el-input v-model="form.hpPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻击值">
            <el-input v-model="form.att" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="格挡率">
            <el-input v-model="form.block" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最小伤害">
            <el-input v-model="form.dmgMin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最大伤害">
            <el-input v-model="form.dmgMax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="伤害加成">
            <el-input v-model="form.dmgPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="伤害转移为魔法值">
            <el-input v-model="form.dmgToMana" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="反伤">
            <el-input v-model="form.thorns" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻击速度1">
            <el-input v-model="form.swing1" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻击速度2">
            <el-input v-model="form.swing2" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻击速度3">
            <el-input v-model="form.swing3" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="金币加成">
            <el-input v-model="form.goldPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="魔法装备加成">
            <el-input v-model="form.magPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="体力回复">
            <el-input v-model="form.regenStam" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="魔法值回复">
            <el-input v-model="form.regenMana" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="吸取魔法值">
            <el-input v-model="form.manasteal" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="吸取生命值">
            <el-input v-model="form.lifesteal" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="无视防御值">
            <el-input v-model="form.ignoreAc" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="降低敌人防御值">
            <el-input v-model="form.reduceAc" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="禁止回复">
            <el-input v-model="form.noheal" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="减慢敌人速度">
            <el-input v-model="form.halfFreeze" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻击值加成">
            <el-input v-model="form.attPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="破甲">
            <el-input v-model="form.crush" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="敌人流血">
            <el-input v-model="form.bloody" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="减慢敌人速度">
            <el-input v-model="form.slow" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="吸取敌人体力">
            <el-input v-model="form.stamdrain" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="穿透敌人护甲">
            <el-input v-model="form.pierce" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品掉落率加成">
            <el-input v-model="form.itemPercent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="所有属性加成">
            <el-input v-model="form.allStats" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="获得经验值加成">
            <el-input v-model="form.addXp" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="击杀敌人回复生命值">
            <el-input v-model="form.healKill" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="伤害降低">
            <el-input v-model="form.dmgReduct" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="finalAc">
            <el-input v-model="form.finalAc" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="finalDmg">
            <el-input v-model="form.finalDmg" style="width: 370px;" />
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
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="itemId" label="装备ID 关联game_armors_created或者game_affix_created" />
        <el-table-column prop="charId" label="角色id" />
        <el-table-column prop="equipType" label="类型" />
        <el-table-column prop="code" label="装备代码" />
        <el-table-column prop="ac" label="防御值" />
        <el-table-column prop="acPercent" label="防御值加成" />
        <el-table-column prop="redMag" label="减少敌人魔法抵抗" />
        <el-table-column prop="str" label="力量" />
        <el-table-column prop="dex" label="敏捷" />
        <el-table-column prop="vit" label="体力" />
        <el-table-column prop="enr" label="精力" />
        <el-table-column prop="mana" label="魔法值" />
        <el-table-column prop="manaPercent" label="魔法值加成" />
        <el-table-column prop="hp" label="生命值" />
        <el-table-column prop="hpPercent" label="生命值加成" />
        <el-table-column prop="att" label="攻击值" />
        <el-table-column prop="block" label="格挡率" />
        <el-table-column prop="dmgMin" label="最小伤害" />
        <el-table-column prop="dmgMax" label="最大伤害" />
        <el-table-column prop="dmgPercent" label="伤害加成" />
        <el-table-column prop="dmgToMana" label="伤害转移为魔法值" />
        <el-table-column prop="thorns" label="反伤" />
        <el-table-column prop="swing1" label="攻击速度1" />
        <el-table-column prop="swing2" label="攻击速度2" />
        <el-table-column prop="swing3" label="攻击速度3" />
        <el-table-column prop="goldPercent" label="金币加成" />
        <el-table-column prop="magPercent" label="魔法装备加成" />
        <el-table-column prop="regenStam" label="体力回复" />
        <el-table-column prop="regenMana" label="魔法值回复" />
        <el-table-column prop="manasteal" label="吸取魔法值" />
        <el-table-column prop="lifesteal" label="吸取生命值" />
        <el-table-column prop="ignoreAc" label="无视防御值" />
        <el-table-column prop="reduceAc" label="降低敌人防御值" />
        <el-table-column prop="noheal" label="禁止回复" />
        <el-table-column prop="halfFreeze" label="减慢敌人速度" />
        <el-table-column prop="attPercent" label="攻击值加成" />
        <el-table-column prop="crush" label="破甲" />
        <el-table-column prop="bloody" label="敌人流血" />
        <el-table-column prop="slow" label="减慢敌人速度" />
        <el-table-column prop="stamdrain" label="吸取敌人体力" />
        <el-table-column prop="pierce" label="穿透敌人护甲" />
        <el-table-column prop="itemPercent" label="物品掉落率加成" />
        <el-table-column prop="allStats" label="所有属性加成" />
        <el-table-column prop="addXp" label="获得经验值加成" />
        <el-table-column prop="healKill" label="击杀敌人回复生命值" />
        <el-table-column prop="dmgReduct" label="伤害降低" />
        <el-table-column prop="finalAc" label="finalAc" />
        <el-table-column prop="finalDmg" label="finalDmg" />
        <el-table-column v-if="checkPer(['admin','gameEquipmentDetail:edit','gameEquipmentDetail:del'])" label="操作" width="150px" align="center">
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
import crudGameEquipmentDetail from '@/api/gameEquipmentDetail'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'

const defaultForm = { id: null, itemId: null, charId: null, equipType: null, code: null, ac: null, acPercent: null, redMag: null, str: null, dex: null, vit: null, enr: null, mana: null, manaPercent: null, hp: null, hpPercent: null, att: null, block: null, dmgMin: null, dmgMax: null, dmgPercent: null, dmgToMana: null, thorns: null, swing1: null, swing2: null, swing3: null, goldPercent: null, magPercent: null, regenStam: null, regenMana: null, manasteal: null, lifesteal: null, ignoreAc: null, reduceAc: null, noheal: null, halfFreeze: null, attPercent: null, crush: null, bloody: null, slow: null, stamdrain: null, pierce: null, itemPercent: null, allStats: null, addXp: null, healKill: null, dmgReduct: null, finalAc: null, finalDmg: null }
export default {
  name: 'GameEquipmentDetail',
  components: { pagination, crudOperation, rrOperation, udOperation },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  cruds() {
    return CRUD({ title: 'equipmentDetail', url: 'api/gameEquipmentDetail', idField: 'id', sort: 'id,desc', crudMethod: { ...crudGameEquipmentDetail }})
  },
  data() {
    return {
      permission: {
        add: ['admin', 'gameEquipmentDetail:add'],
        edit: ['admin', 'gameEquipmentDetail:edit'],
        del: ['admin', 'gameEquipmentDetail:del']
      },
      rules: {
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
