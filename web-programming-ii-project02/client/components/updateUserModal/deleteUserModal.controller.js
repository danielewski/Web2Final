import angular from 'angular';

export class DeleteUserController {
  /*@ngInject*/
  constructor($uibModalInstance, User, user) {
    this.User = User;
    this.$uibModalInstance = $uibModalInstance;
    this.user = user;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm(){
    this.User.deleteUser(this.user)
    .then(result => {
      this.formInfo = 'User successfully Deleted!';
    })
    .catch(err => {
      console.error(err);
      this.formError = err.toString();
    });
    this.$uibModalInstance.close();
    this.$route.reload();
  }


}

export default angular.module('comp3705App.deleteUserModal', [])
  .controller('deleteUserController', DeleteUserController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
