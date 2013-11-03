var LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin,
 {
     // Handle OAuth2 for django-rest-framework-oauth2-provider
     tokenRequestOptions: function(username, password) {
       var postData = [
           'client_id=2bfabdedbbfbd3097b45',
           'client_secret=84231bd993665411c64607558b1422e771de3004',
           'grant_type=password',
           'username=' + username,
           'password=' + password
       ].join('&');
       return {
           type: 'POST',
           data: postData,
           contentType: 'application/x-www-form-urlencoded'
       };
     },
     actions: {
         // display an error when logging in fails
         loginFailed: function(xhr, status, error) {
           var response = JSON.parse(xhr.responseText);
           this.set('errorMessage', response.error);
         },

         // handle login success
         loginSucceeded: function() {
             this.set('errorMessage', "");
             this.set('identification', "");
             this.set('password', "");
             var attemptedTransition = this.get('session.attemptedTransition');
             if (attemptedTransition) {
                 attemptedTransition.retry();
                 this.set('session.attemptedTransition', undefined);
             } else {
                 this.transitionToRoute(Ember.SimpleAuth.routeAfterLogin);
             }
         }
     }
 }
);

export default LoginController;
