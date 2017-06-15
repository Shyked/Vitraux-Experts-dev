"# Vitraux-Experts-dev" 

API du back end de l'application Vitraux experts
https://github.com/Hypertopic

Pour lancer l'application : 
node app.js


pour lancer les tests avec http://frisbyjs.com/
faire installation  :
npm install --save-dev frisby

puis installation jasmine :
npm install -g jasmine-node

lancer les tests :

jasmine-node spec/api/

//API REST (localhost:3000/api)

**Available services

- (GET) USER_by_username : /users/aaf
- (GET) CORPUS_by_username : /corpus/Vitraux - BÃ©nel
- (GET) ITEM_by_id : /corpus/Vitraux - BÃ©nel/00745c3e27d91d00e3d4db33828dd8797e9c2195
- (GET) VIEWPOINT_by_id : /viewpoint/a76306e4f17ed4f79e7e481eb9a1bd06
- (POST) ITEM_comment : /corpus/comment with body {id_item: varchar, id_corpus: varchar, id_user: varchar, text: varchar}
- (GET) ITEM_comments : /corpus/Vitraux - Bénel/00745c3e27d91d00e3d4db33828dd8797e9c2195/comment
- (POST) ITEM_source : /corpus/source with body {id_item: varchar, id_corpus: varchar, id_user: varchar, text: varchar, url: varchar}
- (GET) ITEM_sources : /corpus/Vitraux - Bénel/00745c3e27d91d00e3d4db33828dd8797e9c2195/sources
- (PUT) ITEM_comment_like : /corpus/comment/like with body {id_item: varchar}
- (PUT) ITEM_comment_dislike : /corpus/comment/dislike with body {id_item: varchar}

**Installation

1. Install mariahdb (https://mariadb.com/downloads)
2. Launch the script vitraux-db.sql
3. Run npm install
4. Try "node app.js" !
