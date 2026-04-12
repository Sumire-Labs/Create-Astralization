// エンドゲーム

ServerEvents.recipes(e => {

  let tItem = 'kubejs:unfinished_exquisite_glacite'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:exquisite_glacite').withChance(20.0),
    Item.of('packed_ice').withChance(35.0),
    Item.of('blue_ice').withChance(30.0),
    Item.of('kubejs:glacite').withChance(15.0)
  ], 'kubejs:glacite', [
    e.recipes.createCutting(tItem, tItem),
    e.recipes.vintagePolishing(tItem, [tItem]).speedLimits(3).fragile(),
    e.recipes.vintagePolishing(tItem, [tItem]).speedLimits(2).fragile(),
    e.recipes.vintagePolishing(tItem, [tItem]).speedLimits(1).fragile(),
  ]).transitionalItem(tItem).loops(4)

  e.recipes.create.compacting('2x kubejs:glacite_matrix', ['10x kubejs:exquisite_glacite', '2x kubejs:quantum_stabilized_prime_circuit', 'kubejs:cryogenic_entropy_regulator']).superheated()

  e.recipes.create.mechanical_crafting('mbd2:chromatic_crucible', [
    'EBBBBBE',
    ' EVVVE ',
    ' MGGGM ',
    ' EVVVE ',
    'EBBBBBE'
  ], {
    B: 'tfmg:aluminum_sheet',
    M: 'kubejs:integrated_circuit',
    G: 'kubejs:glacite',
    V: 'tfmg:fireproof_chemical_vat',
    E: 'kubejs:chromatic_stained_aerospace_mechanism'
  })

  tItem = 'kubejs:incomplete_quantum_phase_stabilizer'
  e.recipes.create.sequenced_assembly([
    Item.of('kubejs:quantum_phase_stabilizer').withChance(90.0),
    Item.of('kubejs:cryogenic_entropy_regulator').withChance(3.0),
    Item.of('kubejs:chromatic_stained_aerospace_mechanism').withChance(2.0),
    Item.of('kubejs:frostproof_plating').withChance(2.0),
    Item.of('kubejs:electronic_mechanism').withChance(2.0),
    Item.of('kubejs:exquisite_glacite').withChance(1.0)
  ], 'kubejs:frostproof_plating', [
    e.recipes.createDeploying(tItem, [tItem, 'kubejs:exquisite_glacite']),
    e.recipes.createPressing(tItem, tItem),
    e.recipes.createDeploying(tItem, [tItem, 'kubejs:cryogenic_entropy_regulator']),
    e.recipes.createCutting(tItem, tItem),
    e.recipes.createDeploying(tItem, [tItem, 'kubejs:electronic_mechanism']),
    e.recipes.vintagePolishing(tItem, tItem).speedLimits(3)
  ]).transitionalItem(tItem).loops(2)

  e.shaped('kubejs:temperature_manipulation_device', [
    ' P ',
    'MSI',
    ' P '
  ], {
    P: 'kubejs:frostproof_plating',
    S: 'kubejs:cryogenic_entropy_regulator',
    I: 'blue_ice',
    M: 'magma_block'
  })

  e.recipes.vintage.vacuumizing('kubejs:nullheat_catalyst', ['2x kubejs:exquisite_glacite', 'kubejs:cryogenic_entropy_regulator', Fluid.of('ad_astra:cryo_fuel', 2000)]).superheated()
  e.recipes.create.mixing(Fluid.of('kubejs:infernal_lava', 500), ['4x ad_astra:infernal_spire_block', Fluid.of('lava', 2000), Fluid.of('createnuclear:uranium', 100)]).superheated()
  e.recipes.vintage.vacuumizing(Fluid.of('kubejs:nullheat_suppression_fluid', 500), ['kubejs:exquisite_glacite', Fluid.of('kubejs:infernal_lava', 1000), Fluid.of('tfmg:molten_slag', 576)])

  e.shaped('kubejs:nullheat_reaction_rod', [
    'PMP',
    ' G ',
    'PIP'
  ], {
    P: 'kubejs:frostproof_plating',
    G: 'kubejs:glacite_matrix',
    I: 'kubejs:cryogenic_entropy_regulator',
    M: 'kubejs:quantum_stabilized_prime_circuit'
  })

  e.recipes.create.mechanical_crafting('mbd2:nullheat_reactor', [
    'EBE EBE',
    'BDCCCDB',
    'ECTTTCE',
    ' CTHTC ',
    'ECTTTCE',
    'BDCCCDB',
    'EBE EBE'
  ], {
    D: 'kubejs:quantum_stabilized_prime_circuit',
    C: 'createnuclear:reactor_casing',
    T: 'kubejs:cryogenic_entropy_regulator',
    H: 'createnuclear:reactor_controller',
    B: 'kubejs:tier_4_rocket_hull',
    E: 'kubejs:chromatic_stained_aerospace_mechanism'
  })

  e.recipes.create.mechanical_crafting('kubejs:nullheat_core', [
    'EBE EBE',
    'BDCCCDB',
    'ECTTTCE',
    ' CTHTC ',
    'ECTTTCE',
    'BDCCCDB',
    'EBE EBE'
  ], {
    D: 'ad_astra:calorite_block',
    C: 'kubejs:exquisite_glacite',
    T: 'kubejs:quantum_stabilized_prime_circuit',
    H: 'kubejs:glacite_matrix',
    B: 'kubejs:tier_4_rocket_hull',
    E: 'kubejs:cryogenic_entropy_regulator'
  })

  e.recipes.create.filling('kubejs:zerothium_ingot', [Fluid.of('kubejs:unstable_zerothium', 1000), 'netherite_ingot'])

  e.remove({id: 'create:mechanical_crafting/ascended_flight_ring'})
  e.recipes.create.mechanical_crafting('balancedflight:ascended_flight_ring', [
    'CC  C  CC',
    'CFZZZZZFC',
    ' ZZJ JZZ ',
    ' ZJ N JZ ',
    'CZ NEN ZC',
    ' ZJ N JZ ',
    ' ZZJ JZZ ',
    'CFZZZZZFC',
    'CC  C  CC'
  ], {
    C: 'kubejs:quantum_stabilized_prime_circuit',
    Z: 'kubejs:zerothium_ingot',
    J: 'ad_astra:calorite_engine',
    N: 'nether_star',
    F: 'feather',
    E: 'elytra'
  })

  e.recipes.create.deploying('2x createcasing:creative_casing', ['createcasing:creative_casing', 'purple_dye'])
})