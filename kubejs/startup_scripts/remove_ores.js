onEvent('worldgen.remove', e => {
    e.removeOres(ore => {
      ore.blocks = [
        'ftbic:lead_ore',
        'ftbic:aluminum_ore',
        'ftbic:tin_ore',
        'ftbic:uranium_ore',
        'ftbic:deepslate_lead_ore',
        'ftbic:deepslate_aluminum_ore',
        'ftbic:deepslate_tin_ore',
        'ftbic:deepslate_uranium_ore'
      ]
    })
  })