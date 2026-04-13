// Silent Gear改変

ServerEvents.recipes(e => {

  e.remove({output: 'silentgear:tyrian_steel_ingot'})
  e.remove({output: 'silentgear:glittery_dust'})
  e.remove({output: 'silentgear:blazing_dust'})
  e.remove({id: 'silentgear:crimson_iron_dust_smelting'})
  e.remove({id: 'silentgear:crimson_iron_dust_blasting'})
  e.remove({id: 'silentgear:azure_silver_dust_smelting'})
  e.remove({id: 'silentgear:azure_silver_dust_blasting'})
  e.remove({output: 'silentgear:mod_kit'})
  e.remove({output: 'silentgear:crude_repair_kit'})
  e.remove({output: 'silentgear:azure_repair_kit'})
  e.remove({id: 'silentgear:coating_smithing_template'})
  e.remove({output: 'silentgear:blueprint_book'})
  e.remove({output: 'silentgear:starmetal_dust'})
  e.remove({output: 'silentgear:wide_plate_upgrade'})
  e.remove({output: 'silentgear:material_grader'})
  e.remove({output: 'silentgear:starlight_charger'})
  e.remove({output: 'silentgear:metal_alloyer'})
  e.remove({output: 'silentgear:recrystallizer'})
  e.remove({output: 'silentgear:refabricator'})
  e.remove({output: 'silentgear:metal_press'})

  e.shapeless('4x silentgear:blazing_dust', ['blaze_powder','blaze_powder','glowstone_dust','glowstone_dust'])
  e.shapeless('4x silentgear:glittery_dust', ['emerald','glowstone_dust','popped_chorus_fruit','popped_chorus_fruit'])
  e.shapeless('3x silentgear:starmetal_dust', ['silentgear:tyrian_steel_ingot','silentgear:azure_silver_ingot','blaze_powder','blaze_powder','silentgear:nether_star_fragment'])
  e.shapeless('silentgear:coating_smithing_template', ['netherite_upgrade_smithing_template','silentgear:blueprint_paper','create_more_additions:silver_jewel'])
  e.shapeless('silentgear:wide_plate_upgrade', ['silentgear:advanced_upgrade_base','silentgear:crimson_iron_block','#forge:ingots/netherite'])

  e.recipes.create.pressing('kubejs:azure_silver_sheet', 'silentgear:azure_silver_ingot')
  e.recipes.create.pressing('kubejs:crimson_iron_sheet', 'silentgear:crimson_iron_ingot')
  e.recipes.vintage.hammering('kubejs:tyrian_steel_sheet', 'silentgear:tyrian_steel_ingot').hammerBlows(3)

  e.recipes.create.mixing('4x silentgear:tyrian_steel_ingot', ['silentgear:azure_silver_ingot', 'silentgear:crimson_iron_ingot', 'shulker_shell', 'netherite_scrap']).superheated()

  e.shaped('silentgear:mod_kit', [
    'FFI', 
    'FFW'
  ], {
    F: 'flint',
    I: 'iron_ingot',
    W: '#forge:rods/wooden'
  })
  e.shaped('silentgear:crude_repair_kit', [
    ' W ', 
    'FIF', 
    'FFF'
  ], {
    F: 'flint',
    I: 'iron_ingot',
    W: '#forge:rods/wooden'
  })
  e.shaped('silentgear:blueprint_book', [
    'BWG',
    'PPP'
  ], {
    B: 'book',
    W: '#wool',
    G: 'gold_ingot',
    P: 'silentgear:blueprint_paper'
  })
  e.shaped('silentgear:azure_repair_kit', [
    ' W ', 
    'FIF', 
    'FFF'
  ], {
    F: '#forge:plates/azure_silver',
    I: 'emerald',
    W: 'end_rod'
  })
  e.shaped('silentgear:material_grader', [
    'QIQ', 
    'IAI', 
    'BBB'
  ], {
    Q: 'quartz',
    I: '#forge:plates/iron',
    A: 'silentgear:advanced_upgrade_base',
    B: '#forge:plates/bronze'
  })
  e.shaped('silentgear:starlight_charger', [
    'QGQ', 
    'SGS', 
    'SBS'
  ], {
    Q: 'quartz',
    G: '#forge:glass/colorless',
    S: '#forge:plates/obsidian',
    B: '#forge:storage_blocks/brass'
  })
  e.shaped('silentgear:metal_alloyer', [
    'CSC', 
    'C C', 
    'SBS'
  ], {
    C: '#forge:plates/crimson_iron',
    S: '#forge:plates/obsidian',
    B: '#forge:storage_blocks/brass'
  })
  e.shaped('silentgear:recrystallizer', [
    'AEA', 
    'ADA', 
    'PGP'
  ], {
    A: '#forge:plates/azure_silver',
    E: 'emerald',
    D: 'diamond',
    P: 'purpur_block',
    G: '#forge:storage_blocks/brass'
  })
  e.shaped('silentgear:refabricator', [
    'I I', 
    'DSD', 
    'PBP'
  ], {
    I: '#forge:ingots/iron',
    D: 'diamond',
    S: 'create_more_additions:silver_jewel',
    P: '#planks',
    B: '#forge:storage_blocks/iron'
  })
  e.shaped('silentgear:metal_press', [
    'SYS', 
    'T T', 
    'SYS'
  ], {
    Y: '#forge:plates/tyrian_steel',
    S: '#forge:plates/obsidian',
    T: 'vintage:shadow_steel_spring'
  })
})