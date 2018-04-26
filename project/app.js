var app = angular.module("project-app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider

    ///////////////////////// General ////////////////////////////
    .when("/", {
      templateUrl: "project/components/landing/landingView.html",
      controller: "landingCtrl"
    })

    ///////////////////////// Otherwise, Redirect To Login ////////////////////////////
    .otherwise({
      redirectTo: "/"
    })

});

app.service('sharedFunctions', function() {

  this.Validation = {};

  this.Validation.Email = function(element, email) {
    var returnData = {};
    returnData.errorFlag = false;
    returnData.errors = "";

    self.Validation.RemoveErrorTooltip(element);

    if (!(email)) {
      returnData.errorFlag = true;
      returnData.errors += "Please enter your email. ";
    } else {
      if (!(email.length > 0)) {
        returnData.errorFlag = true;
        returnData.errors += "Please enter your email. ";
      }

      if (email.length > 100) {
        returnData.errorFlag = true;
        returnData.errors += "Email exceeds 100 characters. ";
      }

      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email))) {
        returnData.errorFlag = true;
        returnData.errors += "Email is not valid. ";
      }
    }

    if (returnData.errorFlag) {
      self.Validation.ErrorTooltip(element, returnData.errors);
    }

    return returnData.errorFlag;

  }

  this.Validation.Name = function(element, name) {
    var returnData = {};
    returnData.errorFlag = false;
    returnData.errors = "";

    self.Validation.RemoveErrorTooltip(element);

    if (!(name)) {
      returnData.errorFlag = true;
      returnData.errors += "Please enter your name. ";
    } else {
      if (!(name.length > 0)) {
        returnData.errorFlag = true;
        returnData.errors += "Please enter your name. ";
      }

      if (name.length > 50) {
        returnData.errorFlag = true;
        returnData.errors += "Name exceeds 50 characters. ";
      }
    }

    if (returnData.errorFlag) {
      self.Validation.ErrorTooltip(element, returnData.errors);
    }

    return returnData.errorFlag;

  }

  this.Validation.Password = function(element, element2, password, passwordRepeat) {
    var returnData = {};
    returnData.errorFlag = false;
    returnData.errors = "";

    self.Validation.RemoveErrorTooltip(element);
    self.Validation.RemoveErrorTooltip(element2);

    if (!(password)) {
      returnData.errorFlag = true;
      returnData.errors += "Please enter a password. ";
    } else {
      if (!(password.length >= 8)) {
        returnData.errorFlag = true;
        returnData.errors += "Your password must be atleast 8 characters long. ";
      }

      if (password !== passwordRepeat) {
        returnData.errorFlag = true;
        returnData.errors += "Passwords do not match. ";
      }
    }

    if (returnData.errorFlag) {
      self.Validation.ErrorTooltip(element, returnData.errors);
      $(element2).addClass("error-border");
    }

    return returnData.errorFlag;

  }

  this.Validation.Empty = function(element, value) {
    var returnData = {};
    returnData.errorFlag = false;
    returnData.errors = "";

    self.Validation.RemoveErrorTooltip(element);

    if (!(value)) {
      returnData.errorFlag = true;
      returnData.errors += "Please fill in this field. ";
    } else {
      if (!(value.length > 0)) {
        returnData.errorFlag = true;
        returnData.errors += "Please fill in this field. ";
      }
    }

    if (returnData.errorFlag) {
      self.Validation.ErrorTooltip(element, returnData.errors);
    }

    return returnData.errorFlag;

  }

  this.Validation.ErrorTooltip = function(element, errors) {
    $(element).removeClass("error-border");
    $(element).tooltip('dispose');
    $(element).tooltip({
      placement: 'top',
      title: errors
    });
    $(element).tooltip('show');
    $(element).addClass("error-border");
  }

  this.Validation.RemoveErrorTooltip = function(element) {
    $(element).removeClass("error-border");
    $(element).tooltip('dispose');
  }

  var self = this;

});