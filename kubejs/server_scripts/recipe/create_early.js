// Create序盤

ServerEvents.recipes(e => {

  // Create Deco
  e.remove({id: 'createdeco:compacting/industrial_iron_ingot'})
  e.remove({id: 'create:industrial_iron_block_from_iron_ingots_stonecutting'})
  e.replaceInput({input: 'createdeco:zinc_sheet'},'createdeco:zinc_sheet','createaddition:zinc_sheet')

  // Balanced Flight
  e.remove({mod: 'balancedflight'})

  // Encased
  e.remove({mod: 'createcasing'})

  // S&A
  e.remove({id: 'create_sa:magma_cream_recipe'})
  e.recipes.create.mixing('magma_cream', ['slime_ball', Fluid.of('lava', 50)]).superheated()
  e.recipes.create.mixing('kubejs:slime_paste', ['slime_ball', Fluid.of('water', 250)]).heated()
  e.replaceInput({output: 'create_sa:slime_helmet'},'slime_ball','kubejs:slime_paste')
  e.replaceInput({output: 'create_sa:slime_boots'},'slime_ball','kubejs:slime_paste')

  // Sound of Steam
  e.remove({output: 'pipeorgans:brass_reed'})
  e.recipes.create.pressing('4x pipeorgans:brass_reed', '#forge:rods/brass')
  e.remove({output: 'pipeorgans:tuning_wire'})
  e.recipes.create.pressing('4x pipeorgans:tuning_wire', '#forge:rods/copper')

  // Copper Casing
  e.remove({output: 'create:copper_casing'})
  e.recipes.create.mixing('kubejs:unfired_ceramic_casing', ['4x clay_ball', '3x #smelts_to_glass', Fluid.of('water', 1000)])
  e.recipes.vintage.pressurizing('4x kubejs:unfired_ceramic_casing', ['2x clay', '4x #smelts_to_glass', Fluid.of('water', 500)])
  e.smelting('kubejs:ceramic_casing', 'kubejs:unfired_ceramic_casing')
  e.recipes.create.item_application('create:copper_casing', ['kubejs:ceramic_casing', 'copper_ingot'])

  // Gear Mechanism
  e.recipes.create.mixing(Fluid.of('kubejs:gear_oil', 50), [Fluid.of('createaddition:seed_oil', 100), '#c:dusts'])

  e.shaped('kubejs:gear_mechanism_base', [
    'SSC', 
    'CAL' 
  ], {
    S: 'create:cogwheel', 
    C: '#forge:nuggets/copper',
    A: '#forge:plates/andesite',
    L: 'create:large_cogwheel'
  })

  let tItem = 'kubejs:incomplete_gear_mechanism'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:gear_mechanism').withChance(90.0),
    Item.of('createdeco:andesite_alloy_sheet').withChance(2.5),
    Item.of('create:andesite_alloy').withChance(2.5),
    Item.of('create:cogwheel').withChance(1.5),
    Item.of('create:shaft').withChance(1.5),
    Item.of('create:copper_nugget').withChance(1.0),
    Item.of('iron_nugget').withChance(1.0),
  ], 'kubejs:gear_mechanism_base', [
    e.recipes.createCutting(tItem, tItem),
    e.recipes.createFilling(tItem, [tItem, Fluid.of('kubejs:gear_oil', 50)]),
    e.recipes.createPressing(tItem, tItem)
  ]).transitionalItem(tItem).loops(3)

  // Using Gear Mechanism
  e.remove({id: 'create_connected:crafting/kinetics/six_way_gearbox'})
  e.remove({id: 'create_connected:crafting/kinetics/six_way_gearbox_from_gearbox'})
  e.shaped('create_connected:six_way_gearbox', [
    'LCM', 
    'CHC', 
    ' CL' 
  ], {
    L: 'create:large_cogwheel', 
    C: 'create:cogwheel',
    H: 'create:andesite_casing',
    M: 'kubejs:gear_mechanism'
  })

  e.shaped('create_connected:six_way_gearbox', [
    'LC ', 
    'CHC', 
    'MCL' 
  ], {
    L: 'create:large_cogwheel', 
    C: 'create:cogwheel',
    H: 'create:andesite_casing',
    M: 'kubejs:gear_mechanism'
  })

  e.remove({id: 'create_connected:crafting/kinetics/parallel_gearbox'})
  e.shapeless('create_connected:parallel_gearbox', ['create:gearbox', 'create:large_cogwheel', 'kubejs:gear_mechanism'])

  e.remove({id: 'create_connected:crafting/kinetics/cross_connector'})
  e.shaped('create_connected:cross_connector', [
    ' SM', 
    'SGS', 
    ' S ' 
  ], {
    S: 'create:shaft', 
    M: 'kubejs:gear_mechanism',
    G: 'create:gearbox'
  })

  e.shaped('create_connected:cross_connector', [
    ' S ', 
    'SGS', 
    'MS ' 
  ], {
    S: 'create:shaft', 
    M: 'kubejs:gear_mechanism',
    G: 'create:gearbox'
  })

  e.shaped('create_connected:cross_connector', [
    'MS ', 
    'SGS', 
    ' S ' 
  ], {
    S: 'create:shaft', 
    M: 'kubejs:gear_mechanism',
    G: 'create:gearbox'
  })

  e.shaped('create_connected:cross_connector', [
    ' S ', 
    'SGS', 
    ' SM' 
  ], {
    S: 'create:shaft', 
    M: 'kubejs:gear_mechanism',
    G: 'create:gearbox'
  })

  e.shapeless('createcasing:andesite_configurable_gearbox', ['create_connected:six_way_gearbox', 'kubejs:gear_mechanism'])

  e.remove({id: 'create:crafting/kinetics/encased_fan'})
  e.shaped('create:encased_fan', [
    'M', 
    'H', 
    'F' 
  ], {
    F: 'create:propeller',
    M: 'kubejs:gear_mechanism',
    H: 'create:andesite_casing'
  })

  e.remove({id: 'create:crafting/kinetics/mechanical_drill'})
  e.shaped('create:mechanical_drill', [
    'M', 
    'I', 
    'H' 
  ], {
    I: '#forge:ingots/cast_iron',
    M: 'kubejs:gear_mechanism',
    H: 'create:andesite_casing'
  })
  e.shaped('3x create:mechanical_drill', [
    'M', 
    'I', 
    'H' 
  ], {
    I: '#forge:ingots/steel',
    M: 'tfmg:steel_mechanism',
    H: 'create:andesite_casing'
  })

  e.remove({id: 'create_mechanical_extruder:crafting/mechanical_extruder'})
  e.shaped('create_mechanical_extruder:mechanical_extruder', [
    ' M ', 
    'GHG', 
    'IGI' 
  ], {
    G: '#forge:glass/colorless',
    I: '#forge:plates/cast_iron',
    M: 'kubejs:gear_mechanism',
    H: 'create:andesite_casing'
  })
  e.shaped('2x create_mechanical_extruder:mechanical_extruder', [
    ' M ', 
    'GHG', 
    'IGI' 
  ], {
    G: '#forge:glass/colorless',
    I: '#forge:plates/steel',
    M: 'kubejs:gear_mechanism',
    H: 'create:andesite_casing'
  })

  // Blaze Burner
  e.remove({output: 'create:empty_blaze_burner'})
  e.shaped('kubejs:inactive_blaze_burner', [
    'CSC', 
    'SNS', 
    'CSC' 
  ], {
    C: 'chain', 
    S: '#forge:plates/iron',
    N: 'netherrack'
  })
  e.shaped('kubejs:inactive_blaze_burner', [
    'CNC', 
    ' S '
  ], {
    C: 'chain', 
    S: '#forge:plates/steel',
    N: 'netherrack'
  })

  e.recipes.create.haunting('create:empty_blaze_burner', 'kubejs:inactive_blaze_burner')
  e.recipes.create.filling('create:blaze_burner', [Fluid.of('create_mechanical_spawner:spawn_fluid_blaze', 100), 'create:empty_blaze_burner'])

  // Bronze
  e.remove({output: 'silentgear:bronze_ingot'})
  e.recipes.create.mixing('4x silentgear:bronze_ingot', ['3x copper_ingot', 'iron_ingot']).heated()
})
