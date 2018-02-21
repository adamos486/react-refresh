start:
	@yarn start
deploy:
	@yarn build && cf push --random-route
tests:
	@./node_modules/.bin/mocha