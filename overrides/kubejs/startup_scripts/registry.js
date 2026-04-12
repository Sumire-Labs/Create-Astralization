// アイテム追加など

Platform.mods.kubejs.name = 'Create: Astralization'
Platform.mods.mbd2.name = 'Create: Astralization - Machines'

StartupEvents.registry('item', e => {

  // Incomplete Item
  e.create('incomplete_gear_mechanism', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('incomplete_electronic_component', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('incomplete_electronic_mechanism', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('incomplete_integrated_circuit', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('unfinished_exquisite_diamond', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('incomplete_aerospace_control_unit', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('incomplete_chromatic_stained_aerospace_mechanism', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('unfinished_exquisite_glacite', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('incomplete_cryogenic_entropy_regulator', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  e.create('incomplete_quantum_phase_stabilizer', 'create:sequenced_assembly').tag('c:hidden_from_recipe_viewers')
  
  // Item
  e.create('crimson_iron_sheet').tag('forge:plates').tag('forge:plates/crimson_iron').tag('c:plates')
  e.create('azure_silver_sheet').tag('forge:plates').tag('forge:plates/azure_silver').tag('c:plates')
  e.create('tyrian_steel_sheet').tag('forge:plates').tag('forge:plates/tyrian_steel').tag('c:plates')

  e.create('gear_mechanism_base')
  e.create('gear_mechanism')
  e.create('slime_paste')
  e.create('fireclay_powder').tag('forge:dusts').tag('c:dusts')

  e.create('sodium_hydroxide').tag('forge:dusts').tag('c:dusts')
  e.create('electronic_component')
  e.create('electronic_mechanism')
  e.create('nethersteel_compound')
  e.create('nethersteel_ingot').tag('forge:ingots').tag('forge:ingots/nethersteel').tag('c:ingots')

  e.create('silicon_wafer')
  e.create('printed_wafer')
  e.create('computation_chip')
  e.create('integrated_circuit_base')
  e.create('integrated_circuit').texture('create:item/integrated_circuit')

  e.create('exquisite_diamond').tag('forge:gems').tag('c:gems')
  e.create('chromatic_stained_sheet').tag('forge:plates').tag('c:plates')
  e.create('aerospace_control_unit')
  e.create('chromatic_stained_aerospace_mechanism')

  e.create('glacite').tag('forge:gems').tag('forge:gems/glacite').tag('c:gems')
  e.create('exquisite_glacite').tag('forge:gems').tag('c:gems')
  e.create('frostproof_plating').tag('forge:plates').tag('c:plates')
  e.create('cryogenic_entropy_regulator')
  e.create('quantum_phase_stabilizer')
  e.create('quantum_stabilized_prime_circuit')
  e.create('temperature_manipulation_device').unstackable().tag('curios:bracelet').tag('curios:ring').tag('curios:body').tag('curios:back').tag('curios:belt')
  e.create('nullheat_catalyst')
  e.create('zerothium_ingot').rarity('epic').tag('forge:ingots').tag('forge:ingots/zerothium').tag('c:ingots')
})

StartupEvents.registry('block', e => {

  // Block
  e.create("inactive_blaze_burner").stoneSoundType().requiresTool(true).hardness(3.0).tagBlock('minecraft:mineable/pickaxe').fullBlock(false).opaque(false).box(1, 0, 1, 15, 14, 15).renderType('cutout')
  e.create('unfired_ceramic_casing').gravelSoundType().hardness(2.0).tagBlock('minecraft:mineable/shovel')
  e.create('ceramic_casing').stoneSoundType().requiresTool(true).hardness(2.0).tagBlock('minecraft:mineable/pickaxe')
  e.create('frigid_ash', 'falling').gravelSoundType().requiresTool(false).hardness(3.0).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').noDrops().slipperiness(0.9).jumpFactor(0.5)
  e.create('hardened_frigid_ash').stoneSoundType().requiresTool(true).hardness(5.0).tagBlock('minecraft:mineable/pickaxe').noDrops().slipperiness(0.9).jumpFactor(0.5)
  e.create('tier_2_rocket_hull').stoneSoundType().requiresTool(true).hardness(5.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  e.create('tier_3_rocket_hull').stoneSoundType().requiresTool(true).hardness(5.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  e.create('tier_4_rocket_hull').stoneSoundType().requiresTool(true).hardness(7.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool')
  e.create('glacite_matrix').stoneSoundType().requiresTool(true).hardness(9.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool').lightLevel(1.0).opaque(false).transparent(true)
  e.create('nullheat_reaction_rod').stoneSoundType().requiresTool(true).hardness(9.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool').lightLevel(1.0).opaque(true)
  e.create('nullheat_core').stoneSoundType().requiresTool(true).hardness(9.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool').lightLevel(1.0).transparent(true).fullBlock(false).opaque(false).box(0, 2, 0, 16, 14, 16).box(2, 1, 2, 14, 15, 14).renderType('cutout')
})

StartupEvents.registry('fluid', e => {
  
  // Fluid
  e.create('gear_oil').thinTexture(0xd6ceab).bucketColor(0xd6ceab)
  e.create('infernal_lava').stillTexture('kubejs:block/infernal_lava').flowingTexture('kubejs:block/infernal_lava').bucketColor(0xeb4034)
  e.create('spawn_fluid_shulker').thinTexture(0xd59adb).bucketColor(0xd59adb)
  e.create('nullheat_suppression_fluid').thinTexture(0x7f82ad).bucketColor(0x7f82ad)
  e.create('unstable_zerothium').thickTexture(0xb3d5e3).bucketColor(0xb3d5e3)
  e.create('molten_nethersteel').thickTexture(0xbf9c97).bucketColor(0xbf9c97)
  e.create('sodium_aluminate_solution').thickTexture(0xed8866).bucketColor(0xed8866)
  e.create('aluminum_hydroxide_solution').thickTexture(0xc2bbb0).bucketColor(0xc2bbb0)
  e.create('alumina_solution').thickTexture(0xdedede).bucketColor(0xdedede)
})

// 拡散ブロック
const spreadBlacklist = ['minecraft:air', 'minecraft:cave_air', 'minecraft:void_air', 'minecraft:bedrock', 'minecraft:end_portal_frame', 'minecraft:end_portal', 'minecraft:end_gateway', 'kubejs:unstable_zerothium', 'kubejs:frigid_ash', 'kubejs:hardened_frigid_ash']
BlockEvents.modification(e => {

  e.modify('kubejs:frigid_ash', block => {
    block.setIsRandomlyTicking(true)
    block.setRandomTickCallback(c => spreadFrigidAsh(c.block))
  })

  e.modify('kubejs:hardened_frigid_ash', block => {
    block.setIsRandomlyTicking(true)
    block.setRandomTickCallback(c => spreadFrigidAsh(c.block))
  })

  function spreadFrigidAsh(block) {
    let x = Math.round(Math.random() * 2 - 1), y = Math.round(Math.random() * 2 - 1), z = Math.round(Math.random() * 2 - 1);
    if ([x, y, z] == [0, 0, 0]) return

    let spreadTo = block.level.getBlock(block.x + x, block.y + y, block.z + z);
    
    if (spreadBlacklist.includes(spreadTo.getId())) return

    if (spreadTo.hasTag('kubejs:transform_to_hardened_frigid_ash')) {
      spreadTo.set('kubejs:hardened_frigid_ash')
    } else {
      spreadTo.set('kubejs:frigid_ash')
    }
  }
})

// 拡散液体
FluidEvents.interact(event => {
  event.create('kubejs:unstable_zerothium', (level, currentPos, relativePos, currentState) => {

    let touchedBlock = level.getBlock(relativePos)

    return !(spreadBlacklist.includes(touchedBlock.getId()))

  }, (level, currentPos, relativePos, currentState) => {

    let touchedBlock = level.getBlock(relativePos)
    
    if (touchedBlock.hasTag('kubejs:transform_to_hardened_frigid_ash')) {
      touchedBlock.set('kubejs:hardened_frigid_ash')
    } else {
      touchedBlock.set('kubejs:frigid_ash')
    }

    level.levelEvent(1501, relativePos, 0)
  })
})