
run :
	docker-compose up

install :
	npm install

test :
	node app.js

.PHONY: install run build
