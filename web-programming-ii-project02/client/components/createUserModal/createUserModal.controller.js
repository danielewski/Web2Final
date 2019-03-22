import angular from 'angular';

export class createUserController {
  /*@ngInject*/
  constructor($uibModalInstance, User) {
    this.User = User;
    this.$uibModalInstance = $uibModalInstance;
    //this.user = user;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.User.createUser(this.user)
      .then(result => {
        this.formInfo = 'User successfully created! _Id: ' + result._id;
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
    this.$uibModalInstance.close();
    this.$route.reload();
  }
}

export default angular.module('comp3705App.createUserModal', [])
  .controller('createUserController', createUserController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
