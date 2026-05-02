// Sophisticatedのレシピ

ServerEvents.recipes(e => {
  e.remove({id:'sophisticatedbackpacks:backpack'})
  e.remove({id:'sophisticatedbackpacks:copper_backpack'})
  e.remove({id:'sophisticatedbackpacks:iron_backpack'})
  e.remove({id:'sophisticatedbackpacks:iron_backpack_from_copper'})
  e.remove({id:'sophisticatedbackpacks:gold_backpack'})
  e.remove({id:'sophisticatedbackpacks:diamond_backpack'})
  e.remove({id:'sophisticatedbackpacks:netherite_backpack'})

  e.custom({
    "type": "sophisticatedbackpacks:basic_backpack",
    "key": {
      "C": {
        "item": "supplementaries:sack"
      },
      "L": {
        "tag": "forge:leather"
      },
      "S": {
        "tag": "forge:plates/andesite"
      }
    },
    "pattern": [
      "SLS",
      "SCS",
      "LLL"
    ],
    "result": {
      "item": "sophisticatedbackpacks:backpack"
    }
  })

  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "key": {
      "B": {
        "item": "sophisticatedbackpacks:backpack"
      },
      "C": {
        "tag": "forge:plates/bronze"
      }
    },
    "pattern": [
      "CCC",
      "CBC",
      "CCC"
    ],
    "result": {
      "item": "sophisticatedbackpacks:copper_backpack"
    }
  })

  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "key": {
      "B": {
        "item": "sophisticatedbackpacks:copper_backpack"
      },
      "C": {
        "tag": "forge:plates/steel"
      }
    },
    "pattern": [
      "CCC",
      "CBC",
      "CCC"
    ],
    "result": {
      "item": "sophisticatedbackpacks:iron_backpack"
    }
  })

  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "key": {
      "B": {
        "item": "sophisticatedbackpacks:iron_backpack"
      },
      "C": {
        "tag": "forge:plates/aluminum"
      }
    },
    "pattern": [
      "CCC",
      "CBC",
      "CCC"
    ],
    "result": {
      "item": "sophisticatedbackpacks:gold_backpack"
    }
  })

  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "key": {
      "B": {
        "item": "sophisticatedbackpacks:gold_backpack"
      },
      "C": {
        "tag": "forge:ingots/plastic"
      }
    },
    "pattern": [
      "CCC",
      "CBC",
      "CCC"
    ],
    "result": {
      "item": "sophisticatedbackpacks:diamond_backpack"
    }
  })

  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "key": {
      "B": {
        "item": "sophisticatedbackpacks:diamond_backpack"
      },
      "C": {
        "tag": "forge:plates/desh"
      }
    },
    "pattern": [
      "CCC",
      "CBC",
      "CCC"
    ],
    "result": {
      "item": "sophisticatedbackpacks:netherite_backpack"
    }
  })

  e.replaceInput({mod: 'sophisticatedbackpacks', input: 'iron_ingot', not: {input: 'smooth_stone'}},'iron_ingot','#forge:plates/andesite')
})
