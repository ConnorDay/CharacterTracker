# Run this after reset db
USE CharacterSheet;

# Create two base rulesets
insert into rulesets(ruleset_name) values ("Legends: Eventide");
insert into rulesets(ruleset_name) values ("Legends: Stonespring");

# Set stats used for campaigns
insert into stats(ruleset_id, stat_name, shortname) values (1,"Strength","STR");
insert into stats(ruleset_id, stat_name, shortname) values (1,"Dexterity","DEX");
insert into stats(ruleset_id, stat_name, shortname) values (1,"Constitution","CON");
insert into stats(ruleset_id, stat_name, shortname) values (1,"Intelligence","INT");
insert into stats(ruleset_id, stat_name, shortname) values (1,"Wisdom","WIS");
insert into stats(ruleset_id, stat_name, shortname) values (1,"Virtue","VRT");
insert into stats(ruleset_id, stat_name, shortname) values (2,"Strength","STR");
insert into stats(ruleset_id, stat_name, shortname) values (2,"Agility","AGI");
insert into stats(ruleset_id, stat_name, shortname) values (2,"Toughness","TGH");
insert into stats(ruleset_id, stat_name, shortname) values (2,"Coordination","CRD");
insert into stats(ruleset_id, stat_name, shortname) values (2,"Wisdom","WIS");
insert into stats(ruleset_id, stat_name, shortname) values (2,"Spirit","SPT");

# Create three base campaigns
#insert into campaigns(campaign_name, ruleset_id) values ("Eventide",1);
#insert into campaigns(campaign_name, ruleset_id) values ("Stonespring",2);
#insert into campaigns(campaign_name, ruleset_id) values ("Eventide Fake",1);

# Create long list of characters to test with
#SELECT create_character (1,"Hademar");
#insert into characters(campaign_id,character_name) values (1,"Aldo");
#insert into characters(campaign_id,character_name) values (2,"Hoto");
#insert into characters(campaign_id,character_name) values (2,"Grob");
#insert into characters(campaign_id,character_name) values (3,"Strongboy");
#insert into characters(campaign_id,character_name) values (3,"Smartboy");
#SELECT * from character_mtm_stats;
#select * from characters
