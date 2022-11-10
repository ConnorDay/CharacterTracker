DELIMITER //
CREATE PROCEDURE `create_character` (IN campaign_id int, IN character_name varchar(255))
BEGIN
	INSERT INTO characters(campaign_id,character_name) VALUES (campaign_id,character_name);
    SELECT ruleset_id FROM campaigns WHERE id = campaign_id;
END //
DELIMITER ;