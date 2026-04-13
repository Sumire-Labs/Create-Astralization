// Immersive Aircraftのレシピ

ServerEvents.recipes(e => {
  
  // 中間素材
  e.replaceInput({input: 'immersive_aircraft:propeller'},'immersive_aircraft:propeller','create:propeller')
  e.remove({output: 'immersive_aircraft:hull'})
  e.shaped('immersive_aircraft:hull', [
    'LLL', 
    'III',
    'LLL'  
  ], {
    L: '#logs',
    I: '#forge:plates/iron',
  })

  e.remove({output: 'immersive_aircraft:engine'})
  e.shaped('immersive_aircraft:engine', [
    'III', 
    'MAM', 
    'IHI' 
  ], {
    A: 'blast_furnace',
    I: '#forge:plates/iron',
    M: 'kubejs:gear_mechanism',
    H: 'create:copper_casing'
  })

  // 船
  e.remove({output: 'immersive_aircraft:gyrodyne'})
  e.shaped('immersive_aircraft:gyrodyne', [
    'HS ', 
    'MPR',
    'HS '  
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    P: 'create:propeller',
    M: 'kubejs:gear_mechanism',
    R: '#forge:rods/andesite'
  })

  e.remove({output: 'immersive_aircraft:airship'})
  e.shaped('immersive_aircraft:airship', [
    'SSS', 
    'SSS',
    'HME'
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    M: 'create_sa:steam_engine'
  })

  e.remove({output: 'immersive_aircraft:cargo_airship'})
  e.shaped('immersive_aircraft:cargo_airship', [
    'SAS', 
    'SHS',
    ' T '
  ], {
    S: 'chest',
    H: 'immersive_aircraft:hull',
    A: 'immersive_aircraft:airship',
    T: 'create:sturdy_sheet'
  })

  e.remove({output: 'immersive_aircraft:warship'})
  e.shaped('immersive_aircraft:warship', [
    'SMS', 
    'EAE',
    'HTH'
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    A: 'immersive_aircraft:cargo_airship',
    E: 'immersive_aircraft:engine',
    T: 'immersive_aircraft:industrial_gears',
    M: 'create_sa:heat_engine'
  })

  e.remove({output: 'immersive_aircraft:biplane'})
  e.shaped('immersive_aircraft:biplane', [
    ' H ', 
    'MEP',
    ' H '
  ], {
    P: 'create:propeller',
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    M: 'create_sa:heat_engine'
  })

  e.remove({output: 'immersive_aircraft:bamboo_hopper'})
  e.shaped('immersive_aircraft:bamboo_hopper', [
    'AHA', 
    'BEB',
    'PBP'
  ], {
    A: 'immersive_aircraft:biplane',
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    B: 'bamboo_block',
    P: 'tfmg:aluminum_sheet'
  })

  // 武器
  e.remove({output: 'immersive_aircraft:bomb_bay'})
  e.shaped('immersive_aircraft:bomb_bay', [
    'ITI', 
    'I I', 
    'R R' 
  ], {
    I: '#forge:plates/iron',
    T: 'tnt',
    R: '#forge:rods/bronze'
  })

  // アップグレード
  e.remove({output: 'immersive_aircraft:steel_boiler'})
  e.shaped('immersive_aircraft:steel_boiler', [
    'III', 
    'IBI', 
    'IPI' 
  ], {
    I: '#forge:plates/cast_iron',
    P: 'create:copper_casing',
    B: 'blast_furnace'
  })

  e.remove({output: 'immersive_aircraft:eco_engine'})
  e.shaped('immersive_aircraft:eco_engine', [
    'SGS', 
    'GEG', 
    'BBB' 
  ], {
    S: 'kubejs:slime_paste',
    G: '#forge:plates/gold',
    E: 'immersive_aircraft:engine',
    B: '#forge:plates/zinc'
  })

  e.remove({output: 'immersive_aircraft:hull_reinforcement'})
  e.shaped('immersive_aircraft:hull_reinforcement', [
    'III', 
    'HHH', 
    'III' 
  ], {
    I: '#forge:plates/iron',
    H: 'immersive_aircraft:hull',
  })

  e.remove({output: 'immersive_aircraft:nether_engine'})
  e.shaped('immersive_aircraft:nether_engine', [
    'SNS', 
    'GEG', 
    'BBB' 
  ], {
    S: 'blaze_rod',
    N: '#forge:plates/netherite',
    G: 'tfmg:steel_mechanism',
    E: 'immersive_aircraft:engine',
    B: '#forge:plates/steel'
  })

  e.remove({output: 'immersive_aircraft:sturdy_pipes'})
  e.shaped('immersive_aircraft:sturdy_pipes', [
    '  B', 
    'PPP', 
    'B  ' 
  ], {
    P: 'tfmg:cast_iron_pipe', 
    B: '#forge:plates/bronze'
  })

  e.remove({output: 'immersive_aircraft:enhanced_propeller'})
  e.shaped('immersive_aircraft:enhanced_propeller', [
    'BB ', 
    ' P ', 
    ' BB' 
  ], {
    P: 'create:propeller', 
    B: '#forge:plates/bronze'
  })

  e.remove({output: 'immersive_aircraft:industrial_gears'})
  e.shaped('immersive_aircraft:industrial_gears', [
    ' II', 
    'BMI', 
    'BB ' 
  ], {
    I: '#forge:plates/iron',
    B: '#forge:plates/bronze',
    M: 'kubejs:gear_mechanism'
  })

  e.remove({output: 'immersive_aircraft:gyroscope'})
  e.shaped('immersive_aircraft:gyroscope', [
    ' M ', 
    'COC' 
  ], {
    C: 'comparator',
    O: 'compass',
    M: 'create:precision_mechanism'
  })

  e.remove({output: 'immersive_aircraft:improved_landing_gear'})
  e.shaped('immersive_aircraft:improved_landing_gear', [
    ' PI',
    'CCI',
    'CC '
  ], {
    P: '#forge:rods/andesite',
    I: '#forge:plates/andesite',
    C: 'create:belt_connector'
  })
})
