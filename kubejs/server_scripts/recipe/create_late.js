// Create後半

ServerEvents.recipes(e => {

  // C&A
  e.replaceInput({input: 'createaddition:capacitor'},'createaddition:capacitor','tfmg:capacitor_item')
  e.remove({id:'create_more_additions:electrum/electrum_mixing_nugget'})
  e.remove({id:'create_more_additions:electrum/electrum_mixing_ingot'})
  e.remove({id:'create_more_additions:electrum/electrum_mixing_crushed'})

  // COE
  e.remove({output:'createoreexcavation:drilling_machine'})
  e.recipes.create.mechanical_crafting('createoreexcavation:drilling_machine', [
    'BSASB',
    'STPTS',
    'AMDMA',
    'SUUUS',
    'BSSSB'
  ], {
    T: 'create:electron_tube',
    M: 'create:precision_mechanism',
    S: 'tfmg:steel_ingot',
    P: 'create:spout',
    B: 'create:brass_block',
    U: 'create:sturdy_sheet',
    A: 'create:brass_casing',
    D: 'create:mechanical_drill'
  })
  e.remove({output:'createoreexcavation:extractor'})
  e.recipes.create.mechanical_crafting('createoreexcavation:extractor', [
    'BSASB',
    'STPTS',
    'AMDMA',
    'SUUUS',
    'BSSSB'
  ], {
    T: 'create:electron_tube',
    M: 'create:precision_mechanism',
    S: 'tfmg:steel_ingot',
    P: 'create:hose_pulley',
    B: 'create:brass_block',
    U: 'create:sturdy_sheet',
    A: 'create:copper_casing',
    D: 'create:mechanical_drill'
  })

  // TFMG
  e.remove({id:'tfmg:crafting/kinetics/unfinished_resistorfrom_slime'})
  e.remove({id: 'tfmg:industrial_blasting/steel_from_dust'})
  e.remove({output: 'tfmg:copper_electrode'})
  e.remove({output: 'tfmg:zinc_electrode'})
  e.remove({output: 'tfmg:graphite_electrode'})

  e.remove({output: 'tfmg:constantan_wire'})
  e.remove({output: 'tfmg:copper_wire'})
  e.remove({output: 'tfmg:aluminum_wire'})
  e.recipes.createaddition.rolling('vintage:constantan_sheet', '2x tfmg:constantan_wire')
  e.recipes.createaddition.rolling('create:copper_sheet', '2x tfmg:copper_wire')
  e.recipes.createaddition.rolling('tfmg:aluminum_sheet', '2x tfmg:aluminum_wire')
  e.recipes.vintage.turning('tfmg:copper_electrode', 'copper_block')
  e.recipes.vintage.turning('tfmg:zinc_electrode', 'create:zinc_block')
  e.recipes.vintage.turning('tfmg:graphite_electrode', 'tfmg:coal_coke_block')

  e.remove({output: 'tfmg:screw'})
  e.recipes.vintage.turning('2x tfmg:screw', 'vintage:steel_rod').processingTime(100)

  // Balanced Flight
  e.remove({output: 'balancedflight:flight_anchor'})

  // Vintage
  e.remove({mod: 'vintage', type: 'vintage:pressurizing'})
  e.remove({id: 'vintage:coiling/aluminum_rod'})
  e.remove({id: 'vintage:coiling/aluminum_wire'})
  e.remove({id: 'vintage:coiling/cast_iron_rod'})
  e.remove({id: 'vintage:coiling/cast_iron_wire'})
  e.remove({id: 'vintage:pressing/cast_iron_ingot'})
  e.remove({id: 'vintage:pressing/aluminum_ingot'})
  e.remove({id: 'vintage:curving/diamond'})
  
  e.remove({output: 'vintage:netherite_rod'})
  e.replaceInput({output: 'vintage:netherite_wire'},'vintage:netherite_rod','vintage:netherite_sheet')
  e.recipes.vintage.turning('2x vintage:netherite_rod', '#forge:ingots/netherite')

  e.recipes.vintage.turning('2x vintage:nethersteel_rod', '#forge:ingots/nethersteel')
  e.recipes.vintage.hammering('vintage:nethersteel_sheet', '#forge:ingots/nethersteel').hammerBlows(3)
  e.recipes.createaddition.rolling('vintage:nethersteel_sheet', '2x vintage:nethersteel_wire')
  e.recipes.vintage.coiling('vintage:nethersteel_spring', 'vintage:nethersteel_rod').springColor('756a65')
  e.recipes.vintage.coiling('vintage:small_nethersteel_spring', 'vintage:nethersteel_wire').springColor('756a65')
  
  e.recipes.vintage.hammering('tfmg:heavy_plate', '#forge:ingots/steel').hammerBlows(2)
  e.remove({output: 'vintage:steel_rod'})
  e.recipes.vintage.turning('2x vintage:steel_rod', '#forge:ingots/steel').processingTime(100)
  e.remove({output: 'tfmg:rebar'})
  e.recipes.create.cutting('2x tfmg:rebar', '#forge:rods/steel').processingTime(100)

  e.recipes.vintage.curving('hopper', '#forge:plates/steel').mode(2)

  e.remove({output: 'vintage:curving_press'})
  e.shaped('vintage:curving_press', [
    ' S ', 
    'PCP',
  ], {
    S: 'create:shaft',
    C: 'create:andesite_casing',
    P: 'vintage:steel_spring',
  })

  e.remove({output: 'vintage:lathe'})
  e.recipes.create.mechanical_crafting('vintage:lathe', [
    ' MPA ',
    'SCCTS',
    '  PA '
  ], {
    A: 'create:andesite_alloy',
    M: 'create:precision_mechanism',
    T: 'tfmg:steel_block',
    P: 'vintage:andesite_spring',
    C: 'create:andesite_casing',
    S: 'create:shaft'
  })

  e.remove({output: 'vintage:helve_hammer'})
  e.recipes.create.mechanical_crafting('vintage:helve_hammer', [
    ' B PP',
    'BLLLC',
    'TT  S'
  ], {
    B: 'iron_block',
    T: 'tfmg:steel_block',
    P: 'vintage:steel_spring',
    L: '#logs',
    C: 'create:andesite_casing',
    S: 'create:shaft'
  })

  e.remove({output: 'create_sa:brass_jetpack_chestplate'})
  e.recipes.create.mechanical_crafting('create_sa:brass_jetpack_chestplate', [
    'GBHBG',
    'FBEBF',
    ' LUL '
  ], {
    G: 'create:cogwheel',
    B: 'create:brass_ingot',
    F: 'create:encased_fan',
    E: 'create_sa:heat_engine',
    H: 'create_sa:steam_engine',
    L: 'tfmg:aluminum_sheet',
    U: 'tfmg:aluminum_ingot'
  })

  e.remove({output: 'create_sa:netherite_jetpack_chestplate'})
  e.smithing('create_sa:netherite_jetpack_chestplate', 'tfmg:plastic_mechanical_pump', 'create_sa:brass_jetpack_chestplate', 'netherite_ingot')

  e.remove({output: 'create_sa:heat_engine'})
  let tItem = 'create_sa:incomplete_heat_engine'
  e.recipes.create.sequenced_assembly([
    Item.of('create_sa:heat_engine').withChance(95.0),
    Item.of('tfmg:heavy_plate').withChance(3.5),
    Item.of('create:propeller').withChance(1.5),
  ], 'tfmg:steel_mechanism', [
    e.recipes.createDeploying(tItem, [tItem, 'create:cogwheel']),
    e.recipes.createDeploying(tItem, [tItem, 'create:large_cogwheel']),
    e.recipes.createFilling(tItem, [tItem, Fluid.of('kubejs:gear_oil', 100)]),
    e.recipes.createDeploying(tItem, [tItem, 'create:propeller']),
    e.recipes.createDeploying(tItem, [tItem, 'create:zinc_nugget']),
    e.recipes.createDeploying(tItem, [tItem, 'create:andesite_alloy'])
  ]).transitionalItem(tItem).loops(3)

  e.remove({output: 'create_hypertube:hypertube_entrance'})
  e.shaped('create_hypertube:hypertube_entrance', [
    'B', 
    'S',
    'M'
  ], {
    B: 'create:belt_connector',
    S: 'create:smart_chute',
    M: 'tfmg:magnet'
  })

  e.remove({output: 'create_hypertube:hypertube'})
  e.shaped('16x create_hypertube:hypertube', [
    'BGB', 
    'GSG',
    'BGB'
  ], {
    B: 'create:brass_sheet',
    S: 'tfmg:silicon_ingot',
    G: '#forge:glass_panes/colorless'
  })

  e.remove({output: 'tfmg:polarizer'})
  e.shaped('tfmg:polarizer', [
    'BWB', 
    'CVC',
    'PSP'
  ], {
    B: 'create:brass_sheet',
    W: 'tfmg:copper_wire',
    V: 'tfmg:voltmeter',
    P: 'vintage:electrum_spring',
    S: 'tfmg:steel_casing',
    C: 'tfmg:capacitor_item'
  })

  e.remove({output: 'create_mobile_packages:portable_stock_ticker'})
  e.shapeless('create_mobile_packages:portable_stock_ticker', ['create:clipboard', 'create:redstone_link', 'create:stock_ticker', 'kubejs:electronic_mechanism'])

  e.remove({output: 'create_mobile_packages:robo_bee'})
  e.shaped('create_mobile_packages:robo_bee', [
    'FAF', 
    'HVH'
  ], {
    F: 'create:propeller',
    A: 'kubejs:electronic_mechanism',
    V: 'create:item_vault',
    H: 'honeycomb'
  })

  e.remove({output: 'tfmg:steel_distillation_controller'})
  e.shaped('tfmg:steel_distillation_controller', [
    'LIL',
    'MCM',
    'SHS'
  ], {
    L: '#forge:plates/lead',
    I: 'tfmg:industrial_pipe',
    M: 'kubejs:electronic_mechanism',
    S: 'tfmg:steel_mechanism',
    C: 'compass',
    H: 'tfmg:heavy_machinery_casing'
  })

  e.remove({output: 'tfmg:pumpjack_crank'})
  e.shaped('tfmg:pumpjack_crank', [
    'S S',
    'LML',
    'RHR'
  ], {
    L: '#forge:plates/aluminum',
    M: 'tfmg:steel_mechanism',
    R: 'tfmg:rebar',
    S: '#c:string',
    H: 'tfmg:heavy_machinery_casing'
  })

  e.remove({output: 'tfmg:pumpjack_hammer'})
  e.shaped('tfmg:pumpjack_hammer', [
    'RLR',
    'LTL',
    ' T '
  ], {
    L: '#forge:plates/aluminum',
    R: 'tfmg:rebar',
    T: 'tfmg:steel_truss'
  })

  e.remove({output: 'vintage:vacuum_chamber'})
  e.shaped('vintage:vacuum_chamber', [
    'SCS',
    'AMA',
    ' P '
  ], {
    S: 'vintage:steel_spring',
    C: 'create:andesite_casing',
    A: '#forge:plates/steel',
    M: 'tfmg:steel_mechanism',
    P: 'create:steel_mechanical_pump'
  })
  
  e.remove({output: 'createadditionallogistics:flexible_shaft'})
  e.shaped('4x createadditionallogistics:flexible_shaft', [
    'MS ',
    'WCW',
    ' S '
  ], {
    S: '#createadditionallogistics:basic_shafts',
    W: 'create:cogwheel',
    C: 'create:brass_casing',
    M: 'tfmg:circuit_board'
  })
  e.shaped('4x createadditionallogistics:flexible_shaft', [
    ' SM',
    'WCW',
    ' S '
  ], {
    S: '#createadditionallogistics:basic_shafts',
    W: 'create:cogwheel',
    C: 'create:brass_casing',
    M: 'tfmg:circuit_board'
  })
  e.shaped('4x createadditionallogistics:flexible_shaft', [
    ' S ',
    'WCW',
    'MS '
  ], {
    S: '#createadditionallogistics:basic_shafts',
    W: 'create:cogwheel',
    C: 'create:brass_casing',
    M: 'tfmg:circuit_board'
  })
  e.shaped('4x createadditionallogistics:flexible_shaft', [
    ' S ',
    'WCW',
    ' SM'
  ], {
    S: '#createadditionallogistics:basic_shafts',
    W: 'create:cogwheel',
    C: 'create:brass_casing',
    M: 'tfmg:circuit_board'
  })

  e.remove({output: 'createnuclear:reactor_core'})
  e.recipes.create.mechanical_crafting('createnuclear:reactor_core', [
    'RRRRR',
    'RMSMR',
    'RSUSR',
    'RMSMR',
    'RRRRR'
  ], {
    R: 'createnuclear:reactor_casing',
    M: 'tfmg:circuit_board',
    S: '#forge:plates/nethersteel',
    U: 'createnuclear:uranium_bucket'
  })

  e.remove({output: 'createnuclear:reactor_controller'})
  e.recipes.create.mechanical_crafting('createnuclear:reactor_controller', [
    'RRRRR',
    'RMNMR',
    'RSUSR',
    'RMNMR',
    'RRRRR'
  ], {
    R: 'createnuclear:reactor_casing',
    M: 'tfmg:circuit_board',
    N: 'vintage:netherite_sheet',
    S: 'kubejs:electronic_mechanism',
    U: 'createnuclear:enriched_soul_soil'
  })

  e.recipes.create.mixing(Fluid.of('kubejs:gear_oil', 1000), [Fluid.of('tfmg:lubrication_oil', 1000), '#c:dusts'])

  // Aluminum
  e.remove({id: 'tfmg:vat_machine_recipe/aluminum'})
  e.recipes.tfmg.vat_machine_recipe(Fluid.of('water', 1000), [Item.of('kubejs:sodium_hydroxide').withChance(0.25), Fluid.of('ad_astra:oxygen', 500), Fluid.of('tfmg:hydrogen', 1000)]).machines('tfmg:electrode', 'tfmg:electrode').minSize(1).processingTime(20).allowAllVatTypes()
  e.recipes.vintage.pressurizing([Fluid.of('kubejs:sodium_aluminate_solution', 1000), Item.of('iron_nugget').withChance(0.25)], [Fluid.of('water', 1000), '2x tfmg:bauxite_powder', 'kubejs:sodium_hydroxide']).heated()
  e.recipes.vintage.centrifugation([Fluid.of('kubejs:aluminum_hydroxide_solution', 250), Item.of('iron_nugget').withChance(0.1), Item.of('tfmg:slag').withChance(0.25)], [Fluid.of('kubejs:sodium_aluminate_solution', 1000)])
  e.recipes.vintage.pressurizing([Fluid.of('kubejs:alumina_solution', 500)], [Fluid.of('kubejs:aluminum_hydroxide_solution', 250), 'redstone']).superheated()
  e.recipes.tfmg.vat_machine_recipe(Fluid.of('kubejs:alumina_solution', 1000), ['tfmg:aluminum_ingot', Item.of('4x tfmg:aluminum_nugget').withChance(0.75), Item.of('redstone').withChance(0.75)]).machines('tfmg:electrode', 'tfmg:electrode').minSize(1).processingTime(100).allowAllVatTypes().superheated()
  
  tItem = 'kubejs:incomplete_electronic_component'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:electronic_component').withChance(95.0),
    Item.of('tfmg:aluminum_sheet').withChance(2.0),
    Item.of('create:electron_tube').withChance(1.0),
    Item.of('tfmg:aluminum_ingot').withChance(1.0),
    Item.of('redstone').withChance(1.0)
  ], 'tfmg:aluminum_sheet', [
    e.recipes.createDeploying(tItem, [tItem, 'vintage:steel_wire']),
    e.recipes.createDeploying(tItem, [tItem, 'tfmg:copper_wire']),
    e.recipes.createPressing(tItem, [tItem]),
    e.recipes.createDeploying(tItem, [tItem, 'create:electron_tube']),
    e.recipes.createDeploying(tItem, [tItem, 'create_more_additions:silver_nugget']),
    e.recipes.vintagePolishing(tItem, [tItem]).speedLimits(2).fragile(),
  ]).transitionalItem(tItem).loops(2)

  tItem = 'kubejs:incomplete_electronic_mechanism'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:electronic_mechanism').withChance(85.0),
    Item.of('create:electron_tube').withChance(4.0),
    Item.of('tfmg:aluminum_sheet').withChance(4.0),
    Item.of('tfmg:aluminum_ingot').withChance(3.0),
    Item.of('vintage:steel_wire').withChance(2.0),
    Item.of('tfmg:copper_wire').withChance(1.0),
    Item.of('redstone').withChance(1.0)
  ], 'kubejs:electronic_component', [
    e.recipes.createDeploying(tItem, [tItem, 'tfmg:aluminum_wire']),
    e.recipes.createDeploying(tItem, [tItem, 'createnuclear:coal_dust']),
    e.recipes.vintageVibrating(tItem, tItem),
    e.recipes.createDeploying(tItem, [tItem, 'silentgear:azure_silver_nugget']),
    e.recipes.createDeploying(tItem, [tItem, 'tfmg:screw']),
    e.recipes.createDeploying(tItem, [tItem, 'tfmg:screwdriver']),
  ]).transitionalItem(tItem).loops(3)

  // Nuclear
  e.recipes.create.mixing('kubejs:nethersteel_compound', ['2x tfmg:steel_ingot', 'silentgear:crimson_iron_ingot']).superheated()
  e.recipes.tfmg.vat_machine_recipe(['netherite_scrap', 'kubejs:nethersteel_compound', 'kubejs:nethersteel_compound'], [Fluid.of('kubejs:molten_nethersteel', 864), Fluid.of('tfmg:molten_slag', 288)]).machines('tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode').minSize(1).processingTime(200).allowedVatTypes('tfmg:firebrick_lined_vat').superheated()
  e.recipes.tfmg.casting(Fluid.of('kubejs:molten_nethersteel', 144), 'kubejs:nethersteel_ingot', 200)
  
  e.remove({output: 'createnuclear:graphene'})
  e.recipes.vintage.pressurizing('3x createnuclear:graphene', ['4x tfmg:coal_coke_dust', '4x createnuclear:coal_dust', Fluid.of('tfmg:sulfuric_acid', 250)])

  e.remove({output: 'createnuclear:enriched_soul_soil'})
  e.recipes.vintage.pressurizing('createnuclear:enriched_soul_soil', ['nether_star', '4x soul_soil', '16x create:powdered_obsidian']).superheated()

  e.remove({output: 'createnuclear:reactor_casing'})
  e.recipes.create.item_application('createnuclear:reactor_casing', ['tfmg:heavy_machinery_casing', 'kubejs:nethersteel_ingot'])

  // CC
  e.replaceInput({mod: 'computercraft', not: {output: 'computercraft:redstone_relay'}}, 'redstone', 'tfmg:transistor_item')
  e.replaceInput({mod: 'computercraft'}, 'stone', 'tfmg:aluminum_sheet')
  e.replaceInput({mod: 'computercraft'}, 'gold_ingot', 'tfmg:plastic_sheet')
  e.replaceInput({mod: 'computercraft'}, 'golden_apple', 'tfmg:circuit_board')

  e.remove({id: 'computercraft:turtle_normal'})
  e.shaped('computercraft:turtle_normal', [
    'III',
    'ICI',
    'ISI'
  ], {
    I: 'tfmg:heavy_plate',
    C: 'computercraft:computer_normal',
    S: 'tfmg:circuit_board'
  })

  e.remove({id: 'computercraft:turtle_advanced'})
  e.shaped('computercraft:turtle_advanced', [
    'III',
    'ICI',
    'ISI'
  ], {
    I: 'tfmg:heavy_plate',
    C: 'computercraft:computer_advanced',
    S: 'tfmg:circuit_board'
  })

  e.remove({id: 'computercraft:turtle_advanced_upgrade'})
  e.shaped('computercraft:turtle_advanced', [
    'III',
    'ICI',
    'I I'
  ], {
    I: 'tfmg:plastic_sheet',
    C: 'computercraft:turtle_normal'
  })

  e.remove({id: 'computercraft:computer_advanced_upgrade'})
  e.shaped('computercraft:computer_advanced', [
    'III',
    'ICI',
    'I I'
  ], {
    I: 'tfmg:plastic_sheet',
    C: 'computercraft:computer_normal'
  })

  e.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
  e.shaped('computercraft:pocket_computer_advanced', [
    'III',
    'ICI',
    'I I'
  ], {
    I: 'tfmg:plastic_sheet',
    C: 'computercraft:pocket_computer_normal'
  })
})
