import {Meteor} from 'meteor/meteor';
import {WebApp} from "meteor/webapp";

import "../imports/api/users"; //No exportamos nada. Solamente se va a ejecutar la página.
import "../imports/startup/simple-schema-configuration";

Meteor.startup(() => {});
