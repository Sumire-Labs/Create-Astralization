// Sophisticatedのレシピ

ServerEvents.recipes(e => {
  e.remove({id:'sophisticatedbackpacks:backpack'})
  e.remove({id:'sophisticatedbackpacks:copper_backpack'})
  e.remove({id:'sophisticatedbackpacks:iron_backpack'})
  e.remove({id:'sophisticatedbackpacks:iron_backpack_from_copper'})
  e.remove({id:'sophisticatedbackpacks:gold_backpack'})
  e.remove({id:'sophisticatedbackpacks:diamond_backpack'})
  e.remove({id:'sophisticatedbackpacks:netherite_backpack'})

  e.shaped('sophisticatedbackpacks:backpack', [
    'ALA', 
    'ASA',
    'LLL'  
  ], {
    A: '#forge:plates/andesite', 
    S: 'supplementaries:sack',
    L: '#forge:leather'
  })

  e.shaped('sophisticatedbackpacks:copper_backpack', [
    'SSS', 
    'SBS',
    'SSS'  
  ], {
    S: '#forge:plates/bronze',
    B: 'sophisticatedbackpacks:backpack', 
  })

  e.shaped('sophisticatedbackpacks:iron_backpack', [
    'SSS', 
    'SBS',
    'SSS'  
  ], {
    S: '#forge:plates/steel',
    B: 'sophisticatedbackpacks:copper_backpack', 
  })

  e.shaped('sophisticatedbackpacks:gold_backpack', [
    'SSS', 
    'SBS',
    'SSS'  
  ], {
    S: '#forge:plates/aluminum',
    B: 'sophisticatedbackpacks:iron_backpack', 
  })

  e.shaped('sophisticatedbackpacks:diamond_backpack', [
    'SSS', 
    'SBS',
    'SSS'  
  ], {
    S: '#forge:ingots/plastic',
    B: 'sophisticatedbackpacks:gold_backpack', 
  })

  e.shaped('sophisticatedbackpacks:netherite_backpack', [
    'SSS', 
    'SBS',
    'SSS'  
  ], {
    S: '#forge:plates/desh',
    B: 'sophisticatedbackpacks:diamond_backpack', 
  })

  e.replaceInput({mod: 'sophisticatedbackpacks', input: 'iron_ingot', not: {input: 'smooth_stone'}},'iron_ingot','#forge:plates/andesite')
})
