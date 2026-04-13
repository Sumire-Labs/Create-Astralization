const orevein=  [

  // Overworld
  ["silver","create_more_additions:raw_silver","735643","minecraft:is_overworld"],
  
  // Nether
  ["crimson_iron","silentgear:raw_crimson_iron","16757","minecraft:is_nether"],
  ["glowstone","minecraft:glowstone_dust","216778","minecraft:is_nether"],

  // End
  ["azure_silver","silentgear:raw_azure_silver","71548","minecraft:is_end",["createoreexcavation:netherite_drill", 512, 1200]],
  ["copper","minecraft:raw_copper","485432","minecraft:is_end"],

  // Moon
  ["moon_stone","ad_astra:moon_cobblestone","411387",'ad_astra:moon_surface',["createoreexcavation:netherite_drill", 256, 100],"minecraft:lava 10"],

  // Mars
  ["mars_stone","ad_astra:mars_cobblestone","31962",'ad_astra:mars_surface',["createoreexcavation:netherite_drill", 256, 100],"minecraft:lava 10"],
  ["zinc","create:raw_zinc","813751","ad_astra:mars_surface"],
  ["lithium","tfmg:raw_lithium","11414",'ad_astra:mars_surface'],

  // Venus
  ["venus_stone","ad_astra:venus_cobblestone","14636",'ad_astra:venus_surface',["createoreexcavation:netherite_drill", 256, 100],"minecraft:lava 10"],
  ["desh","ad_astra:raw_desh","14636",'ad_astra:venus_surface',["createoreexcavation:netherite_drill", 512, 1200],"kubejs:gear_oil 10"],
  ["bauxite","tfmg:bauxite","11451",'ad_astra:moon_surface'],

  // Venus Infernal
  ["infernal_spire","ad_astra:infernal_spire_block","176331",'ad_astra:venus_infernal',["createoreexcavation:netherite_drill", 512, 600],"minecraft:lava 10"],
  
  // Mercury
  ["mercury_stone","ad_astra:mercury_cobblestone","21368",'ad_astra:mercury_surface',["createoreexcavation:netherite_drill", 256, 100],"minecraft:lava 10"],
  ["lead","createnuclear:raw_lead","114514",'ad_astra:mercury_surface'],
  ["redstone","createoreexcavation:raw_redstone","72134",'ad_astra:mercury_surface'],

  // Glacio
  ["glacio_stone","ad_astra:glacio_cobblestone","103246",'ad_astra:glacio_surface',["createoreexcavation:netherite_drill", 256, 100],"minecraft:lava 10"],
  ["ostrum","ad_astra:raw_ostrum","87762",'ad_astra:glacio_surface',["createoreexcavation:netherite_drill", 512, 1200],"kubejs:gear_oil 10"],
  ["nickel","tfmg:raw_nickel","11454",'ad_astra:glacio_surface'], 
  ["diamond","createoreexcavation:raw_diamond","168152",'ad_astra:glacio_surface',["createoreexcavation:netherite_drill", 512, 2400],"kubejs:gear_oil 10"],
  ["glacite","kubejs:glacite","95138",'ad_astra:glacio_surface',["createoreexcavation:netherite_drill", 512, 3600],"kubejs:infernal_lava 10"],

]
const separation = 8
const spacing = 128

const removevein = ["gold","quartz","emerald","hardened_diamond","diamond","zinc","redstone","copper","netherite","glowstone"]

//locate biome #minecraft:is_overworld
//["Vein name","outputitem","seed",'whitelist biome modifier',["drilltype","stress","speed"],"requiredfluid ~mb"]
ServerEvents.recipes(event=>{
  removevein.forEach(material =>{
    event.remove({id:`createoreexcavation:ore_vein_type/${material}`})
    event.remove({id:`createoreexcavation:drilling/${material}`})
  })


  orevein.forEach(material =>{
  
    let [drillType, stress, ticks] = material[4] || ["#createoreexcavation:drills", 256, 600]

    let vein = event.recipes.createoreexcavation.vein(Text.translate(`vein.kubejs.${material[0]}`), material[1])
      .placement(spacing, separation, material[2])
      .biomeWhitelist(material[3])
      .id(`kubejs:${material[0]}_vein`)
      
    

    let drilling = event.recipes.createoreexcavation.drilling(material[1], `kubejs:${material[0]}_vein`, ticks)
      .id(`kubejs:${material[0]}_extract`)
      .stress(stress)
      .drill(drillType)

    if (material[5]) {
      drilling.fluid(material[5])
    }
  })

  event.recipes.createoreexcavation.vein(Text.translate("vein.kubejs.oil_well"), 'tfmg:crude_oil_bucket')
		.placement(256, 32, 64630185).alwaysInfinite().id("kubejs:crude_oil_well").biomeWhitelist("ad_astra:moon_surface")
	event.recipes.createoreexcavation.extracting('tfmg:crude_oil 2000', 'kubejs:crude_oil_well', 10)
		.fluid('kubejs:gear_oil 10').id("kubejs:crude_oil");
})


/*
ServerEvents.recipes(event =>{
    

    //lead
    event.recipes.createoreexcavation.vein('{"text": "Lead Vein"}', 'tfmg:raw_lead')
		.placement(1024, 128, 1228)
		.id("kubejs:lead_vein")
    event.recipes.createoreexcavation.drilling('tfmg:raw_lead', 'kubejs:lead_vein', 100)
		.id("kubejs:lead_extract");

    //bauxite
    event.recipes.createoreexcavation.vein('{"text": "Bauxite Vein"}', 'tfmg:bauxite')
		.placement(1024, 128, 7561)
		.id("kubejs:bauxite_vein")
    event.recipes.createoreexcavation.drilling('tfmg:bauxite', 'kubejs:bauxite_vein', 100)
		.id("kubejs:bauxite_extract");

    //nickel
    event.recipes.createoreexcavation.vein('{"text": "Nickel Vein"}', 'tfmg:raw_nickel')
		.placement(1024, 128, 8265)
		.id("kubejs:nickel_vein")
    event.recipes.createoreexcavation.drilling('tfmg:raw_nickel', 'kubejs:nickel_vein', 100)
		.id("kubejs:nickel_extract");

    //lithium
    event.recipes.createoreexcavation.vein('{"text": "Lithium Vein"}', 'tfmg:raw_lithium')
		.placement(1024, 128, 4625)
		.id("kubejs:lithium_vein")
    event.recipes.createoreexcavation.drilling('tfmg:raw_lithium', 'kubejs:lithium_vein', 100)
		.id("kubejs:lithium_extract");

})*/