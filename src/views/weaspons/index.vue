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
          <el-form-item label="物品ID" prop="itemId">
            <el-input v-model="form.itemId" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="form.name" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="类型">
            <el-input v-model="form.type" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="副类型">
            <el-input v-model="form.type2" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="代码">
            <el-input v-model="form.code" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="替代外观">
            <el-input v-model="form.alternategfx" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="名称字符串">
            <el-input v-model="form.namestr" style="width: 370px;" />
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
          <el-form-item label="可生成">
            <el-input v-model="form.spawnable" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最小伤害">
            <el-input v-model="form.mindam" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最大伤害">
            <el-input v-model="form.maxdam" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最小远程伤害">
            <el-input v-model="form.minmisdam" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最大远程伤害">
            <el-input v-model="form.maxmisdam" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="范围加成">
            <el-input v-model="form.rangeadder" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="攻击速度">
            <el-input v-model="form.speed" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="力量加成">
            <el-input v-model="form.strbonus" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="敏捷加成">
            <el-input v-model="form.dexbonus" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="需求力量">
            <el-input v-model="form.reqstr" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="需求敏捷">
            <el-input v-model="form.reqdex" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="耐久度">
            <el-input v-model="form.durability" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="无耐久度">
            <el-input v-model="form.nodurability" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品等级">
            <el-input v-model="form.level" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="需求等级">
            <el-input v-model="form.levelreq" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="form.cost" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="赌博价格">
            <el-input v-model="form.gambleCost" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="魔法等级">
            <el-input v-model="form.magicLvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="自动前缀">
            <el-input v-model="form.autoPrefix" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="OpenBetaGfx">
            <el-input v-model="form.openbetagfx" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="普通代码">
            <el-input v-model="form.normcode" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="高级代码">
            <el-input v-model="form.ubercode" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="特殊代码">
            <el-input v-model="form.ultracode" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="武器类别">
            <el-input v-model="form.wclass" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="组件">
            <el-input v-model="form.component" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="打击类别">
            <el-input v-model="form.hitClass" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品栏宽度">
            <el-input v-model="form.invwidth" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品栏高度">
            <el-input v-model="form.invheight" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="可堆叠">
            <el-input v-model="form.stackable" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最小堆叠">
            <el-input v-model="form.minstack" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="最大堆叠">
            <el-input v-model="form.maxstack" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="生成堆叠">
            <el-input v-model="form.spawnstack" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="翻转文件">
            <el-input v-model="form.flippyfile" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="物品栏文件">
            <el-input v-model="form.invfile" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="唯一物品栏文件">
            <el-input v-model="form.uniqueinvfile" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="套装物品栏文件">
            <el-input v-model="form.setinvfile" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="是否有物品栏">
            <el-input v-model="form.hasinv" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="宝石插槽数量">
            <el-input v-model="form.gemsockets" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="宝石应用类型">
            <el-input v-model="form.gemapplytype" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="特殊属性">
            <el-input v-model="form.special" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="可使用">
            <el-input v-model="form.useable" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="掉落音效">
            <el-input v-model="form.dropsound" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="掉落音效帧数">
            <el-input v-model="form.dropsfxframe" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="使用音效">
            <el-input v-model="form.usesound" style="width: 370px;" />
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
          <el-form-item label="任务难度检查">
            <el-input v-model="form.questdiffcheck" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="投射物类型">
            <el-input v-model="form.missiletype" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="耐久度警告">
            <el-input v-model="form.durwarning" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="堆叠数量警告">
            <el-input v-model="form.qntwarning" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="宝石偏移">
            <el-input v-model="form.gemoffset" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="位域1">
            <el-input v-model="form.bitfield1" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Charsi最小值">
            <el-input v-model="form.charsimin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Charsi最大值">
            <el-input v-model="form.charsimax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Charsi魔法最小值">
            <el-input v-model="form.charsimagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Charsi魔法最大值">
            <el-input v-model="form.charsimagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Charsi魔法等级">
            <el-input v-model="form.charsimagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Gheed最小值">
            <el-input v-model="form.gheedmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Gheed最大值">
            <el-input v-model="form.gheedmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Gheed魔法最小值">
            <el-input v-model="form.gheedmagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Gheed魔法最大值">
            <el-input v-model="form.gheedmagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Gheed魔法等级">
            <el-input v-model="form.gheedmagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Akara最小值">
            <el-input v-model="form.akaramin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Akara最大值">
            <el-input v-model="form.akaramax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Akara魔法最小值">
            <el-input v-model="form.akaramagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Akara魔法最大值">
            <el-input v-model="form.akaramagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Akara魔法等级">
            <el-input v-model="form.akaramagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Fara最小值">
            <el-input v-model="form.faramin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Fara最大值">
            <el-input v-model="form.faramax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Fara魔法最小值">
            <el-input v-model="form.faramagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Fara魔法最大值">
            <el-input v-model="form.faramagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Fara魔法等级">
            <el-input v-model="form.faramagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Lysander最小值">
            <el-input v-model="form.lysandermin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Lysander最大值">
            <el-input v-model="form.lysandermax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Lysander魔法最小值">
            <el-input v-model="form.lysandermagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Lysander魔法最大值">
            <el-input v-model="form.lysandermagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Lysander魔法等级">
            <el-input v-model="form.lysandermagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Drognan最小值">
            <el-input v-model="form.drognanmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Drognan最大值">
            <el-input v-model="form.drognanmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Drognan魔法最小值">
            <el-input v-model="form.drognanmagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Drognan魔法最大值">
            <el-input v-model="form.drognanmagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Drognan魔法等级">
            <el-input v-model="form.drognanmagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Hralti最小值">
            <el-input v-model="form.hraltimin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Hralti最大值">
            <el-input v-model="form.hraltimax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Hralti魔法最小值">
            <el-input v-model="form.hraltimagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Hralti魔法最大值">
            <el-input v-model="form.hraltimagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Hralti魔法等级">
            <el-input v-model="form.hraltimagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Alkor最小值">
            <el-input v-model="form.alkormin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Alkor最大值">
            <el-input v-model="form.alkormax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Alkor魔法最小值">
            <el-input v-model="form.alkormagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Alkor魔法最大值">
            <el-input v-model="form.alkormagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Alkor魔法等级">
            <el-input v-model="form.alkormagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Ormus最小值">
            <el-input v-model="form.ormusmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Ormus最大值">
            <el-input v-model="form.ormusmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Ormus魔法最小值">
            <el-input v-model="form.ormusmagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Ormus魔法最大值">
            <el-input v-model="form.ormusmagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Ormus魔法等级">
            <el-input v-model="form.ormusmagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Elzix最小值">
            <el-input v-model="form.elzixmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Elzix最大值">
            <el-input v-model="form.elzixmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Elzix魔法最小值">
            <el-input v-model="form.elzixmagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Elzix魔法最大值">
            <el-input v-model="form.elzixmagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Elzix魔法等级">
            <el-input v-model="form.elzixmagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Jamella最小值">
            <el-input v-model="form.jamellamin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Jamella最大值">
            <el-input v-model="form.jamellamax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Jamella魔法最小值">
            <el-input v-model="form.jamellamagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Jamella魔法最大值">
            <el-input v-model="form.jamellamagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Jamella魔法等级">
            <el-input v-model="form.jamellamagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah最小值">
            <el-input v-model="form.malahmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah最大值">
            <el-input v-model="form.malahmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah魔法最小值">
            <el-input v-model="form.malahmagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah魔法最大值">
            <el-input v-model="form.malahmagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah魔法等级">
            <el-input v-model="form.malahmagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Larzuk最小值">
            <el-input v-model="form.larzukmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Larzuk最大值">
            <el-input v-model="form.larzukmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Larzuk魔法最小值">
            <el-input v-model="form.larzukmagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Larzuk魔法最大值">
            <el-input v-model="form.larzukmagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Larzuk魔法等级">
            <el-input v-model="form.larzukmagiclvl" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah自动魔法">
            <el-input v-model="form.malahautomagic" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah自动魔法最小值">
            <el-input v-model="form.malahautomagicmin" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah自动魔法最大值">
            <el-input v-model="form.malahautomagicmax" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Malah自动魔法等级">
            <el-input v-model="form.malahautomagiclvl" style="width: 370px;" />
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
        <el-table-column prop="itemId" label="物品ID" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="type2" label="副类型" />
        <el-table-column prop="code" label="代码" />
        <el-table-column prop="alternategfx" label="替代外观" />
        <el-table-column prop="namestr" label="名称字符串" />
        <el-table-column prop="version" label="版本" />
        <el-table-column prop="compactsave" label="紧凑保存" />
        <el-table-column prop="rarity" label="稀有度" />
        <el-table-column prop="spawnable" label="可生成" />
        <el-table-column prop="mindam" label="最小伤害" />
        <el-table-column prop="maxdam" label="最大伤害" />
        <el-table-column prop="1or2handed" label="单手或双手" />
        <el-table-column prop="2handed" label="双手" />
        <el-table-column prop="2handmindam" label="双手最小伤害" />
        <el-table-column prop="2handmaxdam" label="双手最大伤害" />
        <el-table-column prop="minmisdam" label="最小远程伤害" />
        <el-table-column prop="maxmisdam" label="最大远程伤害" />
        <el-table-column prop="rangeadder" label="范围加成" />
        <el-table-column prop="speed" label="攻击速度" />
        <el-table-column prop="strbonus" label="力量加成" />
        <el-table-column prop="dexbonus" label="敏捷加成" />
        <el-table-column prop="reqstr" label="需求力量" />
        <el-table-column prop="reqdex" label="需求敏捷" />
        <el-table-column prop="durability" label="耐久度" />
        <el-table-column prop="nodurability" label="无耐久度" />
        <el-table-column prop="level" label="物品等级" />
        <el-table-column prop="levelreq" label="需求等级" />
        <el-table-column prop="cost" label="价格" />
        <el-table-column prop="gambleCost" label="赌博价格" />
        <el-table-column prop="magicLvl" label="魔法等级" />
        <el-table-column prop="autoPrefix" label="自动前缀" />
        <el-table-column prop="openbetagfx" label="OpenBetaGfx" />
        <el-table-column prop="normcode" label="普通代码" />
        <el-table-column prop="ubercode" label="高级代码" />
        <el-table-column prop="ultracode" label="特殊代码" />
        <el-table-column prop="wclass" label="武器类别" />
        <el-table-column prop="2handedwclass" label="双手武器类别" />
        <el-table-column prop="component" label="组件" />
        <el-table-column prop="hitClass" label="打击类别" />
        <el-table-column prop="invwidth" label="物品栏宽度" />
        <el-table-column prop="invheight" label="物品栏高度" />
        <el-table-column prop="stackable" label="可堆叠" />
        <el-table-column prop="minstack" label="最小堆叠" />
        <el-table-column prop="maxstack" label="最大堆叠" />
        <el-table-column prop="spawnstack" label="生成堆叠" />
        <el-table-column prop="flippyfile" label="翻转文件" />
        <el-table-column prop="invfile" label="物品栏文件" />
        <el-table-column prop="uniqueinvfile" label="唯一物品栏文件" />
        <el-table-column prop="setinvfile" label="套装物品栏文件" />
        <el-table-column prop="hasinv" label="是否有物品栏" />
        <el-table-column prop="gemsockets" label="宝石插槽数量" />
        <el-table-column prop="gemapplytype" label="宝石应用类型" />
        <el-table-column prop="special" label="特殊属性" />
        <el-table-column prop="useable" label="可使用" />
        <el-table-column prop="dropsound" label="掉落音效" />
        <el-table-column prop="dropsfxframe" label="掉落音效帧数" />
        <el-table-column prop="usesound" label="使用音效" />
        <el-table-column prop="isUnique" label="是否唯一" />
        <el-table-column prop="transparent" label="是否透明" />
        <el-table-column prop="transtbl" label="透明度" />
        <el-table-column prop="quivered" label="是否箭袋" />
        <el-table-column prop="lightradius" label="光照半径" />
        <el-table-column prop="belt" label="是否腰带" />
        <el-table-column prop="quest" label="是否任务物品" />
        <el-table-column prop="questdiffcheck" label="任务难度检查" />
        <el-table-column prop="missiletype" label="投射物类型" />
        <el-table-column prop="durwarning" label="耐久度警告" />
        <el-table-column prop="qntwarning" label="堆叠数量警告" />
        <el-table-column prop="gemoffset" label="宝石偏移" />
        <el-table-column prop="bitfield1" label="位域1" />
        <el-table-column prop="charsimin" label="Charsi最小值" />
        <el-table-column prop="charsimax" label="Charsi最大值" />
        <el-table-column prop="charsimagicmin" label="Charsi魔法最小值" />
        <el-table-column prop="charsimagicmax" label="Charsi魔法最大值" />
        <el-table-column prop="charsimagiclvl" label="Charsi魔法等级" />
        <el-table-column prop="gheedmin" label="Gheed最小值" />
        <el-table-column prop="gheedmax" label="Gheed最大值" />
        <el-table-column prop="gheedmagicmin" label="Gheed魔法最小值" />
        <el-table-column prop="gheedmagicmax" label="Gheed魔法最大值" />
        <el-table-column prop="gheedmagiclvl" label="Gheed魔法等级" />
        <el-table-column prop="akaramin" label="Akara最小值" />
        <el-table-column prop="akaramax" label="Akara最大值" />
        <el-table-column prop="akaramagicmin" label="Akara魔法最小值" />
        <el-table-column prop="akaramagicmax" label="Akara魔法最大值" />
        <el-table-column prop="akaramagiclvl" label="Akara魔法等级" />
        <el-table-column prop="faramin" label="Fara最小值" />
        <el-table-column prop="faramax" label="Fara最大值" />
        <el-table-column prop="faramagicmin" label="Fara魔法最小值" />
        <el-table-column prop="faramagicmax" label="Fara魔法最大值" />
        <el-table-column prop="faramagiclvl" label="Fara魔法等级" />
        <el-table-column prop="lysandermin" label="Lysander最小值" />
        <el-table-column prop="lysandermax" label="Lysander最大值" />
        <el-table-column prop="lysandermagicmin" label="Lysander魔法最小值" />
        <el-table-column prop="lysandermagicmax" label="Lysander魔法最大值" />
        <el-table-column prop="lysandermagiclvl" label="Lysander魔法等级" />
        <el-table-column prop="drognanmin" label="Drognan最小值" />
        <el-table-column prop="drognanmax" label="Drognan最大值" />
        <el-table-column prop="drognanmagicmin" label="Drognan魔法最小值" />
        <el-table-column prop="drognanmagicmax" label="Drognan魔法最大值" />
        <el-table-column prop="drognanmagiclvl" label="Drognan魔法等级" />
        <el-table-column prop="hraltimin" label="Hralti最小值" />
        <el-table-column prop="hraltimax" label="Hralti最大值" />
        <el-table-column prop="hraltimagicmin" label="Hralti魔法最小值" />
        <el-table-column prop="hraltimagicmax" label="Hralti魔法最大值" />
        <el-table-column prop="hraltimagiclvl" label="Hralti魔法等级" />
        <el-table-column prop="alkormin" label="Alkor最小值" />
        <el-table-column prop="alkormax" label="Alkor最大值" />
        <el-table-column prop="alkormagicmin" label="Alkor魔法最小值" />
        <el-table-column prop="alkormagicmax" label="Alkor魔法最大值" />
        <el-table-column prop="alkormagiclvl" label="Alkor魔法等级" />
        <el-table-column prop="ormusmin" label="Ormus最小值" />
        <el-table-column prop="ormusmax" label="Ormus最大值" />
        <el-table-column prop="ormusmagicmin" label="Ormus魔法最小值" />
        <el-table-column prop="ormusmagicmax" label="Ormus魔法最大值" />
        <el-table-column prop="ormusmagiclvl" label="Ormus魔法等级" />
        <el-table-column prop="elzixmin" label="Elzix最小值" />
        <el-table-column prop="elzixmax" label="Elzix最大值" />
        <el-table-column prop="elzixmagicmin" label="Elzix魔法最小值" />
        <el-table-column prop="elzixmagicmax" label="Elzix魔法最大值" />
        <el-table-column prop="elzixmagiclvl" label="Elzix魔法等级" />
        <el-table-column prop="jamellamin" label="Jamella最小值" />
        <el-table-column prop="jamellamax" label="Jamella最大值" />
        <el-table-column prop="jamellamagicmin" label="Jamella魔法最小值" />
        <el-table-column prop="jamellamagicmax" label="Jamella魔法最大值" />
        <el-table-column prop="jamellamagiclvl" label="Jamella魔法等级" />
        <el-table-column prop="malahmin" label="Malah最小值" />
        <el-table-column prop="malahmax" label="Malah最大值" />
        <el-table-column prop="malahmagicmin" label="Malah魔法最小值" />
        <el-table-column prop="malahmagicmax" label="Malah魔法最大值" />
        <el-table-column prop="malahmagiclvl" label="Malah魔法等级" />
        <el-table-column prop="larzukmin" label="Larzuk最小值" />
        <el-table-column prop="larzukmax" label="Larzuk最大值" />
        <el-table-column prop="larzukmagicmin" label="Larzuk魔法最小值" />
        <el-table-column prop="larzukmagicmax" label="Larzuk魔法最大值" />
        <el-table-column prop="larzukmagiclvl" label="Larzuk魔法等级" />
        <el-table-column prop="malahautomagic" label="Malah自动魔法" />
        <el-table-column prop="malahautomagicmin" label="Malah自动魔法最小值" />
        <el-table-column prop="malahautomagicmax" label="Malah自动魔法最大值" />
        <el-table-column prop="malahautomagiclvl" label="Malah自动魔法等级" />
        <el-table-column v-if="checkPer(['admin','gameWeapons:edit','gameWeapons:del'])" label="操作" width="150px" align="center">
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
import crudGameWeapons from '@/api/gameWeapons'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'

