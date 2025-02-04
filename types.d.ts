/*@ts-ignore*/
type Game = any;
/*@ts-ignore*/
type Save = any;
/*@ts-ignore*/
type Line = any;
/*@ts-ignore*/
type Local = any;
/*@ts-ignore*/
type PlayerEvent = any;
/*@ts-ignore*/
type Function = any;
/*@ts-ignore*/
type Process = any;
/*@ts-ignore*/
declare class GameValue {
  constructor(data: {
    type: "Current Health" | "Maximum Health" | "Absorption Health" | "Food Level" | "Food Saturation" | "Food Exhaustion" | "Attack Damage" | "Attack Speed" | "Attack Cooldown" | "Attack Cooldown Ticks" | "Armor Points" | "Armor Toughness" | "Invulnerability Ticks" | "Experience Level" | "Experience Progress" | "Fire Ticks" | "Freeze Ticks" | "Remaining Air" | "Fall Distance" | "Held Slot" | "Ping" | "Steer Sideways Movement" | "Steer Forward Movement" | "Item Usage Progress" | "Flight Speed" | "Walk Speed" | "Location" | "Target Block Location" | "Target Block Side" | "Eye Location" | "X-Coordinate" | "Y-Coordinate" | "Z-Coordinate" | "Midpoint Location" | "Pitch" | "Yaw" | "Body Yaw" | "Standing Block Location" | "Spawn Location" | "Velocity" | "Direction" | "Entity Width" | "Entity Height" | "Main Hand Item" | "Off Hand Item" | "Armor Items" | "Hotbar Items" | "Inventory Items" | "Cursor Item" | "Inventory Menu Items" | "Saddle Item" | "Entity Item" | "Name" | "UUID" | "Entity Type" | "Game Mode" | "Open Inventory Title" | "Potion Effects" | "Vehicle" | "Passengers" | "Lead Holder" | "Attached Leads" | "Targeted Entity UUID" | "Projectile Shooter UUID" | "Display Entity Translation" | "Display Entity Scale" | "Pose" | "Event Block Location" | "Event Block Side" | "Event Damage" | "Damage Event Cause" | "Raw Event Damage" | "Event Death Message" | "Event Heal Amount" | "Heal Event Cause" | "Event Explosion Affected Blocks" | "Event Power" | "Event Command" | "Event Command Arguments" | "Event Item" | "Event Hotbar Slot" | "Event Clicked Slot Index" | "Event Clicked Slot Item" | "Event Clicked Slot New Item" | "Close Inventory Event Cause" | "Inventory Event Click Type" | "Fish Event Cause" | "Teleport Event Cause" | "Teleport Location" | "Exhaustion Event Cause" | "Event Exhaustion" | "Transform Event Cause" | "Event Transform Entities" | "Event Hit Type" | "Player Count" | "CPU Usage" | "Server TPS" | "Timestamp" | "Selection Size" | "Selection Target Names" | "Selection Target UUIDs" | "Plot ID" | "Plot Size" | "Microseconds Since Startup" | "Active Block Transactions" | "Plot Player Names" | "Plot Player UUIDs";
    target?: "Default" | "Selection" | "Killer" | "Damager" | "Victim" | "Shooter" | "Projectile" | "LastEntity";
  });
}
/*@ts-ignore*/
declare class Item {
  constructor(data: {
    material: "stone" | "granite" | "polished_granite" | "diorite" | "polished_diorite" | "andesite" | "polished_andesite" | "deepslate" | "cobbled_deepslate" | "polished_deepslate" | "calcite" | "tuff" | "dripstone_block" | "grass_block" | "dirt" | "coarse_dirt" | "podzol" | "rooted_dirt" | "mud" | "crimson_nylium" | "warped_nylium" | "cobblestone" | "oak_planks" | "spruce_planks" | "birch_planks" | "jungle_planks" | "acacia_planks" | "dark_oak_planks" | "mangrove_planks" | "crimson_planks" | "warped_planks" | "oak_sapling" | "spruce_sapling" | "birch_sapling" | "jungle_sapling" | "acacia_sapling" | "dark_oak_sapling" | "mangrove_propagule" | "sand" | "red_sand" | "gravel" | "coal_ore" | "deepslate_coal_ore" | "iron_ore" | "deepslate_iron_ore" | "copper_ore" | "deepslate_copper_ore" | "gold_ore" | "deepslate_gold_ore" | "redstone_ore" | "deepslate_redstone_ore" | "emerald_ore" | "deepslate_emerald_ore" | "lapis_ore" | "deepslate_lapis_ore" | "diamond_ore" | "deepslate_diamond_ore" | "nether_gold_ore" | "nether_quartz_ore" | "ancient_debris" | "coal_block" | "raw_iron_block" | "raw_copper_block" | "raw_gold_block" | "amethyst_block" | "iron_block" | "copper_block" | "gold_block" | "diamond_block" | "netherite_block" | "exposed_copper" | "weathered_copper" | "oxidized_copper" | "cut_copper" | "exposed_cut_copper" | "weathered_cut_copper" | "oxidized_cut_copper" | "cut_copper_stairs" | "exposed_cut_copper_stairs" | "weathered_cut_copper_stairs" | "oxidized_cut_copper_stairs" | "cut_copper_slab" | "exposed_cut_copper_slab" | "weathered_cut_copper_slab" | "oxidized_cut_copper_slab" | "waxed_copper_block" | "waxed_exposed_copper" | "waxed_weathered_copper" | "waxed_oxidized_copper" | "waxed_cut_copper" | "waxed_exposed_cut_copper" | "waxed_weathered_cut_copper" | "waxed_oxidized_cut_copper" | "waxed_cut_copper_stairs" | "waxed_exposed_cut_copper_stairs" | "waxed_weathered_cut_copper_stairs" | "waxed_oxidized_cut_copper_stairs" | "waxed_cut_copper_slab" | "waxed_exposed_cut_copper_slab" | "waxed_weathered_cut_copper_slab" | "waxed_oxidized_cut_copper_slab" | "oak_log" | "spruce_log" | "birch_log" | "jungle_log" | "acacia_log" | "dark_oak_log" | "mangrove_log" | "mangrove_roots" | "muddy_mangrove_roots" | "crimson_stem" | "warped_stem" | "stripped_oak_log" | "stripped_spruce_log" | "stripped_birch_log" | "stripped_jungle_log" | "stripped_acacia_log" | "stripped_dark_oak_log" | "stripped_mangrove_log" | "stripped_crimson_stem" | "stripped_warped_stem" | "stripped_oak_wood" | "stripped_spruce_wood" | "stripped_birch_wood" | "stripped_jungle_wood" | "stripped_acacia_wood" | "stripped_dark_oak_wood" | "stripped_mangrove_wood" | "stripped_crimson_hyphae" | "stripped_warped_hyphae" | "oak_wood" | "spruce_wood" | "birch_wood" | "jungle_wood" | "acacia_wood" | "dark_oak_wood" | "mangrove_wood" | "crimson_hyphae" | "warped_hyphae" | "oak_leaves" | "spruce_leaves" | "birch_leaves" | "jungle_leaves" | "acacia_leaves" | "dark_oak_leaves" | "mangrove_leaves" | "azalea_leaves" | "flowering_azalea_leaves" | "sponge" | "wet_sponge" | "glass" | "tinted_glass" | "lapis_block" | "sandstone" | "chiseled_sandstone" | "cut_sandstone" | "cobweb" | "grass" | "fern" | "azalea" | "flowering_azalea" | "dead_bush" | "seagrass" | "sea_pickle" | "white_wool" | "orange_wool" | "magenta_wool" | "light_blue_wool" | "yellow_wool" | "lime_wool" | "pink_wool" | "gray_wool" | "light_gray_wool" | "cyan_wool" | "purple_wool" | "blue_wool" | "brown_wool" | "green_wool" | "red_wool" | "black_wool" | "dandelion" | "poppy" | "blue_orchid" | "allium" | "azure_bluet" | "red_tulip" | "orange_tulip" | "white_tulip" | "pink_tulip" | "oxeye_daisy" | "cornflower" | "lily_of_the_valley" | "wither_rose" | "spore_blossom" | "brown_mushroom" | "red_mushroom" | "crimson_fungus" | "warped_fungus" | "crimson_roots" | "warped_roots" | "nether_sprouts" | "weeping_vines" | "twisting_vines" | "sugar_cane" | "kelp" | "moss_carpet" | "moss_block" | "hanging_roots" | "big_dripleaf" | "small_dripleaf" | "bamboo" | "oak_slab" | "spruce_slab" | "birch_slab" | "jungle_slab" | "acacia_slab" | "dark_oak_slab" | "mangrove_slab" | "crimson_slab" | "warped_slab" | "stone_slab" | "smooth_stone_slab" | "sandstone_slab" | "cut_sandstone_slab" | "cobblestone_slab" | "brick_slab" | "stone_brick_slab" | "mud_brick_slab" | "nether_brick_slab" | "quartz_slab" | "red_sandstone_slab" | "cut_red_sandstone_slab" | "purpur_slab" | "prismarine_slab" | "prismarine_brick_slab" | "dark_prismarine_slab" | "smooth_quartz" | "smooth_red_sandstone" | "smooth_sandstone" | "smooth_stone" | "bricks" | "bookshelf" | "mossy_cobblestone" | "obsidian" | "torch" | "end_rod" | "chorus_flower" | "purpur_block" | "purpur_pillar" | "purpur_stairs" | "chest" | "crafting_table" | "furnace" | "ladder" | "cobblestone_stairs" | "snow" | "ice" | "snow_block" | "cactus" | "clay" | "jukebox" | "oak_fence" | "spruce_fence" | "birch_fence" | "jungle_fence" | "acacia_fence" | "dark_oak_fence" | "mangrove_fence" | "crimson_fence" | "warped_fence" | "pumpkin" | "carved_pumpkin" | "jack_o_lantern" | "netherrack" | "soul_sand" | "soul_soil" | "basalt" | "polished_basalt" | "smooth_basalt" | "soul_torch" | "glowstone" | "stone_bricks" | "mossy_stone_bricks" | "cracked_stone_bricks" | "chiseled_stone_bricks" | "packed_mud" | "mud_bricks" | "deepslate_bricks" | "cracked_deepslate_bricks" | "deepslate_tiles" | "cracked_deepslate_tiles" | "chiseled_deepslate" | "brown_mushroom_block" | "red_mushroom_block" | "mushroom_stem" | "iron_bars" | "chain" | "glass_pane" | "melon" | "vine" | "glow_lichen" | "brick_stairs" | "stone_brick_stairs" | "mud_brick_stairs" | "mycelium" | "lily_pad" | "nether_bricks" | "cracked_nether_bricks" | "chiseled_nether_bricks" | "nether_brick_fence" | "nether_brick_stairs" | "sculk" | "sculk_vein" | "sculk_catalyst" | "sculk_shrieker" | "enchanting_table" | "end_stone" | "end_stone_bricks" | "dragon_egg" | "sandstone_stairs" | "ender_chest" | "emerald_block" | "oak_stairs" | "spruce_stairs" | "birch_stairs" | "jungle_stairs" | "acacia_stairs" | "dark_oak_stairs" | "mangrove_stairs" | "crimson_stairs" | "warped_stairs" | "beacon" | "cobblestone_wall" | "mossy_cobblestone_wall" | "brick_wall" | "prismarine_wall" | "red_sandstone_wall" | "mossy_stone_brick_wall" | "granite_wall" | "stone_brick_wall" | "mud_brick_wall" | "nether_brick_wall" | "andesite_wall" | "red_nether_brick_wall" | "sandstone_wall" | "end_stone_brick_wall" | "diorite_wall" | "blackstone_wall" | "polished_blackstone_wall" | "polished_blackstone_brick_wall" | "cobbled_deepslate_wall" | "polished_deepslate_wall" | "deepslate_brick_wall" | "deepslate_tile_wall" | "anvil" | "chipped_anvil" | "damaged_anvil" | "chiseled_quartz_block" | "quartz_block" | "quartz_bricks" | "quartz_pillar" | "quartz_stairs" | "white_terracotta" | "orange_terracotta" | "magenta_terracotta" | "light_blue_terracotta" | "yellow_terracotta" | "lime_terracotta" | "pink_terracotta" | "gray_terracotta" | "light_gray_terracotta" | "cyan_terracotta" | "purple_terracotta" | "blue_terracotta" | "brown_terracotta" | "green_terracotta" | "red_terracotta" | "black_terracotta" | "hay_block" | "white_carpet" | "orange_carpet" | "magenta_carpet" | "light_blue_carpet" | "yellow_carpet" | "lime_carpet" | "pink_carpet" | "gray_carpet" | "light_gray_carpet" | "cyan_carpet" | "purple_carpet" | "blue_carpet" | "brown_carpet" | "green_carpet" | "red_carpet" | "black_carpet" | "terracotta" | "packed_ice" | "sunflower" | "lilac" | "rose_bush" | "peony" | "tall_grass" | "large_fern" | "white_stained_glass" | "orange_stained_glass" | "magenta_stained_glass" | "light_blue_stained_glass" | "yellow_stained_glass" | "lime_stained_glass" | "pink_stained_glass" | "gray_stained_glass" | "light_gray_stained_glass" | "cyan_stained_glass" | "purple_stained_glass" | "blue_stained_glass" | "brown_stained_glass" | "green_stained_glass" | "red_stained_glass" | "black_stained_glass" | "white_stained_glass_pane" | "orange_stained_glass_pane" | "magenta_stained_glass_pane" | "light_blue_stained_glass_pane" | "yellow_stained_glass_pane" | "lime_stained_glass_pane" | "pink_stained_glass_pane" | "gray_stained_glass_pane" | "light_gray_stained_glass_pane" | "cyan_stained_glass_pane" | "purple_stained_glass_pane" | "blue_stained_glass_pane" | "brown_stained_glass_pane" | "green_stained_glass_pane" | "red_stained_glass_pane" | "black_stained_glass_pane" | "prismarine" | "prismarine_bricks" | "dark_prismarine" | "prismarine_stairs" | "prismarine_brick_stairs" | "dark_prismarine_stairs" | "sea_lantern" | "red_sandstone" | "chiseled_red_sandstone" | "cut_red_sandstone" | "red_sandstone_stairs" | "magma_block" | "nether_wart_block" | "warped_wart_block" | "red_nether_bricks" | "bone_block" | "shulker_box" | "white_shulker_box" | "orange_shulker_box" | "magenta_shulker_box" | "light_blue_shulker_box" | "yellow_shulker_box" | "lime_shulker_box" | "pink_shulker_box" | "gray_shulker_box" | "light_gray_shulker_box" | "cyan_shulker_box" | "purple_shulker_box" | "blue_shulker_box" | "brown_shulker_box" | "green_shulker_box" | "red_shulker_box" | "black_shulker_box" | "white_glazed_terracotta" | "orange_glazed_terracotta" | "magenta_glazed_terracotta" | "light_blue_glazed_terracotta" | "yellow_glazed_terracotta" | "lime_glazed_terracotta" | "pink_glazed_terracotta" | "gray_glazed_terracotta" | "light_gray_glazed_terracotta" | "cyan_glazed_terracotta" | "purple_glazed_terracotta" | "blue_glazed_terracotta" | "brown_glazed_terracotta" | "green_glazed_terracotta" | "red_glazed_terracotta" | "black_glazed_terracotta" | "white_concrete" | "orange_concrete" | "magenta_concrete" | "light_blue_concrete" | "yellow_concrete" | "lime_concrete" | "pink_concrete" | "gray_concrete" | "light_gray_concrete" | "cyan_concrete" | "purple_concrete" | "blue_concrete" | "brown_concrete" | "green_concrete" | "red_concrete" | "black_concrete" | "white_concrete_powder" | "orange_concrete_powder" | "magenta_concrete_powder" | "light_blue_concrete_powder" | "yellow_concrete_powder" | "lime_concrete_powder" | "pink_concrete_powder" | "gray_concrete_powder" | "light_gray_concrete_powder" | "cyan_concrete_powder" | "purple_concrete_powder" | "blue_concrete_powder" | "brown_concrete_powder" | "green_concrete_powder" | "red_concrete_powder" | "black_concrete_powder" | "turtle_egg" | "dead_tube_coral_block" | "dead_brain_coral_block" | "dead_bubble_coral_block" | "dead_fire_coral_block" | "dead_horn_coral_block" | "tube_coral_block" | "brain_coral_block" | "bubble_coral_block" | "fire_coral_block" | "horn_coral_block" | "tube_coral" | "brain_coral" | "bubble_coral" | "fire_coral" | "horn_coral" | "dead_brain_coral" | "dead_bubble_coral" | "dead_fire_coral" | "dead_horn_coral" | "dead_tube_coral" | "tube_coral_fan" | "brain_coral_fan" | "bubble_coral_fan" | "fire_coral_fan" | "horn_coral_fan" | "dead_tube_coral_fan" | "dead_brain_coral_fan" | "dead_bubble_coral_fan" | "dead_fire_coral_fan" | "dead_horn_coral_fan" | "blue_ice" | "conduit" | "polished_granite_stairs" | "smooth_red_sandstone_stairs" | "mossy_stone_brick_stairs" | "polished_diorite_stairs" | "mossy_cobblestone_stairs" | "end_stone_brick_stairs" | "stone_stairs" | "smooth_sandstone_stairs" | "smooth_quartz_stairs" | "granite_stairs" | "andesite_stairs" | "red_nether_brick_stairs" | "polished_andesite_stairs" | "diorite_stairs" | "cobbled_deepslate_stairs" | "polished_deepslate_stairs" | "deepslate_brick_stairs" | "deepslate_tile_stairs" | "polished_granite_slab" | "smooth_red_sandstone_slab" | "mossy_stone_brick_slab" | "polished_diorite_slab" | "mossy_cobblestone_slab" | "end_stone_brick_slab" | "smooth_sandstone_slab" | "smooth_quartz_slab" | "granite_slab" | "andesite_slab" | "red_nether_brick_slab" | "polished_andesite_slab" | "diorite_slab" | "cobbled_deepslate_slab" | "polished_deepslate_slab" | "deepslate_brick_slab" | "deepslate_tile_slab" | "scaffolding" | "redstone" | "redstone_torch" | "redstone_block" | "repeater" | "comparator" | "piston" | "sticky_piston" | "slime_block" | "honey_block" | "observer" | "hopper" | "dispenser" | "dropper" | "lectern" | "target" | "lever" | "lightning_rod" | "daylight_detector" | "sculk_sensor" | "tripwire_hook" | "trapped_chest" | "tnt" | "redstone_lamp" | "note_block" | "stone_button" | "polished_blackstone_button" | "oak_button" | "spruce_button" | "birch_button" | "jungle_button" | "acacia_button" | "dark_oak_button" | "mangrove_button" | "crimson_button" | "warped_button" | "stone_pressure_plate" | "polished_blackstone_pressure_plate" | "light_weighted_pressure_plate" | "heavy_weighted_pressure_plate" | "oak_pressure_plate" | "spruce_pressure_plate" | "birch_pressure_plate" | "jungle_pressure_plate" | "acacia_pressure_plate" | "dark_oak_pressure_plate" | "mangrove_pressure_plate" | "crimson_pressure_plate" | "warped_pressure_plate" | "iron_door" | "oak_door" | "spruce_door" | "birch_door" | "jungle_door" | "acacia_door" | "dark_oak_door" | "mangrove_door" | "crimson_door" | "warped_door" | "iron_trapdoor" | "oak_trapdoor" | "spruce_trapdoor" | "birch_trapdoor" | "jungle_trapdoor" | "acacia_trapdoor" | "dark_oak_trapdoor" | "mangrove_trapdoor" | "crimson_trapdoor" | "warped_trapdoor" | "oak_fence_gate" | "spruce_fence_gate" | "birch_fence_gate" | "jungle_fence_gate" | "acacia_fence_gate" | "dark_oak_fence_gate" | "mangrove_fence_gate" | "crimson_fence_gate" | "warped_fence_gate" | "powered_rail" | "detector_rail" | "rail" | "activator_rail" | "saddle" | "minecart" | "chest_minecart" | "furnace_minecart" | "tnt_minecart" | "hopper_minecart" | "carrot_on_a_stick" | "warped_fungus_on_a_stick" | "elytra" | "oak_boat" | "oak_chest_boat" | "spruce_boat" | "spruce_chest_boat" | "birch_boat" | "birch_chest_boat" | "jungle_boat" | "jungle_chest_boat" | "acacia_boat" | "acacia_chest_boat" | "dark_oak_boat" | "dark_oak_chest_boat" | "mangrove_boat" | "mangrove_chest_boat" | "turtle_helmet" | "scute" | "flint_and_steel" | "apple" | "bow" | "arrow" | "coal" | "charcoal" | "diamond" | "emerald" | "lapis_lazuli" | "quartz" | "amethyst_shard" | "raw_iron" | "iron_ingot" | "raw_copper" | "copper_ingot" | "raw_gold" | "gold_ingot" | "netherite_ingot" | "netherite_scrap" | "wooden_sword" | "wooden_shovel" | "wooden_pickaxe" | "wooden_axe" | "wooden_hoe" | "stone_sword" | "stone_shovel" | "stone_pickaxe" | "stone_axe" | "stone_hoe" | "golden_sword" | "golden_shovel" | "golden_pickaxe" | "golden_axe" | "golden_hoe" | "iron_sword" | "iron_shovel" | "iron_pickaxe" | "iron_axe" | "iron_hoe" | "diamond_sword" | "diamond_shovel" | "diamond_pickaxe" | "diamond_axe" | "diamond_hoe" | "netherite_sword" | "netherite_shovel" | "netherite_pickaxe" | "netherite_axe" | "netherite_hoe" | "stick" | "bowl" | "mushroom_stew" | "string" | "feather" | "gunpowder" | "wheat_seeds" | "wheat" | "bread" | "leather_helmet" | "leather_chestplate" | "leather_leggings" | "leather_boots" | "chainmail_helmet" | "chainmail_chestplate" | "chainmail_leggings" | "chainmail_boots" | "iron_helmet" | "iron_chestplate" | "iron_leggings" | "iron_boots" | "diamond_helmet" | "diamond_chestplate" | "diamond_leggings" | "diamond_boots" | "golden_helmet" | "golden_chestplate" | "golden_leggings" | "golden_boots" | "netherite_helmet" | "netherite_chestplate" | "netherite_leggings" | "netherite_boots" | "flint" | "porkchop" | "cooked_porkchop" | "painting" | "golden_apple" | "enchanted_golden_apple" | "oak_sign" | "spruce_sign" | "birch_sign" | "jungle_sign" | "acacia_sign" | "dark_oak_sign" | "mangrove_sign" | "crimson_sign" | "warped_sign" | "bucket" | "water_bucket" | "lava_bucket" | "powder_snow_bucket" | "snowball" | "leather" | "milk_bucket" | "pufferfish_bucket" | "salmon_bucket" | "cod_bucket" | "tropical_fish_bucket" | "axolotl_bucket" | "tadpole_bucket" | "brick" | "clay_ball" | "dried_kelp_block" | "paper" | "book" | "slime_ball" | "egg" | "compass" | "recovery_compass" | "fishing_rod" | "clock" | "spyglass" | "glowstone_dust" | "cod" | "salmon" | "tropical_fish" | "pufferfish" | "cooked_cod" | "cooked_salmon" | "ink_sac" | "glow_ink_sac" | "cocoa_beans" | "white_dye" | "orange_dye" | "magenta_dye" | "light_blue_dye" | "yellow_dye" | "lime_dye" | "pink_dye" | "gray_dye" | "light_gray_dye" | "cyan_dye" | "purple_dye" | "blue_dye" | "brown_dye" | "green_dye" | "red_dye" | "black_dye" | "bone_meal" | "bone" | "sugar" | "cake" | "white_bed" | "orange_bed" | "magenta_bed" | "light_blue_bed" | "yellow_bed" | "lime_bed" | "pink_bed" | "gray_bed" | "light_gray_bed" | "cyan_bed" | "purple_bed" | "blue_bed" | "brown_bed" | "green_bed" | "red_bed" | "black_bed" | "cookie" | "filled_map" | "shears" | "melon_slice" | "dried_kelp" | "pumpkin_seeds" | "melon_seeds" | "beef" | "cooked_beef" | "chicken" | "cooked_chicken" | "rotten_flesh" | "ender_pearl" | "blaze_rod" | "ghast_tear" | "gold_nugget" | "nether_wart" | "potion" | "glass_bottle" | "spider_eye" | "fermented_spider_eye" | "blaze_powder" | "magma_cream" | "brewing_stand" | "cauldron" | "ender_eye" | "glistering_melon_slice" | "experience_bottle" | "fire_charge" | "writable_book" | "written_book" | "item_frame" | "glow_item_frame" | "flower_pot" | "carrot" | "potato" | "baked_potato" | "poisonous_potato" | "map" | "golden_carrot" | "skeleton_skull" | "wither_skeleton_skull" | "zombie_head" | "creeper_head" | "dragon_head" | "nether_star" | "pumpkin_pie" | "firework_rocket" | "firework_star" | "enchanted_book" | "nether_brick" | "prismarine_shard" | "prismarine_crystals" | "rabbit" | "cooked_rabbit" | "rabbit_stew" | "rabbit_foot" | "rabbit_hide" | "armor_stand" | "iron_horse_armor" | "golden_horse_armor" | "diamond_horse_armor" | "leather_horse_armor" | "lead" | "name_tag" | "mutton" | "cooked_mutton" | "white_banner" | "orange_banner" | "magenta_banner" | "light_blue_banner" | "yellow_banner" | "lime_banner" | "pink_banner" | "gray_banner" | "light_gray_banner" | "cyan_banner" | "purple_banner" | "blue_banner" | "brown_banner" | "green_banner" | "red_banner" | "black_banner" | "end_crystal" | "chorus_fruit" | "popped_chorus_fruit" | "beetroot" | "beetroot_seeds" | "beetroot_soup" | "dragon_breath" | "splash_potion" | "spectral_arrow" | "tipped_arrow" | "lingering_potion" | "shield" | "totem_of_undying" | "shulker_shell" | "iron_nugget" | "music_disc_13" | "music_disc_cat" | "music_disc_blocks" | "music_disc_chirp" | "music_disc_far" | "music_disc_mall" | "music_disc_mellohi" | "music_disc_stal" | "music_disc_strad" | "music_disc_ward" | "music_disc_11" | "music_disc_wait" | "music_disc_otherside" | "music_disc_pigstep" | "trident" | "phantom_membrane" | "nautilus_shell" | "heart_of_the_sea" | "crossbow" | "suspicious_stew" | "loom" | "flower_banner_pattern" | "creeper_banner_pattern" | "skull_banner_pattern" | "mojang_banner_pattern" | "globe_banner_pattern" | "piglin_banner_pattern" | "composter" | "barrel" | "smoker" | "blast_furnace" | "cartography_table" | "fletching_table" | "grindstone" | "smithing_table" | "stonecutter" | "bell" | "lantern" | "soul_lantern" | "sweet_berries" | "glow_berries" | "campfire" | "soul_campfire" | "shroomlight" | "honeycomb" | "bee_nest" | "beehive" | "honey_bottle" | "honeycomb_block" | "lodestone" | "crying_obsidian" | "blackstone" | "blackstone_slab" | "blackstone_stairs" | "gilded_blackstone" | "polished_blackstone" | "polished_blackstone_slab" | "polished_blackstone_stairs" | "chiseled_polished_blackstone" | "polished_blackstone_bricks" | "polished_blackstone_brick_slab" | "polished_blackstone_brick_stairs" | "cracked_polished_blackstone_bricks" | "respawn_anchor" | "candle" | "white_candle" | "orange_candle" | "magenta_candle" | "light_blue_candle" | "yellow_candle" | "lime_candle" | "pink_candle" | "gray_candle" | "light_gray_candle" | "cyan_candle" | "purple_candle" | "blue_candle" | "brown_candle" | "green_candle" | "red_candle" | "black_candle" | "small_amethyst_bud" | "medium_amethyst_bud" | "large_amethyst_bud" | "amethyst_cluster" | "pointed_dripstone" | "ochre_froglight" | "verdant_froglight" | "pearlescent_froglight" | "echo_shard" | "bedrock" | "budding_amethyst" | "petrified_oak_slab" | "chorus_plant" | "spawner" | "farmland" | "infested_stone" | "infested_cobblestone" | "infested_stone_bricks" | "infested_mossy_stone_bricks" | "infested_cracked_stone_bricks" | "infested_chiseled_stone_bricks" | "infested_deepslate" | "reinforced_deepslate" | "end_portal_frame" | "command_block" | "barrier" | "light" | "dirt_path" | "repeating_command_block" | "chain_command_block" | "structure_void" | "structure_block" | "jigsaw" | "bundle" | "allay_spawn_egg" | "axolotl_spawn_egg" | "bat_spawn_egg" | "bee_spawn_egg" | "blaze_spawn_egg" | "cat_spawn_egg" | "cave_spider_spawn_egg" | "chicken_spawn_egg" | "cod_spawn_egg" | "cow_spawn_egg" | "creeper_spawn_egg" | "dolphin_spawn_egg" | "donkey_spawn_egg" | "drowned_spawn_egg" | "elder_guardian_spawn_egg" | "enderman_spawn_egg" | "endermite_spawn_egg" | "evoker_spawn_egg" | "fox_spawn_egg" | "frog_spawn_egg" | "ghast_spawn_egg" | "glow_squid_spawn_egg" | "goat_spawn_egg" | "guardian_spawn_egg" | "hoglin_spawn_egg" | "horse_spawn_egg" | "husk_spawn_egg" | "llama_spawn_egg" | "magma_cube_spawn_egg" | "mooshroom_spawn_egg" | "mule_spawn_egg" | "ocelot_spawn_egg" | "panda_spawn_egg" | "parrot_spawn_egg" | "phantom_spawn_egg" | "pig_spawn_egg" | "piglin_spawn_egg" | "piglin_brute_spawn_egg" | "pillager_spawn_egg" | "polar_bear_spawn_egg" | "pufferfish_spawn_egg" | "rabbit_spawn_egg" | "ravager_spawn_egg" | "salmon_spawn_egg" | "sheep_spawn_egg" | "shulker_spawn_egg" | "silverfish_spawn_egg" | "skeleton_spawn_egg" | "skeleton_horse_spawn_egg" | "slime_spawn_egg" | "spider_spawn_egg" | "squid_spawn_egg" | "stray_spawn_egg" | "strider_spawn_egg" | "tadpole_spawn_egg" | "trader_llama_spawn_egg" | "tropical_fish_spawn_egg" | "turtle_spawn_egg" | "vex_spawn_egg" | "villager_spawn_egg" | "vindicator_spawn_egg" | "wandering_trader_spawn_egg" | "warden_spawn_egg" | "witch_spawn_egg" | "wither_skeleton_spawn_egg" | "wolf_spawn_egg" | "zoglin_spawn_egg" | "zombie_spawn_egg" | "zombie_horse_spawn_egg" | "zombie_villager_spawn_egg" | "zombified_piglin_spawn_egg" | "player_head" | "command_block_minecart" | "knowledge_book" | "debug_stick" | "frogspawn";
    name?: StyledText;
    lore?: StyledText[];
    amount?: number;
    tags?: {
      [tag: string]: string | number;
    };
  });
}
/*@ts-ignore*/
declare class Location {
  constructor(data: {
    x: number;
    y: number;
    z: number;
    pitch?: number;
    yaw?: number;
  });
}
/*@ts-ignore*/
declare class Vector {
  constructor(data: {
    x: number;
    y: number;
    z: number;
  });
}
/*@ts-ignore*/
declare class Sound {
  constructor(data: {
    type: "Axolotl Attack" | "Axolotl Death" | "Axolotl Hurt" | "Axolotl Ambient Air" | "Axolotl Ambient Water" | "Axolotl Splash" | "Axolotl Swim" | "Bat Ambient" | "Bat Death" | "Bat Fly" | "Bat Hurt" | "Bat Takeoff" | "Bee Death" | "Bee Hurt" | "Bee Loop" | "Bee Loop (Aggressive)" | "Bee Pollinate" | "Bee Sting" | "Camel Ambient" | "Camel Dash Ready" | "Camel Dash" | "Camel Death" | "Camel Eat" | "Camel Hurt" | "Camel Equip Saddle" | "Camel Sit" | "Camel Stand" | "Camel Step" | "Camel Step on Sand" | "Cat Ambient" | "Cat Beg For Food" | "Cat Death" | "Cat Eat" | "Cat Hiss" | "Cat Hurt" | "Cat Purr" | "Cat Purreow" | "Stray Cat Ambient" | "Chicken Ambient" | "Chicken Death" | "Chicken Hurt" | "Chicken Lay Egg" | "Chicken Step" | "Cow Ambient" | "Cow Death" | "Cow Hurt" | "Cow Milk" | "Cow Step" | "Dolphin Ambient" | "Dolphin Ambient (Water)" | "Dolphin Attack" | "Dolphin Death" | "Dolphin Eat" | "Dolphin Hurt" | "Dolphin Jump" | "Dolphin Play" | "Dolphin Splash" | "Dolphin Swim" | "Donkey Ambient" | "Donkey Angry" | "Donkey Equip Chest" | "Donkey Death" | "Donkey Eat" | "Donkey Hurt" | "Donkey Jump" | "Fish Swim" | "Cod Ambient" | "Cod Death" | "Cod Flop" | "Cod Hurt" | "Salmon Ambient" | "Salmon Death" | "Salmon Flop" | "Salmon Hurt" | "Tropical Fish Ambient" | "Tropical Fish Death" | "Tropical Fish Flop" | "Tropical Fish Hurt" | "Fox Aggravate" | "Fox Ambient" | "Fox Bite" | "Fox Death" | "Fox Eat" | "Fox Hurt" | "Fox Screech" | "Fox Sleep" | "Fox Sniff" | "Fox Spit" | "Fox Teleport" | "Goat Ambient" | "Goat Death" | "Goat Eat" | "Goat Hurt" | "Goat Long Jump" | "Goat Milk" | "Goat Prepare Ram" | "Goat Ram Impact" | "Goat Horn Break" | "Goat Step" | "Screaming Goat Ambient" | "Screaming Goat Death" | "Screaming Goat Eat" | "Screaming Goat Hurt" | "Screaming Goat Long Jump" | "Screaming Goat Milk" | "Screaming Goat Prepare Ram" | "Screaming Goat Ram Impact" | "Glow Squid Ambient" | "Glow Squid Death" | "Glow Squid Hurt" | "Glow Squid Squirt" | "Horse Ambient" | "Horse Angry" | "Horse Breathe" | "Horse Death" | "Horse Eat" | "Horse Equip Saddle" | "Horse Equip Armor" | "Horse Gallop" | "Horse Hurt" | "Horse Jump" | "Horse Land" | "Horse Step" | "Horse Step (Wood)" | "Iron Golem Attack" | "Iron Golem Damage" | "Iron Golem Death" | "Iron Golem Hurt" | "Iron Golem Repair" | "Iron Golem Step" | "Llama Ambient" | "Llama Angry" | "Llama Death" | "Llama Eat" | "Llama Equip Chest" | "Llama Hurt" | "Llama Step" | "Llama Spit" | "Llama Swag" | "Mooshroom Convert" | "Mooshroom Eat" | "Mooshroom Milk" | "Mooshroom Shear" | "Brown Mooshroom Milk" | "Mule Angry" | "Mule Equip Chest" | "Mule Ambient" | "Mule Death" | "Mule Eat" | "Mule Hurt" | "Mule Jump" | "Ocelot Ambient" | "Ocelot Death" | "Ocelot Hurt" | "Panda Ambient" | "Panda Ambient (Aggressive)" | "Panda Ambient (Worried)" | "Panda Bite" | "Panda Sterile" | "Panda Death" | "Panda Eat" | "Panda Hurt" | "Panda Pre-Sneeze" | "Panda Sneeze" | "Panda Step" | "Parrot Ambient" | "Parrot Death" | "Parrot Hurt" | "Parrot Step" | "Parrot Eat" | "Parrot Fly" | "Parrot Imitate Blaze" | "Parrot Imitate Bogged" | "Parrot Imitate Breeze" | "Parrot Imitate Creeper" | "Parrot Imitate Drowned" | "Parrot Imitate Elder Guardian" | "Parrot Imitate Ender Dragon" | "Parrot Imitate Endermite" | "Parrot Imitate Evoker" | "Parrot Imitate Ghast" | "Parrot Imitate Guardian" | "Parrot Imitate Hoglin" | "Parrot Imitate Husk" | "Parrot Imitate Illusioner" | "Parrot Imitate Magma Cube" | "Parrot Imitate Phantom" | "Parrot Imitate Piglin" | "Parrot Imitate Pillager" | "Parrot Imitate Ravager" | "Parrot Imitate Piglin Brute" | "Parrot Imitate Shulker" | "Parrot Imitate Silverfish" | "Parrot Imitate Skeleton" | "Parrot Imitate Slime" | "Parrot Imitate Spider" | "Parrot Imitate Stray" | "Parrot Imitate Vex" | "Parrot Imitate Vindicator" | "Parrot Imitate Warden" | "Parrot Imitate Witch" | "Parrot Imitate Wither" | "Parrot Imitate Wither Skeleton" | "Parrot Imitate Zoglin" | "Parrot Imitate Zombie" | "Parrot Imitate Zombie Villager" | "Pig Ambient" | "Pig Death" | "Pig Equip Saddle" | "Pig Hurt" | "Pig Step" | "Polar Bear Ambient" | "Polar Bear Death" | "Polar Bear Hurt" | "Polar Bear Step" | "Polar Bear Warn" | "Baby Polar Bear Ambient" | "Pufferfish Ambient" | "Pufferfish Death" | "Pufferfish Deflate" | "Pufferfish Flop" | "Pufferfish Hurt" | "Pufferfish Inflate" | "Pufferfish Sting" | "Rabbit Ambient" | "Rabbit Death" | "Rabbit Hurt" | "Rabbit Jump" | "Killer Rabbit Attack" | "Sheep Ambient" | "Sheep Death" | "Sheep Hurt" | "Sheep Shear" | "Sheep Step" | "Sniffer Ambient" | "Sniffer Death" | "Sniffer Digging" | "Sniffer Stop Digging" | "Sniffer Drop Seed" | "Sniffer Eat" | "Sniffer Happy" | "Sniffer Hurt" | "Sniffer Scenting" | "Sniffer Searching" | "Sniffer Sniffing" | "Sniffer Step" | "Snow Golem Ambient" | "Snow Golem Death" | "Snow Golem Hurt" | "Snow Golem Shear" | "Snow Golem Shoot" | "Squid Ambient" | "Squid Death" | "Squid Hurt" | "Squid Squirt" | "Tadpole Death" | "Tadpole Hurt" | "Tadpole Flop" | "Tadpole Grow Up" | "Turtle Ambient" | "Turtle Death" | "Turtle Hurt" | "Turtle Shamble" | "Turtle Lay Egg" | "Turtle Egg Crack" | "Turtle Egg Hatch" | "Turtle Egg Break" | "Turtle Swim" | "Baby Turtle Death" | "Baby Turtle Hurt" | "Baby Turtle Shamble" | "Wolf Ambient" | "Wolf Death" | "Wolf Growl" | "Wolf Howl" | "Wolf Hurt" | "Wolf Pant" | "Wolf Shake" | "Wolf Step" | "Wolf Whine" | "Allay Ambient (Without Item)" | "Allay Ambient (With Item)" | "Allay Death" | "Allay Hurt" | "Allay Item Given" | "Allay Item Pickup" | "Allay Item Thrown" | "Armadillo Ambient" | "Armadillo Brush" | "Armadillo Death" | "Armadillo Eat" | "Armadillo Hurt" | "Armadillo Hurt (Reduced)" | "Armadillo Land" | "Armadillo Peek" | "Armadillo Roll" | "Armadillo Scute Drop" | "Armadillo Step" | "Armadillo Unroll Finish" | "Armadillo Unroll Start" | "Bogged Ambient" | "Bogged Death" | "Bogged Hurt" | "Bogged Shear" | "Bogged Step" | "Breeze Charge" | "Breeze Death" | "Breeze Deflect" | "Breeze Hurt" | "Breeze Idle (Air)" | "Breeze Idle (Ground)" | "Breeze Inhale" | "Breeze Jump" | "Breeze Land" | "Breeze Shoot" | "Breeze Slide" | "Breeze Whirl" | "Breeze Wind Burst" | "Frog Ambient" | "Frog Death" | "Frog Eat" | "Frog Hurt" | "Frog Step" | "Frog Lay Spawn" | "Frog Long Jump" | "Frog Tongue" | "Strider Ambient" | "Strider Death" | "Strider Eat" | "Strider Equip Saddle" | "Strider Happy" | "Strider Hurt" | "Strider Retreat" | "Strider Step" | "Strider Step (Lava)" | "Villager Ambient" | "Villager Death" | "Villager Hurt" | "Villager No" | "Villager Trading" | "Villager Yes" | "Armorer Work" | "Butcher Work" | "Cartographer Work" | "Cleric Work" | "Farmer Work" | "Fisherman Work" | "Fletcher Work" | "Leatherworker Work" | "Librarian Work" | "Mason Work" | "Shepherd Work" | "Toolsmith Work" | "Weaponsmith Work" | "Villager Celebrate" | "Wandering Trader Ambient" | "Wandering Trader Death" | "Wandering Trader Disappear" | "Wandering Trader Drink Milk" | "Wandering Trader Drink Potion" | "Wandering Trader Hurt" | "Wandering Trader No" | "Wandering Trader Reappear" | "Wandering Trader Trading" | "Wandering Trader Yes" | "Creeper Death" | "Explode" | "Creeper Hurt" | "Creeper Primed" | "Drowned Ambient" | "Drowned Ambient (Land)" | "Drowned Death" | "Drowned Death (Land)" | "Drowned Hurt" | "Drowned Hurt (Land)" | "Drowned Shoot" | "Drowned Step" | "Drowned Swim" | "Elder Guardian Ambient" | "Elder Guardian Ambient (Land)" | "Elder Guardian Curse" | "Elder Guardian Death" | "Elder Guardian Death (Land)" | "Elder Guardian Flop" | "Elder Guardian Hurt" | "Elder Guardian Hurt (Land)" | "Guardian Ambient" | "Guardian Ambient (Land)" | "Guardian Attack" | "Guardian Death" | "Guardian Death (Land)" | "Guardian Flop" | "Guardian Hurt" | "Guardian Hurt (Land)" | "Husk Ambient" | "Husk Death" | "Husk Hurt" | "Husk Step" | "Husk Drown" | "Phantom Ambient" | "Phantom Bite" | "Phantom Death" | "Phantom Flap" | "Phantom Hurt" | "Phantom Swoop" | "Ravager Ambient" | "Ravager Attack" | "Ravager Death" | "Ravager Hurt" | "Ravager Roar" | "Ravager Step" | "Ravager Stunned" | "Ravager Celebrate" | "Silverfish Ambient" | "Silverfish Death" | "Silverfish Hurt" | "Silverfish Step" | "Skeleton Ambient" | "Skeleton Convert To Stray" | "Skeleton Death" | "Skeleton Hurt" | "Skeleton Step" | "Skeleton Shoot" | "Skeleton Horse Ambient" | "Skeleton Horse Ambient (Water)" | "Skeleton Horse Death" | "Skeleton Horse Gallop (Water)" | "Skeleton Horse Hurt" | "Skeleton Horse Jump (Water)" | "Skeleton Horse Step (Water)" | "Skeleton Horse Swim" | "Slime Attack" | "Slime Death" | "Slime Hurt" | "Slime Jump" | "Slime Squish" | "Small Slime Death" | "Small Slime Hurt" | "Small Slime Jump" | "Small Slime Squish" | "Spider Ambient" | "Spider Death" | "Spider Hurt" | "Spider Step" | "Stray Ambient" | "Stray Death" | "Stray Hurt" | "Stray Step" | "Vex Ambient" | "Vex Charge" | "Vex Death" | "Vex Hurt" | "Warden Ambient" | "Warden Death" | "Warden Hurt" | "Warden Step" | "Warden Groan" | "Warden Angry" | "Warden Attack" | "Warden Dig" | "Warden Emerge" | "Warden Heartbeat" | "Warden Listening" | "Warden Listening (Angry)" | "Warden Approach" | "Warden Approach (Closer)" | "Warden Approach (Closest)" | "Warden Roar" | "Warden Sniff" | "Warden Sonic Boom" | "Warden Sonic Charge" | "Warden Tendril Click" | "Witch Ambient" | "Witch Death" | "Witch Drink" | "Witch Hurt" | "Witch Throw" | "Witch Celebrate" | "Zombie Ambient" | "Zombie Attack Wooden Door" | "Zombie Attack Iron Door" | "Zombie Break Wooden Door" | "Zombie Death" | "Zombie Destroy Egg" | "Zombie Drown" | "Zombie Infect" | "Zombie Hurt" | "Zombie Step" | "Zombie Horse Ambient" | "Zombie Horse Death" | "Zombie Horse Hurt" | "Zombie Villager Ambient" | "Zombie Villager Convert" | "Zombie Villager Cure" | "Zombie Villager Death" | "Zombie Villager Hurt" | "Zombie Villager Step" | "Blaze Ambient" | "Blaze Burn" | "Blaze Death" | "Blaze Hurt" | "Blaze Shoot" | "Ghast Ambient" | "Ghast Death" | "Ghast Hurt" | "Ghast Scream" | "Ghast Shoot" | "Ghast Warn" | "Hoglin Ambient" | "Hoglin Angry" | "Hoglin Attack" | "Hoglin Zombify" | "Hoglin Death" | "Hoglin Hurt" | "Hoglin Retreat" | "Hoglin Step" | "Magma Cube Death" | "Magma Cube Hurt" | "Magma Cube Jump" | "Magma Cube Squish" | "Small Magma Cube Death" | "Small Magma Cube Hurt" | "Small Magma Cube Squish" | "Piglin Admiring Item" | "Piglin Ambient" | "Piglin Angry" | "Piglin Celebrate" | "Piglin Zombify" | "Piglin Death" | "Piglin Hurt" | "Piglin Jealous" | "Piglin Retreat" | "Piglin Step" | "Piglin Brute Ambient" | "Piglin Brute Angry" | "Piglin Brute Zombify" | "Piglin Brute Death" | "Piglin Brute Hurt" | "Piglin Brute Step" | "Wither Ambient" | "Wither Break Block" | "Wither Death" | "Wither Hurt" | "Wither Shoot" | "Wither Spawn" | "Wither Skeleton Ambient" | "Wither Skeleton Death" | "Wither Skeleton Hurt" | "Wither Skeleton Step" | "Zoglin Ambient" | "Zoglin Angry" | "Zoglin Attack" | "Zoglin Death" | "Zoglin Hurt" | "Zoglin Step" | "Zombified Piglin Ambient" | "Zombified Piglin Angry" | "Zombified Piglin Death" | "Zombified Piglin Hurt" | "Enderman Ambient" | "Enderman Death" | "Enderman Hurt" | "Enderman Scream" | "Enderman Stare" | "Enderman Teleport" | "Endermite Ambient" | "Endermite Death" | "Endermite Hurt" | "Endermite Step" | "Ender Dragon Ambient" | "Ender Dragon Death" | "Ender Dragon Hurt" | "Ender Dragon Fireball Explode" | "Ender Dragon Flap" | "Ender Dragon Growl" | "Ender Dragon Shoot" | "Shulker Ambient" | "Shulker Close" | "Shulker Death" | "Shulker Hurt" | "Shulker Hurt (Closed)" | "Shulker Open" | "Shulker Shoot" | "Shulker Teleport" | "Shulker Bullet Explode" | "Shulker Bullet Break" | "Evoker Ambient" | "Evoker Cast Spell" | "Evoker Death" | "Evoker Hurt" | "Evoker Prepare Attack" | "Evoker Prepare Summon" | "Evoker Prepare Wololo" | "Evoker Fangs Attack" | "Evoker Celebrate" | "Illusioner Ambient" | "Illusioner Death" | "Illusioner Hurt" | "Illusioner Cast Spell" | "Illusioner Mirror Move" | "Illusioner Prepare Blindness" | "Illusioner Prepare Mirror" | "Pillager Ambient" | "Pillager Death" | "Pillager Hurt" | "Pillager Celebrate" | "Vindicator Ambient" | "Vindicator Death" | "Vindicator Hurt" | "Vindicator Celebrate" | "Player Attack (Critical)" | "Player Attack (Knockback)" | "Player Attack (No Damage)" | "Player Attack (Strong)" | "Player Attack (Sweep)" | "Player Attack (Weak)" | "Player Breathe" | "Player Burn" | "Player Freeze" | "Player Burp" | "Player Drown" | "Player Hurt (Sweet Berry Bush)" | "Player Level Up" | "Player Splash (High Speed)" | "Death" | "Drink" | "Eat" | "Extinguish" | "Fall" | "Fall (Big)" | "Hurt" | "Splash" | "Swim" | "Challenge Complete" | "UI Button Click" | "UI Toast In" | "UI Toast Out" | "Arrow Hit" | "Arrow Hit Player" | "Arrow Shoot" | "Egg Throw" | "Ender Eye Death" | "Ender Eye Launch" | "Enderpearl Throw" | "Experience Bottle Throw" | "Lingering Potion Throw" | "Splash Potion Break" | "Splash Potion Throw" | "Snowball Throw" | "Firework Blast" | "Firework Blast Far" | "Firework Large Blast" | "Firework Large Blast Far" | "Firework Launch" | "Firework Shoot" | "Firework Twinkle" | "Firework Twinkle Far" | "Glow Item Frame Add Item" | "Glow Item Frame Break" | "Glow Item Frame Place" | "Glow Item Frame Remove Item" | "Glow Item Frame Rotate Item" | "Item Frame Add Item" | "Item Frame Break" | "Item Frame Place" | "Item Frame Remove Item" | "Item Frame Rotate Item" | "Painting Break" | "Painting Place" | "Boat Paddle Land" | "Boat Paddle Water" | "Minecart Inside" | "Minecart Inside Water" | "Rolling Minecart" | "Armor Stand Break" | "Armor Stand Fall" | "Armor Stand Hit" | "Armor Stand Place" | "Burn" | "Experience Orb Pickup" | "Leash Knot Break" | "Leash Knot Place" | "TNT Primed" | "Bad Omen Mob Effect" | "Raid Omen Mob Effect" | "Trial Omen Mob Effect" | "Creative Music" | "Credits Music" | "Boss Music" | "End Music" | "Menu Music" | "Overworld Music" | "Dripstone Caves Music" | "Frozen Peaks Music" | "Grove Music" | "Jagged Peaks Music" | "Lush Caves Music" | "Meadow Music" | "Snowy Slopes Music" | "Stony Peaks Music" | "Forest Music" | "Jungle Music" | "Sparse Jungle Music" | "Bamboo Jungle Music" | "Old Growth Taiga Music" | "Swamp Music" | "Desert Music" | "Badlands Music" | "Flower Forest Music" | "Cherry Grove Music" | "Deep Dark Music" | "Basalt Deltas Music" | "Crimson Forest Music" | "Nether Wastes Music" | "Soul Sand Valley Music" | "Underwater Music" | "Music Disc - 5" | "Music Disc - 11" | "Music Disc - 13" | "Music Disc - Blocks" | "Music Disc - Cat" | "Music Disc - Chirp" | "Music Disc - Creator" | "Music Disc - Creator (Music Box)" | "Music Disc - Far" | "Music Disc - Mall" | "Music Disc - Mellohi" | "Music Disc - Pigstep" | "Music Disc - Stal" | "Music Disc - Strad" | "Music Disc - Ward" | "Music Disc - Wait" | "Music Disc - Otherside" | "Music Disc - Precipice" | "Music Disc - Relic" | "Shield Block" | "Shield Break" | "Crossbow Hit" | "Crossbow Loading (End)" | "Crossbow Loading (Middle)" | "Crossbow Loading (Start)" | "Crossbow Quick Charge (I)" | "Crossbow Quick Charge (II)" | "Crossbow Quick Charge (III)" | "Crossbow Shoot" | "Mace Smash Air" | "Mace Smash Ground" | "Mace Smash Ground (Heavy)" | "Armor Equip" | "Armor Equip (Elytra)" | "Armor Equip (Leather)" | "Armor Equip (Chain)" | "Armor Equip (Iron)" | "Armor Equip (Gold)" | "Armor Equip (Diamond)" | "Armor Equip (Netherite)" | "Armor Equip (Turtle)" | "Elytra Flying" | "Thorns Hit" | "Wolf Armor Equip" | "Wolf Armor Unequip" | "Wolf Armor Break" | "Wolf Armor Crack" | "Wolf Armor Damage" | "Wolf Armor Repair" | "Trident Throw" | "Trident Hit" | "Trident Hit Ground" | "Trident Return" | "Trident Riptide (I)" | "Trident Riptide (II)" | "Trident Riptide (III)" | "Trident Thunder" | "Fire Charge Use" | "Flint and Steel Use" | "Axe Scrape" | "Axe Strip" | "Wax Off" | "Hoe Till" | "Shovel Flatten" | "Fishing Bobber Retrieve" | "Fishing Bobber Splash" | "Fishing Bobber Throw" | "Brushing (Generic)" | "Brushing Gravel" | "Brushing Gravel Complete" | "Brushing Sand" | "Brushing Sand Complete" | "Bottle Empty" | "Bottle Fill" | "Dragon Breath Fill" | "Honey Bottle Drink" | "Water Bucket Empty" | "Water Bucket Fill" | "Axolotl Bucket Empty" | "Axolotl Bucket Fill" | "Fish Bucket Empty" | "Fish Bucket Fill" | "Tadpole Bucket Empty" | "Tadpole Bucket Fill" | "Lava Bucket Empty" | "Lava Bucket Fill" | "Powder Bucket Empty" | "Powder Bucket Fill" | "Item Break" | "Item Pickup" | "Book Page Turn" | "Book Put in Lectern" | "Bone Meal Use" | "Chorus Fruit Teleport" | "Dye Use" | "Ink Sac Use" | "Glow Ink Sac Use" | "Goat Horn (Ponder)" | "Goat Horn (Sing)" | "Goat Horn (Seek)" | "Goat Horn (Feel)" | "Goat Horn (Admire)" | "Goat Horn (Call)" | "Goat Horn (Yearn)" | "Goat Horn (Dream)" | "Spyglass Use" | "Spyglass Stop Using" | "Bundle Drop Contents" | "Bundle Remove One" | "Bundle Item Insert" | "Totem Use" | "Wax Copper" | "Wind Charge Throw" | "Wind Charge Burst" | "Ominous Bottle Dispose" | "Bamboo Break" | "Bamboo Fall" | "Bamboo Hit" | "Bamboo Place" | "Bamboo Sapling Break" | "Bamboo Sapling Hit" | "Bamboo Sapling Place" | "Bamboo Step" | "Bamboo Planks Break" | "Bamboo Planks Fall" | "Bamboo Planks Hit" | "Bamboo Planks Place" | "Bamboo Planks Step" | "Beehive Drip" | "Beehive Enter" | "Beehive Exit" | "Beehive Shear" | "Beehive Work" | "Bone Block Break" | "Bone Block Fall" | "Bone Block Hit" | "Bone Block Place" | "Bone Block Step" | "Bubble Column Bubble Pop" | "Bubble Column Ambient (Up)" | "Bubble Column Inside (Up)" | "Bubble Column Ambient (Down)" | "Bubble Column Inside (Down)" | "Cherry Leaves Break" | "Cherry Leaves Fall" | "Cherry Leaves Hit" | "Cherry Leaves Place" | "Cherry Leaves Step" | "Cherry Sapling Break" | "Cherry Sapling Fall" | "Cherry Sapling Hit" | "Cherry Sapling Place" | "Cherry Sapling Step" | "Cherry Wood Break" | "Cherry Wood Fall" | "Cherry Wood Hit" | "Cherry Wood Place" | "Cherry Wood Step" | "Cobweb Break" | "Cobweb Fall" | "Cobweb Hit" | "Cobweb Place" | "Cobweb Step" | "Copper Bulb Break" | "Copper Bulb Fall" | "Copper Bulb Hit" | "Copper Bulb Place" | "Copper Bulb Step" | "Copper Bulb Turn Off" | "Copper Bulb Turn On" | "Copper Door Close" | "Copper Door Open" | "Copper Grate Break" | "Copper Grate Fall" | "Copper Grate Hit" | "Copper Grate Place" | "Copper Grate Step" | "Copper Trapdoor Close" | "Copper Trapdoor Open" | "Crafter Craft" | "Crafter Fail" | "Coral Block Break" | "Coral Block Fall" | "Coral Block Hit" | "Coral Block Place" | "Coral Block Step" | "Crop Plant" | "Crop Break" | "Plant Stop Growing" | "Fire Ambient" | "Fire Extinguish" | "Grass Break" | "Grass Fall" | "Grass Hit" | "Grass Place" | "Grass Step" | "Gravel Break" | "Gravel Fall" | "Gravel Hit" | "Gravel Place" | "Gravel Step" | "Lava Ambient" | "Lava Extinguish" | "Lava Pop" | "Lily Pad Place" | "Pumpkin Carve" | "Pink Petals Break" | "Pink Petals Fall" | "Pink Petals Hit" | "Pink Petals Place" | "Pink Petals Step" | "Powder Snow Break" | "Powder Snow Fall" | "Powder Snow Hit" | "Powder Snow Place" | "Powder Snow Step" | "Rooted Dirt Break" | "Rooted Dirt Fall" | "Rooted Dirt Hit" | "Rooted Dirt Place" | "Rooted Dirt Step" | "Sand Break" | "Sand Fall" | "Sand Hit" | "Sand Place" | "Sand Step" | "Suspicious Sand Break" | "Suspicious Sand Fall" | "Suspicious Sand Hit" | "Suspicious Sand Place" | "Suspicious Sand Step" | "Suspicious Gravel Break" | "Suspicious Gravel Fall" | "Suspicious Gravel Hit" | "Suspicious Gravel Place" | "Suspicious Gravel Step" | "Sniffer Egg Plop" | "Sniffer Egg Crack" | "Sniffer Egg Hatch" | "Snow Break" | "Snow Fall" | "Snow Hit" | "Snow Place" | "Snow Step" | "Stone Break" | "Stone Fall" | "Stone Hit" | "Stone Place" | "Stone Step" | "Sweet Berry Bush Break" | "Sweet Berry Bush Pick" | "Sweet Berry Bush Place" | "Seagrass Break" | "Seagrass Fall" | "Seagrass Hit" | "Seagrass Place" | "Seagrass Step" | "Vine Break" | "Vine Fall" | "Vine Hit" | "Vine Place" | "Vine Climb" | "Water Ambient" | "Water Enter" | "Water Exit" | "Wood Break" | "Wood Fall" | "Wood Hit" | "Wood Place" | "Wood Step" | "Nether Wood Break" | "Nether Wood Fall" | "Nether Wood Hit" | "Nether Wood Place" | "Nether Wood Step" | "Froglight Break" | "Froglight Fall" | "Froglight Hit" | "Froglight Place" | "Froglight Step" | "Frogspawn Break" | "Frogspawn Fall" | "Frogspawn Hit" | "Frogspawn Place" | "Frogspawn Step" | "Frogspawn Hatch" | "Mangrove Roots Break" | "Mangrove Roots Fall" | "Mangrove Roots Hit" | "Mangrove Roots Place" | "Mangrove Roots Step" | "Muddy Mangrove Roots Break" | "Muddy Mangrove Roots Fall" | "Muddy Mangrove Roots Hit" | "Muddy Mangrove Roots Place" | "Muddy Mangrove Roots Step" | "Mud Break" | "Mud Fall" | "Mud Hit" | "Mud Place" | "Mud Step" | "Amethyst Block Break" | "Amethyst Block Chime" | "Amethyst Block Fall" | "Amethyst Block Hit" | "Amethyst Block Place" | "Amethyst Block Step" | "Amethyst Cluster Break" | "Amethyst Cluster Fall" | "Amethyst Cluster Hit" | "Amethyst Cluster Place" | "Amethyst Cluster Step" | "Large Amethyst Bud Break" | "Large Amethyst Bud Place" | "Medium Amethyst Bud Break" | "Medium Amethyst Bud Place" | "Small Amethyst Bud Break" | "Small Amethyst Bud Place" | "Amethyst Resonate" | "Azalea Place" | "Azalea Step" | "Azalea Break" | "Azalea Fall" | "Azalea Hit" | "Azalea Leaves Break" | "Azalea Leaves Fall" | "Azalea Leaves Hit" | "Azalea Leaves Place" | "Azalea Leaves Step" | "Big Dripleaf Break" | "Big Dripleaf Fall" | "Big Dripleaf Hit" | "Big Dripleaf Break" | "Big Dripleaf Step" | "Big Dripleaf Tilt Down" | "Big Dripleaf Tilt Up" | "Calcite Break" | "Calcite Fall" | "Calcite Hit" | "Calcite Place" | "Calcite Step" | "Cave Vines Break" | "Cave Vines Fall" | "Cave Vines Hit" | "Cave Vines Pick" | "Cave Vines Place" | "Cave Vines Step" | "Deepslate Break" | "Deepslate Fall" | "Deepslate Hit" | "Deepslate Place" | "Deepslate Step" | "Deepslate Bricks Break" | "Deepslate Bricks Fall" | "Deepslate Bricks Hit" | "Deepslate Bricks Place" | "Deepslate Bricks Step" | "Deepslate Tiles Break" | "Deepslate Tiles Fall" | "Deepslate Tiles Hit" | "Deepslate Tiles Place" | "Deepslate Tiles Step" | "Dripstone Block Break" | "Dripstone Block Fall" | "Dripstone Block Hit" | "Dripstone Block Place" | "Dripstone Block Step" | "Flowering Azalea Break" | "Flowering Azalea Fall" | "Flowering Azalea Hit" | "Flowering Azalea Place" | "Flowering Azalea Step" | "Hanging Roots Break" | "Hanging Roots Fall" | "Hanging Roots Hit" | "Hanging Roots Place" | "Hanging Roots Step" | "Moss Block Break" | "Moss Block Fall" | "Moss Block Hit" | "Moss Block Place" | "Moss Block Step" | "Moss Carpet Break" | "Moss Carpet Fall" | "Moss Carpet Hit" | "Moss Carpet Place" | "Moss Carpet Step" | "Pointed Dripstone Break" | "Pointed Dripstone Drip Lava" | "Pointed Dripstone Drip Lava Into Cauldron" | "Pointed Dripstone Drip Water" | "Pointed Dripstone Drip Water Into Cauldron" | "Pointed Dripstone Fall" | "Pointed Dripstone Hit" | "Pointed Dripstone Land" | "Pointed Dripstone Place" | "Pointed Dripstone Step" | "Small Dripleaf Break" | "Small Dripleaf Fall" | "Small Dripleaf Hit" | "Small Dripleaf Place" | "Small Dripleaf Step" | "Sponge Absorb" | "Sponge Break" | "Sponge Fall" | "Sponge Hit" | "Sponge Place" | "Sponge Step" | "Wet Sponge Break" | "Wet Sponge Dries" | "Wet Sponge Fall" | "Wet Sponge Hit" | "Wet Sponge Place" | "Wet Sponge Step" | "Spore Blossom Break" | "Spore Blossom Fall" | "Spore Blossom Hit" | "Spore Blossom Place" | "Spore Blossom Step" | "Tuff Break" | "Tuff Fall" | "Tuff Hit" | "Tuff Place" | "Tuff Step" | "Sculk Break" | "Sculk Fall" | "Sculk Hit" | "Sculk Place" | "Sculk Step" | "Sculk Charge" | "Sculk Spread" | "Sculk Catalyst Break" | "Sculk Catalyst Fall" | "Sculk Catalyst Hit" | "Sculk Catalyst Place" | "Sculk Catalyst Step" | "Sculk Catalyst Bloom" | "Sculk Shrieker Break" | "Sculk Shrieker Fall" | "Sculk Shrieker Hit" | "Sculk Shrieker Place" | "Sculk Shrieker Step" | "Sculk Shrieker Shriek" | "Sculk Vein Break" | "Sculk Vein Fall" | "Sculk Vein Hit" | "Sculk Vein Place" | "Sculk Vein Step" | "Ancient Debris Break" | "Ancient Debris Fall" | "Ancient Debris Hit" | "Ancient Debris Place" | "Ancient Debris Step" | "Basalt Break" | "Basalt Fall" | "Basalt Hit" | "Basalt Place" | "Basalt Step" | "Gilded Blackstone Break" | "Gilded Blackstone Fall" | "Gilded Blackstone Hit" | "Gilded Blackstone Place" | "Gilded Blackstone Step" | "Netherrack Break" | "Netherrack Fall" | "Netherrack Hit" | "Netherrack Place" | "Netherrack Step" | "Nether Gold Ore Break" | "Nether Gold Ore Fall" | "Nether Gold Ore Hit" | "Nether Gold Ore Place" | "Nether Gold Ore Step" | "Nether Fungus Break" | "Nether Fungus Fall" | "Nether Fungus Hit" | "Nether Fungus Place" | "Nether Fungus Step" | "Nether Quartz Ore Break" | "Nether Quartz Ore Fall" | "Nether Quartz Ore Hit" | "Nether Quartz Ore Place" | "Nether Quartz Ore Step" | "Nether Roots Break" | "Nether Roots Fall" | "Nether Roots Hit" | "Nether Roots Place" | "Nether Roots Step" | "Nether Sprouts Break" | "Nether Sprouts Fall" | "Nether Sprouts Hit" | "Nether Sprouts Place" | "Nether Sprouts Step" | "Nether Stem Break" | "Nether Stem Fall" | "Nether Stem Hit" | "Nether Stem Place" | "Nether Stem Step" | "Nether Vine Break" | "Nether Vine Fall" | "Nether Vine Hit" | "Nether Vine Place" | "Nether Vine Step" | "Nether Wart Break" | "Nether Wart Plant" | "Nether Wart Block Break" | "Nether Wart Block Fall" | "Nether Wart Block Hit" | "Nether Wart Block Place" | "Nether Wart Block Step" | "Nylium Break" | "Nylium Fall" | "Nylium Hit" | "Nylium Place" | "Nylium Step" | "Shroomlight Break" | "Shroomlight Fall" | "Shroomlight Hit" | "Shroomlight Place" | "Shroomlight Step" | "Soul Sand Break" | "Soul Sand Fall" | "Soul Sand Hit" | "Soul Sand Place" | "Soul Sand Step" | "Soul Soil Break" | "Soul Soil Fall" | "Soul Soil Hit" | "Soul Soil Place" | "Soul Soil Step" | "Chorus Flower Death" | "Chorus Flower Grow" | "Add Cake Candle" | "Candle Ambient" | "Candle Break" | "Candle Extinguish" | "Candle Fall" | "Candle Hit" | "Candle Place" | "Candle Step" | "Chain Break" | "Chain Fall" | "Chain Hit" | "Chain Place" | "Chain Step" | "Copper Block Break" | "Copper Block Fall" | "Copper Block Hit" | "Copper Block Place" | "Copper Block Step" | "Decorated Pot Break" | "Decorated Pot Fall" | "Decorated Pot Hit" | "Decorated Pot Place" | "Decorated Pot Step" | "Decorated Pot Shatter" | "Decorated Pot Insert Item" | "Decorated Pot Insert Fail" | "Glass Break" | "Glass Fall" | "Glass Hit" | "Glass Place" | "Glass Step" | "Waxed Sign Interact Fail" | "Waxed Hanging Sign Interact Fail" | "Wooden Hanging Sign Break" | "Wooden Hanging Sign Fall" | "Wooden Hanging Sign Hit" | "Wooden Hanging Sign Place" | "Wooden Hanging Sign Step" | "Cherry Hanging Sign Break" | "Cherry Hanging Sign Fall" | "Cherry Hanging Sign Hit" | "Cherry Hanging Sign Place" | "Cherry Hanging Sign Step" | "Bamboo Hanging Sign Break" | "Bamboo Hanging Sign Fall" | "Bamboo Hanging Sign Hit" | "Bamboo Hanging Sign Place" | "Bamboo Hanging Sign Step" | "Nether Wood Hanging Sign Break" | "Nether Wood Hanging Sign Fall" | "Nether Wood Hanging Sign Hit" | "Nether Wood Hanging Sign Place" | "Nether Wood Hanging Sign Step" | "Heavy Core Break" | "Heavy Core Fall" | "Heavy Core Hit" | "Heavy Core Place" | "Heavy Core Step" | "Honey Block Break" | "Honey Block Fall" | "Honey Block Hit" | "Honey Block Place" | "Honey Block Slide" | "Honey Block Step" | "Ladder Break" | "Ladder Fall" | "Ladder Hit" | "Ladder Place" | "Ladder Step" | "Lantern Break" | "Lantern Fall" | "Lantern Hit" | "Lantern Place" | "Lantern Step" | "Metal Break" | "Metal Fall" | "Metal Hit" | "Metal Place" | "Metal Step" | "Nether Bricks Break" | "Nether Bricks Fall" | "Nether Bricks Hit" | "Nether Bricks Place" | "Nether Bricks Step" | "Netherite Block Break" | "Netherite Block Fall" | "Netherite Block Hit" | "Netherite Block Place" | "Netherite Block Step" | "Polished Deepslate Break" | "Polished Deepslate Fall" | "Polished Deepslate Hit" | "Polished Deepslate Place" | "Polished Deepslate Step" | "Polished Tuff Break" | "Polished Tuff Fall" | "Polished Tuff Hit" | "Polished Tuff Place" | "Polished Tuff Step" | "Scaffolding Break" | "Scaffolding Fall" | "Scaffolding Hit" | "Scaffolding Place" | "Scaffolding Step" | "Slime Block Break" | "Slime Block Fall" | "Slime Block Hit" | "Slime Block Place" | "Slime Block Step" | "Trial Spawner About to Spawn Item" | "Trial Spawner Ambient" | "Trial Spawner Ambient (Ominous)" | "Trial Spawner Break" | "Trial Spawner Close Shutter" | "Trial Spawner Detect Player" | "Trial Spawner Eject Item" | "Trial Spawner Fall" | "Trial Spawner Hit" | "Trial Spawner Ominous Activate" | "Trial Spawner Open Shutter" | "Trial Spawner Place" | "Trial Spawner Spawn Item" | "Trial Spawner Spawn Item Begin" | "Trial Spawner Spawn Mob" | "Trial Spawner Step" | "Tuff Bricks Break" | "Tuff Bricks Fall" | "Tuff Bricks Hit" | "Tuff Bricks Place" | "Tuff Bricks Step" | "Vault Activate" | "Vault Ambient" | "Vault Break" | "Vault Close Shutter" | "Vault Deactivate" | "Vault Eject Item" | "Vault Fall" | "Vault Hit" | "Vault Insert Item" | "Vault Insert Item (Fail)" | "Vault Open Shutter" | "Vault Place" | "Vault Reject Rewarded Player" | "Vault Step" | "Wool Break" | "Wool Fall" | "Wool Hit" | "Wool Place" | "Wool Step" | "Mud Bricks Break" | "Mud Bricks Fall" | "Mud Bricks Hit" | "Mud Bricks Place" | "Mud Bricks Step" | "Packed Mud Break" | "Packed Mud Fall" | "Packed Mud Hit" | "Packed Mud Place" | "Packed Mud Step" | "Anvil Break" | "Anvil Destroy" | "Anvil Fall" | "Anvil Hit" | "Anvil Land" | "Anvil Place" | "Anvil Step" | "Anvil Use" | "Blast Furnace Fire Crackle" | "Brewing Stand Brew" | "Campfire Crackle" | "Cartography Table Take Result" | "Composter Empty" | "Composter Fill Success" | "Composter Fill" | "Composter Ready" | "Enchantment Table Use" | "Furnace Fire Crackle" | "Grindstone Use" | "Loom Select Pattern" | "Loom Take Result" | "Smithing Table Use" | "Smoker Smoke" | "Stonecutter Select Recipe" | "Stonecutter Take Result" | "Barrel Close" | "Barrel Open" | "Chest Close" | "Chest Locked" | "Chest Open" | "Chiseled Bookshelf Break" | "Chiseled Bookshelf Fall" | "Chiseled Bookshelf Hit" | "Chiseled Bookshelf Place" | "Chiseled Bookshelf Step" | "Chiseled Bookshelf Insert" | "Chiseled Bookshelf Insert (Enchanted)" | "Chiseled Bookshelf Pick Up" | "Chiseled Bookshelf Pick Up (Enchanted)" | "Ender Chest Close" | "Ender Chest Open" | "Shulker Box Close" | "Shulker Box Open" | "Comparator Click" | "Dispenser Dispense" | "Dispenser Fail" | "Dispenser Launch" | "Wooden Fence Gate Close" | "Wooden Fence Gate Open" | "Cherry Fence Gate Close" | "Cherry Fence Gate Open" | "Bamboo Fence Gate Close" | "Bamboo Fence Gate Open" | "Nether Wood Fence Gate Close" | "Nether Wood Fence Gate Open" | "Iron Door Close" | "Iron Door Open" | "Iron Trapdoor Close" | "Iron Trapdoor Open" | "Lever Click" | "Metal Pressure Plate Click Off" | "Metal Pressure Plate Click On" | "Piston Retract" | "Piston Extend" | "Redstone Torch Burnout" | "Sculk Sensor Break" | "Sculk Sensor Click" | "Sculk Sensor Click Stop" | "Sculk Sensor Fall" | "Sculk Sensor Hit" | "Sculk Sensor Place" | "Sculk Sensor Step" | "Stone Button Click Off" | "Stone Button Click On" | "Stone Pressure Plate Click Off" | "Stone Pressure Plate Click On" | "Tripwire Attach" | "Tripwire Click Off" | "Tripwire Click On" | "Tripwire Detach" | "Wooden Button Click Off" | "Wooden Button Click On" | "Wooden Door Close" | "Wooden Door Open" | "Wooden Pressure Plate Click Off" | "Wooden Pressure Plate Click On" | "Wooden Trapdoor Close" | "Wooden Trapdoor Open" | "Cherry Wood Button Click Off" | "Cherry Wood Button Click On" | "Cherry Wood Door Close" | "Cherry Wood Door Open" | "Cherry Wood Pressure Plate Click Off" | "Cherry Wood Pressure Plate Click On" | "Cherry Wood Trapdoor Close" | "Cherry Wood Trapdoor Open" | "Bamboo Button Click Off" | "Bamboo Button Click On" | "Bamboo Door Close" | "Bamboo Door Open" | "Bamboo Pressure Plate Click Off" | "Bamboo Pressure Plate Click On" | "Bamboo Trapdoor Close" | "Bamboo Trapdoor Open" | "Nether Wood Button Click Off" | "Nether Wood Button Click On" | "Nether Wood Door Close" | "Nether Wood Door Open" | "Nether Wood Pressure Plate Click Off" | "Nether Wood Pressure Plate Click On" | "Nether Wood Trapdoor Close" | "Nether Wood Trapdoor Open" | "Bass Drum" | "Banjo" | "Bass" | "Bell" | "Bit" | "Chime" | "Cow Bell" | "Didgeridoo" | "Flute" | "Guitar" | "Harp" | "Pling" | "Hat" | "Snare Drum" | "Iron Xylophone" | "Xylophone" | "Creeper (Note Block)" | "Ender Dragon (Note Block)" | "Piglin (Note Block)" | "Skeleton (Note Block)" | "Wither Skeleton (Note Block)" | "Zombie (Note Block)" | "Beacon Activate" | "Beacon Ambient" | "Beacon Deactivate" | "Beacon Power Select" | "Bell Resonate" | "Bell Use" | "Conduit Activate" | "Conduit Ambient (Short)" | "Conduit Ambient" | "Conduit Attack Target" | "Conduit Deactivate" | "End Gateway Spawn" | "End Portal Fill Frame" | "End Portal Spawn" | "Lodestone Break" | "Lodestone Fall" | "Lodestone Hit" | "Lodestone Lock Compass" | "Lodestone Place" | "Lodestone Step" | "Nether Portal Ambient" | "Nether Portal Travel" | "Nether Portal Trigger" | "Respawn Anchor Ambient" | "Respawn Anchor Charge" | "Respawn Anchor Deplete" | "Respawn Anchor Set Spawnpoint" | "Cave Ambience" | "Lightning Impact" | "Lightning Thunder" | "Raid Horn" | "Underwater Ambience" | "Underwater Ambience Additions" | "Underwater Ambience Additions (Rare)" | "Underwater Ambience Additions (Very Rare)" | "Weather Rain" | "Weather Rain Above" | "Basalt Deltas Ambience" | "Basalt Deltas Ambience Additions" | "Basalt Deltas Ambience (Mood)" | "Crimson Forest Ambience" | "Crimson Forest Ambience Additions" | "Crimson Forest Ambience (Mood)" | "Nether Wastes Ambience" | "Nether Wastes Ambience Additions" | "Nether Wastes Ambience (Mood)" | "Soul Escape" | "Soul Sand Valley Ambience" | "Soul Sand Valley Ambience Additions" | "Soul Sand Valley Ambience (Mood)" | "Warped Forest Ambience" | "Warped Forest Ambience Additions" | "Warped Forest Ambience (Mood)";
    pitch?: number;
    volume?: number;
  });
}
declare namespace PlayerAction {
  function SetHotbar(...arg1): (tags: {}) => void;
  function SetReducedDebug(): (tags: {
    "Reduced Debug Info Enabled"?: "True" | "False";
  }) => void;
  function CloseInv(): (tags: {}) => void;
  function GiveItems(arg1: Item[], arg2: Number | null): (tags: {}) => void;
  function SetHandCrafting(): (tags: {
    "Allow Hand Crafting"?: "Enable" | "Disable";
  }) => void;
  function ParticleSphere(arg1: Particle, arg2: Location, arg3: Number | null): (tags: {}) => void;
  function SetVelocity(arg1: Vector): (tags: {
    "Add to Current Velocity"?: "True" | "False";
  }) => void;
  function Particle(arg1: Particle[], arg2: Location): (tags: {}) => void;
  function AddInvRow(...arg1): (tags: {
    "New Row Position"?: "Top row" | "Bottom row";
  }) => void;
  function DisplayLightning(arg1: Location): (tags: {}) => void;
  function Damage(arg1: Number, arg2: String | null, arg3: StyledText | null): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetXPProg(arg1: Number): (tags: {}) => void;
  function SetInventory(...arg1): (tags: {}) => void;
  function TpSequence(arg1: Location[], arg2: Number | null): (tags: {}) => void;
  function Heal(arg1: Number): (tags: {}) => void;
  function SetSpawnPoint(arg1: Location): (tags: {}) => void;
  function SetInventoryKept(): (tags: {
    "Inventory Kept"?: "Enable" | "Disable";
  }) => void;
  function LaunchUp(arg1: Number): (tags: {
    "Add to Current Velocity"?: "True" | "False";
  }) => void;
  function ForceFlight(): (tags: {
    "Flight Mode"?: "Start Flight" | "Stop Flight";
  }) => void;
  function LoadInv(): (tags: {}) => void;
  function ChatStyle(arg1: StyledText): (tags: {}) => void;
  function Kick(): (tags: {}) => void;
  function MiscAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Scale" | "Luck" | "Oxygen bonus" | "Burning time";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function SpectateTarget(arg1: String, arg2: StyledText): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function HurtAnimation(arg1: Location | null): (tags: {}) => void;
  function SurvivalMode(): (tags: {}) => void;
  function DisplayBellRing(arg1: Location): (tags: {
    "Ring Direction"?: "North" | "South" | "West" | "East";
  }) => void;
  function SetStatus(arg1: StyledText): (tags: {}) => void;
  function SetCursorItem(arg1: Item | null): (tags: {}) => void;
  function SetAbsorption(arg1: Number): (tags: {}) => void;
  function SetFireTicks(arg1: Number): (tags: {}) => void;
  function CombatAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Attack damage" | "Attack speed" | "Sweeping damage ratio";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function RemoveInvRow(arg1: Number | null): (tags: {
    "Row to Remove"?: "Top row" | "Bottom row";
  }) => void;
  function WakeUpAnimation(): (tags: {}) => void;
  function DisableBlocks(...arg1): (tags: {}) => void;
  function SetScoreObj(arg1: StyledText): (tags: {}) => void;
  function ClearInv(): (tags: {
    "Clear Mode"?: "Entire inventory" | "Main inventory" | "Upper inventory" | "Hotbar" | "Armor";
    "Clear Crafting and Cursor"?: "True" | "False";
  }) => void;
  function SetFreezeTicks(arg1: Number): (tags: {
    "Ticking Locked"?: "Enable" | "Disable";
  }) => void;
  function SetGliding(): (tags: {
    "Gliding"?: "Enable" | "Disable";
  }) => void;
  function SetRotation(arg1: Number, arg2: Number): (tags: {}) => void;
  function ClearItems(...arg1): (tags: {}) => void;
  function SetFlying(): (tags: {
    "Flying"?: "Enable" | "Disable";
  }) => void;
  function DisplayBlockOpen(arg1: Location): (tags: {
    "Container State"?: "Open" | "Closed";
  }) => void;
  function SendAdvancement(arg1: StyledText, arg2: Item): (tags: {
    "Toast Type"?: "Advancement" | "Goal" | "Challenge";
  }) => void;
  function SetMenuItem(arg1: Number, arg2: Item | null): (tags: {}) => void;
  function LaunchToward(arg1: Location, arg2: Number | null): (tags: {
    "Add to Current Velocity"?: "True" | "False";
    "Ignore Distance"?: "True" | "False";
  }) => void;
  function SetArmor(...arg1): (tags: {}) => void;
  function DisplayGateway(arg1: Location): (tags: {
    "Animation Type"?: "Initial beam" | "Periodic beam";
  }) => void;
  function GiveSaturation(arg1: Number): (tags: {}) => void;
  function DisplayEquipment(arg1: String, arg2: StyledText, arg3: Item[]): (tags: {}) => void;
  function GiveExp(arg1: Number): (tags: {
    "Give Experience"?: "Points" | "Levels" | "Level percentage";
  }) => void;
  function FaceLocation(arg1: Location): (tags: {}) => void;
  function ClearScoreboard(): (tags: {}) => void;
  function ActionBar(...arg1): (tags: {
    "Text Value Merging"?: "Add spaces" | "No spaces";
    "Inherit Styles"?: "True" | "False";
  }) => void;
  function SetChatTag(arg1: StyledText[]): (tags: {}) => void;
  function ShiftWorldBorder(arg1: Number, arg2: Number | null): (tags: {}) => void;
  function DisplaySignText(arg1: Location, ...arg2): (tags: {
    "Sign Side"?: "Front" | "Back";
    "Text Color"?: "White" | "Orange" | "Magenta" | "Light blue" | "Yellow" | "Lime" | "Pink" | "Gray" | "Light gray" | "Cyan" | "Purple" | "Blue" | "Brown" | "Green" | "Red" | "Black";
    "Glowing"?: "Enable" | "Disable";
  }) => void;
  function ExpandInv(...arg1): (tags: {}) => void;
  function LaunchProj(arg1: Location | null, arg2: StyledText | null, arg3: Number | null, arg4: Number | null): (tags: {}) => void;
  function ParticleCuboidA(arg1: Particle, arg2: Location, arg3: Location, arg4: Number | null, arg5: Number | null): (tags: {
    "Fill Type"?: "Wireframe" | "Hollow" | "Solid";
  }) => void;
  function PlaySound(arg1: Sound[], arg2: Location | null): (tags: {
    "Sound Source"?: "Master" | "Music" | "Jukebox/Note Blocks" | "Weather" | "Blocks" | "Hostile Creatures" | "Friendly Creatures" | "Players" | "Ambient/Environment" | "Voice/Speech";
  }) => void;
  function SetCompass(arg1: Location): (tags: {}) => void;
  function RngTeleport(...arg1): (tags: {
    "Keep Current Rotation"?: "True" | "False";
  }) => void;
  function MobDisguise(arg1: StyledText | null): (tags: {}) => void;
  function EnableBlocks(...arg1): (tags: {}) => void;
  function OpenBlockInv(arg1: Location): (tags: {}) => void;
  function ParticleCircleA(arg1: Particle, arg2: Location, arg3: Number | null, arg4: Number | null): (tags: {}) => void;
  function SetEquipment(arg1: Item | null): (tags: {
    "Equipment Slot"?: "Main hand" | "Off hand" | "Head" | "Chest" | "Legs" | "Feet";
  }) => void;
  function SetDropsEnabled(): (tags: {
    "Spawn Death Drops"?: "Enable" | "Disable";
  }) => void;
  function SendToPlot(arg1: String): (tags: {}) => void;
  function RemovePotion(...arg1): (tags: {}) => void;
  function DisplayFracture(arg1: Location[], arg2: Number | null): (tags: {
    "Overwrite Previous Fracture"?: "True" | "False";
  }) => void;
  function SetEntityHidden(arg1: String[], arg2: StyledText[]): (tags: {
    "Hidden"?: "Enable" | "Disable";
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetSidebar(): (tags: {
    "Sidebar"?: "Enable" | "Disable";
  }) => void;
  function Vibration(arg1: Location, arg2: Location, arg3: Number | null): (tags: {}) => void;
  function SetSlot(arg1: Number): (tags: {}) => void;
  function ParticleRay(arg1: Particle, arg2: Location, arg3: Vector, arg4: Number | null): (tags: {}) => void;
  function ParticleCuboid(arg1: Particle, arg2: Location, arg3: Location, arg4: Number | null): (tags: {
    "Fill Type"?: "Wireframe" | "Hollow" | "Solid";
  }) => void;
  function SendMessageSeq(arg1: StyledText[], arg2: Number | null): (tags: {
    "Alignment Mode"?: "Regular" | "Centered";
  }) => void;
  function SetNamePrefix(arg1: StyledText | null): (tags: {
    "Text Type"?: "Prefix" | "Suffix";
  }) => void;
  function ClearDispBlock(arg1: Location, arg2: Location | null): (tags: {}) => void;
  function SetRainLevel(arg1: Number, arg2: Number): (tags: {}) => void;
  function Undisguise(): (tags: {}) => void;
  function ParticleSpiralA(arg1: Particle, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null, arg7: Number | null): (tags: {}) => void;
  function InstantRespawn(): (tags: {
    "Instant Respawn"?: "Enable" | "Disable";
  }) => void;
  function SetScore(arg1: StyledText, arg2: Number | null): (tags: {}) => void;
  function SetNameColor(): (tags: {
    "Name Color"?: "Black" | "Dark blue" | "Dark green" | "Dark aqua" | "Dark red" | "Dark purple" | "Gold" | "Gray" | "Dark gray" | "Blue" | "Green" | "Aqua" | "Red" | "Light purple" | "Yellow" | "White" | "None";
  }) => void;
  function ReachAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Block interaction range" | "Entity interaction range";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function SetTickRate(arg1: Number | null): (tags: {}) => void;
  function PlayEntitySound(arg1: Sound[], arg2: String[], arg3: StyledText[]): (tags: {
    "Sound Source"?: "Master" | "Music" | "Jukebox/Note Blocks" | "Weather" | "Blocks" | "Hostile Creatures" | "Friendly Creatures" | "Players" | "Ambient/Environment" | "Voice/Speech";
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetExp(arg1: Number): (tags: {
    "Set Experience"?: "Points" | "Level" | "Level Percentage";
  }) => void;
  function MiningAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Block break speed" | "Mining efficiency" | "Submerged mining speed";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function KBAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Knockback resistance" | "Explosion knockback resistance";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function MovementAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Walking speed" | "Flying speed" | "Jump strength" | "Sneaking speed" | "Step height" | "Movement efficiency" | "Water movement efficiency";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function ParticleSpiral(arg1: Particle, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null): (tags: {}) => void;
  function FallingAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Gravity" | "Safe fall distance" | "Fall damage multiplier";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function SetAllowFlight(): (tags: {
    "Allow Flight"?: "Enable" | "Disable";
  }) => void;
  function SetMaxHealth(arg1: Number): (tags: {
    "Heal Player to Max Health"?: "True" | "False";
  }) => void;
  function RemoveBossBar(arg1: Number): (tags: {}) => void;
  function SetFogDistance(arg1: Number): (tags: {}) => void;
  function AdventureMode(): (tags: {}) => void;
  function SpectatorMode(): (tags: {}) => void;
  function DispHeadTexture(arg1: Location, arg2: Item, arg3: String): (tags: {}) => void;
  function ClearPotions(): (tags: {}) => void;
  function SetTabListInfo(...arg1): (tags: {
    "Player List Field"?: "Header" | "Footer";
    "Text Value Merging"?: "Add spaces" | "No spaces";
    "Inherit Styles"?: "True" | "False";
  }) => void;
  function ScoreLineFormat(arg1: StyledText, arg2: StyledText): (tags: {
    "Number Format"?: "Fixed" | "Styled" | "Blank" | "Reset";
  }) => void;
  function SetBossBar(arg1: StyledText | null, arg2: Number | null, arg3: Number | null, arg4: Number | null): (tags: {
    "Bar Style"?: "Solid" | "6 segments" | "10 segments" | "12 segments" | "20 segments";
    "Sky Effect"?: "None" | "Create fog" | "Darken sky" | "Both";
    "Bar Color"?: "Red" | "Purple" | "Pink" | "Blue" | "Green" | "Yellow" | "White";
  }) => void;
  function SetSkin(arg1: Item): (tags: {}) => void;
  function SpectatorCollision(): (tags: {
    "Spectator Collision"?: "Enable" | "Disable";
  }) => void;
  function SetNameVisible(): (tags: {
    "Name Tag Visible"?: "Enable" | "Disable";
  }) => void;
  function SetInvulTicks(arg1: Number): (tags: {}) => void;
  function SetStingsStuck(arg1: Number | null): (tags: {}) => void;
  function RemoveScore(arg1: StyledText): (tags: {}) => void;
  function SetExhaustion(arg1: Number): (tags: {}) => void;
  function ParticleCircle(arg1: Particle, arg2: Location, arg3: Number | null): (tags: {}) => void;
  function DisplayBlock(arg1: Item, arg2: Location, arg3: Location | null, ...arg4): (tags: {}) => void;
  function RideEntity(arg1: String[], arg2: StyledText[]): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function RmWorldBorder(): (tags: {}) => void;
  function ResourcePack(arg1: String): (tags: {}) => void;
  function SetInvName(arg1: StyledText): (tags: {
    "Alignment Mode"?: "Regular" | "Centered";
  }) => void;
  function GiveExhaustion(arg1: Number): (tags: {}) => void;
  function Teleport(arg1: Location): (tags: {
    "Keep Current Rotation"?: "True" | "False";
    "Keep Velocity"?: "True" | "False";
  }) => void;
  function SetAllowPVP(): (tags: {
    "PVP"?: "Enable" | "Disable";
  }) => void;
  function SetVisualFire(): (tags: {
    "On Fire"?: "True" | "False";
  }) => void;
  function SetDisguiseVisible(): (tags: {
    "Disguise Visible"?: "Enable" | "Disable";
  }) => void;
  function SetArrowsStuck(arg1: Number | null): (tags: {}) => void;
  function GetItemCooldown(arg1: Variable, arg2: Item): (tags: {}) => Number;
  function ReplaceItems(arg1: (Item | null)[], arg2: Item, arg3: Number | null): (tags: {}) => void;
  function SendMessage(...arg1): (tags: {
    "Alignment Mode"?: "Regular" | "Centered";
    "Text Value Merging"?: "Add spaces" | "No spaces";
    "Inherit Styles"?: "True" | "False";
  }) => void;
  function SetSlotItem(arg1: Item | null, arg2: Number): (tags: {}) => void;
  function PlaySoundSeq(arg1: Sound[], arg2: Number | null, arg3: Location | null): (tags: {
    "Sound Source"?: "Master" | "Music" | "Jukebox/Note Blocks" | "Weather" | "Blocks" | "Hostile Creatures" | "Friendly Creatures" | "Players" | "Ambient/Environment" | "Voice/Speech";
  }) => void;
  function ParticleLineA(arg1: Particle, arg2: Location, arg3: Location, arg4: Number | null, arg5: Number | null): (tags: {}) => void;
  function SetItemCooldown(arg1: Item, arg2: Number): (tags: {}) => void;
  function SetPlayerWeather(): (tags: {
    "Weather"?: "Clear" | "Downfall";
  }) => void;
  function SetShoulder(): (tags: {
    "Shoulder"?: "Left" | "Right";
    "Type"?: "Remove" | "Red" | "Blue" | "Green" | "Cyan" | "Gray";
  }) => void;
  function SetAirTicks(arg1: Number): (tags: {}) => void;
  function DisplayPickup(arg1: String, arg2: StyledText, arg3: String, arg4: StyledText): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetWorldBorder(arg1: Location, arg2: Number, arg3: Number | null): (tags: {}) => void;
  function SetPlayerTime(arg1: Number): (tags: {}) => void;
  function GiveFood(arg1: Number): (tags: {}) => void;
  function GivePotion(...arg1): (tags: {
    "Show Icon"?: "True" | "False";
    "Overwrite Effect"?: "True" | "False";
    "Effect Particles"?: "Regular" | "Ambient" | "None";
  }) => void;
  function RemoveItems(...arg1): (tags: {}) => void;
  function BoostElytra(arg1: Item): (tags: {}) => void;
  function SaveInv(): (tags: {}) => void;
  function OpenBook(arg1: Item): (tags: {}) => void;
  function SetHealth(arg1: Number): (tags: {}) => void;
  function BlockDisguise(arg1: Item, arg2: StyledText | null): (tags: {}) => void;
  function RollbackBlocks(arg1: Number | null): (tags: {}) => void;
  function WalkSpeed(arg1: Number): (tags: {}) => void;
  function SetCollidable(): (tags: {
    "Collision"?: "Enable" | "Disable";
  }) => void;
  function LaunchFwd(arg1: Number): (tags: {
    "Add to Current Velocity"?: "True" | "False";
    "Launch Axis"?: "Pitch and Yaw" | "Yaw Only";
  }) => void;
  function SetFallDistance(arg1: Number): (tags: {}) => void;
  function CreativeMode(): (tags: {}) => void;
  function AttackAnimation(): (tags: {
    "Animation Arm"?: "Swing main arm" | "Swing off arm";
  }) => void;
  function DisplayHologram(arg1: Location, arg2: StyledText): (tags: {}) => void;
  function SetAbsorption(arg1: Number): (tags: {}) => void;
  function ShowInv(...arg1): (tags: {}) => void;
  function SetFoodLevel(arg1: Number): (tags: {}) => void;
  function PlayerDisguise(arg1: StyledText, arg2: Item | null): (tags: {}) => void;
  function SetSaturation(arg1: Number): (tags: {}) => void;
  function SendTitle(arg1: StyledText, arg2: StyledText | null, arg3: Number | null, arg4: Number | null, arg5: Number | null): (tags: {}) => void;
  function ScoreDefFormat(arg1: StyledText): (tags: {
    "Number Format"?: "Fixed" | "Styled" | "Blank" | "Reset";
  }) => void;
  function StopSound(...arg1): (tags: {
    "Sound Source"?: "Master" | "Music" | "Jukebox/Note Blocks" | "Weather" | "Blocks" | "Hostile Creatures" | "Friendly Creatures" | "Players" | "Ambient/Environment" | "Voice/Speech";
  }) => void;
  function HealthAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Maximum health" | "Maximum absorption health" | "Armor" | "Armor toughness";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function ParticleLine(arg1: Particle, arg2: Location, arg3: Location, arg4: Number | null): (tags: {}) => void;
}
declare namespace SetVariable {
  function GetItemFood(arg1: Variable, arg2: Item): (tags: {
    "Food Property"?: "Nutrition" | "Saturation" | "Eating Duration";
  }) => Number;
  function String(arg1: Variable): (tags: {
    "Text Value Merging"?: "Add spaces" | "No spaces";
  }) => void;
  function SetParticleType(arg1: Variable, arg2: Particle | null, arg3: String): (tags: {}) => void;
  function ClearItemTag(arg1: Variable, arg2: Item | null): (tags: {}) => void;
  function PurgeVars(...arg1): (tags: {
    "Match Requirement"?: "Entire name" | "Full word(s) in name" | "Any part of name";
    "Ignore Case"?: "True" | "False";
  }) => void;
  function ShiftAllAxes(arg1: Variable, arg2: Location | null, arg3: Number | null, arg4: Number | null, arg5: Number | null): (tags: {}) => void;
  function GetParticleMat(arg1: Variable, arg2: Particle): (tags: {}) => String;
  function SetParticleSprd(arg1: Variable, arg2: Particle | null, arg3: Number, arg4: Number): (tags: {}) => void;
  function AbsoluteValue(arg1: Variable, arg2: Number | null): (tags: {}) => Number;
  function AppendValue(arg1: Variable): (tags: {}) => void;
  function ShiftOnVector(arg1: Variable, arg2: Location | null, arg3: Vector, arg4: Number): (tags: {
    "Add Location Rotation"?: "True" | "False";
  }) => void;
  function GetItemAttribute(arg1: Variable, arg2: Item): (tags: {
    "Attribute"?: "Armor" | "Armor toughness" | "Attack damage" | "Attack knockback" | "Attack speed" | "Burning time" | "Explosion knockback resistance" | "Fall damage multiplier" | "Flying speed" | "Follow range" | "Gravity" | "Jump strength" | "Knockback resistance" | "Luck" | "Maximum absorption health" | "Maximum health" | "Movement efficiency" | "Walking speed" | "Oxygen bonus" | "Safe fall distance" | "Scale" | "Step height" | "Water movement efficiency" | "Block break speed" | "Block interaction range" | "Entity interaction range" | "Mining efficiency" | "Sneaking speed" | "Submerged mining speed" | "Sweeping damage ratio" | "Zombie spawn reinforcements";
    "Active Equipment Slot"?: "Any" | "Main hand" | "Off hand" | "Head" | "Body" | "Legs" | "Feet";
  }) => Number;
  function ClearDict(arg1: Variable): (tags: {}) => void;
  function ShiftRotation(arg1: Variable, arg2: Location | null, arg3: Number): (tags: {
    "Rotation Axis"?: "Pitch" | "Yaw";
  }) => void;
  function GetItemName(arg1: Variable, arg2: Item): (tags: {}) => StyledText;
  function GetItemRarity(arg1: Variable, arg2: Item): (tags: {}) => String;
  function MultiplyVector(arg1: Variable, arg2: Vector | null, arg3: Number): (tags: {}) => Vector;
  function Bitwise(arg1: Variable, arg2: Number, arg3: Number | null): (tags: {
    "Operator"?: "|" | "&" | "~" | "^" | "<<" | ">>" | ">>>";
  }) => Number;
  function GetLecternPage(arg1: Variable, arg2: Location): (tags: {}) => Number;
  function ShiftOnAxis(arg1: Variable, arg2: Location | null, arg3: Number): (tags: {
    "Coordinate"?: "X" | "Y" | "Z";
  }) => void;
  function VectorBetween(arg1: Variable, arg2: Location, arg3: Location): (tags: {}) => void;
  function GetVectorComp(arg1: Variable, arg2: Vector): (tags: {
    "Component"?: "X" | "Y" | "Z";
  }) => Number;
  function AddItemAttribute(arg1: Variable, arg2: Item | null, arg3: Number): (tags: {
    "Attribute"?: "Armor" | "Armor toughness" | "Attack damage" | "Attack knockback" | "Attack speed" | "Burning time" | "Explosion knockback resistance" | "Fall damage multiplier" | "Flying speed" | "Follow range" | "Gravity" | "Jump strength" | "Knockback resistance" | "Luck" | "Maximum absorption health" | "Maximum health" | "Movement efficiency" | "Walking speed" | "Oxygen bonus" | "Safe fall distance" | "Scale" | "Step height" | "Water movement efficiency" | "Block break speed" | "Block interaction range" | "Entity interaction range" | "Mining efficiency" | "Sneaking speed" | "Submerged mining speed" | "Sweeping damage ratio" | "Zombie spawn reinforcements";
    "Operation"?: "Add number" | "Add percentage to base" | "Multiply modifier by percentage";
    "Active Equipment Slot"?: "Any" | "Main hand" | "Off hand" | "Head" | "Body" | "Legs" | "Feet";
  }) => void;
  function GetCenterLoc(arg1: Variable, ...arg2): (tags: {}) => Location;
  function AlignLoc(arg1: Variable, arg2: Location | null): (tags: {
    "Alignment Mode"?: "Block center" | "Lower block corner";
    "Coordinates"?: "All coordinates" | "X and Z" | "Only Y";
    "Rotation"?: "Keep rotation" | "Remove rotation";
  }) => Location;
  function GetSoundVolume(arg1: Variable, arg2: Sound): (tags: {}) => Number;
  function RandomNumber(arg1: Variable, arg2: Number, arg3: Number): (tags: {
    "Rounding Mode"?: "Whole number" | "Decimal number";
  }) => Number;
  function ContainerName(arg1: Variable, arg2: Location): (tags: {}) => StyledText;
  function Raycast(arg1: Variable, arg2: Location, arg3: Number): (tags: {
    "Entity Collision"?: "True" | "False";
    "Block Collision"?: "All blocks" | "Non-fluid blocks" | "Solid blocks" | "None";
  }) => Location;
  function RotateAroundVec(arg1: Variable, arg2: Vector | null, arg3: Vector, arg4: Number): (tags: {
    "Angle Units"?: "Degrees" | "Radians";
  }) => Vector;
  function SetItemFood(arg1: Variable, arg2: Item | null, arg3: Number, arg4: Number, arg5: Number | null): (tags: {
    "Can Always Eat"?: "True" | "False";
  }) => void;
  function GetParticleMotion(arg1: Variable, arg2: Particle): (tags: {}) => Vector;
  function SetParticleMotion(arg1: Variable, arg2: Particle | null, arg3: Vector | null, arg4: Number | null): (tags: {}) => void;
  function Average(arg1: Variable, ...arg2): (tags: {}) => Number;
  function SetMapTexture(arg1: Variable, arg2: Item | null, arg3: String): (tags: {}) => void;
  function GetBlockData(arg1: Variable, arg2: Location, arg3: String): (tags: {}) => String;
  function SortDict(arg1: Variable): (tags: {
    "Sorting Type"?: "Sort by Key" | "Sort by Value";
    "Sorting Order"?: "Ascending" | "Descending";
  }) => void;
  function GetLecternBook(arg1: Variable, arg2: Location): (tags: {}) => Item;
  function GetCustomSound(arg1: Variable, arg2: Sound): (tags: {}) => String;
  function CrossProduct(arg1: Variable, arg2: Vector, arg3: Vector): (tags: {}) => Vector;
  function x(arg1: Variable, ...arg2): (tags: {}) => Number;
  function GetParticleRoll(arg1: Variable, arg2: Particle | null): (tags: {}) => Number;
  function DotProduct(arg1: Variable, arg2: Vector, arg3: Vector): (tags: {}) => Number;
  function SetArmorTrim(arg1: Variable, arg2: Item | null): (tags: {
    "Trim Pattern"?: "None" | "Bolt" | "Coast" | "Dune" | "Eye" | "Flow" | "Rib" | "Sentry" | "Snout" | "Spire" | "Tide" | "Vex" | "Ward" | "Wayfinder" | "Shaper" | "Silence" | "Raiser" | "Host" | "Wild";
    "Trim Material"?: "Amethyst" | "Copper" | "Diamond" | "Emerald" | "Gold" | "Iron" | "Lapis Lazuli" | "Netherite" | "Quartz" | "Redstone";
  }) => void;
  function PopListValue(arg1: Variable, arg2: Number | null): (tags: {}) => void;
  function SetParticleOpac(arg1: Variable, arg2: Particle | null, arg3: Number): (tags: {}) => void;
  function Noise(arg1: Variable, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null, arg7: Number | null): (tags: {
    "Return Type"?: "Simplex" | "Perlin" | "Voronoi" | "Worley" | "Value";
    "Dimensions"?: "3D" | "2D";
  }) => Number;
  function MinNumber(arg1: Variable, ...arg2): (tags: {}) => Number;
  function GetPotionType(arg1: Variable, arg2: PotionEffect): (tags: {}) => String;
  function ListLength(arg1: Variable): (tags: {}) => Number;
  function Sine(arg1: Variable, arg2: Number): (tags: {
    "Sine Variant"?: "Sine" | "Inverse sine (arcsine)" | "Hyperbolic sine";
    "Input"?: "Degrees" | "Radians";
  }) => Number;
  function DirectionName(arg1: Variable, arg2: Vector): (tags: {}) => String;
  function RepeatString(arg1: Variable, arg2: String, arg3: Number): (tags: {}) => String;
  function JoinString(arg1: Variable, arg2: String | null, arg3: String | null): (tags: {}) => String;
  function ReverseList(arg1: Variable): (tags: {}) => void;
  function DedupList(arg1: Variable): (tags: {}) => void;
  function CreateDict(arg1: Variable): (tags: {}) => void;
  function GetBlockByMCTag(arg1: Variable, arg2: String): (tags: {
    "Return Value Type"?: "Material ID (golden_apple)" | "Material Name (Golden Apple)" | "Item";
  }) => void;
  function FaceLocation(arg1: Variable, arg2: Location | null, arg3: Location): (tags: {
    "Face Direction"?: "Toward location" | "Away from location";
  }) => Location;
  function SetVectorLength(arg1: Variable, arg2: Vector | null, arg3: Number | null): (tags: {}) => void;
  function SetPotionDur(arg1: Variable, arg2: PotionEffect | null, arg3: Number): (tags: {}) => void;
  function BlockResistance(arg1: Variable, arg2: Item, arg3: Location): (tags: {}) => Number;
  function SplitString(arg1: Variable, arg2: String, arg3: String | null): (tags: {}) => void;
  function NormalRandom(arg1: Variable, arg2: Number, arg3: Number): (tags: {
    "Distribution"?: "Normal" | "Folded normal";
  }) => Number;
  function SetPotionType(arg1: Variable, arg2: PotionEffect | null, arg3: String): (tags: {}) => void;
  function AlignVector(arg1: Variable, arg2: Vector | null): (tags: {}) => Vector;
  function SetItemDura(arg1: Variable, arg2: Item | null, arg3: Number): (tags: {
    "Durability Type"?: "Set Damage" | "Set Damage Percentage" | "Set Remaining" | "Set Remaining Percentage";
  }) => void;
  function SetBreakability(arg1: Variable, arg2: Item | null): (tags: {
    "Breakability"?: "Breakable" | "Unbreakable";
  }) => void;
  function SetMaxAmount(arg1: Variable, arg2: Item | null, arg3: Number | null): (tags: {}) => void;
  function GetSignText(arg1: Variable, arg2: Location): (tags: {
    "Sign Line"?: "1" | "2" | "3" | "4" | "All lines";
    "Sign Side"?: "Front" | "Back";
  }) => StyledText;
  function SetDictValue(arg1: Variable, arg2: String): (tags: {}) => void;
  function SetAllCoords(arg1: Variable, arg2: Location | null, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null, arg7: Number | null): (tags: {
    "Coordinate Type"?: "Plot coordinate" | "World coordinate";
  }) => void;
  function RGBColor(arg1: Variable, arg2: Number, arg3: Number, arg4: Number): (tags: {}) => void;
  function SetCanDestroy(arg1: Variable, arg2: Item | null, ...arg3): (tags: {}) => void;
  function HSLColor(arg1: Variable, arg2: Number, arg3: Number | null, arg4: Number | null): (tags: {}) => void;
  function GetItemLore(arg1: Variable, arg2: Item): (tags: {}) => void;
  function RemoveListIndex(arg1: Variable, ...arg2): (tags: {}) => void;
  function CellularNoise(arg1: Variable, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null, arg7: Number | null, arg8: Number | null, arg9: Number | null, arg10: Number | null, arg11: Number | null, arg12: Number | null, arg13: Number | null): (tags: {
    "Return Type"?: "Voronoi" | "Worley" | "Secondary" | "Additive" | "Subtractive" | "Divisive" | "Multiplicative" | "Origin";
    "Distance Calculation"?: "Euclidean" | "Manhattan" | "Natural";
    "Domain Fractal"?: "Progressive" | "Independent";
    "Dimensions"?: "3D" | "2D";
  }) => Number;
  function Logarithm(arg1: Variable, arg2: Number | null, arg3: Number): (tags: {}) => Number;
  function SetItemTag(arg1: Variable, arg2: Item | null, arg3: String, arg4: Number, arg5: String): (tags: {}) => void;
  function TrimString(arg1: Variable, arg2: String | null, arg3: Number, arg4: Number | null): (tags: {}) => String;
  function ParseMiniMessageExpr(arg1: Variable, arg2: String): (tags: {
    "Allowed Tags"?: "Style Only" | "Dynamic" | "Full";
    "Parse Legacy Color Codes"?: "True" | "False";
  }) => StyledText;
  function GetItemAmount(arg1: Variable, arg2: Item): (tags: {}) => Number;
  function SetPotionAmp(arg1: Variable, arg2: PotionEffect | null, arg3: Number): (tags: {}) => void;
  function GetCanDestroy(arg1: Variable, arg2: Item): (tags: {}) => void;
  function RotateAroundAxis(arg1: Variable, arg2: Vector | null, arg3: Number): (tags: {
    "Axis"?: "X" | "Y" | "Z";
    "Angle Units"?: "Degrees" | "Radians";
  }) => Vector;
  function GetItemDura(arg1: Variable, arg2: Item): (tags: {
    "Durability Type"?: "Get Damage" | "Get Damage Percentage" | "Get Remaining" | "Get Remaining Percentage" | "Get Maximum";
  }) => Number;
  function ShiftInDirection(arg1: Variable, arg2: Location | null, arg3: Number | null): (tags: {
    "Direction"?: "Forward" | "Upward" | "Sideways";
  }) => void;
  function WrapNum(arg1: Variable, arg2: Number | null, arg3: Number, arg4: Number): (tags: {}) => Number;
  function ReplaceString(arg1: Variable, arg2: String, arg3: String, arg4: String): (tags: {
    "Regular Expressions"?: "Enable" | "Disable";
    "Replacement Type"?: "First occurrence" | "All occurrences";
  }) => String;
  function SetItemGlowing(arg1: Variable, arg2: Item | null): (tags: {
    "Glowing"?: "Enable" | "Disable" | "Default";
  }) => void;
  function SetItemName(arg1: Variable, arg2: Item | null, ...arg3): (tags: {}) => void;
  function SetLodestoneLoc(arg1: Variable, arg2: Item | null, arg3: Location): (tags: {
    "Require Lodestone at Location"?: "True" | "False";
  }) => void;
  function FlattenList(arg1: Variable): (tags: {}) => void;
  function BlockHardness(arg1: Variable, arg2: Item, arg3: Location): (tags: {}) => Number;
  function GetPotionAmp(arg1: Variable, arg2: PotionEffect): (tags: {}) => Number;
  function GetParticleAmount(arg1: Variable, arg2: Particle): (tags: {}) => Number;
  function GetDictSize(arg1: Variable): (tags: {}) => Number;
  function SetItemAmount(arg1: Variable, arg2: Item | null, arg3: Number): (tags: {}) => void;
  function SubtractVectors(arg1: Variable, ...arg2): (tags: {}) => Vector;
  function SetCase(arg1: Variable, arg2: String | null): (tags: {
    "Capitalization Type"?: "UPPERCASE" | "lowercase" | "Proper Case" | "iNVERT CASE" | "RAnDoM cASe";
  }) => String;
  function SetParticleColor(arg1: Variable, arg2: Particle | null, arg3: String, arg4: Number | null): (tags: {}) => void;
  function GetLight(arg1: Variable, arg2: Location): (tags: {
    "Light Type"?: "Combined light" | "Sky light" | "Block light";
  }) => Number;
  function GetBookText(arg1: Variable, arg2: Item, arg3: Number | null): (tags: {}) => StyledText;
  function GetDictValues(arg1: Variable): (tags: {}) => void;
  function Vector(arg1: Variable, arg2: Number, arg3: Number, arg4: Number): (tags: {}) => Vector;
  function Distance(arg1: Variable, arg2: Location, arg3: Location): (tags: {
    "Distance Type"?: "Distance 2D (X/Z)" | "Distance 3D (X/Y/Z)" | "Altitude (Y)";
  }) => Number;
  function Root(arg1: Variable, arg2: Number | null, arg3: Number | null): (tags: {}) => Number;
  function SetParticleAmount(arg1: Variable, arg2: Particle | null, arg3: Number): (tags: {}) => void;
  function AddItemEnchant(arg1: Variable, arg2: Item | null, arg3: String, arg4: Number): (tags: {}) => void;
  function AddItemToolRule(arg1: Variable, arg2: Item | null, arg3: Number, arg4: Item[], arg5: String): (tags: {
    "Correct Tool for Loot"?: "True" | "False";
  }) => void;
  function GetItemType(arg1: Variable, arg2: Item): (tags: {
    "Return Value Type"?: "Item ID (golden_apple)" | "Item Name (Golden Apple)" | "Item";
  }) => String;
  function GetDirection(arg1: Variable, arg2: Location): (tags: {}) => Vector;
  function GetLoreLine(arg1: Variable, arg2: Item, arg3: Number): (tags: {}) => StyledText;
  function GetParticleType(arg1: Variable, arg2: Particle): (tags: {}) => String;
  function SetItemMaxDura(arg1: Variable, arg2: Item | null, arg3: Number): (tags: {}) => void;
  function RemoveString(arg1: Variable, arg2: String | null, ...arg3): (tags: {
    "Regular Expressions"?: "Enable" | "Disable";
  }) => String;
  function GetAllBlockData(arg1: Variable, arg2: Location): (tags: {
    "Hide Default"?: "True" | "False";
  }) => String;
  function MaxNumber(arg1: Variable, ...arg2): (tags: {}) => Number;
  function GetDictKeys(arg1: Variable): (tags: {}) => void;
  function TrimStyledText(arg1: Variable, arg2: StyledText | null, arg3: Number, arg4: Number | null): (tags: {}) => StyledText;
  function SetParticleMat(arg1: Variable, arg2: Particle | null, arg3: Item): (tags: {}) => void;
  function GetCoord(arg1: Variable, arg2: Location): (tags: {
    "Coordinate Type"?: "Plot coordinate" | "World coordinate";
    "Coordinate"?: "X" | "Y" | "Z" | "Pitch" | "Yaw";
  }) => Number;
  function RemoveItemTag(arg1: Variable, arg2: Item | null, arg3: String): (tags: {}) => void;
  function SetParticleSize(arg1: Variable, arg2: Particle | null, arg3: Number, arg4: Number | null): (tags: {}) => void;
  function GetPotionDur(arg1: Variable, arg2: PotionEffect): (tags: {}) => Number;
  function RandomLoc(arg1: Variable, arg2: Location, arg3: Location): (tags: {}) => Location;
  function SetSoundType(arg1: Variable, arg2: Sound | null, arg3: String): (tags: {}) => void;
  function GetLodestoneLoc(arg1: Variable, arg2: Item): (tags: {}) => Location;
  function GetParticleSprd(arg1: Variable, arg2: Particle): (tags: {
    "Spread"?: "Horizontal" | "Vertical";
  }) => Number;
  function ReflectVector(arg1: Variable, arg2: Vector | null, arg3: Vector): (tags: {}) => Vector;
  function GetHeadOwner(arg1: Variable, arg2: Item): (tags: {
    "Text Value"?: "Owner Name" | "Owner UUID";
  }) => String;
  function AppendDict(arg1: Variable): (tags: {}) => void;
  function GetColorChannels(arg1: Variable, arg2: String): (tags: {
    "Color Channels"?: "RGB" | "HSB" | "HSL";
  }) => void;
  function SetDirection(arg1: Variable, arg2: Location | null, arg3: Vector): (tags: {}) => Location;
  function SetListValue(arg1: Variable, arg2: Number): (tags: {}) => void;
  function SetItemEnchants(arg1: Variable, arg2: Item | null): (tags: {}) => void;
  function SetBookText(arg1: Variable, arg2: Item | null, arg3: StyledText[], arg4: StyledText, arg5: Number): (tags: {}) => void;
  function RandomValue(arg1: Variable): (tags: {}) => void;
  function SetItemFlags(arg1: Variable, arg2: Item | null): (tags: {
    "Armor Trim"?: "Hide" | "Show" | "No Change";
    "Color"?: "Hide" | "Show" | "No Change";
    "Enchantments"?: "Hide" | "Show" | "No Change";
    "Attributes"?: "Hide" | "Show" | "No Change";
    "Unbreakable"?: "Hide" | "Show" | "No Change";
    "Can Destroy"?: "Hide" | "Show" | "No Change";
    "Can Place On"?: "Hide" | "Show" | "No Change";
    "Potion Effects"?: "Hide" | "Show" | "No Change";
    "Others"?: "Hide" | "Show" | "No Change";
  }) => void;
  function SetItemType(arg1: Variable, arg2: Item | null, arg3: String): (tags: {}) => void;
  function GetSoundType(arg1: Variable, arg2: Sound): (tags: {}) => String;
  function GetListValue(arg1: Variable, arg2: Number): (tags: {}) => void;
  function BounceNum(arg1: Variable, arg2: Number | null, arg3: Number, arg4: Number): (tags: {}) => Number;
  function Tangent(arg1: Variable, arg2: Number): (tags: {
    "Tangent Variant"?: "Tangent" | "Inverse tangent (arctangent)" | "Hyperbolic tangent";
    "Input"?: "Degrees" | "Radians";
  }) => Number;
  function VoronoiNoise(arg1: Variable, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null): (tags: {
    "Cell Edge Type"?: "Euclidean" | "Manhattan" | "Natural";
  }) => Number;
  function HSBColor(arg1: Variable, arg2: Number, arg3: Number | null, arg4: Number | null): (tags: {}) => void;
  function GetSoundVariant(arg1: Variable, arg2: Sound): (tags: {}) => String;
  function GetItemColor(arg1: Variable, arg2: Item): (tags: {}) => String;
  function ClearFormatting(arg1: Variable, arg2: StyledText | null): (tags: {}) => String;
  function InsertListValue(arg1: Variable, arg2: Number): (tags: {}) => void;
  function SetSoundVolume(arg1: Variable, arg2: Sound | null, arg3: Number): (tags: {}) => void;
  function SetCoord(arg1: Variable, arg2: Location | null, arg3: Number): (tags: {
    "Coordinate Type"?: "Plot coordinate" | "World coordinate";
    "Coordinate"?: "X" | "Y" | "Z" | "Pitch" | "Yaw";
  }) => void;
  function AddVectors(arg1: Variable, ...arg2): (tags: {}) => Vector;
  function GetParticleFade(arg1: Variable, arg2: Particle): (tags: {}) => String;
  function SetItemTool(arg1: Variable, arg2: Item | null, arg3: Number | null, arg4: Number | null): (tags: {}) => void;
  function GetItemEnchants(arg1: Variable, arg2: Item): (tags: {}) => void;
  function SetHeadTexture(arg1: Variable, arg2: Item | null, arg3: String): (tags: {}) => void;
  function PerlinNoise(arg1: Variable, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null, arg7: Number | null): (tags: {
    "Fractal Type"?: "Brownian" | "Billow (Dark edges)" | "Rigid (Light edges)";
  }) => Number;
  function WorleyNoise(arg1: Variable, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null): (tags: {
    "Cell Edge Type"?: "Euclidean" | "Manhattan" | "Natural";
    "Distance Calculation"?: "Primary" | "Secondary" | "Additive" | "Subtractive" | "Multiplicative" | "Divisive";
  }) => Number;
  function SetItemColor(arg1: Variable, arg2: Item | null, arg3: String): (tags: {}) => void;
  function GetParticleColor(arg1: Variable, arg2: Particle): (tags: {}) => String;
  function SetSoundPitch(arg1: Variable, arg2: Sound | null, arg3: Number, arg4: String): (tags: {}) => void;
  function RoundNumber(arg1: Variable, arg2: Number | null, arg3: Number | null): (tags: {
    "Round Mode"?: "Floor" | "Nearest" | "Ceiling";
  }) => Number;
  function GetCanPlaceOn(arg1: Variable, arg2: Item): (tags: {}) => void;
  function SortList(arg1: Variable): (tags: {
    "Sort Order"?: "Ascending" | "Descending";
  }) => void;
  function SetCustomSound(arg1: Variable, arg2: Sound | null, arg3: String | null): (tags: {}) => void;
  function RemoveDictEntry(arg1: Variable, arg2: String): (tags: {}) => void;
  function FormatTime(arg1: Variable, arg2: Number, arg3: String | null): (tags: {
    "Format"?: "Custom" | "2020/08/17 17:20:54" | "2020/08/17" | "Mon, August 17" | "Monday" | "17:20:54" | "5:20 PM" | "17h20m54s" | "54.229 seconds";
  }) => String;
  function StringLength(arg1: Variable, arg2: String): (tags: {}) => Number;
  function GetItemEffects(arg1: Variable, arg2: Item): (tags: {}) => void;
  function StyledText(arg1: Variable): (tags: {
    "Text Value Merging"?: "Add spaces" | "No spaces";
    "Inherit Styles"?: "True" | "False";
  }) => void;
  function GetMiniMessageExpr(arg1: Variable, arg2: StyledText): (tags: {}) => String;
  function SetItemLore(arg1: Variable, arg2: Item | null, arg3: (StyledText | null)[], arg4: StyledText | null, arg5: Number): (tags: {}) => void;
  function SetItemEffects(arg1: Variable, arg2: Item | null, ...arg3): (tags: {}) => void;
  function GetItemTag(arg1: Variable, arg2: Item, arg3: String): (tags: {}) => void;
  function CreateList(arg1: Variable): (tags: {}) => void;
  function AppendList(arg1: Variable): (tags: {}) => void;
  function GetContainerItems(arg1: Variable, arg2: Location): (tags: {
    "Ignore Empty Slots"?: "True" | "False";
  }) => void;
  function ShiftToward(arg1: Variable, arg2: Location | null, arg3: Location, arg4: Number | null): (tags: {}) => void;
  function TrimList(arg1: Variable, arg2: Number, arg3: Number | null): (tags: {}) => void;
  function GradientNoise(arg1: Variable, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null, arg7: Number | null, arg8: Number | null, arg9: Number | null, arg10: Number | null, arg11: Number | null, arg12: Number | null, arg13: Number | null): (tags: {
    "Dimensions"?: "3D" | "2D";
    "Domain Fractal"?: "Progressive" | "Independent";
    "Return Type"?: "Simplex" | "Perlin";
  }) => Number;
  function SetItemHideTooltip(arg1: Variable, arg2: Item | null): (tags: {
    "Tooltip"?: "Enable" | "Disable";
  }) => void;
  function GetBlockDrops(arg1: Variable, arg2: Location, arg3: Item | null): (tags: {}) => void;
  function ClearEnchants(arg1: Variable, arg2: Item | null): (tags: {}) => void;
  function Cosine(arg1: Variable, arg2: Number): (tags: {
    "Cosine Variant"?: "Cosine" | "Inverse cosine (arccosine)" | "Hyperbolic cosine";
    "Input"?: "Degrees" | "Radians";
  }) => Number;
  function GetParticleOpac(arg1: Variable, arg2: Particle | null): (tags: {}) => Number;
  function GetItemByMCTag(arg1: Variable, arg2: String): (tags: {
    "Return Value Type"?: "Material ID (golden_apple)" | "Material Name (Golden Apple)" | "Item";
  }) => void;
  function SetParticleFade(arg1: Variable, arg2: Particle | null, arg3: String): (tags: {}) => void;
  function SetVectorComp(arg1: Variable, arg2: Vector | null, arg3: Number): (tags: {
    "Component"?: "X" | "Y" | "Z";
  }) => void;
  function ParseNumber(arg1: Variable, arg2: String | null): (tags: {}) => Number;
  function Exponent(arg1: Variable, arg2: Number | null, arg3: Number | null): (tags: {}) => Number;
  function GetValueIndex(arg1: Variable): (tags: {
    "Search Order"?: "Ascending (first index)" | "Descending (last index)";
  }) => Number;
  function RemItemEnchant(arg1: Variable, arg2: Item | null, arg3: String): (tags: {}) => void;
  function AddItemLore(arg1: Variable, arg2: Item | null, ...arg3): (tags: {}) => void;
  function SetParticleRoll(arg1: Variable, arg2: Particle | null, arg3: Number): (tags: {}) => void;
  function SetSoundVariant(arg1: Variable, arg2: Sound | null, arg3: String | null): (tags: {}) => void;
  function RandomizeList(arg1: Variable): (tags: {}) => void;
  function ClampNumber(arg1: Variable, arg2: Number | null, arg3: Number, arg4: Number): (tags: {}) => Number;
  function GetSoundPitch(arg1: Variable, arg2: Sound): (tags: {
    "Return Value Type"?: "Pitch (number)" | "Note (text)";
  }) => Number;
  function TranslateColors(arg1: Variable, arg2: String | null): (tags: {
    "Translation Type"?: "From hex to color" | "From & to color" | "From color to &" | "Strip color";
  }) => void;
  function GetBlockGrowth(arg1: Variable, arg2: Location): (tags: {
    "Growth Unit"?: "Growth stage number" | "Growth percentage";
  }) => Number;
  function GetAllItemTags(arg1: Variable, arg2: Item): (tags: {}) => void;
  function RemoveListValue(arg1: Variable): (tags: {
    "Items to remove"?: "All Matches" | "First Match" | "Last Match";
  }) => void;
  function ShiftAllDirections(arg1: Variable, arg2: Location | null, arg3: Number | null, arg4: Number | null, arg5: Number | null): (tags: {}) => void;
  function ValueNoise(arg1: Variable, arg2: Location, arg3: Number | null, arg4: Number | null, arg5: Number | null, arg6: Number | null, arg7: Number | null, arg8: Number | null, arg9: Number | null, arg10: Number | null, arg11: Number | null, arg12: Number | null, arg13: Number | null): (tags: {
    "Dimensions"?: "3D" | "2D";
    "Domain Fractal"?: "Progressive" | "Independent";
    "Return Type"?: "Value" | "Cubic";
  }) => Number;
  function SetCanPlaceOn(arg1: Variable, arg2: Item | null, ...arg3): (tags: {}) => void;
  function GetBlockType(arg1: Variable, arg2: Location): (tags: {
    "Return Value Type"?: "Block ID (oak_log)" | "Block name (Oak Log)" | "Item";
  }) => String;
  function GetDictValue(arg1: Variable, arg2: String): (tags: {}) => void;
  function ContainerLock(arg1: Variable, arg2: Location): (tags: {}) => String;
  function GetBlockPower(arg1: Variable, arg2: Location): (tags: {}) => Number;
  function GetVectorLength(arg1: Variable, arg2: Vector): (tags: {
    "Length Type"?: "Length" | "Length Squared";
  }) => Number;
  function ContentLength(arg1: Variable, arg2: StyledText): (tags: {}) => Number;
  function SetModelData(arg1: Variable, arg2: Item | null, arg3: Number): (tags: {}) => void;
  function GetMaxAmount(arg1: Variable, arg2: Item): (tags: {}) => Number;
  function GetParticleSize(arg1: Variable, arg2: Particle | null): (tags: {}) => Number;
}
declare namespace EntityAction {
  function DispRotationEuler(arg1: Number, arg2: Number, arg3: Number, arg4: Vector): (tags: {
    "Rotation Type"?: "Left Rotation" | "Right Rotation";
  }) => void;
  function Shear(): (tags: {}) => void;
  function SetVelocity(arg1: Vector): (tags: {
    "Add to Current Velocity"?: "True" | "False";
  }) => void;
  function SetGlowSquidDark(arg1: Number): (tags: {}) => void;
  function SetFrogType(): (tags: {
    "Frog Type"?: "Temperate" | "Warm" | "Cold";
  }) => void;
  function DispRotAxisAngle(arg1: Vector, arg2: Number): (tags: {
    "Rotation Type"?: "Left Rotation" | "Right Rotation";
  }) => void;
  function Damage(arg1: Number, arg2: String | null, arg3: StyledText | null): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetMobSitting(): (tags: {
    "Is Sitting"?: "Enable" | "Disable";
  }) => void;
  function SendAnimation(): (tags: {
    "Animation Type"?: "Hurt animation" | "Crit particles" | "Enchanted hit particles";
  }) => void;
  function SetWardenAnger(arg1: Number, arg2: String, arg3: StyledText): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetHorsePattern(): (tags: {
    "Horse Color"?: "White" | "Buckskin" | "Flaxen chestnut" | "Bay" | "Black" | "Dapple gray" | "Dark bay" | "Don't change";
    "Horse Markings"?: "No markings" | "Stockings and blaze" | "Paint" | "Snowflake appaloosa" | "Sooty" | "Don't change";
  }) => void;
  function Heal(arg1: Number): (tags: {}) => void;
  function SetPandaSadTicks(arg1: Number): (tags: {}) => void;
  function SetDyeColor(): (tags: {
    "Dye"?: "White" | "Orange" | "Magenta" | "Light blue" | "Yellow" | "Lime" | "Pink" | "Gray" | "Light gray" | "Cyan" | "Purple" | "Blue" | "Brown" | "Green" | "Red" | "Black";
  }) => void;
  function LaunchUp(arg1: Number): (tags: {
    "Add to Current Velocity"?: "True" | "False";
  }) => void;
  function SetAge(arg1: Number): (tags: {
    "Age Lock"?: "Enable" | "Disable" | "Don't change";
  }) => void;
  function SetName(arg1: StyledText): (tags: {
    "Name Tag Visibility"?: "Always" | "Default" | "Never" | "Don't change";
  }) => void;
  function SetArmsRaised(): (tags: {
    "Arms Raised"?: "Enable" | "Disable";
  }) => void;
  function SetInvulnerable(): (tags: {
    "Invulnerable"?: "Enable" | "Disable";
  }) => void;
  function SetFriction(): (tags: {
    "Friction Type"?: "Normal" | "No Friction";
  }) => void;
  function SetPickupDelay(arg1: Number): (tags: {}) => void;
  function MiscAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Scale" | "Follow range" | "Zombie spawn reinforcements" | "Oxygen bonus" | "Burning time";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function SetCreeperPower(arg1: Number): (tags: {}) => void;
  function SetMarker(): (tags: {
    "Marker"?: "Enable" | "Disable";
  }) => void;
  function RemoveCustomTag(arg1: String): (tags: {}) => void;
  function SetAbsorption(arg1: Number): (tags: {}) => void;
  function CreeperCharged(): (tags: {
    "Charged"?: "Enable" | "Disable";
  }) => void;
  function SetFireTicks(arg1: Number): (tags: {}) => void;
  function CombatAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Attack damage" | "Attack knockback";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function SetName(arg1: StyledText): (tags: {
    "Hide Name Tag"?: "True" | "False" | "Don't change";
  }) => void;
  function Jump(): (tags: {}) => void;
  function BDisplayBlock(arg1: Item, ...arg2): (tags: {}) => void;
  function SetFreezeTicks(arg1: Number): (tags: {
    "Ticking Locked"?: "Enable" | "Disable";
  }) => void;
  function TDisplaySeeThru(): (tags: {
    "See-through"?: "Enable" | "Disable";
  }) => void;
  function SetGliding(): (tags: {
    "Gliding"?: "Enable" | "Disable";
  }) => void;
  function SetRotation(arg1: Number, arg2: Number): (tags: {}) => void;
  function SetPandaRolling(): (tags: {
    "Roll Type"?: "Roll" | "Stop Rolling";
  }) => void;
  function SetFishPattern(): (tags: {
    "Pattern Color"?: "White" | "Orange" | "Magenta" | "Light blue" | "Yellow" | "Lime" | "Pink" | "Gray" | "Light gray" | "Cyan" | "Purple" | "Blue" | "Brown" | "Green" | "Red" | "Black" | "Don't change";
    "Body Color"?: "White" | "Orange" | "Magenta" | "Light blue" | "Yellow" | "Lime" | "Pink" | "Gray" | "Light gray" | "Cyan" | "Purple" | "Blue" | "Brown" | "Green" | "Red" | "Black" | "Don't change";
    "Pattern"?: "Kob" | "Sunstreak" | "Snooper" | "Dasher" | "Brinely" | "Spotty" | "Flopper" | "Stripey" | "Glitter" | "Blockfish" | "Betty" | "Clayfish" | "Don't change";
  }) => void;
  function SetWolfType(): (tags: {
    "Wolf Type"?: "Ashen" | "Black" | "Chestnut" | "Pale" | "Rusty" | "Snowy" | "Spotted" | "Striped" | "Woods";
  }) => void;
  function DispInterpolation(arg1: Number | null, arg2: Number | null): (tags: {}) => void;
  function SetEndermanBlock(arg1: Item): (tags: {}) => void;
  function LaunchToward(arg1: Location, arg2: Number | null): (tags: {
    "Add to Current Velocity"?: "True" | "False";
    "Ignore Distance"?: "True" | "False";
  }) => void;
  function SetArmor(...arg1): (tags: {}) => void;
  function GetCustomTag(arg1: Variable, arg2: String): (tags: {}) => void;
  function InteractionSize(arg1: Number | null, arg2: Number | null): (tags: {}) => void;
  function FaceLocation(arg1: Location): (tags: {
    "Face Direction"?: "Toward location" | "Away from location";
  }) => void;
  function SetCatType(): (tags: {
    "Skin Type"?: "Tabby" | "Tuxedo" | "Red" | "Siamese" | "British Shorthair" | "Calico" | "Persian" | "Ragdoll" | "White" | "Jellie" | "Black";
  }) => void;
  function SetArrowDamage(arg1: Number): (tags: {}) => void;
  function DisplayScale(arg1: Number, arg2: Number, arg3: Number, arg4: Vector): (tags: {}) => void;
  function TDisplayAlign(): (tags: {
    "Text Alignment"?: "Center" | "Left" | "Right";
  }) => void;
  function LaunchProj(arg1: Location | null, arg2: StyledText | null, arg3: Number | null, arg4: Number | null): (tags: {}) => void;
  function DisplayBillboard(): (tags: {
    "Billboard Type"?: "Fixed" | "Vertical" | "Horizontal" | "Center";
  }) => void;
  function Tame(arg1: String, arg2: StyledText): (tags: {}) => void;
  function SetGoatScreaming(): (tags: {
    "Screams"?: "Enable" | "Disable";
  }) => void;
  function SetBeeStinger(): (tags: {
    "Has Stinger"?: "Enable" | "Disable";
  }) => void;
  function MobDisguise(arg1: StyledText | null): (tags: {}) => void;
  function SetMinecartBlock(arg1: Item, arg2: Number | null): (tags: {}) => void;
  function FoxSleeping(): (tags: {
    "Sleeping"?: "Enable" | "Disable";
  }) => void;
  function SetEquipment(arg1: Item | null): (tags: {
    "Equipment Slot"?: "Main hand" | "Off hand" | "Head" | "Body" | "Legs" | "Feet" | "Saddle" | "Horse armor" | "Decor";
  }) => void;
  function SetSilenced(): (tags: {
    "Silenced"?: "Enable" | "Disable";
  }) => void;
  function SetBeeNectar(): (tags: {
    "Has Nectar"?: "Enable" | "Disable";
  }) => void;
  function AttachLead(arg1: String, arg2: StyledText, arg3: Location): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function RemovePotion(...arg1): (tags: {}) => void;
  function ShearSheep(): (tags: {}) => void;
  function ArmorStandSlots(): (tags: {
    "Interactions"?: "Take, swap or place item" | "Take or swap item" | "Take item" | "Place item" | "None";
    "Equipment Slot"?: "All" | "Main hand" | "Off hand" | "Head" | "Chest" | "Legs" | "Feet";
  }) => void;
  function SetAllayDancing(): (tags: {
    "Dancing"?: "Enable" | "Disable";
  }) => void;
  function SetRabbitType(): (tags: {
    "Skin Type"?: "Brown" | "White" | "Black" | "Black and White" | "Gold" | "Salt and Pepper" | "Killer";
  }) => void;
  function SetSize(arg1: Number): (tags: {}) => void;
  function SetAngry(): (tags: {
    "Angry"?: "Enable" | "Disable";
  }) => void;
  function Undisguise(): (tags: {}) => void;
  function SetDeathDrops(): (tags: {
    "Has Death Drops"?: "Enable" | "Disable";
  }) => void;
  function SetPersistent(): (tags: {
    "Persistent"?: "Enable" | "Disable";
  }) => void;
  function ProjectileItem(arg1: Item): (tags: {}) => void;
  function SetNameColor(): (tags: {
    "Name Color"?: "Black" | "Dark blue" | "Dark green" | "Dark aqua" | "Dark red" | "Dark purple" | "Gold" | "Gray" | "Dark gray" | "Blue" | "Green" | "Aqua" | "Red" | "Light purple" | "Yellow" | "White" | "None";
  }) => void;
  function SetCarryingChest(): (tags: {
    "Carrying Chest"?: "Enable" | "Disable";
  }) => void;
  function SetParrotColor(): (tags: {
    "Parrot Color"?: "Red" | "Blue" | "Green" | "Cyan" | "Gray";
  }) => void;
  function DispTranslation(arg1: Number, arg2: Number, arg3: Number, arg4: Vector): (tags: {}) => void;
  function Remove(): (tags: {}) => void;
  function TDispBackground(arg1: String | null, arg2: Number): (tags: {}) => void;
  function DisplayCullingSize(arg1: Number | null, arg2: Number | null): (tags: {}) => void;
  function SetSheepSheared(): (tags: {
    "Sheared"?: "Enable" | "Disable";
  }) => void;
  function SetAxolotlColor(): (tags: {
    "Axolotl Color"?: "Pink" | "Brown" | "Yellow" | "Cyan" | "Blue";
  }) => void;
  function GetAllEntityTags(arg1: Variable): (tags: {}) => void;
  function SetAI(): (tags: {
    "AI"?: "Sentient" | "Insentient" | "None";
  }) => void;
  function KBAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Knockback resistance" | "Explosion knockback resistance";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function MovementAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Walking speed" | "Flying speed" | "Jump strength" | "Step height" | "Movement efficiency" | "Water movement efficiency";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function SetRiptiding(): (tags: {
    "Riptiding"?: "Enable" | "Disable";
  }) => void;
  function SetArrowNoClip(): (tags: {
    "Has NoClip"?: "Enable" | "Disable";
  }) => void;
  function FallingAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Gravity" | "Safe fall distance" | "Fall damage multiplier";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function SetProjSource(arg1: String, arg2: StyledText): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetFoxLeaping(): (tags: {
    "Leaping"?: "Enable" | "Disable";
  }) => void;
  function SetPandaGene(): (tags: {
    "Set Gene"?: "Main gene" | "Hidden gene" | "Both";
    "Gene Type"?: "Aggressive" | "Lazy" | "Weak" | "Worried" | "Playful" | "Normal" | "Brown";
  }) => void;
  function SetMaxHealth(arg1: Number): (tags: {
    "Heal Mob to Max Health"?: "True" | "False";
  }) => void;
  function SetFishingTime(arg1: Number): (tags: {}) => void;
  function EndCrystalBeam(arg1: Location | null): (tags: {}) => void;
  function FrogEat(arg1: String, arg2: StyledText): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function DisplayBrightness(arg1: Number, arg2: Number): (tags: {}) => void;
  function SetProfession(): (tags: {
    "Profession"?: "Unemployed" | "Armorer" | "Butcher" | "Cartographer" | "Cleric" | "Farmer" | "Fisherman" | "Fletcher" | "Leatherworker" | "Librarian" | "Mason" | "Nitwit" | "Shepherd" | "Toolsmith" | "Weaponsmith";
  }) => void;
  function ClearPotions(): (tags: {}) => void;
  function ArmorStandParts(): (tags: {
    "Arms"?: "Enable" | "Disable" | "Don't change";
    "Base Plate"?: "Enable" | "Disable" | "Don't change";
  }) => void;
  function SetNameVisible(): (tags: {
    "Name Tag Visibility"?: "Always" | "Default" | "Never";
  }) => void;
  function SetTarget(arg1: String[], arg2: StyledText[]): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function TDisplayShadow(): (tags: {
    "Text Shadow"?: "Enable" | "Disable";
  }) => void;
  function SetNameVisible(): (tags: {
    "Name Tag Visible"?: "Enable" | "Disable";
  }) => void;
  function SetInvulTicks(arg1: Number): (tags: {}) => void;
  function SetShulkerPeek(arg1: Number): (tags: {
    "Is Silent"?: "Enable" | "Disable";
  }) => void;
  function SetPose(): (tags: {
    "Pose"?: "Standing" | "Sleeping" | "Swimming" | "Sneaking";
  }) => void;
  function SetRearing(): (tags: {
    "Rearing"?: "Enable" | "Disable";
  }) => void;
  function SetCloudRadius(arg1: Number, arg2: Number | null): (tags: {}) => void;
  function SetGravity(): (tags: {
    "Gravity"?: "Enable" | "Disable";
  }) => void;
  function DispTPDuration(arg1: Number | null): (tags: {}) => void;
  function SetWitherInvul(arg1: Number): (tags: {}) => void;
  function SetArrowPierce(arg1: Number): (tags: {}) => void;
  function DisplayShadow(arg1: Number | null, arg2: Number | null): (tags: {}) => void;
  function InteractResponse(): (tags: {
    "Responsive"?: "Enable" | "Disable";
  }) => void;
  function UseItem(): (tags: {
    "Hand"?: "Main Hand" | "Off Hand";
    "Use Item"?: "Enable" | "Disable";
  }) => void;
  function RideEntity(arg1: String[], arg2: StyledText[]): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function DisplayMatrix(): (tags: {}) => void;
  function SnifferState(): (tags: {
    "Behavior"?: "Idle" | "Feeling Happy" | "Scenting" | "Sniffing" | "Searching" | "Digging";
  }) => void;
  function Teleport(arg1: Location): (tags: {
    "Keep Current Rotation"?: "True" | "False";
  }) => void;
  function DisplayGlowColor(arg1: String): (tags: {}) => void;
  function SetVisualFire(): (tags: {
    "On Fire"?: "True" | "False";
  }) => void;
  function SetSaddle(): (tags: {
    "Saddle"?: "Enable" | "Disable";
  }) => void;
  function SetBulletTarget(arg1: String | null, arg2: StyledText | null): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function TDisplayLineWidth(arg1: Number | null): (tags: {}) => void;
  function SetDragonPhase(): (tags: {
    "Phase"?: "Flying" | "Hovering" | "Breath attack" | "Dying";
  }) => void;
  function SetLlamaColor(): (tags: {
    "Llama Color"?: "Brown" | "Creamy" | "White" | "Gray";
  }) => void;
  function SetVillagerBiome(): (tags: {
    "Biome"?: "Desert" | "Jungle" | "Plains" | "Savanna" | "Snow" | "Swamp" | "Taiga";
  }) => void;
  function SetCreeperFuse(arg1: Number): (tags: {}) => void;
  function SetBaby(): (tags: {
    "Baby"?: "Enable" | "Disable";
  }) => void;
  function MooshroomType(): (tags: {
    "Mooshroom Variant"?: "Red" | "Brown";
  }) => void;
  function SetInvisible(): (tags: {
    "Invisible"?: "Enable" | "Disable";
  }) => void;
  function SheepEat(): (tags: {}) => void;
  function SetCatResting(): (tags: {
    "Resting"?: "Enable" | "Disable";
  }) => void;
  function GivePotion(...arg1): (tags: {
    "Overwrite Effect"?: "True" | "False";
    "Effect Particles"?: "Regular" | "Ambient" | "None";
  }) => void;
  function SetGoatHorns(): (tags: {
    "Left Horn"?: "Show" | "Hide" | "No Change";
    "Right Horn"?: "Show" | "Hide" | "No Change";
  }) => void;
  function SetGlowing(): (tags: {
    "Glowing"?: "Enable" | "Disable";
  }) => void;
  function SetPandaOnBack(): (tags: {
    "On Its Back"?: "Enable" | "Disable";
  }) => void;
  function IDisplayModelType(): (tags: {
    "Model Type"?: "None" | "First Person Left Hand" | "First Person Right Hand" | "Third Person Left Hand" | "Third Person Right Hand" | "Head" | "GUI" | "Ground" | "Fixed";
  }) => void;
  function SetHealth(arg1: Number): (tags: {}) => void;
  function BlockDisguise(arg1: Item, arg2: StyledText | null): (tags: {}) => void;
  function SetCollidable(): (tags: {
    "Collision"?: "Enable" | "Disable";
  }) => void;
  function ArmorStandPose(arg1: Vector, arg2: Number | null, arg3: Number | null, arg4: Number | null): (tags: {
    "Armor Stand Part"?: "Head" | "Body" | "Left Arm" | "Right Arm" | "Left Leg" | "Right Leg";
  }) => void;
  function LaunchFwd(arg1: Number): (tags: {
    "Add to Current Velocity"?: "True" | "False";
    "Launch Axis"?: "Pitch and Yaw" | "Yaw Only";
  }) => void;
  function SetFallDistance(arg1: Number): (tags: {}) => void;
  function MoveToLoc(arg1: Location, arg2: Number | null): (tags: {}) => void;
  function TDisplayOpacity(arg1: Number | null): (tags: {}) => void;
  function IDisplayItem(arg1: Item): (tags: {}) => void;
  function AttackAnimation(): (tags: {
    "Animation Arm"?: "Swing main arm" | "Swing off arm";
  }) => void;
  function SnowmanPumpkin(): (tags: {
    "Pumpkin"?: "Enable" | "Disable";
  }) => void;
  function SetCustomTag(arg1: String, arg2: Number, arg3: String): (tags: {}) => void;
  function DisplayViewRange(arg1: Number | null): (tags: {}) => void;
  function PlayerDisguise(arg1: StyledText, arg2: Item | null): (tags: {}) => void;
  function SetItem(arg1: Item): (tags: {}) => void;
  function Explode(): (tags: {}) => void;
  function SetDigging(): (tags: {
    "Digging Type"?: "Emerge" | "Dig Down";
  }) => void;
  function SetArrowHitSound(arg1: Sound): (tags: {}) => void;
  function SetVexCharging(): (tags: {
    "Charging"?: "Enable" | "Disable";
  }) => void;
  function SetVillagerExp(arg1: Number): (tags: {}) => void;
  function IgniteCreeper(): (tags: {}) => void;
  function SetCelebrating(): (tags: {
    "Celebrate"?: "Enable" | "Disable";
  }) => void;
  function TDisplayText(...arg1): (tags: {
    "Text Value Merging"?: "Add spaces" | "No spaces";
    "Inherit Styles"?: "True" | "False";
  }) => void;
  function SetHorseJump(arg1: Number): (tags: {}) => void;
  function HealthAttribute(arg1: Number | null): (tags: {
    "Attribute"?: "Maximum health" | "Maximum absorption health" | "Armor" | "Armor toughness";
    "Value Type"?: "Direct" | "Percentage (Base)" | "Percentage (Relative)";
  }) => void;
  function Ram(arg1: String, arg2: StyledText): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function SetFoxType(): (tags: {
    "Fox Type"?: "Red" | "Snow";
  }) => void;
}
declare namespace IfVariable {
  function ItemHasEnchant(arg1: Item, arg2: String | null, arg3: Number | null): (tags: {}) => void;
  function ItemIsBlock(arg1: Item): (tags: {}) => void;
  function DictValueEquals(arg1: String): (tags: {}) => void;
  function ItemHasTag(arg1: Item, arg2: String, arg3: Number | null, arg4: String | null): (tags: {}) => void;
  function StringMatches(arg1: String, ...arg2): (tags: {
    "Regular Expressions"?: "Enable" | "Disable";
    "Ignore Case"?: "True" | "False";
  }) => void;
  function ListIsEmpty(): (tags: {}) => void;
  function StartsWith(arg1: String, ...arg2): (tags: {
    "Ignore Case"?: "True" | "False";
  }) => void;
  function ListValueEq(arg1: Number): (tags: {}) => void;
  function VarIsType(): (tags: {
    "Variable Type"?: "Number" | "String" | "Styled Text" | "Location" | "Item" | "List" | "Potion effect" | "Sound" | "Particle" | "Vector" | "Dictionary";
  }) => void;
  function InRange(): (tags: {
    "Location Handling"?: "Block" | "Exact";
  }) => void;
  function VarExists(arg1: Variable): (tags: {}) => void;
  function BlockIsSolid(arg1: Item): (tags: {}) => void;
  function ItemEquals(arg1: Item, ...arg2): (tags: {
    "Comparison Mode"?: "Exactly equals" | "Ignore stack size" | "Ignore durability and stack size" | "Material only";
  }) => void;
  function ListContains(): (tags: {
    "Check Mode"?: "Has Any Value" | "Has All Values";
  }) => void;
  function LocIsNear(arg1: Location, arg2: Location[], arg3: Number): (tags: {
    "Shape"?: "Sphere" | "Circle" | "Cube" | "Square";
  }) => void;
  function Contains(arg1: String, ...arg2): (tags: {
    "Ignore Case"?: "True" | "False";
  }) => void;
  function EndsWith(arg1: String, ...arg2): (tags: {
    "Ignore Case"?: "True" | "False";
  }) => void;
  function DictHasKey(arg1: String): (tags: {}) => void;
}
declare namespace Control {
  function StopRepeat(): (tags: {}) => void;
  function Return(): (tags: {}) => void;
  function Skip(): (tags: {}) => void;
  function End(): (tags: {}) => void;
  function Wait(arg1: Number | null): (tags: {
    "Time Unit"?: "Ticks" | "Seconds" | "Minutes";
  }) => void;
}
declare namespace SelectObject {
  function RandomPlayer(arg1: Number | null): (tags: {}) => void;
  function LastEntity(): (tags: {}) => void;
  function EntityName(arg1: String[], arg2: StyledText[]): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function FilterRandom(arg1: Number | null): (tags: {}) => void;
  function PlayerName(...arg1): (tags: {}) => void;
  function AllEntities(): (tags: {}) => void;
  function FilterDistance(arg1: Location, arg2: Number | null): (tags: {
    "Ignore Y-Axis"?: "True" | "False";
    "Compare Mode"?: "Nearest" | "Farthest";
  }) => void;
  function FilterRay(arg1: Variable | null, arg2: Location, arg3: Number, arg4: Number | null, arg5: Number | null): (tags: {
    "Block Collision"?: "All blocks" | "Non-fluid blocks" | "Solid blocks" | "None";
  }) => void;
  function Reset(): (tags: {}) => void;
  function EventTarget(): (tags: {
    "Event Target"?: "Default" | "Killer" | "Damager" | "Victim" | "Shooter" | "Projectile";
  }) => void;
  function EntitiesCond(): (tags: {}) => void;
  function AllPlayers(): (tags: {}) => void;
  function Invert(): (tags: {}) => void;
  function FilterCondition(): (tags: {}) => void;
  function FilterSort(arg1: Number | null): (tags: {
    "Sort Order"?: "Ascending" | "Descending";
  }) => void;
  function PlayersCond(): (tags: {}) => void;
}
declare namespace Repeat {
  function Adjacent(arg1: Variable, arg2: Location): (tags: {
    "Change Location Rotation"?: "True" | "False";
    "Include Origin Block"?: "True" | "False";
    "Pattern"?: "Cardinal (4 blocks)" | "Square (8 blocks)" | "Adjacent (6 blocks)" | "Cube (26 blocks)";
  }) => boolean;
  function Path(arg1: Variable, arg2: Location[], arg3: Number | null): (tags: {
    "Rotate Location"?: "True" | "False";
  }) => boolean;
  function Multiple(arg1: Variable | null, arg2: Number): (tags: {}) => boolean;
  function Grid(arg1: Variable, arg2: Location, arg3: Location): (tags: {}) => boolean;
  function While(): (tags: {}) => boolean;
  function ForEach(arg1: Variable): (tags: {
    "Allow List Changes"?: "True" | "False (copy list)";
  }) => boolean;
  function Sphere(arg1: Variable, arg2: Location, arg3: Number, arg4: Number | null): (tags: {
    "Point Locations Inwards"?: "True" | "False";
  }) => boolean;
  function Forever(): (tags: {}) => boolean;
  function Range(arg1: Variable | null, arg2: Number, arg3: Number, arg4: Number | null): (tags: {}) => boolean;
  function ForEachEntry(arg1: Variable, arg2: Variable): (tags: {}) => boolean;
}
declare namespace GameAction {
  function FillContainer(arg1: Location, ...arg2): (tags: {}) => void;
  function BreakBlock(...arg1): (tags: {}) => void;
  function ChangeSign(arg1: Location, arg2: Number, arg3: StyledText | null): (tags: {
    "Sign Side"?: "Front" | "Back";
  }) => void;
  function WebRequest(arg1: String, arg2: String | null): (tags: {
    "Request Method"?: "Post" | "Get" | "Put" | "Delete";
    "Content Type"?: "text/plain" | "application/json";
  }) => void;
  function WriteTransaction(arg1: Item, arg2: Location, arg3: Location, arg4: String | null): (tags: {}) => void;
  function SetBlockData(arg1: Location[], ...arg2): (tags: {
    "Overwrite Existing Data"?: "True" | "False";
  }) => void;
  function Firework(arg1: Item, arg2: Location): (tags: {
    "Instant"?: "True" | "False";
    "Movement"?: "Upwards" | "Directional";
  }) => void;
  function SetEventDamage(arg1: Number): (tags: {}) => void;
  function SpawnItem(arg1: Item[], arg2: Location, arg3: StyledText | null): (tags: {
    "Apply Item Motion"?: "True" | "False";
  }) => void;
  function SignColor(arg1: Location): (tags: {
    "Sign Side"?: "Front" | "Back";
    "Text Color"?: "White" | "Orange" | "Magenta" | "Light blue" | "Yellow" | "Lime" | "Pink" | "Gray" | "Light gray" | "Cyan" | "Purple" | "Blue" | "Brown" | "Green" | "Red" | "Black";
    "Glowing"?: "Enable" | "Disable";
  }) => void;
  function ShulkerBullet(arg1: Location): (tags: {}) => void;
  function SetContainer(arg1: Location, ...arg2): (tags: {}) => void;
  function SpawnInteraction(arg1: Location, arg2: Number | null, arg3: Number | null): (tags: {
    "Responsive"?: "Enable" | "Disable";
  }) => void;
  function SetItemInSlot(arg1: Location, arg2: Item | null, arg3: Number): (tags: {}) => void;
  function CloneRegion(arg1: Location, arg2: Location, arg3: Location, arg4: Location): (tags: {
    "Ignore Air"?: "True" | "False";
    "Clone Block Entities"?: "True" | "False";
  }) => void;
  function UncancelEvent(): (tags: {}) => void;
  function SetLecternBook(arg1: Location, arg2: Item | null, arg3: Number | null): (tags: {}) => void;
  function SpawnArmorStand(arg1: Location, arg2: StyledText | null, ...arg3): (tags: {
    "Visibility"?: "Visible" | "Visible (No hitbox)" | "Invisible" | "Invisible (No hitbox)";
  }) => void;
  function SpawnBlockDisp(arg1: Location, arg2: Item, ...arg3): (tags: {}) => void;
  function ClearContainer(arg1: Location): (tags: {}) => void;
  function CancelEvent(): (tags: {}) => void;
  function SpawnFangs(arg1: Location, arg2: StyledText | null): (tags: {}) => void;
  function SetEventSound(arg1: Sound): (tags: {}) => void;
  function SetEventXP(arg1: Number): (tags: {}) => void;
  function LockContainer(arg1: Location, arg2: String | null): (tags: {}) => void;
  function SetExhaustion(arg1: Number): (tags: {}) => void;
  function ClearItems(arg1: Location, ...arg2): (tags: {}) => void;
  function SetFurnaceSpeed(arg1: Location, arg2: Number): (tags: {}) => void;
  function BlockDropsOn(): (tags: {}) => void;
  function BoneMeal(arg1: Location[], arg2: Number | null): (tags: {
    "Show Particles"?: "True" | "False";
  }) => void;
  function FallingBlock(arg1: Location, arg2: Item, arg3: (String | null)[]): (tags: {
    "Hurt Hit Entities"?: "True" | "False";
    "Reform on Impact"?: "True" | "False";
  }) => void;
  function DiscordWebhook(arg1: String, arg2: String): (tags: {}) => void;
  function TickBlock(arg1: Location[], arg2: Number | null): (tags: {}) => void;
  function ReplaceItems(arg1: Location, arg2: (Item | null)[], arg3: Item, arg4: Number | null): (tags: {}) => void;
  function SetEventProj(): (tags: {}) => void;
  function Explosion(arg1: Location, arg2: Number | null): (tags: {}) => void;
  function SpawnMob(arg1: Location, arg2: Number | null, arg3: StyledText | null, arg4: (PotionEffect | null)[], arg5: (Item | null)[]): (tags: {}) => void;
  function SetBrushableItem(arg1: Location, arg2: Item | null): (tags: {}) => void;
  function SpawnEnderEye(arg1: Location, arg2: Location | null, arg3: Number | null, arg4: StyledText | null): (tags: {
    "End of Lifespan"?: "Drop item" | "Shatter" | "Random";
  }) => void;
  function SpawnPotionCloud(arg1: Location, arg2: (PotionEffect | null)[], arg3: StyledText | null, arg4: Number | null, arg5: Number | null): (tags: {}) => void;
  function LaunchProj(arg1: Location, arg2: StyledText | null, arg3: Number | null, arg4: Number | null): (tags: {}) => void;
  function SetBlock(arg1: Item, arg2: Location[], ...arg3): (tags: {}) => void;
  function SpawnItemDisp(arg1: Location, arg2: Item): (tags: {}) => void;
  function SetBlockGrowth(arg1: Location, arg2: Number | null): (tags: {
    "Growth Unit"?: "Growth Stage Number" | "Growth Percentage";
  }) => void;
  function SetContainerName(arg1: Location, arg2: StyledText): (tags: {}) => void;
  function SetHead(arg1: Location, arg2: Item, arg3: String): (tags: {}) => void;
  function RemoveItems(arg1: Location, ...arg2): (tags: {}) => void;
  function SetRegion(arg1: Item, arg2: Location, arg3: Location, arg4: String | null): (tags: {}) => void;
  function SpawnTNT(arg1: Location, arg2: Number | null, arg3: Number | null, arg4: StyledText | null): (tags: {}) => void;
  function SpawnExpOrb(arg1: Location, arg2: Number | null, arg3: StyledText | null): (tags: {}) => void;
  function SetBiome(arg1: String, arg2: Location, arg3: Location): (tags: {}) => void;
  function SetEventHeal(arg1: Number): (tags: {}) => void;
  function ApplyTransaction(): (tags: {}) => void;
  function GenerateTree(arg1: Location): (tags: {
    "Tree Type"?: "Oak Tree" | "Big Oak Tree" | "Swamp Tree" | "Spruce Tree" | "Slightly Taller Spruce Tree" | "Big Spruce Tree" | "Birch Tree" | "Tall Birch Tree" | "Jungle Tree" | "Big Jungle Tree" | "Jungle Bush" | "Acacia Tree" | "Dark Oak Tree" | "Mangrove Tree" | "Tall Mangrove Tree" | "Cherry Tree" | "Azalea Tree" | "Red Mushroom" | "Brown Mushroom" | "Crimson Fungus" | "Warped Fungus" | "Chorus Plant";
  }) => void;
  function SpawnCrystal(arg1: Location, arg2: StyledText | null): (tags: {
    "Show Bottom"?: "True" | "False";
  }) => void;
  function SetCampfireItem(arg1: Location, arg2: Item, arg3: Number | null): (tags: {
    "Campfire Slot"?: "1" | "2" | "3" | "4";
  }) => void;
  function SpawnTextDisplay(arg1: Location, ...arg2): (tags: {
    "Text Value Merging"?: "Add spaces" | "No spaces";
    "Inherit Styles"?: "True" | "False";
  }) => void;
  function SpawnVehicle(arg1: Location, arg2: StyledText | null): (tags: {}) => void;
  function Lightning(arg1: Location): (tags: {}) => void;
  function BlockDropsOff(): (tags: {}) => void;
}
declare namespace IfGame {
  function HasRoomForItem(arg1: Location, arg2: Item | null): (tags: {
    "Check Mode"?: "Has Room for Any Item" | "Has Room for All Items";
  }) => void;
  function EventBlockEquals(...arg1): (tags: {}) => void;
  function CommandEquals(...arg1): (tags: {
    "Check Mode"?: "Check entire command" | "Check beginning";
    "Ignore Case"?: "True" | "False";
  }) => void;
  function EventItemEquals(...arg1): (tags: {
    "Comparison Mode"?: "Exactly equals" | "Ignore stack size/durability" | "Material only";
  }) => void;
  function SignHasTxt(arg1: Location, ...arg2): (tags: {
    "Sign Line"?: "1" | "2" | "3" | "4" | "All lines";
    "Sign Side"?: "Front" | "Back";
    "Check Mode"?: "Contains" | "Equals";
  }) => void;
  function AttackIsCrit(): (tags: {}) => void;
  function ContainerHas(arg1: Location, ...arg2): (tags: {}) => void;
  function BlockEquals(arg1: Location, arg2: (Item | null)[], ...arg3): (tags: {}) => void;
  function InBlock(arg1: Location): (tags: {}) => void;
  function BlockPowered(...arg1): (tags: {
    "Redstone Power Mode"?: "Direct power" | "Indirect power";
  }) => void;
  function HasPlayer(...arg1): (tags: {}) => void;
  function ContainerHasAll(arg1: Location, ...arg2): (tags: {}) => void;
  function CmdArgEquals(arg1: String[], arg2: Number): (tags: {
    "Ignore Case"?: "True" | "False";
  }) => void;
  function EventCancelled(): (tags: {}) => void;
  function IsChunkLoaded(arg1: Location): (tags: {}) => void;
}
declare namespace IfEntity {
  function IsVehicle(): (tags: {}) => void;
  function IsGrounded(): (tags: {}) => void;
  function IsType(): (tags: {}) => void;
  function IsProj(): (tags: {}) => void;
  function IsMob(): (tags: {}) => void;
  function HasCustomTag(arg1: String, arg2: Number | null, arg3: String | null): (tags: {}) => void;
  function IsSheared(): (tags: {}) => void;
  function IsItem(): (tags: {}) => void;
  function IsRiding(arg1: (String | null)[], arg2: (StyledText | null)[]): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function Exists(): (tags: {}) => void;
  function IsNear(arg1: Location[], arg2: Number | null): (tags: {
    "Shape"?: "Sphere" | "Circle" | "Cube" | "Square";
  }) => void;
  function HasPotion(...arg1): (tags: {
    "Check Properties"?: "None" | "Amplifier" | "Duration" | "Amplifier and duration";
    "Check Mode"?: "Has any effect" | "Has all effects";
  }) => void;
  function NameEquals(arg1: String[], arg2: StyledText[]): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function StandingOn(arg1: Item[], arg2: Location[]): (tags: {}) => void;
}
declare namespace IfPlayer {
  function IsLookingAt(arg1: (Item | null)[], arg2: Location[], arg3: Number | null): (tags: {
    "Fluid Mode"?: "Ignore fluids" | "Detect fluids";
  }) => void;
  function InWorldBorder(arg1: Location | null): (tags: {}) => void;
  function IsInGameMode(): (tags: {
    "Game Mode"?: "Survival" | "Creative" | "Adventure" | "Spectator";
  }) => void;
  function HasRoomForItem(arg1: Item | null): (tags: {
    "Check Mode"?: "Has Room for Any Item" | "Has Room for All Items";
    "Checked Slots"?: "Entire inventory" | "Main inventory" | "Upper inventory" | "Hotbar" | "Armor";
  }) => void;
  function UsingPack(): (tags: {}) => void;
  function NoItemCooldown(...arg1): (tags: {}) => void;
  function IsUsingItem(...arg1): (tags: {}) => void;
  function IsSwimming(): (tags: {}) => void;
  function HasItem(...arg1): (tags: {
    "Check Mode"?: "Has Any Item" | "Has All Items";
  }) => void;
  function IsWearing(...arg1): (tags: {
    "Check Mode"?: "Is Wearing Some" | "Is Wearing All";
  }) => void;
  function IsNear(arg1: Location[], arg2: Number | null): (tags: {
    "Shape"?: "Sphere" | "Circle" | "Cube" | "Square";
  }) => void;
  function StandingOn(arg1: (Item | null)[], arg2: Location[]): (tags: {}) => void;
  function IsGrounded(): (tags: {}) => void;
  function CursorItem(...arg1): (tags: {}) => void;
  function SlotEquals(arg1: Number): (tags: {}) => void;
  function IsHolding(...arg1): (tags: {
    "Hand Slot"?: "Either hand" | "Main hand" | "Off hand";
  }) => void;
  function MenuSlotEquals(arg1: Number[], ...arg2): (tags: {}) => void;
  function IsBlocking(): (tags: {}) => void;
  function HasPermission(): (tags: {
    "Permission"?: "Owner" | "Developer" | "Builder" | "Developer or builder" | "Whitelisted";
  }) => void;
  function IsRiding(arg1: (String | null)[], arg2: (StyledText | null)[]): (tags: {
    "Ignore Formatting"?: "True" | "False";
  }) => void;
  function MainHandEquals(): (tags: {
    "Main Hand"?: "Left Hand" | "Right Hand";
  }) => void;
  function IsSneaking(): (tags: {}) => void;
  function IsFlying(): (tags: {}) => void;
  function HasPotion(...arg1): (tags: {
    "Check Properties"?: "None" | "Amplifier" | "Duration" | "Amplifier and duration";
    "Check Mode"?: "Has any effect" | "Has all effects";
  }) => void;
  function NameEquals(...arg1): (tags: {}) => void;
  function InvOpen(): (tags: {
    "Inventory Type"?: "Any Inventory" | "Plot Menu" | "Crafting Table" | "Chest" | "Double Chest" | "Ender Chest" | "Shulker Box" | "Barrel" | "Furnace (any)" | "Furnace" | "Blast Furnace" | "Smoker" | "Dropper" | "Dispenser" | "Beacon" | "Hopper" | "Anvil" | "Brewing Stand" | "Cartography Table" | "Smithing Table" | "Loom" | "Grindstone" | "Stonecutter" | "Enchanting Table" | "Trader Menu (any)" | "Villager Menu" | "Wandering Trader Menu" | "Horse Inventory" | "Llama Inventory";
  }) => void;
  function HasSlotItem(arg1: Number[], ...arg2): (tags: {}) => void;
  function IsSprinting(): (tags: {}) => void;
  function IsGliding(): (tags: {}) => void;
}