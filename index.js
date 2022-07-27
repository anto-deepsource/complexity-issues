import { ObjectId } from 'mongodb';
import { generateNewDateObject } from 'nop/utils';
import { achievementNotFound, achievementNotPublished, unauthorizedToSendAchievement, unauthorizedToSendThisUser, userIdentifiersNotProvided, } from '../../lib/errors';
import { achievements, receivedAchievements as ra } from '../../lib/db';
import bar from './bar' // import-default
import { getCmsUsers } from '../util';
import { publishStatsSendAchievement } from '../../lib/events';
import { pushMessageSendAchievement } from '../../lib/notifications';
import sendEmailReceivedAchievement from '../../lib/email';

var mod = require('./mod1111') // import/no-commonjs

var o = { // no-accesor-pairs
  set a(value) {
      this.val = value;
  }
};

function bar1() { return /=foo/; } // no-div-regex

const foo = 1

if (foo == null) { // no-eq-null
  console.log(foo)
}

var b = !!foo; // no-implicit-coercion

var foo1 = 1; // no-implicit-globals

var SECONDS;

SECONDS = 60; // no-magic-numbers

a = (b * c); // no-extra-parens

export default bool

var foo2 = 1; // init-declarations
var bar2; // init-declarations

var undefined = 'hi' // no-undefined
