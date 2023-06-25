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
          <el-form-item label="ID">
            <el-input v-model="form.itemId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="所属角色">
            <el-input v-model="form.charId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否已装备">
            <el-input v-model="form.isEquip" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="护甲名称">
            <el-input v-model="form.name" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="版本">
            <el-input v-model="form.version" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="紧凑保存">
            <el-input v-model="form.compactsave" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="稀有度">
            <el-input v-model="form.rarity" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="防御">
            <el-input v-model="form.minac" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="可生成">
            <el-input v-model="form.spawnable" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="吸收">
            <el-input v-model="form.absorbs" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻击速度">
            <el-input v-model="form.speed" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="需求力量">
            <el-input v-model="form.reqstr" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="格挡率">
            <el-input v-model="form.block" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="耐久度">
            <el-input v-model="form.durability" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="无耐久度">
            <el-input v-model="form.nodurability" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="等级">
            <el-input v-model="form.level" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="等级需求">
            <el-input v-model="form.levelreq" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="form.cost" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="赌博价格">
            <el-input v-model="form.gambleCost" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="代码">
            <el-input v-model="form.code" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="名称字符串">
            <el-input v-model="form.namestr" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="魔法等级">
            <el-input v-model="form.magicLvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="自动前缀">
            <el-input v-model="form.autoPrefix" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="法术偏移量">
            <el-input v-model="form.spelloffset" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="组件">
            <el-input v-model="form.component" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否有背包">
            <el-input v-model="form.hasinv" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="宝石插槽数量">
            <el-input v-model="form.gemsockets" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="宝石类型">
            <el-input v-model="form.gemapplytype" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="右手武器">
            <el-input v-model="form.rarm" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="左手武器">
            <el-input v-model="form.larm" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="身体">
            <el-input v-model="form.torso" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="腿部">
            <el-input v-model="form.legs" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="右肩垫">
            <el-input v-model="form.rspad" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="左肩垫">
            <el-input v-model="form.lspad" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="可用性">
            <el-input v-model="form.useable" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="类型">
            <el-input v-model="form.type" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="类型2">
            <el-input v-model="form.type2" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否唯一">
            <el-input v-model="form.isUnique" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否透明">
            <el-input v-model="form.transparent" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="透明度">
            <el-input v-model="form.transtbl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否箭袋">
            <el-input v-model="form.quivered" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="光照半径">
            <el-input v-model="form.lightradius" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否腰带">
            <el-input v-model="form.belt" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否任务物品">
            <el-input v-model="form.quest" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="投射物类型">
            <el-input v-model="form.missiletype" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="耐久度警告">
            <el-input v-model="form.durwarning" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="数量警告">
            <el-input v-model="form.qntwarning" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最小伤害">
            <el-input v-model="form.mindam" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最大伤害">
            <el-input v-model="form.maxdam" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="力量加成">
            <el-input v-model="form.strbonus" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="敏捷加成">
            <el-input v-model="form.dexbonus" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="宝石偏移量">
            <el-input v-model="form.gemoffset" style="width: 370px;" />
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
        <el-table-column prop="itemId" label="ID" />
        <el-table-column prop="charId" label="所属角色" />
        <el-table-column prop="isEquip" label="是否已装备" />
        <el-table-column prop="name" label="护甲名称" />
        <el-table-column prop="version" label="版本" />
        <el-table-column prop="compactsave" label="紧凑保存" />
        <el-table-column prop="rarity" label="稀有度" />
        <el-table-column prop="minac" label="防御" />
        <el-table-column prop="spawnable" label="可生成" />
        <el-table-column prop="absorbs" label="吸收" />
        <el-table-column prop="speed" label="攻击速度" />
        <el-table-column prop="reqstr" label="需求力量" />
        <el-table-column prop="block" label="格挡率" />
        <el-table-column prop="durability" label="耐久度" />
        <el-table-column prop="nodurability" label="无耐久度" />
        <el-table-column prop="level" label="等级" />
        <el-table-column prop="levelreq" label="等级需求" />
        <el-table-column prop="cost" label="价格" />
        <el-table-column prop="gambleCost" label="赌博价格" />
        <el-table-column prop="code" label="代码" />
        <el-table-column prop="namestr" label="名称字符串" />
        <el-table-column prop="magicLvl" label="魔法等级" />
        <el-table-column prop="autoPrefix" label="自动前缀" />
        <el-table-column prop="spelloffset" label="法术偏移量" />
        <el-table-column prop="component" label="组件" />
        <el-table-column prop="hasinv" label="是否有背包" />
        <el-table-column prop="gemsockets" label="宝石插槽数量" />
        <el-table-column prop="gemapplytype" label="宝石类型" />
        <el-table-column prop="rarm" label="右手武器" />
        <el-table-column prop="larm" label="左手武器" />
        <el-table-column prop="torso" label="身体" />
        <el-table-column prop="legs" label="腿部" />
        <el-table-column prop="rspad" label="右肩垫" />
        <el-table-column prop="lspad" label="左肩垫" />
        <el-table-column prop="useable" label="可用性" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="type2" label="类型2" />
        <el-table-column prop="isUnique" label="是否唯一" />
        <el-table-column prop="transparent" label="是否透明" />
        <el-table-column prop="transtbl" label="透明度" />
        <el-table-column prop="quivered" label="是否箭袋" />
        <el-table-column prop="lightradius" label="光照半径" />
        <el-table-column prop="belt" label="是否腰带" />
        <el-table-column prop="quest" label="是否任务物品" />
        <el-table-column prop="missiletype" label="投射物类型" />
        <el-table-column prop="durwarning" label="耐久度警告" />
        <el-table-column prop="qntwarning" label="数量警告" />
        <el-table-column prop="mindam" label="最小伤害" />
        <el-table-column prop="maxdam" label="最大伤害" />
        <el-table-column prop="strbonus" label="力量加成" />
        <el-table-column prop="dexbonus" label="敏捷加成" />
        <el-table-column prop="gemoffset" label="宝石偏移量" />
        <el-table-column v-if="checkPer(['admin','gameArmorsCreated:edit','gameArmorsCreated:del'])" label="操作" width="150px" align="center">
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
import crudGameArmorsCreated from '@/api/gameArmorsCreated'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'

const defaultForm = { id: null, itemId: null, charId: null, isEquip: null, name: null, version: null, compactsave: null, rarity: null, minac: null, spawnable: null, absorbs: null, speed: null, reqstr: null, block: null, durability: null, nodurability: null, level: null, levelreq: null, cost: null, gambleCost: null, code: null, namestr: null, magicLvl: null, autoPrefix: null, spelloffset: null, component: null, hasinv: null, gemsockets: null, gemapplytype: null, rarm: null, larm: null, torso: null, legs: null, rspad: null, lspad: null, useable: null, type: null, type2: null, isUnique: null, transparent: null, transtbl: null, quivered: null, lightradius: null, belt: null, quest: null, missiletype: null, durwarning: null, qntwarning: null, mindam: null, maxdam: null, strbonus: null, dexbonus: null, gemoffset: null }
export default {
  name: 'GameArmorsCreated',
  components: { pagination, crudOperation, rrOperation, udOperation },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  cruds() {
    return CRUD({ title: 'armorsCreated', url: 'api/gameArmorsCreated', idField: 'id', sort: 'id,desc', crudMethod: { ...crudGameArmorsCreated }})
  },
  data() {
    return {
      permission: {
        add: ['admin', 'gameArmorsCreated:add'],
        edit: ['admin', 'gameArmorsCreated:edit'],
        del: ['admin', 'gameArmorsCreated:del']
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
