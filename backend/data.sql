DROP DATABASE IF EXISTS "microblog";

CREATE DATABASE "microblog";

\c "microblog"

CREATE TABLE posts (id SERIAL PRIMARY KEY, 
                    title TEXT NOT NULL, 
                    description TEXT NOT NULL,
                    body TEXT, 
                    votes INT NOT NULL DEFAULT 0);
                    
CREATE TABLE comments (id SERIAL PRIMARY KEY, 
                       text TEXT NOT NULL, 
                       post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE);

INSERT INTO posts (title, description, body) VALUES
  ('Cooking with hellfire', 'Introducing Vegan Black Metal Chef', 'The Vegan Black Metal Chef, the culinary sensation whose devastating musical recipe for pad thai is back at it again. And this time he is using the flames of Satan to make myriad vegan meals. In his new YouTube instructional videos, the chef, aka Brian Manowitz, serves up several blistering recipes, including his "All Star Redneck Medley" of baked beans, corn and mashed potatoes. (Sample advice: Crush the potatoes with a mace – show them no mercy.'
  ),
  ('Die Eier Von Satan', 'Baking with Tool song lyrics', 'Here is the recipe: Die Eier Von Satan. Half a cup of powdered sugar. One quarter teaspoon salt. One knifetip Turkish hash. Half a pound butter. One teaspoon vanilla sugar. Half a pound flour. 150 g ground nuts. A little extra powdered sugar...and no eggs. Place in a bowl. Add butter. Add the ground nuts and knead the dough. Form eyeball-size pieces from the dough. Roll in the powdered sugar and say the Magic Words: Sim sala bim bamba sala do saladim. Place on a greased baking pan and bake at 200 degrees for 15 minutes...AND NO EGGS. Bake at 200 degrees for 15 minutes...and no eggs.');

INSERT INTO comments (text, post_id) VALUES
  ('Where can I get my own pentagram cutting board?', 1),
  ('Broccoli and chickpeas and industrial symphonic black metal, nomnomnom.', 1),
  ('Underegged and undercooked. Bleh.', 2),
  ('The resulting cookies are not delicious.', 2);