DROP TABLE IF EXISTS happiness_weather;

CREATE TABLE happiness_weather (
	year INT,
	country VARCHAR(30),
	life_ladder FLOAT,
    log_dp_per_capita FLOAT, 
    social_support FLOAT,
    healthy_life_expectancy_at_birth FLOAT,
    freedom_to_make_life_choices FLOAT,
    generosity FLOAT,
    perceptions_of_corruption FLOAT,
    positive_affect FLOAT,
    negative_affect FLOAT,
	latitude FLOAT,
	longitude FLOAT,
	tavg FLOAT,
	tmin FLOAT,
	tmax FLOAT,
	wdir FLOAT,
	wspd FLOAT,
	pres FLOAT
);

SELECT * FROM happiness_weather