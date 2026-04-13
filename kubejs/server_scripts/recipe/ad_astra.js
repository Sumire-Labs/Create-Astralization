// AdAstra・宇宙時代用のレシピ

ServerEvents.recipes(e => {

  // Vintage
  e.remove({output: 'ad_astra:desh_plate'})
  e.remove({output: 'ad_astra:ostrum_plate'})
  e.remove({output: 'ad_astra:calorite_plate'})
  e.remove({output: 'vintage:desh_rod'})
  e.remove({output: 'vintage:ostrum_rod'})
  e.remove({output: 'vintage:calorite_rod'})
  e.recipes.vintage.hammering('ad_astra:desh_plate', 'ad_astra:desh_ingot').hammerBlows(2)
  e.recipes.vintage.hammering('ad_astra:ostrum_plate', 'ad_astra:ostrum_ingot').hammerBlows(3)
  e.recipes.vintage.hammering('ad_astra:calorite_plate', 'ad_astra:calorite_ingot').hammerBlows(4)
  e.recipes.vintage.turning('2x vintage:desh_rod', 'ad_astra:desh_ingot').processingTime(100)
  e.recipes.vintage.turning('2x vintage:ostrum_rod', 'ad_astra:ostrum_ingot').processingTime(200)
  e.recipes.vintage.turning('2x vintage:calorite_rod', 'ad_astra:calorite_ingot').processingTime(300)

  e.remove({output: 'vintage:laser'})
  e.remove({output: 'vintage:laser_item'})

  // ロッドを置き換え
  e.replaceInput({input: 'ad_astra:steel_rod'},'ad_astra:steel_rod','vintage:steel_rod')
  e.replaceInput({input: 'ad_astra:iron_rod'},'ad_astra:iron_rod','createaddition:iron_rod')

  // Chromatic
  e.remove({output: 'create:chromatic_compound'})
  e.recipes.create.item_application('create:refined_radiance_casing', ['ad_astra:strophar_planks', 'create:refined_radiance'])
  e.recipes.create.item_application('create:shadow_steel_casing', ['ad_astra:aeronos_planks', 'create:shadow_steel'])

  // 鉱石処理
  e.remove({id: 'create:crushing/tuff'})
  e.remove({id: 'createoreexcavation:milling/redstone'})
  e.remove({id: 'createoreexcavation:crushing/redstone'})
  e.remove({id: 'create:crushing/tuff_recycling'})

  e.recipes.create.crushing('createoreexcavation:raw_redstone', ['1x redstone', Item.of('redstone').withChance(0.5)])

  e.recipes.create.crushing('ad_astra:moon_sand', 'ad_astra:moon_cobblestone')
  e.recipes.create.splashing([Item.of('kubejs:fireclay_powder').withChance(0.25), Item.of('create:zinc_nugget').withChance(0.12)], 'ad_astra:moon_sand')

  e.recipes.create.crushing('ad_astra:mars_sand', 'ad_astra:mars_cobblestone')
  e.recipes.create.splashing([Item.of('redstone').withChance(0.25), Item.of('createnuclear:lead_nugget').withChance(0.12), Item.of('ad_astra:desh_nugget').withChance(0.08)], 'ad_astra:mars_sand')
  
  e.recipes.create.crushing([Item.of('tfmg:sulfur_dust').withChance(0.25), Item.of('silentgear:emerald_shard').withChance(0.12), Item.of('ad_astra:ostrum_nugget').withChance(0.08)], 'ad_astra:mercury_cobblestone')
  
  e.recipes.create.crushing('ad_astra:venus_sand', 'ad_astra:venus_cobblestone')
  e.recipes.create.splashing([Item.of('tfmg:bauxite_powder').withChance(0.25), Item.of('create_more_additions:silver_nugget').withChance(0.12), Item.of('silentgear:diamond_shard').withChance(0.08)], 'ad_astra:venus_sand')
  e.recipes.create.crushing([Item.of('ad_astra:venus_cobblestone').withChance(0.17), Item.of('tfmg:nickel_nugget').withChance(0.12), Item.of('netherite_scrap').withChance(0.05)], 'ad_astra:infernal_spire_block')
  
  e.recipes.create.crushing([Item.of('createnuclear:uranium_powder').withChance(0.25), Item.of('amethyst_shard').withChance(0.12), Item.of('ad_astra:calorite_nugget').withChance(0.08)], 'ad_astra:glacio_cobblestone')

  // 宇宙服
  e.remove({output: '#ad_astra:heat_resistant_armor'})
  e.shaped('ad_astra:netherite_space_helmet', [
    'OAO',
    'OCO',
    ' G '
  ], {
    O: 'ad_astra:ostrum_plate',
    A: 'netherite_helmet',
    C: 'kubejs:integrated_circuit',
    G: '#forge:glass/colorless'
  })
  e.shaped('ad_astra:netherite_space_suit', [
    'O O',
    'TGC',
    'OAO'
  ], {
    O: 'ad_astra:ostrum_plate',
    A: 'netherite_chestplate',
    C: 'kubejs:integrated_circuit',
    T: 'ad_astra:large_gas_tank',
    G: 'ad_astra:oxygen_gear'
  })
  e.shaped('ad_astra:netherite_space_pants', [
    'OAO',
    'DCD',
    'O O'
  ], {
    O: 'ad_astra:ostrum_plate',
    A: 'netherite_leggings',
    C: 'kubejs:integrated_circuit',
    D: 'ad_astra:desh_plate'
  })
  e.shaped('ad_astra:netherite_space_boots', [
    ' A ',
    'DCD',
    'O O'
  ], {
    O: 'ad_astra:ostrum_plate',
    A: 'netherite_leggings',
    C: 'kubejs:integrated_circuit',
    D: 'ad_astra:desh_plate'
  })

  e.shaped('ad_astra:jet_suit_helmet', [
    'OAO',
    'OCO',
    ' G '
  ], {
    O: 'ad_astra:calorite_plate',
    A: 'ad_astra:netherite_space_helmet',
    C: 'kubejs:chromatic_stained_aerospace_mechanism',
    G: '#forge:glass/colorless'
  })
  e.shaped('ad_astra:jet_suit', [
    'O O',
    'TGC',
    'EAE'
  ], {
    O: 'ad_astra:calorite_plate',
    A: 'ad_astra:netherite_space_suit',
    C: 'kubejs:chromatic_stained_aerospace_mechanism',
    T: 'ad_astra:calorite_tank',
    G: 'ad_astra:calorite_engine',
    E: 'ad_astra:etrionic_capacitor'
  })
  e.shaped('ad_astra:jet_suit_pants', [
    'DAD',
    'OCO',
    'O O'
  ], {
    O: 'ad_astra:calorite_plate',
    A: 'ad_astra:netherite_space_pants',
    C: 'kubejs:chromatic_stained_aerospace_mechanism',
    D: 'ad_astra:calorite_block'
  })
  e.shaped('ad_astra:jet_suit_boots', [
    ' A ',
    'OCO',
    'D D'
  ], {
    O: 'ad_astra:calorite_plate',
    A: 'ad_astra:netherite_space_boots',
    C: 'kubejs:chromatic_stained_aerospace_mechanism',
    D: 'ad_astra:calorite_block'
  })

  e.shaped('balancedflight:flight_anchor', [
    'MBM',
    'MGM',
    'ACA'
  ], {
    B: 'beacon',
    A: 'create:brass_block',
    C: 'kubejs:integrated_circuit',
    M: 'kubejs:electronic_mechanism',
    G: 'ad_astra:gravity_normalizer'
  })

  // Tier1
  e.remove({output: 'ad_astra:rocket_fin'})
  e.remove({type: 'ad_astra:compressing'})
  e.remove({type: 'ad_astra:alloying'})
  e.remove({type: 'ad_astra:refining'})
  e.remove({type: 'ad_astra:cryo_freezing'})
  e.remove({type: 'ad_astra:oxygen_loading'})
  e.recipes.vintage.curving('ad_astra:rocket_fin', '#forge:storage_blocks/steel').mode(4)

  e.recipes.vintage.pressurizing(Fluid.of('ad_astra:fuel', 1000), [Fluid.of('tfmg:hydrogen', 1000), Fluid.of('ad_astra:oxygen', 1000), Fluid.of('tfmg:diesel', 1000)]).superheated()
  e.recipes.vintage.vacuumizing([Fluid.of('ad_astra:cryo_fuel', 1000)], [Fluid.of('ad_astra:fuel', 1000), 'ad_astra:ice_shard', 'ad_astra:ostrum_nugget'])

  e.remove({output: 'ad_astra:nasa_workbench'})
  e.recipes.create.mechanical_crafting('ad_astra:nasa_workbench', [
    ' R R ',
    'R N R',
    ' SSS ',
    ' CTC ',
    ' SBS '
  ], {
    R: 'vintage:steel_rod',
    N: 'nether_star',
    S: 'tfmg:heavy_plate',
    C: 'tfmg:circuit_board',
    T: 'vintage:netherite_sheet',
    B: 'tfmg:steel_block'
  })

  e.remove({output: 'ad_astra:launch_pad'})
  e.recipes.create.mechanical_crafting('ad_astra:launch_pad', [
    'SBBBS',
    'SRCRS',
    'SBBBS'
  ], {
    R: 'vintage:steel_rod',
    S: 'tfmg:heavy_plate',
    C: 'tfmg:circuit_board',
    B: 'tfmg:steel_block'
  })

  e.remove({output: 'ad_astra:gas_tank'})
  e.shaped('ad_astra:gas_tank', [
    'RP',
    'SS',
    'SS'
  ], {
    R: 'vintage:steel_rod',
    S: 'tfmg:aluminum_sheet',
    P: 'tfmg:plastic_sheet'
  })
  
  e.remove({output: 'ad_astra:oxygen_gear'})
  e.shaped('ad_astra:oxygen_gear', [
    ' M ',
    'SRS',
    'SRS'
  ], {
    R: 'tfmg:plastic_sheet',
    S: 'tfmg:aluminum_sheet',
    M: 'kubejs:electronic_mechanism'
  })

  e.remove({output: 'ad_astra:etrionic_capacitor'})
  e.shaped('ad_astra:etrionic_capacitor', [
    'RPR',
    'PLP',
    'DPD'
  ], {
    R: 'create:electron_tube',
    P: 'tfmg:plastic_sheet',
    L: 'diamond',
    D: 'tfmg:lithium_ingot'
  })

  e.remove({output: 'ad_astra:engine_frame'})
  e.shaped('ad_astra:engine_frame', [
    'RRR',
    'SLS',
    'RRR'
  ], {
    R: 'vintage:steel_rod',
    S: 'tfmg:aluminum_sheet',
    L: 'tfmg:heavy_machinery_casing'
  })

  e.remove({output: 'ad_astra:wheel'})
  e.shaped('ad_astra:wheel', [
    ' B ',
    'BSB',
    ' B '
  ], {
    B: 'create:belt_connector',
    S: 'tfmg:aluminum_ingot'
  })

  e.remove({output: 'ad_astra:fan'})
  e.shaped('ad_astra:fan', [
    ' B ',
    'BPB',
    ' B '
  ], {
    B: 'tfmg:heavy_plate',
    P: 'create:propeller'
  })

  e.remove({output: 'ad_astra:rocket_nose_cone'})
  e.shaped('ad_astra:rocket_nose_cone', [
    ' S ',
    'SHS',
    'SBS'
  ], {
    S: 'tfmg:heavy_plate',
    B: 'tfmg:steel_block',
    H: 'tfmg:circuit_board'
  })

  e.remove({output: 'ad_astra:ti_69'})
  e.shaped('ad_astra:ti_69', [
    'AGA',
    'SCS',
    'SSS'
  ], {
    S: 'tfmg:heavy_plate',
    A: 'tfmg:aluminum_sheet',
    G: '#forge:glass_panes/colorless',
    C: 'tfmg:circuit_board'
  })

  e.remove({output: 'ad_astra:radio'})
  e.shaped('ad_astra:radio', [
    'R  ',
    'SCS',
    'SSS'
  ], {
    S: 'tfmg:aluminum_sheet',
    R: 'createaddition:brass_rod',
    C: 'tfmg:circuit_board'
  })

  e.replaceInput({input: 'ad_astra:oxygen_loader'},'ad_astra:oxygen_loader','create:mechanical_mixer')

  // Tier2
  e.remove({id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench'})
  e.recipes.create.compacting('kubejs:tier_2_rocket_hull', ['ad_astra:desh_block', '2x kubejs:nethersteel_ingot']).heated()

  e.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": "kubejs:tier_2_rocket_hull"
      },
      {
        "item": "kubejs:tier_2_rocket_hull"
      },
      {
        "item": "kubejs:tier_2_rocket_hull"
      },
      {
        "item": "kubejs:tier_2_rocket_hull"
      },
      {
        "item": "kubejs:tier_2_rocket_hull"
      },
      {
        "item": "kubejs:tier_2_rocket_hull"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:desh_tank"
      },
      {
        "item": "ad_astra:desh_tank"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:desh_engine"
      },
      {
        "item": "ad_astra:rocket_fin"
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_2_rocket"
    }
  })

  e.recipes.create.mechanical_crafting('mbd2:rtg_generator', [
    'SUS',
    'SVS',
    ' V ',
    'RRR',
    'PCP'
  ], {
    S: 'tfmg:heavy_plate',
    C: 'kubejs:integrated_circuit',
    R: 'createnuclear:reactor_casing',
    U: 'createnuclear:uranium_rod',
    V: 'vintage:ostrum_rod',
    P: 'ad_astra:ostrum_plate'
  })
  e.shaped('mbd2:rtg_engine', [
    'S',
    'G',
    'M'
  ], {
    S: 'create:shaft',
    G: 'mbd2:rtg_generator',
    M: 'tfmg:electric_motor'
  })
  e.shapeless('mbd2:rtg_generator', ['mbd2:rtg_engine'])

  // Tier3
  e.remove({id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench'})

  // Assembler
  e.shaped('mbd2:item_input_bus', [
    'C',
    'R',
    'B'
  ], {
    C: 'tfmg:circuit_board',
    R: 'createnuclear:reactor_casing',
    B: 'chest'
  })
  e.shaped('mbd2:item_output_bus', [
    'B',
    'R',
    'C'
  ], {
    C: 'tfmg:circuit_board',
    R: 'createnuclear:reactor_casing',
    B: 'chest'
  })
  e.shaped('mbd2:fluid_input_hatch', [
    'C',
    'R',
    'B'
  ], {
    C: 'tfmg:circuit_board',
    R: 'createnuclear:reactor_casing',
    B: 'create:fluid_tank'
  })
  e.shaped('mbd2:fluid_output_hatch', [
    'B',
    'R',
    'C'
  ], {
    C: 'tfmg:circuit_board',
    R: 'createnuclear:reactor_casing',
    B: 'create:fluid_tank'
  })
  e.shaped('mbd2:energy_input_hatch', [
    'C',
    'R',
    'B'
  ], {
    C: 'tfmg:circuit_board',
    R: 'createnuclear:reactor_casing',
    B: 'createaddition:modular_accumulator'
  })
  e.shaped('mbd2:energy_output_hatch', [
    'B',
    'R',
    'C'
  ], {
    C: 'tfmg:circuit_board',
    R: 'createnuclear:reactor_casing',
    B: 'createaddition:modular_accumulator'
  })
  e.shaped('mbd2:kinetic_output_hatch', [
    'B',
    'R',
    'C'
  ], {
    C: 'tfmg:circuit_board',
    R: 'createnuclear:reactor_casing',
    B: 'create:shaft'
  })

  e.recipes.create.mechanical_crafting('mbd2:assembly_line', [
    'EBE EBE',
    'BDCCCDB',
    'ECTTTCE',
    ' CTHTC ',
    'ECTTTCE',
    'BDCCCDB',
    'EBE EBE'
  ], {
    D: 'ad_astra:desh_block',
    C: 'createnuclear:reactor_casing',
    T: 'tfmg:circuit_board',
    H: 'tfmg:heavy_machinery_casing',
    B: 'tfmg:aluminum_block',
    E: 'kubejs:electronic_mechanism'
  })

  // (Assembler Recipe: Silicon Wafer)

  e.recipes.vintage.laser_cutting('kubejs:printed_wafer', 'kubejs:silicon_wafer').energy(400000).maxChargeRate(1050)
  e.recipes.create.cutting('16x kubejs:computation_chip', 'kubejs:printed_wafer')

  // (Assembler Recipe: Integrated Circuit Base)

  let tItem = 'kubejs:incomplete_integrated_circuit'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:integrated_circuit').withChance(80.0),
    Item.of('tfmg:circuit_board').withChance(5.0),
    Item.of('tfmg:plastic_sheet').withChance(5.0),
    Item.of('create:sturdy_sheet').withChance(4.0),
    Item.of('create:golden_sheet').withChance(2.0),
    Item.of('kubejs:computation_chip').withChance(2.0),
    'createaddition:gold_wire',
    'tfmg:silicon_ingot'
  ], 'kubejs:integrated_circuit_base', [
    e.recipes.createDeploying(tItem, [tItem, 'create:sturdy_sheet']),
    e.recipes.createPressing(tItem, tItem),
    e.recipes.createDeploying(tItem, [tItem, 'kubejs:computation_chip']),
    e.recipes.createDeploying(tItem, [tItem, 'createaddition:gold_wire'])
  ]).transitionalItem(tItem).loops(6)

  e.recipes.create.mechanical_crafting('kubejs:tier_3_rocket_hull', [
    'SOOOS',
    'SCBCS',
    'SOOOS'
  ], {
    B: 'ad_astra:ostrum_block',
    S: '#forge:plates/steel',
    O: 'ad_astra:ostrum_plate',
    C: 'kubejs:integrated_circuit'
  })

  e.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": "kubejs:tier_3_rocket_hull"
      },
      {
        "item": "kubejs:tier_3_rocket_hull"
      },
      {
        "item": "kubejs:tier_3_rocket_hull"
      },
      {
        "item": "kubejs:tier_3_rocket_hull"
      },
      {
        "item": "kubejs:tier_3_rocket_hull"
      },
      {
        "item": "kubejs:tier_3_rocket_hull"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:ostrum_tank"
      },
      {
        "item": "ad_astra:ostrum_tank"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:ostrum_engine"
      },
      {
        "item": "ad_astra:rocket_fin"
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_3_rocket"
    }
  })
  
  // Tier4
  e.remove({id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench'})

  tItem = 'kubejs:unfinished_exquisite_diamond'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:exquisite_diamond').withChance(50.0),
    Item.of('createaddition:diamond_grit').withChance(25.0),
    Item.of('silentgear:diamond_shard').withChance(15.0),
    Item.of('diamond').withChance(10.0)
  ], 'diamond', [
    e.recipes.createCutting(tItem, tItem),
    e.recipes.vintagePolishing(tItem, [tItem]).speedLimits(3).fragile(),
    e.recipes.vintagePolishing(tItem, [tItem]).speedLimits(2).fragile(),
    e.recipes.vintagePolishing(tItem, [tItem]).speedLimits(1).fragile(),
  ]).transitionalItem(tItem).loops(2)

  e.recipes.tfmg.vat_machine_recipe(['ad_astra:ostrum_ingot', 'create:polished_rose_quartz', 'kubejs:exquisite_diamond', 'glowstone'], '2x create:chromatic_compound').machines('tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode').minSize(1).processingTime(200).allowedVatTypes('tfmg:firebrick_lined_vat').superheated()
  
  // (Assembler Recipe: Chromatic-Stained Sheet)

  tItem = 'kubejs:incomplete_aerospace_control_unit'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:aerospace_control_unit').withChance(95.0),
    Item.of('create:shadow_steel').withChance(2.0),
    Item.of('create:refined_radiance').withChance(2.0),
    'create:chromatic_compound'
  ], 'kubejs:chromatic_stained_sheet', [
    e.recipes.createDeploying(tItem, [tItem, 'kubejs:gear_mechanism']),
    e.recipes.createDeploying(tItem, [tItem, 'tfmg:aluminum_cogwheel']),
    e.recipes.createDeploying(tItem, [tItem, 'tfmg:large_aluminum_cogwheel']),
    e.recipes.createPressing(tItem, tItem),
    e.recipes.createDeploying(tItem, [tItem, 'kubejs:exquisite_diamond']),
    e.recipes.createDeploying(tItem, [tItem, 'vintage:small_nethersteel_spring']),
  ]).transitionalItem(tItem).loops(3)

  tItem = 'kubejs:incomplete_chromatic_stained_aerospace_mechanism'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:chromatic_stained_aerospace_mechanism').withChance(85.0),
    Item.of('kubejs:chromatic_stained_sheet').withChance(3.5),
    Item.of('create:refined_radiance').withChance(2.5),
    Item.of('create:shadow_steel').withChance(2.5),
    Item.of('kubejs:exquisite_diamond').withChance(2.5),
    Item.of('create:chromatic_compound').withChance(1.5),
    Item.of('tfmg:plastic_sheet').withChance(1.5),
    'create:polished_rose_quartz'
  ], 'kubejs:aerospace_control_unit', [
    e.recipes.createDeploying(tItem, [tItem, 'vintage:shadow_steel_rod']),
    e.recipes.createDeploying(tItem, [tItem, 'vintage:refined_radiance_wire']),
    e.recipes.vintagePolishing(tItem, tItem).speedLimits(3),
    e.recipes.createDeploying(tItem, [tItem, 'create:precision_mechanism']),
    e.recipes.createDeploying(tItem, [tItem, 'tfmg:plastic_mechanical_pump']),
    e.recipes.createDeploying(tItem, [tItem, 'create:electron_tube']),
  ]).transitionalItem(tItem).loops(3)

  e.recipes.create.mechanical_crafting('kubejs:tier_4_rocket_hull', [
    'SOOOS',
    'SCBCS',
    'SOOOS'
  ], {
    B: 'ad_astra:calorite_block',
    S: 'kubejs:chromatic_stained_sheet',
    O: 'ad_astra:calorite_plate',
    C: 'kubejs:chromatic_stained_aerospace_mechanism'
  })

  e.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": "kubejs:tier_4_rocket_hull"
      },
      {
        "item": "kubejs:tier_4_rocket_hull"
      },
      {
        "item": "kubejs:tier_4_rocket_hull"
      },
      {
        "item": "kubejs:tier_4_rocket_hull"
      },
      {
        "item": "kubejs:tier_4_rocket_hull"
      },
      {
        "item": "kubejs:tier_4_rocket_hull"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:calorite_tank"
      },
      {
        "item": "ad_astra:calorite_tank"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:calorite_engine"
      },
      {
        "item": "ad_astra:rocket_fin"
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_4_rocket"
    }
  })

})