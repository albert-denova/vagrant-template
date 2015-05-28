# Vagrant Template
This template will allow you to create your game and follow the same structure that you will see in other examples. You shouldn't need to install anything else to get your game to work. But feel free to modify whatever you need to satify your requirements.

## What's included?
It contains a Vagrantfile that will configure the whole enviornment with the following things:

* Puppet
* NodeJS, with the following packages installed
	* Express
	* Socket.io
	* SocketMock (to do unit test)
	* NodeUnit (unit test framework for backend): [https://github.com/caolan/nodeunit]()
	* P2 (Physics server engine)
* Grunt
* Bower

The server will always use the same IP (192.168.56.123) and PORT (8080) 

## Directory structure
The project has 3 main folders:

* vagrant: it contains the Vagrantfile and the puppet manifests to install the application
* backend: will contain the server related code
* frontend: will contain the client related code

## Launching with Brackets
You can use this project and not start Vagrant at all, you only need to launch the Brackets preview as you do with other projects using the frontend/index.html as a reference. It will work without problems!

## Launching Vagrant
If you want to launch the Vagrant server and use NodeJS, you need to follow this steps:

	1. Launch your terminal/command line
	2. Enter in the vagrant directory
	3. Type: vagrant up
	4. Vagrant will start to do a lot of stuff, once it's done you'll get control of your terminal again
	5. Enter via ssh typing: vagrant ssh (Use putty if you're on Windows)
	6. 	Once you are inside, type: cd /vagrant/backend/
	7. Finally type: nodejs server.js
	8. Now in your browser you can navigate to: http://192.168.56.123:8080/

## Launching server tests	
Tests in the server folder are done using NodeUnit, to execute them you must access via SSH to the vagrant folder, once inside:

	1. Go to the test folder that you want to launch, for example: cd /vagrant/backend/common/test/
	2. Execute the following command: nodeunit *
	3. The output will be shown to you with the testing result, the following box shows an example:

```
vagrant@vagrant-ubuntu-trusty-64:/vagrant/backend/common/test$ nodeunit *
gameFacade.js
✔ createFacade
✔ registerNewPlayer
✔ deregisterNewPlayer

socketMediator.js
✔ creationWithoutParams
✔ creationWithParams
✔ onUserDisconnected

OK: 7 assertions (31ms)
```