const defaultForm = { id: null, itemId: null, name: null, type: null, type2: null, code: null, alternategfx: null, namestr: null, version: null, compactsave: null, rarity: null, spawnable: null, mindam: null, maxdam: null, maxmisdam: null, rangeadder: null, speed: null, strbonus: null, dexbonus: null, reqstr: null, reqdex: null, durability: null, nodurability: null, level: null, levelreq: null, cost: null, gambleCost: null, magicLvl: null, autoPrefix: null, openbetagfx: null, normcode: null, ubercode: null, ultracode: null, wclass: null, component: null, hitClass: null, invwidth: null, invheight: null, stackable: null, minstack: null, maxstack: null, spawnstack: null, flippyfile: null, invfile: null, uniqueinvfile: null, setinvfile: null, hasinv: null, gemsockets: null, gemapplytype: null, special: null, useable: null, dropsound: null, dropsfxframe: null, usesound: null, isUnique: null, transparent: null, transtbl: null, quivered: null, lightradius: null, belt: null, quest: null, questdiffcheck: null, missiletype: null, durwarning: null, qntwarning: null, gemoffset: null, bitfield1: null, charsimin: null, charsimax: null, charsimagicmin: null, charsimagicmax: null, charsimagiclvl: null, gheedmin: null, gheedmax: null, gheedmagicmin: null, gheedmagicmax: null, gheedmagiclvl: null, akaramin: null, akaramax: null, akaramagicmin: null, akaramagicmax: null, akaramagiclvl: null, faramin: null, faramax: null, faramagicmin: null, faramagicmax: null, faramagiclvl: null, lysandermin: null, lysandermax: null, lysandermagicmin: null, lysandermagicmax: null, lysandermagiclvl: null, drognanmin: null, drognanmax: null, drognanmagicmin: null, drognanmagicmax: null, drognanmagiclvl: null, hraltimin: null, hraltimax: null, hraltimagicmin: null, hraltimagicmax: null, hraltimagiclvl: null, alkormin: null, alkormax: null, alkormagicmin: null, alkormagicmax: null, alkormagiclvl: null, ormusmin: null, ormusmax: null, ormusmagicmin: null, ormusmagicmax: null, ormusmagiclvl: null, elzixmin: null, elzixmax: null, elzixmagicmin: null, elzixmagicmax: null, elzixmagiclvl: null, jamellamin: null, jamellamax: null, jamellamagicmin: null, jamellamagicmax: null, jamellamagiclvl: null, malahmin: null, malahmax: null, malahmagicmin: null, malahmagicmax: null, malahmagiclvl: null, larzukmin: null, larzukmax: null, larzukmagicmin: null, larzukmagicmax: null, larzukmagiclvl: null, malahautomagic: null, malahautomagicmin: null, malahautomagicmax: null, malahautomagiclvl: null }
export default {
  name: 'GameWeapons',
  components: { pagination, crudOperation, rrOperation, udOperation },
  mixins: [presenter(), header(), form(defaultForm), crud()],
  cruds() {
    return CRUD({ title: 'weaspons', url: 'api/gameWeapons', idField: 'id', sort: 'id,desc', crudMethod: { ...crudGameWeapons }})
  },
  data() {
    return {
      permission: {
        add: ['admin', 'gameWeapons:add'],
        edit: ['admin', 'gameWeapons:edit'],
        del: ['admin', 'gameWeapons:del']
      },
      rules: {
        itemId: [
          { required: true, message: '物品ID不能为空', trigger: 'blur' }
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
