// Create中盤

ServerEvents.recipes(e => {

  // Balanced Flight
  e.remove({mod: 'balancedflight'})

  // Spawner
  e.remove({id: 'create_mechanical_spawner:spawner/pigling'})
  e.recipes.createMechanicalSpawnerSpawner(Fluid.of('create_mechanical_spawner:spawn_fluid_pigling', 100)).processingTime(2500).mob("minecraft:piglin")

  // 液体燃焼
  e.remove({id: 'createaddition:liquid_burning/biofuel'})
  e.recipes.createaddition.liquid_burning('createaddition:bioethanol', 36000)

  // 電子管
  e.remove({output: 'create:rose_quartz'})
  e.recipes.create.mixing('create:rose_quartz', ['quartz', '8x redstone']).heated()

  e.remove({output: 'create:electron_tube'})
  e.shaped('create:electron_tube', [
    'R', 
    'W',
    'I'  
  ], {
    R: 'create:polished_rose_quartz',
    W: '#forge:wires/zinc',
    I: '#forge:plates/iron',
  })

  // 精密機構まで
  e.remove({output: 'createaddition:rolling_mill'})
  e.shaped('createaddition:rolling_mill', [
    'ISI', 
    'ISI',
    'MCM'  
  ], {
    S: 'create:shaft',
    I: '#forge:plates/brass',
    M: 'kubejs:gear_mechanism',
    C: 'create:andesite_casing',
  })

  e.remove({output: 'create:transmitter'})
  e.shaped('create:transmitter', [
    ' L ', 
    'CCC',
    ' T '  
  ], {
    L: 'lightning_rod',
    C: '#forge:plates/copper',
    T: 'create:electron_tube'
  })

  e.remove({output: 'create:stock_ticker'})
  e.shaped('create:stock_ticker', [
    'G', 
    'L',
    'M'  
  ], {
    G: '#forge:glass/colorless',
    L: 'create:stock_link',
    M: 'create_connected:control_chip'
  })

  e.remove({output: 'create:hose_pulley'})
  e.shaped('create:hose_pulley', [
    'C', 
    'K',
    'M'  
  ], {
    C: 'create:copper_casing',
    K: 'dried_kelp_block',
    M: 'create_factory_logistics:fluid_mechanism'
  })

  e.remove({output: 'drill_drain:drill_drain'})
  e.shaped('drill_drain:drill_drain', [
    'PPP', 
    'PBP',
    ' M '  
  ], {
    P: 'create:fluid_pipe',
    B: 'tfmg:cast_iron_bars',
    M: 'create_factory_logistics:fluid_mechanism'
  })

  e.remove({output: 'create_sa:hydraulic_engine'})
  let tItem = 'create_sa:incomplete_hydraulic_engine'
  e.recipes.create.sequenced_assembly([
    Item.of('create_sa:hydraulic_engine').withChance(95.0),
    Item.of('create:copper_sheet').withChance(3.5),
    Item.of('create:andesite_alloy').withChance(1.5),
  ], 'create_factory_logistics:fluid_mechanism', [
    e.recipes.createFilling(tItem, [tItem, Fluid.of('water', 250)]),
    e.recipes.createPressing(tItem, tItem),
    e.recipes.createFilling(tItem, [tItem, Fluid.of('kubejs:gear_oil', 100)]),
    e.recipes.createPressing(tItem, tItem)
  ]).transitionalItem(tItem).loops(3)

  e.remove({output: 'create_sa:steam_engine'})
  tItem = 'create_sa:incomplete_steam_engine'
  e.recipes.create.sequenced_assembly([
    Item.of('create_sa:steam_engine').withChance(95.0),
    Item.of('create:golden_sheet').withChance(3.5),
    Item.of('create:andesite_alloy').withChance(1.5),
  ], 'create:precision_mechanism', [
    e.recipes.createDeploying(tItem, [tItem, 'create:cogwheel']),
    e.recipes.createDeploying(tItem, [tItem, 'create:large_cogwheel']),
    e.recipes.createFilling(tItem, [tItem, Fluid.of('kubejs:gear_oil', 100)]),
    e.recipes.createDeploying(tItem, [tItem, 'create:brass_nugget']),
    e.recipes.createDeploying(tItem, [tItem, 'create:andesite_alloy'])
  ]).transitionalItem(tItem).loops(3)

  e.remove({output: 'create_connected:control_chip'})
  tItem = 'create_connected:incomplete_control_chip'
  e.recipes.create.sequenced_assembly([
    Item.of('create_connected:control_chip').withChance(116.0),
    Item.of('redstone').withChance(8.0),
    Item.of('create:electron_tube').withChance(8.0),
    Item.of('create:golden_sheet').withChance(5.0),
    Item.of('gold_nugget').withChance(3.0),
    Item.of('create:crushed_raw_gold').withChance(2.0),
    'vintage:silver_sheet',
    'clock'
  ], 'create:golden_sheet', [
    e.recipes.createDeploying(tItem, [tItem, 'create:electron_tube']),
    e.recipes.createDeploying(tItem, [tItem, 'vintage:silver_wire']),
    e.recipes.createPressing(tItem, tItem)
  ]).transitionalItem(tItem).loops(3)

  // 鋼鉄まで
  e.remove({output: 'trashcans:item_trash_can'})
  e.shaped('trashcans:item_trash_can', [
    'A', 
    'C',
    'S'  
  ], {
    A: '#forge:plates/andesite',
    C: 'create:andesite_casing',
    S: 'vintage:small_andesite_spring',
  })

  e.remove({output: 'trashcans:liquid_trash_can'})
  e.shaped('trashcans:liquid_trash_can', [
    'A', 
    'C',
    'S'  
  ], {
    A: '#forge:plates/copper',
    C: 'create:copper_casing',
    S: 'vintage:small_copper_spring',
  })

  e.remove({output: 'trashcans:energy_trash_can'})
  e.shaped('trashcans:energy_trash_can', [
    'A', 
    'C',
    'S'  
  ], {
    A: '#forge:plates/silver',
    C: 'tfmg:steel_casing',
    S: 'vintage:small_silver_spring',
  })

  e.remove({output: 'create_enchantment_industry:disenchanter'})
  e.shaped('create_enchantment_industry:disenchanter', [
    'S', 
    'D',
    'M'  
  ], {
    M: 'create_factory_logistics:fluid_mechanism',
    D: 'create:item_drain',
    S: '#create:sandpaper'
  })

  e.remove({output: 'create_enchantment_industry:printer'})
  e.shaped('create_enchantment_industry:printer', [
    'D', 
    'M',
    'S'  
  ], {
    M: 'create_factory_logistics:fluid_mechanism',
    D: 'create:spout',
    S: 'dried_kelp'
  })

  e.remove({output: 'create:mechanical_crafter'})
  e.shaped('3x create:mechanical_crafter', [
    ' E ', 
    'CTC',
    ' M '  
  ], {
    E: 'create:electron_tube',
    T: 'crafting_table',
    C: 'create:brass_nugget',
    M: 'create:precision_mechanism'
  })
  e.shaped('6x create:mechanical_crafter', [
    ' E ', 
    'CTC',
    ' M '  
  ], {
    E: 'create:electron_tube',
    T: 'crafting_table',
    C: 'create:brass_nugget',
    M: 'kubejs:electronic_mechanism'
  })

  e.remove({output: 'create:steam_engine'})
  e.shaped('3x create:steam_engine', [
    'GSG', 
    'AAA',
    'CCC'  
  ], {
    S: 'create_sa:steam_engine',
    G: 'create:golden_sheet',
    A: 'create:andesite_alloy',
    C: 'copper_block'
  })
  e.shaped('6x create:steam_engine', [
    'GSG', 
    'AAA',
    'CCC'  
  ], {
    S: 'create_sa:heat_engine',
    G: 'create:golden_sheet',
    A: 'create:andesite_alloy',
    C: 'copper_block'
  })

  e.remove({output: 'vintage:spring_coiling_machine'})
  e.shaped('vintage:spring_coiling_machine', [
    'W  ', 
    'IAS',
    'M  '  
  ], {
    W: 'vintage:spring_coiling_machine_wheel',
    I: '#forge:plates/andesite',
    A: 'create:andesite_casing',
    S: 'create:shaft',
    M: 'create:precision_mechanism'
  })
  
  e.remove({output: 'create:large_water_wheel'})
  e.recipes.create.mechanical_crafting('create:large_water_wheel', [
    ' PPP ',
    'PPAPP',
    'PAWAP',
    'PPAPP',
    ' PPP '
  ], {
    P: '#planks',
    A: 'create:andesite_alloy',
    W: 'create:water_wheel'
  })

  e.remove({output: 'tfmg:coke_oven'})
  e.shaped('2x tfmg:coke_oven', [
    'C C',
    'PIP',
    'C C'
  ], {
    P: '#forge:plates/obsidian',
    C: 'tfmg:cast_iron_ingot',
    I: 'create:industrial_iron_block'
  })
  e.shaped('4x tfmg:coke_oven', [
    'C C',
    'PIP',
    'C C'
  ], {
    P: '#forge:plates/aluminum',
    C: 'tfmg:heavy_plate',
    I: 'create:industrial_iron_block'
  })

  e.remove({output: 'tfmg:blast_furnace_output'})
  e.shaped('tfmg:blast_furnace_output', [
    'BPB',
    'CIC',
    'BPB'
  ], {
    B: 'tfmg:fireproof_bricks',
    P: '#forge:plates/crimson_iron',
    C: 'tfmg:cast_iron_pipe',
    I: 'tfmg:cast_iron_block'
  })

  e.remove({output: 'vintage:belt_grinder'})
  e.shaped('vintage:belt_grinder', [
    ' G ',
    'PCP',
    ' S '
  ], {
    G: 'vintage:grinder_belt',
    P: 'vintage:brass_spring',
    C: 'create:andesite_casing',
    S: 'create:shaft'
  })

  e.recipes.vintage.centrifugation(['kubejs:fireclay_powder', Item.of('clay_ball').withChance(0.3), Fluid.of('water', 100)], ['tfmg:fireclay_ball'])
  e.remove({output: 'tfmg:fireproof_brick'})
  e.recipes.create.compacting('2x tfmg:fireproof_brick', ['2x kubejs:fireclay_powder', '4x sand', 'createnuclear:coal_dust']).superheated()

  // Spawner
  e.recipes.create.mixing(Fluid.of('kubejs:spawn_fluid_shulker', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'chorus_flower']).superheated()
  e.custom({
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [],
    "fluid": {
      "amount": 100,
      "fluid": "kubejs:spawn_fluid_shulker",
      "nbt": {}
    },
    "mob": "minecraft:shulker",
    "processingTime": 6000
  })

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_random_legacy'})

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_blaze'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_blaze', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), Fluid.of('lava', 1000), 'createaddition:gold_rod']).superheated()
  
  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_creeper'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_creeper', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'tfmg:sulfur_dust', 'charcoal']).heated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_drowned'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_drowned', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'copper_ingot', Fluid.of('water', 1000)])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_zombie'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_zombie', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'iron_ingot'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_enderman'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_enderman', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'emerald', 'silentgear:diamond_shard']).superheated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_evoker'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_evoker', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'emerald', 'create_more_additions:electrum_jewel']).superheated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_ghast'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_ghast', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'gunpowder', 'quartz_block']).heated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_magma_cube'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_magma_cube', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'kubejs:slime_paste', Fluid.of('lava', 1000)]).heated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_slime'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_slime', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'create:dough', Fluid.of('water', 1000)])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_pigling'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_pigling', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), '2x gold_ingot', 'chiseled_polished_blackstone']).heated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_skeleton'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_skeleton', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), '4x diorite', 'quartz'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_spider'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_spider', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'createnuclear:lead_ingot'])
  
  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_witch'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_witch', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'redstone', 'glowstone_dust']).heated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_wither_skeleton'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_wither_skeleton', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), '3x nether_brick', '2x quartz', 'charcoal']).superheated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_bat'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_bat', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'black_dye', 'leather'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_bee'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_bee', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'gold_ingot', 'honeycomb_block'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_cow'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_cow', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'wheat', 'create:bar_of_chocolate'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_chicken'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_chicken', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), '#forge:seeds', 'silentgear:fluffy_puff'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_fox'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_fox', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), '#fox_food', 'silentgear:emerald_shard'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_horse'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_horse', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'apple', 'lead'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_panda'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_panda', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'bamboo', 'white_dye'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_pig'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_pig', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'carrot', 'create:copper_nugget'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_rabbit'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_rabbit', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'carrot', 'create:brass_nugget'])

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_villager'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_villager', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), '4x emerald', 'soul_sand']).heated()

  e.remove({id: 'create_mechanical_spawner:mixing/spawn_fluid_wolf'})
  e.recipes.create.mixing(Fluid.of('create_mechanical_spawner:spawn_fluid_wolf', 100), [Fluid.of('create_mechanical_spawner:spawn_fluid_random', 100), 'bone', 'cooked_beaf']).heated()
  
  // 鉱石処理
  e.remove({id: 'createnuclear:splashing/crushed_raw_lead'})
  e.remove({output: 'createnuclear:uranium_powder'})
  e.recipes.create.splashing(['9x tfmg:nickel_nugget', Item.of('silentgear:emerald_shard').withChance(0.2)], 'create:crushed_raw_nickel')
  e.recipes.create.splashing(['4x createnuclear:uranium_powder', Item.of('vintage:sulfur').withChance(0.25)], 'create:crushed_raw_uranium')
  e.recipes.create.splashing(['9x createnuclear:lead_nugget', Item.of('tfmg:fireclay_ball').withChance(0.25)], 'create:crushed_raw_lead')
  e.recipes.create.splashing(['9x tfmg:lithium_nugget', Item.of('glowstone_dust').withChance(0.25)], 'tfmg:crushed_raw_lithium')
})
