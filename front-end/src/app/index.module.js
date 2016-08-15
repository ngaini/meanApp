/* global malarkey:false, moment:false */

//noinspection JSAnnotator
import { config } from './index.config';
//noinspection JSAnnotator
import { routerConfig } from './index.route';
//noinspection JSAnnotator

import { runBlock } from './index.run';
//noinspection JSAnnotator

import { MainController } from './main/main.controller';
import { AuthController } from './auth/auth.controller';
import { CompareToDirective } from './directives/compareTo.directive';
//noinspection JSAnnotator

import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';

//noinspection JSAnnotator
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
//noinspection JSAnnotator
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
//noinspection JSAnnotator
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('myMessageFront', ['ui.router', 'ui.bootstrap', 'toastr','satellizer']).constant('malarkey', malarkey)
  .constant('API_URL','http://localhost:5000/')
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('AuthController', AuthController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('compareTo', CompareToDirective);
