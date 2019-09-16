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
  ('Hail Seitan', 'Introducing Vegan Black Metal Chef', 'The Vegan Black Metal Chef, the culinary sensation whose devastating musical recipe for pad thai is back at it again. And this time he is using the flames of Satan to make myriad vegan meals. In his new YouTube instructional videos, the chef, aka Brian Manowitz, serves up several blistering recipes, including his "All Star Redneck Medley" of baked beans, corn and mashed potatoes. (Sample advice: Crush the potatoes with a mace – show them no mercy.'
  ),
  ('Hellbent for Cooking', 'A New Cookbook by Annick Giroux', 'As the editor and publisher of Morbid Tales, an underground Canadian metal fanzine, Giroux has two passions. The first is obviously heavy metal (in all of its forms) and the second, and more unlikely, is cooking. Giroux decided to reach out to favorite bands and collect their recipes in cookbook form. The result is an international cookbook with some of the darkest and most creatively-named recipes around. The recipes range from decidedly on-tour food meant to feed a crowd of hungry metal heads like Macaroni Against Monotheism, a combination of ground pork (666 grams to be exact), jarred pasta sauce and macaroni to regional to Fårikål, a traditional Norwegian dish from the infamous Mayhem, to Fried Egg Rigor Mortis Cure from Denial of God hailing from Denmark.'),
  ('Die Eier Von Satan', 'Baking with Tool song lyrics', 'Here is the recipe translated from German: Die Eier Von Satan. Half a cup of powdered sugar. One quarter teaspoon salt. One knifetip Turkish hash. Half a pound butter. One teaspoon vanilla sugar. Half a pound flour. 150 g ground nuts. A little extra powdered sugar...and no eggs. Place in a bowl. Add butter. Add the ground nuts and knead the dough. Form eyeball-size pieces from the dough. Roll in the powdered sugar and say the Magic Words: Sim sala bim bamba sala do saladim. Place on a greased baking pan and bake at 200 degrees for 15 minutes...AND NO EGGS. Bake at 200 degrees for 15 minutes...and no eggs.'),
  ('Metalocalypse: Episode 10 Dethdinner', 'January 30th 2036', 'As Dethklok hosts the most important dinner of their career, the divvying of album credits, over tagging on social networking sites, and fights over a girl come to a head. Can CFO keep their issues in check? Will the record executives forgive them for the past year of mistakes? Or will it be a total, brutal disaster?'
  );

INSERT INTO comments (text, post_id) VALUES
  ('Where can I get my own pentagram cutting board?', 1),
  ('Broccoli and chickpeas and industrial symphonic black metal, nomnomnom.', 1),
  ('Underegged and undercooked. Bleh.', 3),
  ('The resulting cookies are not delicious.', 3),
  ('As someone who owned several Iron Maiden records before ever thinking about investing in a cast-iron skillet, I could not wait to get my hands on this.', 2),
  ('These are the kind of meals I want to eat after the corpse paint has been scrubbed off!', 2),
  ('A lovingly rendered apocalyptic death metal dinner for the ages.', 4)
;