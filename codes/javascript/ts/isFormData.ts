const isFormData = (val: unknown): val is FormData =>
  typeof FormData !== 'undefined' && val instanceof FormData;

const formData = new FormData();
if(isFormData(formData)){
    console.log('is FormData');
}
// 页面打印出is FormData字符串