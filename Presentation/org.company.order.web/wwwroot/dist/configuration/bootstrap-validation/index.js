'use strict';

System.register(['./bootstrap-form-validation-renderer'], function (_export, _context) {
  "use strict";

  var BootstrapFormValidationRenderer;
  function configure(config) {
    config.container.registerHandler('bootstrap-form', function (container) {
      return container.get(BootstrapFormValidationRenderer);
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_bootstrapFormValidationRenderer) {
      BootstrapFormValidationRenderer = _bootstrapFormValidationRenderer.BootstrapFormValidationRenderer;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vYm9vdHN0cmFwLXZhbGlkYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiY29uZmlnIiwiY29udGFpbmVyIiwicmVnaXN0ZXJIYW5kbGVyIiwiZ2V0IiwiQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25SZW5kZXJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRU8sV0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDOUJBLFdBQU9DLFNBQVAsQ0FBaUJDLGVBQWpCLENBQ0UsZ0JBREYsRUFFRTtBQUFBLGFBQWFELFVBQVVFLEdBQVYsQ0FBY0MsK0JBQWQsQ0FBYjtBQUFBLEtBRkY7QUFHSDs7dUJBSmVMLFM7Ozs7QUFGUksscUMsb0NBQUFBLCtCIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24vYm9vdHN0cmFwLXZhbGlkYXRpb24vaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
